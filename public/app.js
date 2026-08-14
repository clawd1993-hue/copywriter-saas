// ---------- SKELETON DATA (matches the current copywriter dashboard) ----------
// The 8 STEP BUBBLES are UNIVERSAL across all project types. Steps 4 & 5 merge
// into one "4/5" bubble, matching Jim's dashboard.
const STEP_NAMES = [
  'Core Desire', 'Market', 'Customer Research', 'Problems & Solutions',
  'Vehicle', 'Method', 'Deliverables', 'Ad Concepts'
];
const STEP_LABELS = ['1', '2', '3', '4/5', '6', '7', '8', '9'];

// ---------- COPYWRITING SECTIONS — UNIQUE PER PROJECT TYPE ----------
// Mirrored from Jim's dashboard. `source` = which step(s) feed each section
// (this is the wiring the brain will use to push step output into the right bubble).

// DTS VSL — 13 sections
const VSL_SECTIONS = [
  { name: 'Hook', source: 'Step 3 Research + Step 6 Vehicle' },
  { name: 'Shocking Statement', source: 'Step 3 — Pains & Failures' },
  { name: 'Why (Desire)', source: 'Step 3 — Desires & Motivations' },
  { name: 'Why (Pain)', source: 'Step 3 — Pains, Fears, Failures' },
  { name: 'Introduce the Method', source: 'Step 7 Method (timeframe format)' },
  { name: 'Credibility', source: 'Outside the system — Your story' },
  { name: 'Proof', source: 'Outside the system — Testimonials' },
  { name: 'Product Overview', source: 'Step 6 Vehicle (name it, what it is, why this opportunity works)' },
  { name: 'Pitch', source: 'Step 8.1 — the 3 core deliverables you get (built-in even-ifs + values)' },
  { name: 'Bonuses', source: 'Step 5 solutions / Step 8.2 — the bonus stack (full Edwards bullets + values)' },
  { name: 'Guarantee/Urgency', source: 'Outside the system' },
  { name: 'CTA', source: 'Outside the system' },
  { name: 'P.S.', source: 'Step 3 Desires + Step 7 Method' }
];

// DTS WEBINAR — 20 sections (Brunson Perfect Webinar structure)
const WEBINAR_SECTIONS = [
  { name: 'Hook (Bold Promise)', source: 'Step 3 Research + Step 6 Vehicle — bold promise + the one belief baked in' },
  { name: 'Credibility (Origin Story)', source: 'Outside the system — your story (2-beat: old belief→why false, then what worked + proof)' },
  { name: 'Future Pace', source: 'Step 3 Desires + §1 promise — near-term win → the dream (trial close)' },
  { name: 'Set the Frame', source: 'Step 6 Vehicle + §1 Big Domino — new opportunity + the ONE thing + preview 3 secrets' },
  { name: '3 Secrets Intro', source: 'Step 6 (the 3 secrets) — state all 3 in full formula, vehicle-first (🚗→🌍→🧠)' },
  { name: 'Secret 1 — The Vehicle', source: 'Step 6 secret (full formula) + Step 5 mechanism (demo it) → ends in proof' },
  { name: 'Secret 2 — Become the Only Choice', source: '🌍 External — Step 6 (1-of-1 Offer Stack) + value-equation bonus stack → ends in proof' },
  { name: 'Secret 3 — The Fill-in-the-Blank VSL', source: '🧠 Internal — Step 6 (8-step formula) + Step 5 mechanism → ends in proof' },
  { name: 'Transition to the Offer', source: 'Permission to sell / two paths (outside the system)' },
  { name: 'Product Overview', source: 'Step 8.1 — name the offer/flagship + the 🚗 Big Promise → hand into the Stack' },
  { name: 'The Pitch', source: 'Step 8.1 — reveal the 🧠/🌍 core components one-by-one + $values' },
  { name: 'Bonuses', source: 'Step 8.2 — the bonus stack (full Edwards bullets + values)' },
  { name: 'Trial Closes', source: 'Temperature check before price (woven earlier too)' },
  { name: 'Price — Anchor, Drop & Reason-Why', source: 'Step 8 values + outside — anchor high → drop to real price → why so low' },
  { name: 'Objection Crush', source: 'Steps 3/4 objections — head-on' },
  { name: 'Guarantee & Urgency', source: 'Outside the system' },
  { name: 'Re-Stack', source: 'Step 8 — recap the full stack before the button' },
  { name: 'CTA', source: 'Outside the system — the ask + closing question' },
  { name: 'Future-Pace Close', source: 'Step 3 Desires — life after buying' },
  { name: 'P.S.', source: 'Step 3 Desires + Step 7 Method' }
];

