// ---------- SKELETON DATA (matches the current copywriter dashboard) ----------
// The 8 STEP BUBBLES are UNIVERSAL across all project types. Steps 4 & 5 merge
// into one "4/5" bubble, matching Jim's dashboard.
const STEP_NAMES = [
  'Core Desire', 'Market', 'Customer Research', 'Problems & Solutions',
  'Vehicle', 'Method', 'Deliverables', 'Ad Concepts'
];
const STEP_LABELS = ['1', '2', '3', '4/5', '6', '7', '8', '9'];

// VSL copy sections are addressed as VSL_BASE + sectionIndex, so they never collide with the 0-7 offer steps.
const VSL_BASE = 100;

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
  { name: 'Secret 1 (🚗 — The New Way)', source: 'Step 6 secret #1 (vehicle, always first) + Step 5 mechanism → ends in proof' },
  { name: 'Secret 2', source: 'Step 6 — the 2nd secret in your §5 order + Step 5 mechanism → ends in proof' },
  { name: 'Secret 3', source: 'Step 6 — the 3rd secret in your §5 order + Step 5 mechanism → ends in proof' },
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
    <p class="sop-lead">Where your product actually gets built — by turning every reason someone <em>won't</em> buy into a reason they will. (Steps 4 &amp; 5 combined.)</p>
    <h4>First — what is "value"?</h4>
    <p>People don't buy products, they buy <strong>value</strong>. And value isn't a vibe — Alex Hormozi breaks it into four levers, the <strong>Value Equation</strong>:</p>
    <div class="sop-formula"><strong>Value =</strong><br>(Dream Outcome × Likelihood of Success)<br>÷ (Time × Effort)</div>
    <ul>
      <li>🎯 <strong>Dream Outcome</strong> — how good the result is</li>
      <li>🎯 <strong>Likelihood</strong> — how sure they are it'll work <em>for them</em></li>
      <li>⏰ <strong>Time</strong> — how long it takes <em>(less = more value)</em></li>
      <li>😩 <strong>Effort</strong> — how hard or painful it is <em>(less = more value)</em></li>
    </ul>
    <h4>What we do in this step</h4>
    <p>We map <strong>every step</strong> your customer takes to get from where they are now (A) to the result they want (B). Then at each step we run it through those 4 levers to surface everything that makes it feel <em>less</em> valuable:</p>
    <ul><li><em>"Even if I do it, it won't be that great anyway"</em></li><li><em>"Someone like me can't pull it off"</em></li><li><em>"It'll take forever"</em></li><li><em>"It'll be too hard / confusing"</em></li></ul>
    <p>Then we attach a <strong>named solution</strong> to each one, using this formula:</p>
    <p class="sop-formula"><strong>[Named Solution]</strong> — what it is <strong>so you can</strong> [outcome] <strong>even if</strong> [objection] <strong>which means</strong> [deeper payoff]</p>
    <h4>Why it matters</h4>
    <p>This becomes your <strong>free bonus stack</strong> — the pile of bonuses that answers every objection and pushes your prospect over the edge to actually buy. Each solution answers a real objection, and it also exposes <strong>gaps in your offer</strong>: any problem you can't solve yet is a reason someone won't buy.</p>
    <h4>What you'll walk away with</h4>
    <ul><li>The full problem map — every journey step × the 4 value levers</li><li>A named solution for each problem</li><li>The backbone of your Pitch &amp; Bonuses, plus any offer gaps exposed</li></ul>
    <p class="sop-note">💡 <strong>Don't overthink it.</strong> You don't need to use every single one. We'll keep the strongest, remove the weakest and combine where it makes sense in later steps. Just keep moving.</p>` },
  { name: 'Vehicle', html: `
    <p class="sop-lead">The Big Idea — the <em>new category</em> your offer lives in. It's what makes everything they've already tried the <em>wrong</em> thing.</p>
    <h4>What this step is</h4>
    <p>We name your <strong>Vehicle</strong> (aka the New Opportunity) — the fresh category your product belongs to. Not the product, not the steps: the <em>thesis</em> that makes your customer think "oh, THAT's different from everything I've tried."</p>
    <h4>Why it matters</h4>
    <p>A better version of the old thing is a hard sell. A whole new <em>category</em> isn't — it quietly explains why everything else failed (wrong category, not their fault) and gives them a new identity to buy into.</p>
    <h4>The name — a simple formula</h4>
    <div class="sop-formula"><strong>The [Timeframe] [Dream] [Format]</strong><br><span style="opacity:0.7">e.g. "The 90-Day New Man Blueprint"</span></div>
    <p>Plus one <strong>positioning</strong> line: "the first [category] for [your people], unlike [what they've tried], it [your superpower]."</p>
    <h4>The 3 Secrets</h4>
    <p>Three one-line "belief-breaks" that kill the doubts stopping the sale:</p>
    <ul>
      <li>🚗 <strong>Does this new way even work?</strong></li>
      <li>🧠 <strong>Can <em>I</em> do it?</strong></li>
      <li>🌍 <strong>Will the world let me?</strong></li>
    </ul>
    <p>Each is pulled straight from your real customer research (Step 3) and your solutions (Step 5) — nothing invented.</p>
    <h4>What you'll walk away with</h4>
    <ul><li>Your named vehicle + positioning line</li><li>The 3 belief-breaking secrets (your reg-page bullets &amp; ad angles)</li><li>The umbrella concept everything else sells under</li></ul>` },
  { name: 'Method', html: `
    <p class="sop-lead">The simple path — the one that makes them think <em>"wait… that's it? I can do that."</em></p>
    <h4>What this step is</h4>
    <p>We take your 3 Secrets from Step 6 and flip them from <em>belief</em> into <em>action</em> — a simple <strong>3-move path</strong> to the dream, written as a short spoken script. It becomes the "Introduce the Method" section of your VSL.</p>
    <h4>The 3 moves</h4>
    <ul>
      <li>🧠 Internal secret → <strong>Move 1</strong> (something they do)</li>
      <li>🌍 External secret → <strong>Move 2</strong> (something they do)</li>
      <li>🚗 Vehicle secret → <strong>Move 3 = the dream</strong> (the payoff)</li>
    </ul>
    <h4>Why it matters</h4>
    <p>Complexity kills sales. When the path looks <em>easy</em> — three simple moves to the thing they want — the buyer stops doubting and starts believing. This is the moment they think "I could actually do this."</p>
    <h4>What you'll walk away with</h4>
    <ul><li>Your Method as a short, spoken script (7 beats)</li><li>The exact words for VSL Section 5</li><li>Built entirely from Step 6 — nothing new to figure out</li></ul>` },
  { name: 'Deliverables', html: `
    <p class="sop-lead">Where everything becomes the actual <strong>offer</strong> people buy — stacked so the value dwarfs the price.</p>
    <h4>What this step is</h4>
    <p>We package everything you've built into your <strong>value stack</strong>, in two parts:</p>
    <ul>
      <li>🎯 <strong>Core (the 3)</strong> — one deliverable for each big doubt (🚗 the Big Promise, 🧠 internal, 🌍 external). These are your Step 6 pieces, productized.</li>
      <li>🎁 <strong>Bonuses</strong> — the rest of your Step 4/5 solutions, piled up "PLUS you also get…", each with a value.</li>
    </ul>
    <h4>Why it matters</h4>
    <p>The perfect offer = the core kills every belief, the bonuses cover every step → there's <strong>nothing left to compare it to</strong>. That's when the price feels like a no-brainer.</p>
    <h4>Perceived value</h4>
    <p>Each piece gets a value = what it'd cost to solve <em>without</em> you (not your price). Stack it biggest-first until the total is 10×+ what you charge.</p>
    <h4>What you'll walk away with</h4>
    <ul><li>Your core offer (locked first) + full bonus stack</li><li>A value on every piece</li><li>The exact stack for your Pitch &amp; Bonuses sections</li></ul>` },
  { name: 'Ad Concepts', html: `
    <p class="sop-lead">Your ad <strong>assembly line</strong> — a few modular pieces that combine into dozens of ready ads.</p>
    <h4>What this step is</h4>
    <p>We treat ads like <strong>Lego bricks</strong>: interchangeable <strong>Hooks</strong>, <strong>Meat</strong> (the body) and <strong>CTAs</strong>. Write a small set — then mix &amp; match. The combinations do the work.</p>
    <h4>The 3 bricks</h4>
    <ul>
      <li>🎣 <strong>10 Hooks</strong> — 5 problem-aware (pain) + 5 solution-aware (promise)</li>
      <li>🥩 <strong>2 Meats</strong> — a problem-aware story + a solution-aware proof</li>
      <li>📢 <strong>3 CTAs</strong> — near-identical, tiny wording tweaks</li>
    </ul>
    <h4>Why both problem- &amp; solution-aware</h4>
    <p>We write for two mindsets: <strong>problem-aware</strong> (they feel the pain but don't know the fix) and <strong>solution-aware</strong> (they already know a solution exists — they just want the best one). Covering both means you speak to <strong>far more of the market</strong>, not just one slice — so your ads reach more people and scale a lot easier.</p>
    <h4>The math</h4>
    <div class="ad-math">
      <div class="ad-brick"><span class="ad-num">10</span><span class="ad-lbl">🎣 Hooks</span></div>
      <span class="ad-op">×</span>
      <div class="ad-brick"><span class="ad-num">2</span><span class="ad-lbl">🥩 Meat</span></div>
      <span class="ad-op">×</span>
      <div class="ad-brick"><span class="ad-num">3</span><span class="ad-lbl">📢 CTAs</span></div>
      <span class="ad-op">=</span>
      <div class="ad-brick ad-result"><span class="ad-num">60</span><span class="ad-lbl">🎬 Ads</span></div>
    </div>
    <p class="sop-note">Write ~15 pieces → walk away with <strong>60 ready ads</strong>. That's the assembly line — never wonder "how do I get enough creatives?" again.</p>
    <h4>Why it matters</h4>
    <p>The hook does <strong>80%</strong> of an ad's job. More hook variations = more winners found, faster — for barely any extra work.</p>
    <h4>What you'll walk away with</h4>
    <ul><li>10 hooks, 2 bodies, 3 CTAs — written for you</li><li>The 60-ad combination matrix</li><li>A shoot list you (or an editor) can run in one session</li></ul>` }
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
    g.innerHTML = location.search.includes('paid=1') ? 'Create your login' : 'Sign in';
    g.classList.add('plain');
    noteEl().textContent = 'Already purchased? Enter your email + password to sign in.';
    const fl = document.getElementById('forgot-link'); if (fl) fl.classList.remove('hidden');
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

