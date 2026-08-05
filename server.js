const express = require('express');
const path = require('path');
const https = require('https');

const app = express();
const PORT = process.env.PORT || 3460;
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY || '';

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'), {
  setHeaders(res, filePath) {
    // Never cache HTML — always revalidate so new deploys show up instantly
    // (versioned assets like app.js?v=N still cache normally via the query string).
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    }
  }
}));

// Public config for the frontend. The Supabase anon key is PUBLIC by design
// (safe to expose — real security is enforced by Row-Level Security in the DB).
// If these env vars aren't set, the app runs in dummy mode (fake login).
app.get('/api/config', (req, res) => {
  res.json({
    supabaseUrl: process.env.SUPABASE_URL || '',
    supabaseAnonKey: process.env.SUPABASE_ANON_KEY || '',
    authEnabled: !!(process.env.SUPABASE_URL && process.env.SUPABASE_ANON_KEY)
  });
});

// --- Chat endpoint ---
// If an ANTHROPIC_API_KEY is present, talk to real Claude.
// Otherwise return a mock copywriter-style reply so the UX works with no key (dummy mode).
app.post('/api/chat', async (req, res) => {
  const messages = (req.body && req.body.messages) || [];
  const last = (messages.length ? messages[messages.length - 1].content : '').trim();

  // --- DEMO PUSH PROTOCOL (temporary — until the real per-step brain is wired) ---
  // The rule that will be hard-baked into every step's SOP: ALWAYS draft, then ASK
  // before pushing. Only push on an affirmative reply. Lets Michael feel the flow now.
  const affirm = /^(yes|yep|yeah|yup|ya|push|push it|go|go ahead|do it|sure|ok(ay)?|please|send it|yes please)\b/i.test(last);
  const DEMO_STEP = 2; // Step 3 · Customer Research (0-indexed bubble)
  const DEMO_CONTENT =
    "[DEMO OUTPUT — the real version comes from Jim's SOP]\n\n" +
    "PAINS\n• The 3am problem that keeps them up\n• The daily grind they live with\n\n" +
    "OBJECTIONS\n• Why they think nothing will work for someone like them\n\n" +
    "DESIRES\n• Their dream outcome, in their own words\n\n" +
    "FAILURES\n• Everything they've already tried that flopped\n\n" +
    "MOTIVATIONS\n• The deeper why — who they're really doing this for";

  if (affirm) {
    return res.json({
      reply: "Done ✅ — pushed it straight into your Customer Research bubble (Step 3).",
      push: { step: DEMO_STEP, content: DEMO_CONTENT }
    });
  }
  return res.json({
    reply:
      "Here's a quick draft for Step 3 · Customer Research:\n\n" + DEMO_CONTENT +
      "\n\n(This is just a demo so you can feel the push flow — the real output will come from Jim's SOPs.)\n\n" +
      "Want me to push it to the dashboard? Reply \"yes\".",
    push: null
  });
});

function callClaude(messages) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({
      model: 'claude-sonnet-4-6',
      max_tokens: 1024,
      system: 'You are a world-class direct-response copywriter guiding a user through an 8-step VSL system. (Placeholder system prompt — real one drops in later.)',
      messages: messages.map(m => ({ role: m.role, content: m.content }))
    });
    const opts = {
      hostname: 'api.anthropic.com',
      path: '/v1/messages',
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'content-length': Buffer.byteLength(payload)
      }
    };
    const r = https.request(opts, resp => {
      let data = '';
      resp.on('data', c => (data += c));
      resp.on('end', () => {
        try {
          const j = JSON.parse(data);
          if (j.error) return reject(new Error(j.error.message || 'API error'));
          resolve((j.content && j.content[0] && j.content[0].text) || '(no reply)');
        } catch (e) { reject(e); }
      });
    });
    r.on('error', reject);
    r.write(payload);
    r.end();
  });
}

app.listen(PORT, () => {
  console.log(`Copywriter SaaS (dummy) running at http://localhost:${PORT}`);
  console.log(ANTHROPIC_API_KEY ? '🔑 Real Claude connected' : '🧪 Dummy brain (no API key)');
});
