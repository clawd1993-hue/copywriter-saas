const express = require('express');
const path = require('path');
const fs = require('fs');
const https = require('https');

const app = express();
const PORT = process.env.PORT || 3460;
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY || '';
const MODEL = 'claude-opus-5'; // swappable brain — SOPs/memory stay the same

app.use(express.json({ limit: '1mb' }));
app.use(express.static(path.join(__dirname, 'public'), {
  setHeaders(res, filePath) {
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    }
  }
}));

app.get('/api/config', (req, res) => {
  res.json({
    supabaseUrl: process.env.SUPABASE_URL || '',
    supabaseAnonKey: process.env.SUPABASE_ANON_KEY || '',
    authEnabled: !!(process.env.SUPABASE_URL && process.env.SUPABASE_ANON_KEY)
  });
});

// ---------- BRAIN: server-side SOP files (IP-protected, never sent to the browser) ----------
const SOP_DIR = path.join(__dirname, 'sops');
function readSop(file) { try { return fs.readFileSync(path.join(SOP_DIR, file), 'utf8'); } catch (e) { return ''; } }
const CORE_BRAIN = readSop('core-brain.md');
// Universal 8 bubbles (index -> SOP filename). Only Step 1 wired for now; more come one at a time.
const STEP_SOP_FILES = {
  0: 'step-01-core-desire.md'
  // 1: 'step-02-market.md', 2: 'step-03-customer-research.md', ... (added step by step)
};
const STEP_NAMES = ['Core Desire', 'Market', 'Customer Research', 'Problems & Solutions', 'Vehicle', 'Method', 'Deliverables', 'Ad Concepts'];

function buildSystemPrompt(stepIndex) {
  const stepName = STEP_NAMES[stepIndex] || 'this step';
  let sys = CORE_BRAIN + '\n\n---\n\n## CURRENT STEP: ' + (stepIndex + 1) + ' — ' + stepName + '\n\n';
  const sopFile = STEP_SOP_FILES[stepIndex];
  const sop = sopFile ? readSop(sopFile) : '';
  if (sop) {
    sys += '### STEP SOP (follow this exactly for the current step):\n\n' + sop;
  } else {
    sys += "The detailed SOP for this step hasn't been loaded into you yet — we're still building it. " +
      "Let the user know this step is coming soon and that Steps beyond the ones we've built aren't ready yet. Don't invent a process.";
  }
  return sys;
}

// Extract an approved push (<<<PUSH>>> ... <<<END_PUSH>>>) from the model reply.
function extractPush(text, stepIndex) {
  const m = text.match(/<<<PUSH>>>([\s\S]*?)<<<END_PUSH>>>/);
  if (!m) return { reply: text, push: null };
  const content = m[1].trim();
  const reply = text.replace(/<<<PUSH>>>[\s\S]*?<<<END_PUSH>>>/, '').trim();
  return { reply, push: { step: stepIndex, content } };
}

function callClaude(system, messages) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({
      model: MODEL,
      max_tokens: 8000,
      output_config: { effort: 'medium' }, // thinking is on by default on Opus 5
      system,
      messages: messages.map(m => ({ role: m.role === 'assistant' ? 'assistant' : 'user', content: String(m.content || '') }))
    });
    const opts = {
      hostname: 'api.anthropic.com', path: '/v1/messages', method: 'POST',
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
          if (j.type === 'error' || j.error) return reject(new Error((j.error && j.error.message) || 'API error'));
          if (j.stop_reason === 'refusal') return resolve("I can't help with that particular request — let's keep it to your copy. Type 'I'm ready' to continue.");
          const text = (j.content || []).filter(b => b.type === 'text').map(b => b.text).join('').trim();
          resolve(text || '(no reply)');
        } catch (e) { reject(e); }
      });
    });
    r.on('error', reject);
    r.write(payload);
    r.end();
  });
}

// ---------- CHAT ----------
app.post('/api/chat', async (req, res) => {
  const messages = (req.body && req.body.messages) || [];
  let stepIndex = Number.isInteger(req.body && req.body.currentStep) ? req.body.currentStep : 0;
  if (stepIndex < 0) stepIndex = 0;
  if (stepIndex > 7) stepIndex = 7;

  if (!ANTHROPIC_API_KEY) {
    return res.json({
      reply: "🛠️ The copywriting engine is warming up — it's built and ready, just waiting on its brain to be switched on. Hang tight; Michael's setting it up.",
      push: null
    });
  }

  try {
    const raw = await callClaude(buildSystemPrompt(stepIndex), messages);
    const { reply, push } = extractPush(raw, stepIndex);
    res.json({ reply, push });
  } catch (e) {
    res.status(200).json({ reply: `⚠️ Something went wrong reaching the engine: ${e.message}. Try again in a sec.`, push: null });
  }
});

app.listen(PORT, () => {
  console.log(`Copywriter SaaS running at http://localhost:${PORT}`);
  console.log(ANTHROPIC_API_KEY ? `🧠 Brain online (${MODEL})` : '🛠️ No ANTHROPIC_API_KEY — engine in warming-up mode');
});