// After a successful payment, Stripe returns to /?paid=1 — tell them to create their login now.
(function paidBanner() {
  if (!location.search.includes('paid=1')) return;
  const err = document.getElementById('login-error');
  if (err) { err.style.color = '#059669'; err.textContent = '✅ Payment received! Create your login below using the same email you just paid with.'; }
  const buy = document.getElementById('buy-block'); if (buy) buy.style.display = 'none';
})();

// Public "Get Access" — pay-first checkout (no login needed; approves the email so they can then sign up).
(function wireBuy() {
  const b = document.getElementById('buy-btn');
  if (!b) return;
  b.addEventListener('click', async () => {
    const email = (document.getElementById('email-input') && document.getElementById('email-input').value || '').trim();
    b.disabled = true; b.textContent = 'Opening secure checkout…';
    try {
      const r = await fetch('/api/checkout', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) });
      const j = await r.json();
      if (j.url) { location.href = j.url; return; }
      b.disabled = false; b.textContent = 'Get Access';
      showErr(j.error || 'Could not open checkout — try again.');
    } catch (e) { b.disabled = false; b.textContent = 'Get Access'; showErr('Network error — try again.'); }
  });
})();

// ---------- FORGOT PASSWORD ----------
(function wireForgot() {
  const link = document.getElementById('forgot-link');
  if (!link) return;
  link.addEventListener('click', async (e) => {
    e.preventDefault();
    if (!(authEnabled && sb)) return;
    showErr('');
    const email = (document.getElementById('email-input').value || '').trim();
    if (!email) { showErr('Enter your email above first, then tap "Forgot password?"'); return; }
    link.textContent = 'Sending…';
    try {
      const { error } = await sb.auth.resetPasswordForEmail(email, { redirectTo: location.origin + '/reset.html' });
      const err = document.getElementById('login-error');
      if (error) { showErr(error.message || 'Could not send reset email — try again.'); }
      else if (err) { err.style.color = '#059669'; err.textContent = '✅ Check your email for a password reset link.'; }
    } catch (_) { showErr('Network error — try again.'); }
    finally { link.textContent = 'Forgot password?'; }
  });
})();

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
    btn.disabled = false; btn.textContent = location.search.includes('paid=1') ? 'Create your login' : 'Sign in';
  }
});

