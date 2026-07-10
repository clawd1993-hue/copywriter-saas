const express = require('express');
const path = require('path');
const https = require('https');

const app = express();
const PORT = process.env.PORT || 3460;
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY || '';

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// --- Chat endpoint ---
// If an ANTHROPIC_API_KEY is present, talk to real Claude.
// Otherwise return a mock copywriter-style reply so the UX works with no key (dummy mode).
app.post('/api/chat', async (req, res) => {
  const messages = (req.body && req.body.messages) || [];
  const last = messages.length ? messages[messages.length - 1].content : '';

  if (!ANTHROPIC_API_KEY) {
    // DUMMY BRAIN — placeholder. Real system prompt drops in here later.
    const reply =
      `🧠 (dummy brain — no real system loaded yet)\n\n` +
      `Got it: "${last}"\n\n` +
      `In the real version I'd walk you through the 8-step system here — starting with your Core Desire, ` +
      `then filling the VSL sections on the left as we go. Right now I'm just a placeholder so you can see the flow.`;
    return res.json({ reply });
  }

  try {
    const reply = await callClaude(messages);
    res.json({ reply });
  } catch (e) {
    res.status(500).json({ reply: `⚠️ Error talking to Claude: ${e.message}` });
  }
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