// CALL-BOOKER VSL — 14 sections = DTS VSL + a Qualify section; Pitch/Bonuses state NO price,
// Guarantee = "free call, no obligation", CTA = book not buy (price revealed on the call)
const CB_VSL_SECTIONS = [
  { name: 'Hook', source: 'Step 3 Research + Step 6 Vehicle' },
  { name: 'Shocking Statement', source: 'Step 3 — Pains & Failures' },
  { name: 'Why (Desire)', source: 'Step 3 — Desires & Motivations' },
  { name: 'Why (Pain)', source: 'Step 3 — Pains, Fears, Failures' },
  { name: 'Introduce the Method', source: 'Step 7 Method (timeframe format)' },
  { name: 'Credibility', source: 'Outside the system — Your story' },
  { name: 'Proof', source: 'Outside the system — Testimonials' },
  { name: 'Product Overview', source: 'Step 6 Vehicle (name it, what it is, why this opportunity works)' },
  { name: 'Pitch', source: 'Step 8.1 — the 3 core deliverables (built-in even-ifs + values) — ▸ NO price' },
  { name: 'Bonuses', source: 'Step 5 / Step 8.2 — the bonus stack (full Edwards bullets + values) — ▸ NO price' },
  { name: 'Who This Is For (Qualify)', source: "Step 2/3 — who it's for / NOT for (take-away filter that qualifies the call)" },
  { name: 'Guarantee/Urgency', source: 'Outside the system — ▸ "the call is free, zero obligation" + limited slots' },
  { name: 'CTA', source: 'Outside the system — ▸ BOOK the call, not buy' },
  { name: 'P.S.', source: 'Step 3 Desires + Step 7 Method — ▸ restate dream + nudge to book' }
];

// Project-type → its section set + framework badge
const SECTION_SETS = { 'dts-vsl': VSL_SECTIONS, 'dts-webinar': WEBINAR_SECTIONS, 'call-booker': CB_VSL_SECTIONS };
const TYPE_BADGE   = { 'dts-vsl': 'DTS VSL', 'dts-webinar': 'DTS Webinar', 'call-booker': 'Call-Booker VSL' };
function getSections(type) { return SECTION_SETS[type] || VSL_SECTIONS; }

const DUMMY_PROJECTS = ['The Perfect VSL', 'Pre-Diabetes Reversal', 'Faceless Funnel Challenge'];