async function onLogin(user) {
  // Re-entry guard: getSession() AND onAuthStateChange() can both call this before
  // currentUser is set (bouncer check awaits first), causing a double boot() =
  // doubled chat greeting + doubled project list. Block the second caller.
  if (currentUser || logInFlight) return;
  logInFlight = true;
  // BOUNCER: only approved (paid) emails get in — catches existing accounts too.
  // Not approved → show the paywall (keep the session so they can check out), don't sign them out.
  if (sb) {
    const { data: ok } = await sb.from('allowed_emails').select('email').limit(1);
    if (!ok || ok.length === 0) {
      currentUser = null;
      logInFlight = false;
      showPaywall(user);
      return;
    }
  }
  // BILLING GATE: failed payment (past_due) → hard block. Un-closable overlay, only way forward = fix the card.
  try {
    const r = await fetch('/api/subscription', { headers: await authHeaders() });
    const j = await r.json();
    if (j && j.status === 'past_due') {
      currentUser = null;
      logInFlight = false;
      showBillingBlock(user);
      return;
    }
  } catch (_) { /* subscription check failing should never lock a paying user out */ }
  currentUser = { id: user.id, email: user.email, name: (user.user_metadata && user.user_metadata.name) || user.email };
  document.getElementById('login').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');
  const av = document.querySelector('.avatar');
  if (av) { av.textContent = (currentUser.name || 'U')[0].toUpperCase(); av.title = currentUser.email; }
  wireAccountMenu();
  boot(true);
}

// Account dropdown (avatar → Billing / Log out)
let accountMenuWired = false;
function wireAccountMenu() {
  if (accountMenuWired) return;
  const btn = document.getElementById('avatar-btn');
  const dd = document.getElementById('avatar-dropdown');
  if (!btn || !dd) return;
  accountMenuWired = true;
  const emailEl = document.getElementById('avatar-dd-email');
  if (emailEl) emailEl.textContent = (currentUser && currentUser.email) || '';
  btn.onclick = (e) => { e.stopPropagation(); dd.classList.toggle('hidden'); };
  document.addEventListener('click', (e) => {
    if (!dd.classList.contains('hidden') && !dd.contains(e.target) && e.target !== btn) dd.classList.add('hidden');
  });
  document.getElementById('menu-billing').onclick = async () => {
    const item = document.getElementById('menu-billing');
    const label = item.textContent; item.textContent = 'Opening…'; item.disabled = true;
    try {
      const r = await fetch('/api/billing-portal', { method: 'POST', headers: await authHeaders() });
      const j = await r.json();
      if (j.url) { location.href = j.url; return; }
      alert(j.error === 'no billing account yet'
        ? 'No billing account found yet. If you just signed up, give it a minute — or contact support@themilliondollarvsl.com.'
        : (j.error || 'Could not open billing — try again.'));
    } catch (_) { alert('Network error — try again.'); }
    item.textContent = label; item.disabled = false;
  };
  document.getElementById('menu-logout').onclick = async () => {
    try { await sb.auth.signOut(); } catch (_) {}
    location.reload();
  };
}

// Billing-block screen — un-closable overlay for past_due users (failed payment). No close button,
// no way into the app: the only actions are "Update payment method" (→ Stripe billing portal) or log out.
function showBillingBlock(user) {
  const email = (user && user.email) || (currentUser && currentUser.email) || '';
  const loginEl = document.getElementById('login'); if (loginEl) loginEl.classList.add('hidden');
  const appEl = document.getElementById('app'); if (appEl) appEl.classList.add('hidden');
  let el = document.getElementById('billing-block');
  if (!el) { el = document.createElement('div'); el.id = 'billing-block'; document.body.appendChild(el); }
  el.setAttribute('style', 'position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:#0f1115;color:#e8eaed;font-family:-apple-system,Segoe UI,Roboto,sans-serif;z-index:100000;padding:24px;');
  el.innerHTML = `
    <div style="max-width:440px;width:100%;background:#191c22;border:1px solid #262a32;border-radius:16px;padding:32px;text-align:center">
      <div style="font-size:26px;font-weight:800;margin-bottom:6px">💳 Payment issue</div>
      <p style="color:#9aa0aa;margin:0 0 22px;font-size:15px;line-height:1.5">Your last payment didn't go through, so your access is paused. Update your payment method and you'll be back in seconds — all your projects are safe and waiting.</p>
      <button id="bb-fix" style="width:100%;background:#7c5cff;color:#fff;border:0;border-radius:10px;padding:14px;font-size:16px;font-weight:700;cursor:pointer">Update payment method →</button>
      <div style="margin-top:16px;font-size:13px;color:#9aa0aa">${email} · <a id="bb-logout" href="#" style="color:#7c5cff">log out</a></div>
    </div>`;
  document.getElementById('bb-fix').onclick = async () => {
    const btn = document.getElementById('bb-fix');
    btn.disabled = true; btn.textContent = 'Opening secure billing…';
    try {
      const r = await fetch('/api/billing-portal', { method: 'POST', headers: await authHeaders() });
      const j = await r.json();
      if (j.url) { location.href = j.url; return; }
      alert(j.error || 'Could not open billing — try again or contact support@themilliondollarvsl.com.');
    } catch (_) { alert('Network error — try again.'); }
    btn.disabled = false; btn.textContent = 'Update payment method →';
  };
  document.getElementById('bb-logout').onclick = async (e) => {
    e.preventDefault();
    try { await sb.auth.signOut(); } catch (_) {}
    location.reload();
  };
}

