import { existsSync, readFileSync } from 'node:fs'
import assert from 'node:assert/strict'

for (const p of [
  'AGENTS.md','docs/index.md','docs/.vitepress/config.mts',
  'docs/.vitepress/theme/index.ts',
  'docs/.vitepress/theme/components/SoloShowcase.vue',
  'docs/research/sites.md','docs/research/evidence.md',
  'docs/design/principles.md','docs/engineering/techniques.md',
  'docs/engineering/inspection.md','.github/workflows/deploy.yml'
]) assert.ok(existsSync(p), 'Missing: ' + p)
assert.match(readFileSync('docs/.vitepress/config.mts', 'utf8'), /base: '\/Sololive-Design\/'/)
const c=readFileSync('docs/.vitepress/theme/components/SoloShowcase.vue','utf8')
for (const token of ['BLOOM','NOCTURNE','PULSE','prefers-reduced-motion','aria-pressed']) {
  assert.ok(c.includes(token), 'Missing: ' + token)
}
console.log('Smoke checks passed.')