// ---------- STEP SOPs (front-end, user-facing explainers) ----------
// Placeholder content for now. When the compile step is built, this array is
// swapped for the compiled output of Jim's SOP .md files — nothing else changes.
const STEP_SOPS = [
  { name: 'Core Desire', html: `
    <p class="sop-lead">Everything downstream is built on this. Nail it and the whole VSL writes itself.</p>
    <h4>What this step is</h4>
    <p>We pin down <strong>which of the 10 Reasons People Buy</strong> your offer delivers — the emotional drivers that make someone actually pull out their wallet. Most strong offers hit <strong>2–3</strong> of them.</p>
    <h4>The 10 Reasons People Buy</h4>
    <ol class="sop-reasons">
      <li>Make more money</li>
      <li>Save money</li>
      <li>Save time</li>
      <li>Avoid effort</li>
      <li>Escape physical or mental pain</li>
      <li>Get more comfort</li>
      <li>Improve health / hygiene</li>
      <li>Gain praise</li>
      <li>Be loved</li>
      <li>Increase status / popularity</li>
    </ol>
    <h4>Why it matters</h4>
    <p>People buy on emotion and justify with logic. Lock in the real reasons they buy, and every hook, promise and proof point downstream lands harder.</p>
    <h4>What you'll walk away with</h4>
    <ul><li>Your 2–3 core desires from the 10 (e.g. make more money, save time, gain praise)</li><li>The emotional fuel for your hooks &amp; pitch</li><li>A rock-solid foundation for every step that follows</li></ul>` },
  { name: 'Market', html: `
    <p class="sop-lead">A great offer to the wrong crowd dies. This locks the right one.</p>
    <h4>What this step is</h4>
    <p>We pin down <strong>exactly who you're selling to</strong> and sharpen it into one specific, self-identifying person — then check it's a <strong>"starving crowd"</strong> worth building on.</p>
    <h4>Why it matters</h4>
    <p>The #1 advantage in business isn't the product or the copy — it's selling to people who are <em>starving</em> for a solution. Nail the market and everything downstream gets easier.</p>
    <h4>What makes a perfect market</h4>
    <ul><li>💰 Already spending money to fix it</li><li>📍 Easy to reach — they gather online</li><li>🔥 Desperate — a 2 AM problem, not a nice-to-have</li><li>📈 Growing, not dying</li></ul>
    <h4>What you'll walk away with</h4>
    <ul><li>One specific, sharpened market</li><li>Confidence it's worth building on</li><li>The exact person your VSL speaks to</li></ul>` },
  { name: 'Customer Research', html: `
    <p class="sop-lead">The gold step. Jimmy mines <strong>real</strong> words from real people — no guessing.</p>
    <h4>What this step is</h4>
    <p>Jimmy digs through real discussions in your market — <strong>Reddit, forums, reviews, comments</strong> — and pulls out how your customers actually talk about their problem, in their own words.</p>
    <h4>Why it matters</h4>
    <p>The best copy is <em>discovered, not invented</em>. Feed the VSL real voice-of-customer and it feels like you're reading their mind. Everything downstream is built on this.</p>
    <h4>The 5 categories he pulls</h4>
    <ul><li>😣 <strong>Pains</strong> — what hurts</li><li>🚫 <strong>Objections</strong> — why they think nothing'll work</li><li>✨ <strong>Desires</strong> — the dream outcome</li><li>💸 <strong>Failures</strong> — what they've already tried</li><li>🔥 <strong>Motivations</strong> — the deeper why</li></ul>
    <h4>What you'll walk away with</h4>
    <ul><li>Real quotes &amp; language in their voice</li><li>A past → present → future picture of their life</li><li>The emotional ammo for every step after this</li></ul>` },
  { name: 'Problems & Solutions', html: `
    <p class="sop-lead">Turn every obstacle into a reason to buy. (Steps 4 &amp; 5 combined.)</p>
    <h4>What this step is</h4>
    <p>We map the journey your customer takes to the result. At <strong>every step</strong> along the way, we surface the <strong>4 fears</strong> that stop them — then attach a <strong>named solution</strong> to each fear. That stack of solutions becomes your product.</p>
    <h4>The 4 lenses (every journey step gets all 4)</h4>
    <ul>
      <li>🎯 <strong>Dream Outcome</strong> — "Even if I succeed, the result still won't be what I want." <em>(doubt about the destination)</em></li>
      <li>🎯 <strong>Likelihood</strong> — "Can someone like <em>me</em> actually pull this off?" <em>(doubt about themselves)</em></li>
      <li>⏰ <strong>Time</strong> — "This'll take too long, I need results now." <em>(doubt about the timeline)</em></li>
      <li>😩 <strong>Effort</strong> — "This is too hard, confusing, or exhausting." <em>(doubt about the work)</em></li>
    </ul>
    <h4>Then: a named solution for each</h4>
    <p>Every fear becomes a solution using one formula:</p>
    <p class="sop-formula"><strong>[Named Solution]</strong> — what it is <strong>so you can</strong> [outcome] <strong>even if</strong> [their objection] <strong>which means</strong> [deeper payoff]</p>
    <p><em>Example:</em> <strong>The Habit-Swap System</strong> — one-for-one daily food swaps so you can drop fat without counting a calorie, even if you've got zero willpower, which means the weight comes off without living in "diet jail."</p>
    <h4>Why it matters</h4>
    <p>A product is only valuable against a problem. Line every fear up against a solution and your Pitch and Bonus stack basically write themselves.</p>
    <h4>What you'll walk away with</h4>
    <ul><li>A full problem map — every journey step × 4 lenses, in your customer's real words</li><li>A named solution for every problem</li><li>The backbone of your Pitch &amp; Bonuses</li></ul>` },
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
let APP_CONFIG = { slowSteps: {} }; // server config incl. which steps run as background jobs
let currentUser = null;   // logged-in user {id, email}
let logInFlight = false;  // guard: onLogin can fire twice (getSession + onAuthStateChange) — block re-entry
const noteEl = () => document.getElementById('login-note');

async function initAuth() {
  let cfg = { authEnabled: false };
  try { cfg = await (await fetch('/api/config')).json(); } catch (e) {}
  authEnabled = cfg.authEnabled;
  APP_CONFIG = cfg;
  APP_CONFIG.slowSteps = cfg.slowSteps || {};

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
  if (authed && sb) { loadProjects(); } else { renderDummyProjects(); }
  wireNewProject(authed);
}

function renderDummyProjects() {
  const list = document.getElementById('project-list');
  list.innerHTML = '';
  DUMMY_PROJECTS.forEach((name, i) => addProjectItem(name, i === 0));
  const first = list.querySelector('.project-item');
  if (first) selectProject(first);
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
  const first = list.querySelector('.project-item');
  if (first) selectProject(first);
}

function addProjectItem(name, active, id, type, prepend) {
  const list = document.getElementById('project-list');
  const el = document.createElement('div');
  el.className = 'project-item' + (active ? ' active' : '');
  el.dataset.id = id || '';
  el.dataset.name = name;
  el.dataset.type = type || (id ? (projectTypes()[id] || '') : '');
  const nameSpan = document.createElement('span');
  nameSpan.className = 'pi-name';
  nameSpan.textContent = name;
  const trash = document.createElement('button');
  trash.className = 'pi-trash';
  trash.title = 'Delete project';
  trash.innerHTML = '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>';
  trash.addEventListener('click', (e) => { e.stopPropagation(); openDeleteModal(el); });
  el.appendChild(nameSpan);
  el.appendChild(trash);
  el.onclick = () => selectProject(el);
  if (prepend && list.firstChild) list.insertBefore(el, list.firstChild);
  else list.appendChild(el);
  if (active) document.getElementById('project-name').textContent = name;
  return el;
}

// ---------- PROJECT SELECTION + PER-PROJECT CHAT THREAD ----------
let currentProjectId = null;   // Supabase project id (null in dummy mode)
let currentThreadKey = null;   // localStorage key for dummy-mode threads
let currentProjectType = 'dts-vsl';  // drives which copywriting section set renders

function selectProject(el) {
  document.querySelectorAll('.project-item').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  const name = el.dataset.name;
  document.getElementById('project-name').textContent = name;
  currentProjectId = el.dataset.id || null;
  currentThreadKey = currentProjectId || ('dummy:' + name);
  currentProjectType = el.dataset.type || 'dts-vsl';
  renderVSL();               // re-render copywriting sections for THIS project's type
  closeStepContent();
  refreshStepStatuses();
  loadThread();
}

function localThread(key) { try { return JSON.parse(localStorage.getItem('thread:' + key) || '[]'); } catch (e) { return []; } }

async function loadThread() {
  chatLog.innerHTML = '';
  history = [];
  let msgs = [];
  if (sb && currentProjectId) {
    const { data } = await sb.from('messages')
      .select('role,content').eq('project_id', currentProjectId)
      .order('created_at', { ascending: true });
    msgs = data || [];
  } else {
    msgs = localThread(currentThreadKey);
  }
  if (!msgs.length) {
    greet();  // greeting is visual only — never persisted, shown for a fresh thread
    resumePendingJobs();
    return;
  }
  msgs.forEach(m => {
    addMsg(m.role === 'user' ? 'user' : 'bot', m.content);
    history.push({ role: m.role, content: m.content });
  });
  resumePendingJobs();
}

async function persistMsg(role, content) {
  if (sb && currentProjectId) {
    try { await sb.from('messages').insert({ project_id: currentProjectId, role, content }); } catch (e) { console.warn('msg save failed', e); }
  } else if (currentThreadKey) {
    const arr = localThread(currentThreadKey);
    arr.push({ role, content });
    localStorage.setItem('thread:' + currentThreadKey, JSON.stringify(arr));
  }
}

function wireNewProject() {
  const btn = document.getElementById('new-project-btn');
  if (!btn) return;
  btn.onclick = openNpModal;
}

// ---------- HELP / TRAINING MODAL ----------
(function wireHelpModal() {
  const modal = document.getElementById('help-modal');
  const openBtn = document.getElementById('help-btn');
  if (!modal || !openBtn) return;
  const open = () => modal.classList.remove('hidden');
  const close = () => modal.classList.add('hidden');
  openBtn.addEventListener('click', open);
  document.getElementById('help-close').addEventListener('click', close);
  modal.addEventListener('click', e => { if (e.target.id === 'help-modal') close(); });
})();

// ---------- NEW PROJECT MODAL ----------
let npSelectedType = null;
function projectTypes() { try { return JSON.parse(localStorage.getItem('projectTypes') || '{}'); } catch (e) { return {}; } }
function saveProjectType(id, type) { if (!id) return; const m = projectTypes(); m[id] = type; localStorage.setItem('projectTypes', JSON.stringify(m)); }

function openNpModal() {
  npSelectedType = null;
  document.querySelectorAll('.np-type').forEach(t => t.classList.remove('selected'));
  const nameEl = document.getElementById('np-name');
  nameEl.value = '';
  const cbtn = document.getElementById('np-create');
  cbtn.disabled = true;
  cbtn.textContent = 'Create Project';           // reset — a prior create left it on "Creating…"
  const errEl = document.getElementById('np-error');
  if (errEl) errEl.textContent = '';
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
  const errEl = document.getElementById('np-error');
  if (errEl) errEl.textContent = '';
  cbtn.disabled = true; cbtn.textContent = 'Creating…';
  try {
    let id = null;
    if (sb) {
      const { data, error } = await sb.from('projects').insert({ title: name }).select().single();
      if (error) {
        // monthly cap (DB trigger) or other insert failure — don't create a phantom local project
        const capped = /PROJECT_LIMIT_REACHED/i.test(error.message || '');
        if (errEl) errEl.textContent = capped
          ? "You've reached your 20 projects for this month. They reset at the start of next month."
          : 'Could not create the project — try again.';
        cbtn.disabled = false; cbtn.textContent = 'Create Project';
        return;
      }
      id = data && data.id;
    }
    saveProjectType(id, type);
    const el = addProjectItem(name, true, id, type, true); // prepend — newest on top, like ChatGPT
    selectProject(el);
    closeNpModal();
  } catch (e) {
    if (errEl) errEl.textContent = 'Could not create the project — try again.';
    cbtn.disabled = false; cbtn.textContent = 'Create Project';
  }
});

