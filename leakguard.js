// leakguard.js — deterministic protection for proprietary/confidential source material.
// Even if the model is jailbroken into trying to reproduce a confidential doc (a winning VSL,
// a client's copy, etc.), this catches verbatim runs in the OUTPUT before it leaves the server
// and blocks them. Walls, not willpower.

const fs = require('fs');
const path = require('path');

const SHINGLE_N = 10; // 10 consecutive verbatim words = clear copying; ~0 false positives in fresh copy

function normalizeWords(text) {
  return String(text || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')  // strip punctuation
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .filter(Boolean);
}

function shinglesOf(words, n = SHINGLE_N) {
  const out = [];
  for (let i = 0; i + n <= words.length; i++) out.push(words.slice(i, i + n).join(' '));
  return out;
}

// Build the protected shingle set from every file in the confidential dir.
function buildConfidentialSet(dir) {
  const set = new Set();
  let files = [];
  try { files = fs.readdirSync(dir); } catch { return { set, docs: 0 }; }
  let docs = 0;
  for (const f of files) {
    if (f.startsWith('.') || f.toLowerCase() === 'readme.md') continue;
    let txt = '';
    try { txt = fs.readFileSync(path.join(dir, f), 'utf8'); } catch { continue; }
    const words = normalizeWords(txt);
    if (words.length < SHINGLE_N) continue;
    for (const s of shinglesOf(words)) set.add(s);
    docs++;
  }
  return { set, docs };
}

// True if the reply contains a protected verbatim run.
function containsLeak(reply, confidentialSet) {
  if (!confidentialSet || confidentialSet.size === 0) return false;
  const words = normalizeWords(reply);
  for (const s of shinglesOf(words)) {
    if (confidentialSet.has(s)) return true;
  }
  return false;
}

module.exports = { buildConfidentialSet, containsLeak, normalizeWords, shinglesOf, SHINGLE_N };
