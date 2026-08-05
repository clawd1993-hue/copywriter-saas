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

// ---------- STEP SOPs (front-end, user-facing explainers) ----------
// Placeholder content for now. When the compile step is built, this array is
// swapped for the compiled output of Jim's SOP .md files — nothing else changes.
const STEP_SOPS = [
  { name: 'Core Desire', html: `
    <p class="sop-lead">Everything downstream is built on this. Get it right and the whole VSL writes itself.</p>
    <h4>What this step is</h4>
    <p>We nail down the <strong>one deep desire</strong> your market is really chasing — the end result they lie awake wanting. Not the product, the outcome.</p>
    <h4>Why it matters</h4>
    <p>People don't buy the drill, they buy the hole. Anchor to the core desire and every hook, promise and proof point lands harder.</p>
    <h4>What you'll walk away with</h4>
    <ul><li>The single dominant desire in one sentence</li><li>The emotional payoff behind it</li><li>The "after" state we'll sell throughout the VSL</li></ul>` },
  { name: 'Market', html: `
    <p class="sop-lead">Who are we actually talking to?</p>
    <h4>What this step is</h4>
    <p>We define the exact market — who they are, where they are in their journey, and how aware they are of the problem and the solutions out there.</p>
    <h4>Why it matters</h4>
    <p>The same offer sells completely differently to a cold beginner vs someone who's tried everything. Awareness level sets the tone of your whole script.</p>
    <h4>What you'll walk away with</h4>
    <ul><li>A crisp picture of your ideal buyer</li><li>Their awareness &amp; sophistication level</li><li>The language they already use in their head</li></ul>` },
  { name: 'Customer Research', html: `
    <p class="sop-lead">This is where the gold is. We mine real words, not guesses.</p>
    <h4>What this step is</h4>
    <p>We dig into your customers' actual pains, fears, failures, desires and objections — in <em>their</em> words, from reviews, DMs, calls and comments.</p>
    <h4>Why it matters</h4>
    <p>The best copy is discovered, not invented. Feed the VSL real voice-of-customer and it feels like you're reading their mind.</p>
    <h4>What you'll walk away with</h4>
    <ul><li>Pains, fears &amp; failures</li><li>Desires &amp; motivations</li><li>The exact phrases to quote back to them</li></ul>` },
  { name: 'Problems → Product', html: `
    <p class="sop-lead">Bridge from their world to your offer.</p>
    <h4>What this step is</h4>
    <p>We map every problem your market has onto what your product actually delivers — so each feature has a job to do.</p>
    <h4>Why it matters</h4>
    <p>A product is only valuable in contrast to a problem. Line them up and the pitch section becomes undeniable.</p>
    <h4>What you'll walk away with</h4>
    <ul><li>Problem → matching product element</li><li>The gaps worth closing</li><li>The backbone of your Pitch section</li></ul>` },
  { name: 'Problems → Solutions', html: `
    <p class="sop-lead">Show why the old ways failed them.</p>
    <h4>What this step is</h4>
    <p>We contrast the common (broken) solutions against the real fix — positioning the failures of the past as not their fault.</p>
    <h4>Why it matters</h4>
    <p>Removing blame lowers resistance and sets up your Method as the thing that was missing all along.</p>
    <h4>What you'll walk away with</h4>
    <ul><li>The failed alternatives named</li><li>Why each one let them down</li><li>The opening for your unique mechanism</li></ul>` },
  { name: 'Vehicle', html: `
    <p class="sop-lead">The <em>what</em> — the form your solution takes.</p>
    <h4>What this step is</h4>
    <p>We define the vehicle: the specific format that carries the transformation (the challenge, the system, the program, the service).</p>
    <h4>Why it matters</h4>
    <p>A clear, named vehicle makes the offer feel real and ownable — it's what they're actually buying access to.</p>
    <h4>What you'll walk away with</h4>
    <ul><li>Your named vehicle</li><li>What it includes at a glance</li><li>Feeds the Product Overview section</li></ul>` },
  { name: 'Method', html: `
    <p class="sop-lead">The <em>how</em> — your unique mechanism.</p>
    <h4>What this step is</h4>
    <p>We articulate the signature method: the step-by-step way your vehicle delivers the result that nobody else has.</p>
    <h4>Why it matters</h4>
    <p>The Method is your "new opportunity." It's why this works when everything else didn't — the heart of the VSL.</p>
    <h4>What you'll walk away with</h4>
    <ul><li>Your method named &amp; framed</li><li>The 3–5 core moving parts</li><li>Feeds "Introduce the Method" &amp; the P.S.</li></ul>` },
  { name: 'Deliverables', html: `
    <p class="sop-lead">Everything they get, stacked for value.</p>
    <h4>What this step is</h4>
    <p>We lay out the core deliverables and bonuses, ordered so the perceived value climbs well past the price.</p>
    <h4>Why it matters</h4>
    <p>A well-built stack makes the price feel like a no-brainer before you ever say a number.</p>
    <h4>What you'll walk away with</h4>
    <ul><li>Core deliverables (the Pitch)</li><li>The bonus stack</li><li>Value framing for each piece</li></ul>` },
  { name: 'Ad Concepts', html: `
    <p class="sop-lead">Turn the angles into scroll-stopping hooks.</p>
    <h4>What this step is</h4>
    <p>We translate everything above into ad concepts and hooks that pull the right people into the VSL.</p>
    <h4>Why it matters</h4>
    <p>The best VSL earns nothing without traffic. Sharp hooks off your research are what get the click.</p>
    <h4>What you'll walk away with</h4>
    <ul><li>A batch of hook angles</li><li>Concepts mapped to desires &amp; pains</li><li>Ready-to-test ad ideas</li></ul>` }
];