// ---------- DELETE PROJECT (type-DELETE-to-confirm) ----------
let delTargetEl = null;
function openDeleteModal(el) {
  delTargetEl = el;
  document.getElementById('del-name').textContent = el.dataset.name;
  const inp = document.getElementById('del-input');
  inp.value = '';
  document.getElementById('del-confirm').disabled = true;
  document.getElementById('del-modal').classList.remove('hidden');
  setTimeout(() => inp.focus(), 40);
}
function closeDeleteModal() { document.getElementById('del-modal').classList.add('hidden'); delTargetEl = null; }
document.getElementById('del-input').addEventListener('input', e => {
  document.getElementById('del-confirm').disabled = e.target.value !== 'DELETE';
});
document.getElementById('del-input').addEventListener('keydown', e => { if (e.key === 'Enter' && e.target.value === 'DELETE') document.getElementById('del-confirm').click(); });
document.getElementById('del-cancel').addEventListener('click', closeDeleteModal);
document.getElementById('del-close').addEventListener('click', closeDeleteModal);
document.getElementById('del-modal').addEventListener('click', e => { if (e.target.id === 'del-modal') closeDeleteModal(); });
document.getElementById('del-confirm').addEventListener('click', async () => {
  if (!delTargetEl) return;
  const el = delTargetEl;
  const id = el.dataset.id || null;
  const key = id || ('dummy:' + el.dataset.name);
  const wasActive = el.classList.contains('active');
  const btn = document.getElementById('del-confirm');
  btn.disabled = true; btn.textContent = 'Deleting…';
  try {
    if (sb && id) {
      // messages cascade-delete via the FK, but clear explicitly to be safe
      await sb.from('messages').delete().eq('project_id', id);
      await sb.from('projects').delete().eq('id', id);
    }
    localStorage.removeItem('thread:' + key);
    const types = projectTypes();
    if (id && types[id]) { delete types[id]; localStorage.setItem('projectTypes', JSON.stringify(types)); }
    el.remove();
    closeDeleteModal();
    if (wasActive) {
      const next = document.querySelector('.project-item');
      if (next) selectProject(next);
      else {
        currentProjectId = null; currentThreadKey = null; history = [];
        chatLog.innerHTML = '';
        document.getElementById('project-name').textContent = 'No project';
      }
    }
  } finally {
    btn.textContent = 'Delete';
  }
});

