// ---------- SKELETON DATA (matches the current copywriter dashboard) ----------
const STEP_NAMES = [
  'Core Desire', 'Market', 'Customer Research', 'Problems → Product',
  'Problems → Solutions', 'Vehicle', 'Method', 'Deliverables', 'Ad Concepts'
];

const VSL_SECTIONS = [
  { name: 'Hook', source: 'Step 3 Research + Step 6 Vehicle' },
  { name: 'Shocking Statement', source: 'Step 3 — Pains & Failures' },
  { name: 'Why (Desire)', source: 'Step 3 — Desires & Motivations' },
  { name: 'Why (Pain)', source: 'Step 3 — Pains, Fears, Failures' },
  { name: 'Introduce the Method', source: 'Step 7 Method' },
  { name: 'Credibility', source: 'Your story' },
  { name: 'Proof', source: 'Testimonials' },
  { name: 'Product Overview', source: 'Step 6 Vehicle' },
  { name: 'Pitch', source: 'Step 8.1 — core deliverables' },
  { name: 'Bonuses', source: 'Step 5 / Step 8.2 — bonus stack' },
  { name: 'Guarantee/Urgency', source: 'Outside the system' },
  { name: 'CTA', source: 'Outside the system' },
  { name: 'P.S.', source: 'Step 3 Desires + Step 7 Method' }
];

const DUMMY_PROJECTS = ['The Perfect VSL', 'Pre-Diabetes Reversal', 'Faceless Funnel Challenge'];

// ---------- LOGIN ----------
function enterApp() {
  document.getElementById('login').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');
  boot();
}
document.getElementById('google-btn').addEventListener('click', enterApp);
// Screenshot/demo shortcut: ?demo=1 skips straight into the app
if (location.search.includes('demo')) window.addEventListener('load', enterApp);

// ---------- BOOT ----------
function boot() {
  renderProjects();
  renderSteps();
  renderVSL();
  greet();
}

function renderProjects() {
  const list = document.getElementById('project-list');
  list.innerHTML = '';
  DUMMY_PROJECTS.forEach((name, i) => {
    const el = document.createElement('div');
    el.className = 'project-item' + (i === 0 ? ' active' : '');
    el.textContent = name;
    el.onclick = () => {
      document.querySelectorAll('.project-item').forEach(p => p.classList.remove('active'));
      el.classList.add('active');
      document.getElementById('project-name').textContent = name;
    };
    list.appendChild(el);
  });
}

function renderSteps() {
  const grid = document.getElementById('steps-grid');
  grid.innerHTML = '';
  STEP_NAMES.forEach((nm, i) => {
    const tile = document.createElement('div');
    tile.className = 'step-tile';
    tile.innerHTML = `<span class="num">Step ${i + 1}</span><span class="dot"></span><div class="nm">${nm}</div>`;
    grid.appendChild(tile);
  });
}

function renderVSL() {
  const grid = document.getElementById('vsl-grid');
  grid.innerHTML = '';
  VSL_SECTIONS.forEach((s, i) => {
    const item = document.createElement('div');
    item.className = 'vsl-item';
    item.innerHTML =
      `<label><span class="vsl-num">${i + 1}.</span> ${s.name} ` +
      `<span class="vsl-source">[${s.source}]</span></label>` +
      `<textarea placeholder="Write your ${s.name.toLowerCase()} here..."></textarea>`;
    grid.appendChild(item);
  });
}

// ---------- CHAT ----------
const chatLog = document.getElementById('chat-log');
const chatForm = document.getElementById('chat-form');
const chatText = document.getElementById('chat-text');
let history = [];

function addMsg(role, text) {
  const el = document.createElement('div');
  el.className = 'msg ' + (role === 'user' ? 'user' : 'bot');
  el.textContent = text;
  chatLog.appendChild(el);
  chatLog.scrollTop = chatLog.scrollHeight;
  return el;
}

function greet() {
  addMsg('bot', "👋 Hey — I'm your copywriter. Tell me about your offer and I'll walk you through the 8-step system, filling in the VSL sections on the left as we go. What are you selling?");
}

chatForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const text = chatText.value.trim();
  if (!text) return;
  addMsg('user', text);
  history.push({ role: 'user', content: text });
  chatText.value = '';
  chatText.style.height = 'auto';

  const typing = addMsg('bot', '…');
  typing.classList.add('typing');

  try {
    const r = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ messages: history })
    });
    const data = await r.json();
    typing.remove();
    addMsg('bot', data.reply);
    history.push({ role: 'assistant', content: data.reply });
  } catch (err) {
    typing.remove();
    addMsg('bot', '⚠️ Could not reach the server.');
  }
});

// auto-grow textarea
chatText.addEventListener('input', () => {
  chatText.style.height = 'auto';
  chatText.style.height = Math.min(chatText.scrollHeight, 120) + 'px';
});