// ---------- AUTH STATE ----------
let sb = null;            // supabase client (null in dummy mode)
let authEnabled = false;  // true once Supabase keys are configured
let currentUser = null;   // logged-in user {id, email}
let logInFlight = false;  // guard: onLogin can fire twice (getSession + onAuthStateChange) — block re-entry
const noteEl = () => document.getElementById('login-note');

async function initAuth() {
  let cfg = { authEnabled: false };
  try { cfg = await (await fetch('/api/config')).json(); } catch (e) {}
  authEnabled = cfg.authEnabled;

  if (authEnabled && window.supabase) {
    sb = window.supabase.createClient(cfg.supabaseUrl, cfg.supabaseAnonKey);
    // real login: show email + password fields, relabel button
    document.getElementById('email-fields').classList.remove('hidden');
    const g = document.getElementById('google-btn');
    g.innerHTML = 'Sign in / Sign up';
    g.classList.add('plain');
    noteEl().textContent = 'Enter your email + a password to start. New here? It signs you up automatically.';
    const { data } = await sb.auth.getSession();
    if (data.session) { onLogin(data.session.user); }
    sb.auth.onAuthStateChange((_e, session) => {
      if (session && !currentUser) onLogin(session.user);
    });
  } else {
    // DUMMY MODE — no real login yet
    noteEl().textContent = 'Demo mode — real login coming.';
  }
}

function showErr(msg) { const e = document.getElementById('login-error'); if (e) e.textContent = msg || ''; }

// ---------- LOGIN ----------
document.getElementById('google-btn').addEventListener('click', async () => {
  if (!(authEnabled && sb)) { enterDummy(); return; }   // demo: just walk in
  showErr('');
  const email = (document.getElementById('email-input').value || '').trim();
  const password = document.getElementById('password-input').value || '';
  if (!email || password.length < 6) { showErr('Enter an email and a password (6+ characters).'); return; }
  const btn = document.getElementById('google-btn');
  btn.disabled = true; btn.textContent = 'Working…';
  try {
    // try to sign in; if the account doesn't exist yet, sign them up
    let { data, error } = await sb.auth.signInWithPassword({ email, password });
    if (error) {
      const up = await sb.auth.signUp({ email, password });
      if (up.error) {
        const m = (up.error.message || '').toLowerCase();
        if (m.includes('database') || m.includes('approved') || m.includes('not allowed'))
          showErr("This email isn't approved yet. You need to purchase access first.");
        else showErr(up.error.message);
        return;
      }
      if (!up.data.session) {
        // rare: confirmation required — try signing in again
        const retry = await sb.auth.signInWithPassword({ email, password });
        if (retry.error) { showErr('Check your email to confirm, then sign in.'); return; }
      }
    }
    // onAuthStateChange handles entering the app
  } catch (e) {
    showErr('Something went wrong — try again.');
  } finally {
    btn.disabled = false; btn.textContent = 'Sign in / Sign up';
  }
});