function renderSteps() {
  const grid = document.getElementById('steps-grid');
  grid.innerHTML = '';
  STEP_NAMES.forEach((nm, i) => {
    const tile = document.createElement('div');
    tile.className = 'step-tile';
    tile.dataset.step = i;
    tile.innerHTML = `<span class="num">Step ${STEP_LABELS[i]}</span><span class="dot"></span><div class="nm">${nm}</div>`;
    tile.onclick = () => { openSop(i); openStepContent(i); };
    grid.appendChild(tile);
  });
}

// ---------- STEP SOP PANEL ----------
function openSop(i) {
  const sop = STEP_SOPS[i] || { name: STEP_NAMES[i] || 'Step', html: '<p class="sop-lead">SOP coming soon.</p>' };
  document.getElementById('sop-step').textContent = 'Step ' + STEP_LABELS[i];
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

// ---------- STEP CONTENT PANEL (where the AI pushes each step's output) ----------
function stepContentKey() { return currentProjectId || currentThreadKey || 'none'; }
function stepContentStore() { try { return JSON.parse(localStorage.getItem('stepcontent:' + stepContentKey()) || '{}'); } catch (e) { return {}; } }
function getStepContent(i) { return stepContentStore()[i] || null; }
// The step the brain should work on = first of the 8 bubbles without pushed content.
function currentStepIndex() { const s = stepContentStore(); for (let i = 0; i < 8; i++) { if (!s[i]) return i; } return 7; }

function renderStepBody(i) {
  const body = document.getElementById('sc-body');
  const content = getStepContent(i);
  if (content) {
    body.innerHTML = '';
    const div = document.createElement('div');
    div.style.whiteSpace = 'pre-wrap';
    div.innerHTML = mdToHtml(content);
    body.appendChild(div);
  } else {
    body.innerHTML = '<div class="sc-empty"><span class="sc-spark">✨</span>' +
      '<div>Nothing here yet. When the AI finishes <b>' + STEP_NAMES[i] + '</b>, it\'ll push that output straight into this bubble.</div></div>';
  }
}

function markStepDone(i) {
  const tile = document.querySelector('.step-tile[data-step="' + i + '"]');
  if (tile) tile.classList.add('done');
}
function refreshStepStatuses() {
  const store = stepContentStore();
  document.querySelectorAll('.step-tile').forEach(t => t.classList.toggle('done', !!store[+t.dataset.step]));
}

function openStepContent(i) {
  const panel = document.getElementById('step-content');
  document.getElementById('sc-badge').textContent = 'Step ' + STEP_LABELS[i];
  document.getElementById('sc-title').textContent = STEP_NAMES[i];
  panel.dataset.step = i;
  renderStepBody(i);
  // collapse then re-expand each time so the open reads clearly (Michael's ask)
  panel.classList.remove('open');
  void panel.offsetWidth;
  panel.classList.add('open');
  panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
function closeStepContent() { document.getElementById('step-content').classList.remove('open'); }
document.getElementById('sc-close').addEventListener('click', closeStepContent);

// INTEGRATION POINT for the brain: call when the AI completes a step's output.
// pushStepContent(stepIndex, "the generated copy / research / etc")
function pushStepContent(i, content) {
  const store = stepContentStore();
  store[i] = content;
  localStorage.setItem('stepcontent:' + stepContentKey(), JSON.stringify(store));
  markStepDone(i);
  const panel = document.getElementById('step-content');
  if (panel.classList.contains('open') && +panel.dataset.step === i) renderStepBody(i);
}
window.pushStepContent = pushStepContent;

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
  const sections = getSections(currentProjectType);
  sections.forEach((s, i) => {
    const item = document.createElement('div');
    item.className = 'vsl-item';
    item.innerHTML =
      `<label><span class="vsl-num">${i + 1}.</span> ${s.name} ` +
      `<span class="vsl-source">[${s.source}]</span></label>` +
      `<textarea placeholder="Write your ${s.name.toLowerCase()} here..."></textarea>`;
    grid.appendChild(item);
  });
  // framework badges reflect the project type + its section count
  const label = TYPE_BADGE[currentProjectType] || 'DTS VSL';
  const isWebinar = currentProjectType === 'dts-webinar';
  const secBadge = document.getElementById('sections-badge');
  if (secBadge) secBadge.textContent = label + ' · ' + sections.length + ' sections';
  const fwBadge = document.getElementById('fw-badge');
  if (fwBadge) fwBadge.textContent = label + (isWebinar ? ' Script · 0/' : ' Draft · 0/') + sections.length;
}

// ---------- CHAT ----------
const chatLog = document.getElementById('chat-log');
const chatForm = document.getElementById('chat-form');
const chatText = document.getElementById('chat-text');
let history = [];

// Safe minimal markdown → HTML. Escapes first (no injection), then bold/italic/code.
function mdToHtml(text) {
  let s = String(text == null ? '' : text)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  s = s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');   // **bold**
  s = s.replace(/(^|[^*\w])\*(?!\s)(.+?)\*(?!\w)/g, '$1<em>$2</em>'); // *italic*
  s = s.replace(/`([^`]+)`/g, '<code>$1</code>');           // `code`
  return s;
}

function addMsg(role, text) {
  const el = document.createElement('div');
  el.className = 'msg ' + (role === 'user' ? 'user' : 'bot');
  if (role === 'user') el.textContent = text;   // user input stays literal
  else el.innerHTML = mdToHtml(text);           // bot messages render markdown
  chatLog.appendChild(el);
  chatLog.scrollTop = chatLog.scrollHeight;
  return el;
}

function greet() {
  addMsg('bot', "👋 Hey, I'm Jimmy — your AI copywriting assistant. Type “I'm ready” when you're ready to start, and I'll walk you through the steps to craft your perfect VSL.");
}

// Shared: attach the logged-in user's access token so the server can verify them
async function authHeaders() {
  const headers = { 'content-type': 'application/json' };
  if (sb) {
    try { const { data: s } = await sb.auth.getSession(); if (s && s.session) headers.Authorization = 'Bearer ' + s.session.access_token; } catch (e) {}
  }
  return headers;
}

// Shared: land an assistant reply {reply, push} into the chat + dashboard
function applyReply(data) {
  if (!data) return;
  if (data.reply) { addMsg('bot', data.reply); history.push({ role: 'assistant', content: data.reply }); persistMsg('assistant', data.reply); }
  if (data.push && typeof data.push.step === 'number') { pushStepContent(data.push.step, data.push.content); openStepContent(data.push.step); }
}

// ---------- BACKGROUND JOB (slow steps: contract → live progress → auto-deliver, survives tab close) ----------
function jobStoreKey(step) { return 'job:' + stepContentKey() + ':' + step; }
const activeJobKeys = new Set(); // guard against double-polling the same job

// A "working" bubble whose caption steps through the stages so it never looks frozen
function addProgress(stages) {
  const el = document.createElement('div');
  el.className = 'msg bot typing progress';
  el.innerHTML = '<span class="typing-dots"><span></span><span></span><span></span></span><div class="typing-caption progress-stage"></div>';
  chatLog.appendChild(el);
  chatLog.scrollTop = chatLog.scrollHeight;
  const stageEl = el.querySelector('.progress-stage');
  const list = (stages && stages.length) ? stages : ['Working…'];
  let i = 0;
  const render = () => { stageEl.textContent = '🔎 ' + list[Math.min(i, list.length - 1)]; };
  render();
  el._timer = setInterval(() => { i++; render(); }, 25000); // advance ~every 25s
  el._cleanup = () => clearInterval(el._timer);
  return el;
}

function finishJob(step, progress) {
  if (progress) { if (progress._cleanup) progress._cleanup(); progress.remove(); }
  activeJobKeys.delete(jobStoreKey(step));
  try { localStorage.removeItem(jobStoreKey(step)); } catch (e) {}
}

// Nudge the user when a background result lands (title blink + soft beep + notification if allowed)
function pingUser() {
  try {
    const orig = document.title; let on = false, n = 0;
    const iv = setInterval(() => { document.title = (on = !on) ? '✅ Research ready!' : orig; if (++n > 12) { clearInterval(iv); document.title = orig; } }, 800);
    window.addEventListener('focus', () => { clearInterval(iv); document.title = orig; }, { once: true });
  } catch (e) {}
  try { const a = new (window.AudioContext || window.webkitAudioContext)(); const o = a.createOscillator(), g = a.createGain(); o.connect(g); g.connect(a.destination); o.frequency.value = 880; g.gain.value = 0.05; o.start(); setTimeout(() => { o.stop(); a.close(); }, 180); } catch (e) {}
  try { if (window.Notification && Notification.permission === 'granted') new Notification('Jimmy Labs', { body: 'Your customer research is ready 🔎' }); } catch (e) {}
}

function pollJob(step, jobId, progress) {
  activeJobKeys.add(jobStoreKey(step));
  let tries = 0; const MAX = 140; // ~7 min at 3s
  const tick = async () => {
    tries++;
    let data = null;
    try { data = await (await fetch('/api/chat/status?jobId=' + encodeURIComponent(jobId))).json(); } catch (e) { data = null; }
    if ((!data || data.status === 'running')) {
      if (tries >= MAX) { finishJob(step, progress); addMsg('bot', '⏳ This is taking longer than usual — it may still be working. Refresh in a minute to check.'); return; }
      return setTimeout(tick, 3000);
    }
    finishJob(step, progress);
    if (data.status === 'missing') { addMsg('bot', '⚠️ That research job expired before I could deliver it. Hit send again to re-run.'); return; }
    applyReply(data);
    if (data.status === 'done') pingUser();
  };
  tick();
}

async function startSlowJob(step, slowCfg) {
  try { if (window.Notification && Notification.permission === 'default') Notification.requestPermission(); } catch (e) {}
  // Capture the messages to send to the brain BEFORE adding the client-only contract bubble —
  // the contract is a display message (role assistant); sending it would make the convo end on an
  // assistant turn, which the model rejects ("must end with a user message").
  const msgsForServer = history.slice();
  if (slowCfg.contract) { addMsg('bot', slowCfg.contract); history.push({ role: 'assistant', content: slowCfg.contract }); persistMsg('assistant', slowCfg.contract); }
  const progress = addProgress(slowCfg.stages);
  try {
    const r = await fetch('/api/chat/async', { method: 'POST', headers: await authHeaders(), body: JSON.stringify({ messages: msgsForServer, currentStep: step }) });
    const data = await r.json();
    if (data.done) { finishJob(step, progress); applyReply(data); return; } // warming-up / off-topic / immediate reply
    if (!data.jobId) { finishJob(step, progress); addMsg('bot', '⚠️ Could not start the research. Try again.'); return; }
    try { localStorage.setItem(jobStoreKey(step), data.jobId); } catch (e) {}
    pollJob(step, data.jobId, progress);
  } catch (e) {
    finishJob(step, progress); addMsg('bot', '⚠️ Could not reach the server.');
  }
}

// On (re)opening a project, pick back up any slow job that was still running
function resumePendingJobs() {
  const slow = APP_CONFIG.slowSteps || {};
  Object.keys(slow).forEach(s => {
    const step = Number(s);
    const key = jobStoreKey(step);
    if (activeJobKeys.has(key)) return;
    let jobId = null;
    try { jobId = localStorage.getItem(key); } catch (e) {}
    if (!jobId) return;
    const progress = addProgress(slow[s].stages);
    pollJob(step, jobId, progress);
  });
}

chatForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const text = chatText.value.trim();
  if (!text) return;
  addMsg('user', text);
  history.push({ role: 'user', content: text });
  persistMsg('user', text);
  chatText.value = '';
  chatText.style.height = 'auto';

  // Slow steps (e.g. deep research) run as a background job instead of a blocking request
  const step = currentStepIndex();
  const slowCfg = (APP_CONFIG.slowSteps || {})[step];
  if (slowCfg) { startSlowJob(step, slowCfg); return; }

  const typing = document.createElement('div');
  typing.className = 'msg bot typing';
  typing.innerHTML = '<span class="typing-dots"><span></span><span></span><span></span></span>';
  chatLog.appendChild(typing);
  chatLog.scrollTop = chatLog.scrollHeight;
  // If a reply takes a while, reveal an honest caption so it doesn't feel frozen (step-aware)
  const slowCaption = setTimeout(() => {
    const cap = document.createElement('div');
    cap.className = 'typing-caption';
    cap.textContent = step === 3
      ? '✍️ Building your problem map & solutions… this can take a minute'
      : '⏳ Working on it…';
    typing.appendChild(cap);
    chatLog.scrollTop = chatLog.scrollHeight;
  }, 4000);

  try {
    const headers = { 'content-type': 'application/json' };
    // attach the logged-in user's access token so the server can verify them
    if (sb) {
      try { const { data: s } = await sb.auth.getSession(); if (s && s.session) headers.Authorization = 'Bearer ' + s.session.access_token; } catch (e) {}
    }
    const r = await fetch('/api/chat', {
      method: 'POST',
      headers,
      body: JSON.stringify({ messages: history, currentStep: currentStepIndex() })
    });
    const data = await r.json();
    clearTimeout(slowCaption);
    typing.remove();
    addMsg('bot', data.reply);
    history.push({ role: 'assistant', content: data.reply });
    persistMsg('assistant', data.reply);
    // Live push: AI approved content → fill the matching bubble instantly (no refresh) + pop it open
    if (data.push && typeof data.push.step === 'number') {
      pushStepContent(data.push.step, data.push.content);
      openStepContent(data.push.step);
    }
  } catch (err) {
    clearTimeout(slowCaption);
    typing.remove();
    addMsg('bot', '⚠️ Could not reach the server.');
  }
});

// auto-grow textarea
chatText.addEventListener('input', () => {
  chatText.style.height = 'auto';
  chatText.style.height = Math.min(chatText.scrollHeight, 120) + 'px';
});