// Paywall screen — shown to a logged-in user whose email isn't approved yet. Keeps the session so checkout can authenticate.
function showPaywall(user) {
  document.getElementById('login').classList.add('hidden');
  document.getElementById('app').classList.add('hidden');
  let el = document.getElementById('paywall');
  if (!el) { el = document.createElement('div'); el.id = 'paywall'; document.body.appendChild(el); }
  el.setAttribute('style', 'position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:#0f1115;color:#e8eaed;font-family:-apple-system,Segoe UI,Roboto,sans-serif;z-index:9999;padding:24px;');
  el.innerHTML = `
    <div style="max-width:440px;width:100%;background:#191c22;border:1px solid #262a32;border-radius:16px;padding:32px;text-align:center">
      <div style="font-size:26px;font-weight:800;margin-bottom:6px">🔒 Unlock Jimmy Labs</div>
      <p style="color:#9aa0aa;margin:0 0 22px;font-size:15px;line-height:1.5">Get full access to Jimmy — your AI copywriting partner. Build unlimited VSLs, webinars, and call-booker funnels.</p>
      <div style="background:#0f1115;border:1px solid #262a32;border-radius:12px;padding:16px;margin-bottom:22px">
        <div style="font-size:30px;font-weight:800">$1,997 <span style="font-size:15px;color:#9aa0aa;font-weight:500">setup</span></div>
        <div style="color:#3fb950;font-size:14px;margin-top:4px">then $97/mo — first month free (30-day trial)</div>
      </div>
      <button id="pw-buy" style="width:100%;background:#7c5cff;color:#fff;border:0;border-radius:10px;padding:14px;font-size:16px;font-weight:700;cursor:pointer">Get Access →</button>
      <div style="margin-top:16px;font-size:13px;color:#9aa0aa">Signed in as ${(user && user.email) || ''} · <a id="pw-logout" href="#" style="color:#7c5cff">log out</a></div>
    </div>`;
  el.classList.remove('hidden');
  document.getElementById('pw-buy').onclick = async () => {
    const btn = document.getElementById('pw-buy');
    btn.disabled = true; btn.textContent = 'Redirecting to secure checkout…';
    try {
      const r = await fetch('/api/checkout', { method: 'POST', headers: await authHeaders() });
      const j = await r.json();
      if (j.url) { location.href = j.url; return; }
      btn.disabled = false; btn.textContent = 'Get Access →';
      alert(j.error || 'Could not start checkout — try again.');
    } catch (e) { btn.disabled = false; btn.textContent = 'Get Access →'; alert('Network error — try again.'); }
  };
  document.getElementById('pw-logout').onclick = async (e) => { e.preventDefault(); try { await sb.auth.signOut(); } catch (_) {} location.reload(); };
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
    // first-time user: no auto-project — show the "What do you want to build?" home screen instead
    showHome();
    return;
  }
  data.forEach((p, i) => {
    // DB is the source of truth — hydrate the local cache so the rest of the app (which reads localStorage) just works,
    // and cross-device / cache-clear can never lose a user's cards again.
    hydrateFromDB(p);
    addProjectItem(p.title, i === 0, p.id, p.project_type || 'dts-vsl');
  });
  const first = list.querySelector('.project-item');
  if (first) selectProject(first);
}

// Sync a project row between the DB (source of truth) and localStorage (working cache).
// SAFE MIGRATION: DB wins ONLY when it actually has data. If the DB is empty but localStorage has content
// (existing pre-migration projects), we KEEP the local content and BACKFILL it up to the DB — never wipe.
function hydrateFromDB(p) {
  if (!p || !p.id) return;
  try {
    const lsType = projectTypes()[p.id];
    const lsStepRaw = localStorage.getItem('stepcontent:' + p.id);
    const lsSecRaw  = localStorage.getItem('sectioncontent:' + p.id);
    const dbStep = (p.step_content && typeof p.step_content === 'object') ? p.step_content : {};
    const dbSec  = (p.section_content && typeof p.section_content === 'object') ? p.section_content : {};
    const dbHasStep = Object.keys(dbStep).length > 0;
    const dbHasSec  = Object.keys(dbSec).length > 0;
    const lsStepHas = lsStepRaw && lsStepRaw !== '{}';
    const lsSecHas  = lsSecRaw && lsSecRaw !== '{}';

    // TYPE: DB default is 'dts-vsl'. Trust localStorage if it disagrees (pre-migration projects), otherwise take DB.
    if (!lsType && p.project_type) saveProjectType(p.id, p.project_type);

    // CONTENT: DB wins only when populated; otherwise leave the local cache untouched.
    if (dbHasStep) localStorage.setItem('stepcontent:' + p.id, JSON.stringify(dbStep));
    if (dbHasSec)  localStorage.setItem('sectioncontent:' + p.id, JSON.stringify(dbSec));

    // ONE-TIME BACKFILL: DB empty but local has work → push local up so it's protected forever.
    if (sb) {
      const patch = {};
      if (!dbHasStep && lsStepHas) { try { patch.step_content = JSON.parse(lsStepRaw); } catch (e) {} }
      if (!dbHasSec  && lsSecHas)  { try { patch.section_content = JSON.parse(lsSecRaw); } catch (e) {} }
      if (lsType && lsType !== 'dts-vsl' && (!p.project_type || p.project_type === 'dts-vsl')) patch.project_type = lsType;
      if (Object.keys(patch).length) sb.from('projects').update(patch).eq('id', p.id).then(() => {}, () => {});
    }
  } catch (e) { console.warn('hydrate failed', e); }
}

