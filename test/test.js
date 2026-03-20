#!/usr/bin/env node
/**
 * OPTIK Test Suite
 * Verifies all skills have valid structure and content.
 */

const fs = require('fs');
const path = require('path');

const SOURCE = path.join(__dirname, '..', 'source', 'skills');
let passed = 0;
let failed = 0;

function assert(condition, msg) {
  if (condition) {
    passed++;
    process.stdout.write('.');
  } else {
    failed++;
    console.error(`\n  FAIL: ${msg}`);
  }
}

// Get all skill directories
const skills = fs.readdirSync(SOURCE).filter(f =>
  fs.statSync(path.join(SOURCE, f)).isDirectory()
);

console.log(`Testing ${skills.length} skills...\n`);

// Test 1: Every directory has a SKILL.md
for (const skill of skills) {
  const file = path.join(SOURCE, skill, 'SKILL.md');
  assert(fs.existsSync(file), `${skill}/SKILL.md exists`);
}

// Test 2: Every SKILL.md has valid frontmatter
for (const skill of skills) {
  const file = path.join(SOURCE, skill, 'SKILL.md');
  if (!fs.existsSync(file)) continue;
  const content = fs.readFileSync(file, 'utf-8');

  assert(content.startsWith('---'), `${skill}: starts with frontmatter`);
  assert(content.includes('name:'), `${skill}: has name field`);
  assert(content.includes('description:'), `${skill}: has description field`);

  // Extract name from frontmatter
  const nameMatch = content.match(/name:\s*(.+)/);
  if (nameMatch) {
    assert(nameMatch[1].trim().length > 0, `${skill}: name is not empty`);
  }

  // Check description length
  const descMatch = content.match(/description:\s*(.+)/);
  if (descMatch) {
    assert(descMatch[1].trim().length >= 20, `${skill}: description is descriptive (>20 chars)`);
  }
}

// Test 3: Main skill is not user-invokable
const mainSkill = fs.readFileSync(path.join(SOURCE, 'optik-design', 'SKILL.md'), 'utf-8');
assert(mainSkill.includes('user-invokable: false'), 'optik-design is not user-invokable');

// Test 4: Command skills are user-invokable
const commandSkills = skills.filter(s => s !== 'optik-design');
for (const skill of commandSkills) {
  const file = path.join(SOURCE, skill, 'SKILL.md');
  const content = fs.readFileSync(file, 'utf-8');
  assert(content.includes('user-invokable: true'), `${skill}: is user-invokable`);
}

// Test 5: No empty content after frontmatter
for (const skill of skills) {
  const file = path.join(SOURCE, skill, 'SKILL.md');
  const content = fs.readFileSync(file, 'utf-8');
  const parts = content.split('---');
  if (parts.length >= 3) {
    const body = parts.slice(2).join('---').trim();
    assert(body.length > 50, `${skill}: has substantial content (>${body.length} chars)`);
  }
}

// Test 6: Expected skill count
assert(skills.length === 59, `Expected 59 skills, found ${skills.length}`);

// Test 7: Expected categories exist
const expectedCategories = [
  'score', 'audit', 'critique', 'benchmark',
  'type-scale', 'type-pair', 'type-audit', 'type-fix',
  'palette', 'contrast', 'semantic-color', 'dark-mode',
  'grid', 'spacing', 'responsive', 'density',
  'animate', 'overdrive', 'reduce-motion',
  'a11y-audit', 'focus', 'touch-target',
  'tokens', 'export-css', 'export-tailwind', 'export-json',
  'polish', 'distill', 'bolder', 'quieter', 'harden', 'delight'
];
for (const cat of expectedCategories) {
  assert(skills.includes(cat), `Expected skill '${cat}' exists`);
}

// Test 8: Landing page exists
const landingPage = path.join(__dirname, '..', 'docs', 'index.html');
assert(fs.existsSync(landingPage), 'Landing page exists');
if (fs.existsSync(landingPage)) {
  const html = fs.readFileSync(landingPage, 'utf-8');
  assert(html.includes('OPTIK'), 'Landing page contains OPTIK brand');
  assert(html.includes('aria-label'), 'Landing page has accessibility attributes');
  assert(html.includes('prefers-reduced-motion'), 'Landing page respects reduced motion');
  assert(html.includes('skip-link'), 'Landing page has skip link');
}

// Test 9: Build script exists
assert(fs.existsSync(path.join(__dirname, '..', 'build.js')), 'Build script exists');

// Test 10: Package.json is valid
const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf-8'));
assert(pkg.name === 'optik-design', 'Package name is correct');
assert(pkg.version === '1.0.0', 'Package version is 1.0.0');
assert(pkg.license === 'Apache-2.0', 'License is Apache-2.0');

console.log(`\n\n${passed} passed, ${failed} failed (${passed + failed} total)`);
process.exit(failed > 0 ? 1 : 0);
