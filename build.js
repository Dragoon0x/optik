#!/usr/bin/env node
/**
 * OPTIK Build Script
 * Compiles source skills to provider-specific directories:
 * - .claude/skills/     (Claude Code)
 * - .cursor/skills/     (Cursor)
 * - .agents/skills/     (Copilot, Antigravity, Kiro, OpenCode)
 * - .gemini/skills/     (Gemini CLI)
 * - .codex/prompts/     (Codex CLI)
 */

const fs = require('fs');
const path = require('path');

const SOURCE = path.join(__dirname, 'source', 'skills');
const PROVIDERS = [
  { dir: '.claude/skills', transform: null },
  { dir: '.cursor/skills', transform: null },
  { dir: '.agents/skills', transform: null },
  { dir: '.gemini/skills', transform: null },
  { dir: '.codex/prompts', transform: codexTransform }
];

function codexTransform(content, name) {
  // Codex uses a slightly different frontmatter format
  return content.replace(
    /^---\nname: (.+)\n/,
    '---\nname: $1\nprovider: codex\n'
  );
}

function build() {
  const skills = fs.readdirSync(SOURCE).filter(f =>
    fs.statSync(path.join(SOURCE, f)).isDirectory()
  );

  console.log(`Building ${skills.length} skills for ${PROVIDERS.length} providers...\n`);

  let totalFiles = 0;

  for (const provider of PROVIDERS) {
    const outDir = path.join(__dirname, provider.dir);

    for (const skill of skills) {
      const srcFile = path.join(SOURCE, skill, 'SKILL.md');
      if (!fs.existsSync(srcFile)) continue;

      const destDir = path.join(outDir, skill);
      fs.mkdirSync(destDir, { recursive: true });

      let content = fs.readFileSync(srcFile, 'utf-8');
      if (provider.transform) {
        content = provider.transform(content, skill);
      }

      fs.writeFileSync(path.join(destDir, 'SKILL.md'), content);
      totalFiles++;
    }

    console.log(`  ${provider.dir}: ${skills.length} skills`);
  }

  console.log(`\nTotal: ${totalFiles} files across ${PROVIDERS.length} providers`);
  console.log('Build complete.');
}

build();