async function onLogin(user) {
  // Re-entry guard: getSession() AND onAuthStateChange() can both call this before
  // currentUser is set (bouncer check awaits first), causing a double boot() =
  // doubled chat greeting + doubled project list. Block the second caller.
  if (currentUser || logInFlight) return;
  logInFlight = true;
  // BOUNCER: only approved (paid) emails get in — catches existing accounts too
  if (sb) {
    const { data: ok } = await sb.from('allowed_emails').select('email').limit(1);
    if (!ok || ok.length === 0) {
      await sb.auth.signOut();
      currentUser = null;
      logInFlight = false;
      showErr("This email isn't approved yet. You need to purchase access first.");
      return;
    }
  }
  currentUser = { id: user.id, email: user.email, name: (user.user_metadata && user.user_metadata.name) || user.email };
  document.getElementById('login').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');
  const av = document.querySelector('.avatar');
  if (av) { av.textContent = (currentUser.name || 'U')[0].toUpperCase(); av.title = currentUser.email; }
  boot(true);
}

function enterDummy() {
  document.getElementById('login').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');
  boot(false);
}

// Screenshot/demo shortcut: ?demo=1 skips straight into the app
if (location.search.includes('demo')) window.addEventListener('load', enterDummy);
window.addEventListener('load', initAuth);

// ---------- BOOT ----------
function boot(authed) {
  renderSteps();
  renderVSL();
  greet();
  if (authed && sb) { loadProjects(); } else { renderDummyProjects(); }
  wireNewProject(authed);
}

function renderDummyProjects() {
  const list = document.getElementById('project-list');
  list.innerHTML = '';
  DUMMY_PROJECTS.forEach((name, i) => addProjectItem(name, i === 0));
}

// Load THIS user's projects from the database (only theirs — RLS enforces it)
async function loadProjects() {
  const list = document.getElementById('project-list');
  list.innerHTML = '';
  const { data, error } = await sb.from('projects').select('*').order('created_at', { ascending: false });
  if (error) { console.warn(error); return; }
  if (!data.length) {
    // first-time user: make them a starter project
    const { data: created } = await sb.from('projects').insert({ title: 'My First VSL' }).select().single();
    if (created) data.push(created);
  }
  data.forEach((p, i) => addProjectItem(p.title, i === 0, p.id));
}

function addProjectItem(name, active, id, type) {
  const list = document.getElementById('project-list');
  const el = document.createElement('div');
  el.className = 'project-item' + (active ? ' active' : '');
  el.textContent = name;
  el.dataset.id = id || '';
  el.dataset.type = type || (id ? (projectTypes()[id] || '') : '');
  el.onclick = () => {
    document.querySelectorAll('.project-item').forEach(p => p.classList.remove('active'));
    el.classList.add('active');
    document.getElementById('project-name').textContent = name;
  };
  list.appendChild(el);
  if (active) document.getElementById('project-name').textContent = name;
}

function wireNewProject() {
  const btn = document.getElementById('new-project-btn');
  if (!btn) return;
  btn.onclick = openNpModal;
}

// ---------- NEW PROJECT MODAL ----------
let npSelectedType = null;
function projectTypes() { try { return JSON.parse(localStorage.getItem('projectTypes') || '{}'); } catch (e) { return {}; } }
function saveProjectType(id, type) { if (!id) return; const m = projectTypes(); m[id] = type; localStorage.setItem('projectTypes', JSON.stringify(m)); }