// Persist a card field ('step_content' | 'section_content') for the current project up to the DB.
async function persistCardsToDB(field, obj) {
  if (!sb || !currentProjectId) return; // dummy mode = localStorage only, nothing to sync
  try { await sb.from('projects').update({ [field]: obj }).eq('id', currentProjectId); }
  catch (e) { console.warn('card persist failed', e); }
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
  const edit = document.createElement('button');
  edit.className = 'pi-edit';
  edit.title = 'Rename project';
  edit.innerHTML = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>';
  edit.addEventListener('click', (e) => { e.stopPropagation(); startRename(el); });
  el.appendChild(nameSpan);
  el.appendChild(edit);
  el.appendChild(trash);
  el.onclick = () => selectProject(el);
  if (prepend && list.firstChild) list.insertBefore(el, list.firstChild);
  else list.appendChild(el);
  if (active) document.getElementById('project-name').textContent = name;
  return el;
}

// ---------- PROJECT RENAME (inline: pencil → input → Enter/blur saves, Esc cancels) ----------
function startRename(el) {
  const nameSpan = el.querySelector('.pi-name');
  if (!nameSpan || el.querySelector('.pi-rename-input')) return; // already renaming
  const oldName = el.dataset.name;
  const input = document.createElement('input');
  input.className = 'pi-rename-input';
  input.value = oldName;
  input.maxLength = 60;
  nameSpan.style.display = 'none';
  el.insertBefore(input, nameSpan);
  input.focus();
  input.select();
  input.addEventListener('click', (e) => e.stopPropagation());
  let done = false;
  const finish = async (save) => {
    if (done) return; done = true;
    const newName = input.value.trim();
    input.remove();
    nameSpan.style.display = '';
    if (!save || !newName || newName === oldName) return;
    // optimistic UI update
    el.dataset.name = newName;
    nameSpan.textContent = newName;
    if (el.classList.contains('active')) document.getElementById('project-name').textContent = newName;
    // persist (real projects only — RLS scopes it to the user's own row)
    if (sb && el.dataset.id) {
      const { error } = await sb.from('projects').update({ title: newName }).eq('id', el.dataset.id);
      if (error) { // revert on failure
        console.warn('rename failed', error);
        el.dataset.name = oldName;
        nameSpan.textContent = oldName;
        if (el.classList.contains('active')) document.getElementById('project-name').textContent = oldName;
      }
    }
  };
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') { e.preventDefault(); finish(true); }
    else if (e.key === 'Escape') { e.preventDefault(); finish(false); }
  });
  input.addEventListener('blur', () => finish(true));
}

// ---------- PROJECT SELECTION + PER-PROJECT CHAT THREAD ----------
let currentProjectId = null;   // Supabase project id (null in dummy mode)
let currentThreadKey = null;   // localStorage key for dummy-mode threads
let currentProjectType = 'dts-vsl';  // drives which copywriting section set renders

function selectProject(el) {
  hideHome(); // clicking any project returns to the workspace
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
    showStartHint();  // fresh project → point the user at the chat box
    resumePendingJobs();
    return;
  }
  hideStartHint();
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
  btn.onclick = () => openNpModal();
}

// ---------- HOME / "What do you want to build?" screen ----------
// The home screen lives inside .workspace next to the sidebar, so we toggle only the .split
// (board + chat) — the project sidebar stays visible so users can always jump back.
function hasProjects() { return !!document.querySelector('.project-item'); }
function showHome() {
  const split = document.querySelector('.split');
  const home = document.getElementById('home-screen');
  const closeBtn = document.getElementById('home-close');
  if (split) split.style.display = 'none';
  if (home) home.classList.remove('hidden');
  // only offer a close/back button if there's actually a project to return to
  if (closeBtn) closeBtn.classList.toggle('hidden', !hasProjects());
  document.querySelectorAll('.project-item').forEach(p => p.classList.remove('active'));
}
function hideHome() {
  const split = document.querySelector('.split');
  const home = document.getElementById('home-screen');
  if (split) split.style.display = '';
  if (home) home.classList.add('hidden');
}
// Close the home screen and return to the current/first project (only used when one exists).
function closeHomeToProject() {
  const active = document.querySelector('.project-item.active') || document.querySelector('.project-item');
  if (active) selectProject(active); // selectProject calls hideHome()
  else hideHome();
}
(function wireHome() {
  const homeBtn = document.getElementById('home-btn');
  const brand = document.getElementById('brand-home');
  const closeBtn = document.getElementById('home-close');
  if (homeBtn) homeBtn.addEventListener('click', showHome);
  if (brand) brand.addEventListener('click', showHome);
  if (closeBtn) closeBtn.addEventListener('click', closeHomeToProject);
  document.querySelectorAll('.home-type').forEach(card => {
    // open the name modal OVER the home screen; hideHome() only runs on successful create,
    // so cancelling returns the user to the home chooser instead of a blank workspace.
    card.addEventListener('click', () => openNpModal(card.dataset.type));
  });
})();

// ---------- HELP / TRAINING MODAL ----------
(function wireHelpModal() {
  const modal = document.getElementById('help-modal');
  const openBtn = document.getElementById('help-btn');
  if (!modal || !openBtn) return;
  const open = () => modal.classList.remove('hidden');
  const close = () => {
    modal.classList.add('hidden');
    const f = modal.querySelector('iframe');
    if (f) f.src = f.src; // reload the iframe to stop the video/audio on close
  };
  window.openHelpModal = open; // so it can auto-pop on new project creation
  openBtn.addEventListener('click', open);
  document.getElementById('help-close').addEventListener('click', close);
  // NOTE: intentionally NO backdrop-click close — only the ✕ closes it, so they can't accidentally dismiss the walkthrough.
})();

// ---------- NEW PROJECT MODAL ----------
let npSelectedType = null;
function projectTypes() { try { return JSON.parse(localStorage.getItem('projectTypes') || '{}'); } catch (e) { return {}; } }
function saveProjectType(id, type) { if (!id) return; const m = projectTypes(); m[id] = type; localStorage.setItem('projectTypes', JSON.stringify(m)); }

function openNpModal(preType) {
  npSelectedType = (typeof preType === 'string') ? preType : null;
  document.querySelectorAll('.np-type').forEach(t => t.classList.toggle('selected', npSelectedType && t.dataset.type === npSelectedType));
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
      const { data, error } = await sb.from('projects').insert({ title: name, project_type: type }).select().single();
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
    hideHome(); // if they started from the home screen, drop into the workspace
    const el = addProjectItem(name, true, id, type, true); // prepend — newest on top, like ChatGPT
    selectProject(el);
    closeNpModal();
    setTimeout(() => { if (window.openHelpModal) window.openHelpModal(); }, 700); // brief beat so they see the project land, then the walkthrough pops
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
    localStorage.removeItem('stepcontent:' + key);      // clear cached cards too — no stale collisions
    localStorage.removeItem('sectioncontent:' + key);
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
  hideStartHint();  // step guide takes the top slot — don't stack with the coach-mark
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
// A step is "still current" if it's empty OR it has content marked [[STEP_PENDING]] (a partial push,
// e.g. Step 8.1 core with bonuses still to come). This keeps a multi-stage step open until it's finished.
function currentStepIndex() {
  const s = stepContentStore();
  for (let i = 0; i < 8; i++) {
    const c = s[i];
    if (!c) return i;
    if (typeof c === 'string' && c.includes('[[STEP_PENDING]]')) return i;
  }
  return 7;
}

// ---------- VSL SECTIONS: content store + progression (mirrors the step-content machinery) ----------
function sectionStore() { try { return JSON.parse(localStorage.getItem('sectioncontent:' + stepContentKey()) || '{}'); } catch (e) { return {}; } }
function getSectionContent(i) { return sectionStore()[i] || null; }
// The whole 8-step offer engine is finished = every bubble has real (non-pending) content.
function engineComplete() {
  const s = stepContentStore();
  for (let i = 0; i < 8; i++) { const c = s[i]; if (!c || (typeof c === 'string' && c.includes('[[STEP_PENDING]]'))) return false; }
  return true;
}
// First VSL section (of the current project type) with no pushed content yet.
function firstEmptySection() {
  const store = sectionStore();
  const n = getSections(currentProjectType).length;
  for (let i = 0; i < n; i++) { if (!store[i]) return i; }
  return n - 1;
}
// The single thing the brain should work on next: an offer-engine step until the engine's done,
// then a VSL section (VSL_BASE + i).
function currentWorkIndex() {
  return engineComplete() ? (VSL_BASE + firstEmptySection()) : currentStepIndex();
}
// A section push to i is valid only if the engine is done AND sections 0..i-1 are already filled.
function canPushSection(i) {
  if (typeof i !== 'number' || i < 0 || i >= getSections(currentProjectType).length) return false;
  if (!engineComplete()) return false;
  return true; // sections are independent — don't block a valid push just because an earlier section is still empty
}
function pushSectionContent(i, content) {
  const store = sectionStore();
  store[i] = content;
  localStorage.setItem('sectioncontent:' + stepContentKey(), JSON.stringify(store));
  persistCardsToDB('section_content', store);   // DB = source of truth (survives device switch / cache clear)
  renderVSL();
  const grid = document.getElementById('vsl-grid');
  const item = grid && grid.children[i];
  if (item) item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}
window.pushSectionContent = pushSectionContent;

// Clear ONE section's saved copy → back to blank so it can be redone. Other sections untouched.
function clearSection(i) {
  const store = sectionStore();
  delete store[i];
  localStorage.setItem('sectioncontent:' + stepContentKey(), JSON.stringify(store));
  persistCardsToDB('section_content', store);   // DB = source of truth
  renderVSL();
}
// Section-clear confirm modal
let secTargetIndex = null;
function openSecModal(i, name) {
  secTargetIndex = i;
  document.getElementById('sec-name').textContent = name || ('Section ' + (i + 1));
  const inp = document.getElementById('sec-input');
  if (inp) inp.value = '';
  const c = document.getElementById('sec-confirm');
  if (c) c.disabled = true;
  document.getElementById('sec-modal').classList.remove('hidden');
  if (inp) setTimeout(() => inp.focus(), 40);
}
function closeSecModal() { document.getElementById('sec-modal').classList.add('hidden'); secTargetIndex = null; }
(function wireSecModal() {
  const cancel = document.getElementById('sec-cancel'), close = document.getElementById('sec-close'),
        confirm = document.getElementById('sec-confirm'), modal = document.getElementById('sec-modal'),
        input = document.getElementById('sec-input');
  if (!modal) return;
  cancel && cancel.addEventListener('click', closeSecModal);
  close && close.addEventListener('click', closeSecModal);
  modal.addEventListener('click', e => { if (e.target.id === 'sec-modal') closeSecModal(); });
  input && input.addEventListener('input', e => { confirm.disabled = e.target.value !== 'DELETE'; });
  input && input.addEventListener('keydown', e => { if (e.key === 'Enter' && e.target.value === 'DELETE') confirm.click(); });
  confirm && confirm.addEventListener('click', () => {
    if (confirm.disabled) return;
    if (secTargetIndex != null) clearSection(secTargetIndex);
    closeSecModal();
  });
})();

// Render the Problems & Solutions map (lines with ` ||| `) as a Lens | Problem | Solution table.
function psTableToHtml(text) {
  const lines = String(text == null ? '' : text).split('\n');
  let out = '', rows = '';
  const flush = () => {
    if (rows) {
      out += '<table class="ps-table"><thead><tr><th>Lens</th><th>Problem</th><th>Solution</th></tr></thead><tbody>' + rows + '</tbody></table>';
      rows = '';
    }
  };
  for (const raw of lines) {
    const line = raw.trim();
    if (!line) continue;
    if (line.includes(' ||| ')) {
      const parts = line.split(' ||| ');
      const lens = mdToHtml(parts[0] || '');
      const prob = mdToHtml(parts[1] || '');
      const sol = mdToHtml(parts.slice(2).join(' ||| ') || '');
      rows += '<tr><td class="ps-lens">' + lens + '</td><td class="ps-problem">' + prob + '</td><td class="ps-solution">' + sol + '</td></tr>';
    } else if (line.startsWith('## ')) {           // journey-step section header — full-width row
      rows += '<tr class="ps-section"><td colspan="3">' + mdToHtml(line.slice(3)) + '</td></tr>';
    } else if (line.startsWith('# ')) {             // title
      flush();
      out += '<div class="ps-title">' + mdToHtml(line.slice(2)) + '</div>';
    } else {                                        // intro prose (e.g. "Market: …")
      flush();
      out += '<p class="ps-note">' + mdToHtml(line) + '</p>';
    }
  }
  flush();
  return out;
}

function renderStepBody(i) {
  const body = document.getElementById('sc-body');
  let content = getStepContent(i);
  if (content) {
    content = content.replace(/\[\[STEP_PENDING\]\]/g, '').replace(/\n{3,}/g, '\n\n').trim();  // strip the pending sentinel from display
    body.innerHTML = '';
    const div = document.createElement('div');
    if (content.includes(' ||| ')) {               // Problems & Solutions map → table
      div.innerHTML = psTableToHtml(content);
    } else {
      div.style.whiteSpace = 'pre-wrap';
      div.innerHTML = mdToHtml(content);
    }
    body.appendChild(div);
  } else {
    body.innerHTML = '<div class="sc-empty"><span class="sc-spark">✨</span>' +
      '<div>Nothing here yet. When the AI finishes <b>' + STEP_NAMES[i] + '</b>, it\'ll push that output straight into this bubble.</div></div>';
  }
}

// 'empty' | 'pending' (content but [[STEP_PENDING]] — e.g. Step 8 core, bonuses still to come) | 'done'
function stepStatus(i) {
  const c = stepContentStore()[i];
  if (!c) return 'empty';
  return (typeof c === 'string' && c.includes('[[STEP_PENDING]]')) ? 'pending' : 'done';
}
function applyTileStatus(t) {
  const st = stepStatus(+t.dataset.step);
  t.classList.toggle('done', st === 'done');
  t.classList.toggle('pending', st === 'pending');
}
function markStepDone(i) {
  const tile = document.querySelector('.step-tile[data-step="' + i + '"]');
  if (tile) applyTileStatus(tile);
}
function refreshStepStatuses() {
  document.querySelectorAll('.step-tile').forEach(applyTileStatus);
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
  persistCardsToDB('step_content', store);   // DB = source of truth (survives device switch / cache clear)
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
  const store = sectionStore();
  let done = 0;
  sections.forEach((s, i) => {
    const content = store[i];
    const item = document.createElement('div');
    item.className = 'vsl-item' + (content ? ' done' : '');
    item.innerHTML =
      `<label><span class="vsl-num">${i + 1}.</span> ${s.name} ` +
      `<span class="vsl-source">[${s.source}]</span></label>` +
      (content ? `<button class="vsl-trash" title="Clear this section to redo it" aria-label="Clear section"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></button>` : '') +
      `<textarea placeholder="Write your ${s.name.toLowerCase()} here..."></textarea>`;
    const ta = item.querySelector('textarea');
    if (content) { ta.value = content; done++; }   // set as .value (no HTML injection) — the AI-pushed copy, still editable
    const trash = item.querySelector('.vsl-trash');
    if (trash) trash.addEventListener('click', (e) => { e.stopPropagation(); openSecModal(i, s.name); });
    grid.appendChild(item);
  });
  // framework badges reflect the project type + its section count + how many are filled
  const label = TYPE_BADGE[currentProjectType] || 'DTS VSL';
  const isWebinar = currentProjectType === 'dts-webinar';
  const secBadge = document.getElementById('sections-badge');
  if (secBadge) secBadge.textContent = label + ' · ' + sections.length + ' sections';
  const fwBadge = document.getElementById('fw-badge');
  if (fwBadge) fwBadge.textContent = label + (isWebinar ? ' Script · ' : ' Draft · ') + done + '/' + sections.length;
}

// ---------- CHAT ----------
const chatLog = document.getElementById('chat-log');
const chatForm = document.getElementById('chat-form');
const chatText = document.getElementById('chat-text');
let history = [];

// Safe minimal markdown → HTML. Escapes first (no injection), then bold/italic/code.
function mdToHtml(text) {
  let s = String(text == null ? '' : text)
    .replace(/^[ \t]*>[ \t]?/gm, '')  // drop markdown blockquote markers ("> ") — they were showing as literal ">"
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  // headings & dividers (line-based, before inline styles) — so the card renders clean, not raw "##"
  s = s.replace(/^\s*###\s+(.+?)\s*$/gm, '<div class="sc-h3">$1</div>');
  s = s.replace(/^\s*##\s+(.+?)\s*$/gm, '<div class="sc-h2">$1</div>');
  s = s.replace(/^\s*#\s+(.+?)\s*$/gm, '<div class="sc-h1">$1</div>');
  s = s.replace(/^\s*(?:---|___|—-)\s*$/gm, '<hr class="sc-hr">');
  s = s.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');   // **bold**
  s = s.replace(/(^|[^*\w])\*(?!\s)(.+?)\*(?!\w)/g, '$1<em>$2</em>'); // *italic*
  s = s.replace(/`([^`]+)`/g, '<code>$1</code>');           // `code`
  // block elements already force their own line break — drop the trailing newline so pre-wrap doesn't double-space
  s = s.replace(/(<\/div>|<hr class="sc-hr">)\n/g, '$1');
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
// A push to step i is only valid if every earlier step (0..i-1) already has content.
// Hard invariant: prevents an out-of-order/stray push from filling a later step and corrupting the sequence.
function canPushStep(i) {
  if (typeof i !== 'number' || i < 0 || i > 7) return false;
  const s = stepContentStore();
  for (let k = 0; k < i; k++) { if (!s[k]) return false; }
  return true;
}

// Route an approved push to the right place: a VSL section (>= VSL_BASE) or an offer-engine step (0-7).
// Both are guarded so a stray/out-of-order push can't corrupt the sequence.
function applyPush(push) {
  if (!push || typeof push.step !== 'number') return;
  if (push.step >= VSL_BASE) {
    const i = push.step - VSL_BASE;
    if (canPushSection(i)) pushSectionContent(i, push.content);
    // Never fail silently: if we can't auto-fill the card, tell the user + hand them the copy to paste.
    else addMsg('bot', "⚠️ I wrote it, but couldn't auto-fill the card (finish the 8-step engine first). Here it is to paste:\n\n" + push.content);
  } else if (canPushStep(push.step)) {
    pushStepContent(push.step, push.content);
    openStepContent(push.step);
  } else {
    console.warn('Ignored out-of-order push to step', push.step, '— earlier steps not complete');
  }
}

function applyReply(data) {
  if (!data) return;
  if (data.reply) { addMsg('bot', data.reply); history.push({ role: 'assistant', content: data.reply }); persistMsg('assistant', data.reply); }
  applyPush(data.push);
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
  let tries = 0; const MAX = 220; // ~11 min at 3s — deep research can take several minutes
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
    const r = await fetch('/api/chat/async', { method: 'POST', headers: await authHeaders(), body: JSON.stringify({ messages: msgsForServer, currentStep: step, stepContent: stepContentStore(), sectionContent: sectionStore(), projectType: currentProjectType, projectId: currentProjectId }) });
    const data = await r.json();
    if (r.status === 402) { finishJob(step, progress); addMsg('bot', data.reply || '💳 Payment issue — access paused.'); showBillingBlock(); return; }
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

let chatBusy = false; // in-flight lock: one message can't fire two requests
chatForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (chatBusy) return; // ignore re-submits while a request is already running
  const text = chatText.value.trim();
  if (!text) return;
  hideStartHint();  // user engaged — coach-mark's job is done
  addMsg('user', text);
  history.push({ role: 'user', content: text });
  persistMsg('user', text);
  chatText.value = '';
  chatText.style.height = 'auto';

  // Slow steps (e.g. deep research) run as a background job instead of a blocking request.
  // Work item = an offer-engine step until the engine's done, then a VSL section (>= VSL_BASE).
  const step = currentWorkIndex();
  const slowCfg = (APP_CONFIG.slowSteps || {})[step];
  if (slowCfg) { startSlowJob(step, slowCfg); return; }
  chatBusy = true;

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
      body: JSON.stringify({ messages: history, currentStep: step, stepContent: stepContentStore(), sectionContent: sectionStore(), projectType: currentProjectType, projectId: currentProjectId })
    });
    const data = await r.json();
    clearTimeout(slowCaption);
    typing.remove();
    if (r.status === 402) { addMsg('bot', data.reply || '💳 Payment issue — access paused.'); showBillingBlock(); return; }
    addMsg('bot', data.reply);
    history.push({ role: 'assistant', content: data.reply });
    persistMsg('assistant', data.reply);
    // Live push: AI approved content → fill the matching bubble/section instantly (no refresh).
    // Guarded: never fill a step/section whose predecessors aren't done (blocks out-of-order/stray pushes).
    applyPush(data.push);
  } catch (err) {
    clearTimeout(slowCaption);
    typing.remove();
    addMsg('bot', '⚠️ Could not reach the server.');
  } finally {
    chatBusy = false;
  }
});

// auto-grow textarea
chatText.addEventListener('input', () => {
  chatText.style.height = 'auto';
  chatText.style.height = Math.min(chatText.scrollHeight, 120) + 'px';
});

// Enter sends, Shift+Enter = newline
chatText.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) {
    e.preventDefault();
    if (typeof chatForm.requestSubmit === 'function') chatForm.requestSubmit();
    else chatForm.dispatchEvent(new Event('submit', { cancelable: true }));
  }
});

// Start-hint coach-mark: visible only on a fresh/empty project
function showStartHint() { const h = document.getElementById('start-hint'); if (h) h.classList.remove('hidden'); }
function hideStartHint() { const h = document.getElementById('start-hint'); if (h) h.classList.add('hidden'); }