function openNpModal() {
  npSelectedType = null;
  document.querySelectorAll('.np-type').forEach(t => t.classList.remove('selected'));
  const nameEl = document.getElementById('np-name');
  nameEl.value = '';
  document.getElementById('np-create').disabled = true;
  document.getElementById('np-modal').classList.remove('hidden');
  setTimeout(() => nameEl.focus(), 40);
}
function closeNpModal() { document.getElementById('np-modal').classList.add('hidden'); }
function npRefresh() {
  const name = document.getElementById('np-name').value.trim();
  document.getElementById('np-create').disabled = !(npSelectedType && name);
}
document.querySelectorAll('.np-type').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.np-type').forEach(t => t.classList.remove('selected'));
    btn.classList.add('selected');
    npSelectedType = btn.dataset.type;
    npRefresh();
  });
});
document.getElementById('np-name').addEventListener('input', npRefresh);
document.getElementById('np-name').addEventListener('keydown', e => { if (e.key === 'Enter' && !document.getElementById('np-create').disabled) document.getElementById('np-create').click(); });
document.getElementById('np-cancel').addEventListener('click', closeNpModal);
document.getElementById('np-close').addEventListener('click', closeNpModal);
document.getElementById('np-modal').addEventListener('click', e => { if (e.target.id === 'np-modal') closeNpModal(); });
document.getElementById('np-create').addEventListener('click', async () => {
  const name = document.getElementById('np-name').value.trim();
  const type = npSelectedType;
  if (!name || !type) return;
  const cbtn = document.getElementById('np-create');
  cbtn.disabled = true; cbtn.textContent = 'Creating…';
  try {
    let id = null;
    if (sb) {
      const { data } = await sb.from('projects').insert({ title: name }).select().single();
      id = data && data.id;
    }
    saveProjectType(id, type);
    document.querySelectorAll('.project-item').forEach(p => p.classList.remove('active'));
    addProjectItem(name, true, id, type);
    closeNpModal();
  } finally {
    cbtn.textContent = 'Create Project';
  }
});

function renderSteps() {
  const grid = document.getElementById('steps-grid');
  grid.innerHTML = '';
  STEP_NAMES.forEach((nm, i) => {
    const tile = document.createElement('div');
    tile.className = 'step-tile';
    tile.dataset.step = i;
    tile.innerHTML = `<span class="num">Step ${i + 1}</span><span class="dot"></span><div class="nm">${nm}</div>`;
    tile.onclick = () => openSop(i);
    grid.appendChild(tile);
  });
}

// ---------- STEP SOP PANEL ----------
function openSop(i) {
  const sop = STEP_SOPS[i] || { name: STEP_NAMES[i] || 'Step', html: '<p class="sop-lead">SOP coming soon.</p>' };
  document.getElementById('sop-step').textContent = 'Step ' + (i + 1);
  document.getElementById('sop-name').textContent = sop.name;
  document.getElementById('sop-body').innerHTML = sop.html;
  document.getElementById('sop-panel').classList.remove('hidden');
  document.querySelectorAll('.step-tile').forEach(t => t.classList.toggle('active', +t.dataset.step === i));
  document.getElementById('sop-body').scrollTop = 0;
}

function collapseSop() {
  document.getElementById('sop-panel').classList.remove('expanded');
  const bd = document.getElementById('sop-backdrop');
  if (bd) bd.remove();
}

function toggleExpandSop() {
  const panel = document.getElementById('sop-panel');
  const expanding = !panel.classList.contains('expanded');
  if (expanding) {
    if (!document.getElementById('sop-backdrop')) {
      const bd = document.createElement('div');
      bd.id = 'sop-backdrop';
      bd.className = 'sop-backdrop';
      bd.addEventListener('click', collapseSop);
      document.body.appendChild(bd);
    }
    panel.classList.add('expanded');
  } else {
    collapseSop();
  }
}

function closeSop() {
  collapseSop();
  document.getElementById('sop-panel').classList.add('hidden');
  document.querySelectorAll('.step-tile').forEach(t => t.classList.remove('active'));
}

document.getElementById('sop-close').addEventListener('click', closeSop);
document.getElementById('sop-expand').addEventListener('click', toggleExpandSop);

// ---------- SIDEBAR COLLAPSE ----------
(function initSidebarToggle() {
  const sidebar = document.getElementById('sidebar');
  const toggle = document.getElementById('sidebar-toggle');
  if (!sidebar || !toggle) return;
  if (localStorage.getItem('sidebarCollapsed') === '1') sidebar.classList.add('collapsed');
  toggle.addEventListener('click', () => {
    const collapsed = sidebar.classList.toggle('collapsed');
    toggle.title = collapsed ? 'Expand menu' : 'Collapse menu';
    localStorage.setItem('sidebarCollapsed', collapsed ? '1' : '0');
  });
})();
document.addEventListener('keydown', e => { if (e.key === 'Escape') { if (document.getElementById('sop-panel').classList.contains('expanded')) collapseSop(); else if (!document.getElementById('sop-panel').classList.contains('hidden')) closeSop(); } });

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
