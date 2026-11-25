// Comprueba que cada consejo apunta a una fuente que existe en sources.ts.
import { readFileSync } from 'node:fs';

const sources = readFileSync('src/content/sources.ts', 'utf8');
const ids = new Set([...sources.matchAll(/S\('([a-z0-9_]+)'/g)].map((m) => m[1]));
const files = ['risks', 'survival', 'firstaid', 'projects', 'kit'].map((f) => `src/content/${f}.ts`);
let refs = 0;
const missing = [];
for (const f of files) {
  const txt = readFileSync(f, 'utf8');
  for (const m of txt.matchAll(/(?:st|it)\('([a-z0-9_-]+)',\s*'([a-z0-9_]+)'|st\('([a-z0-9_]+)'|src: '([a-z0-9_]+)'/g)) {
    const id = m[2] ?? m[3] ?? m[4];
    refs++;
    if (!ids.has(id)) missing.push(`${f}: ${id}`);
  }
}
const used = new Set();
for (const f of files) for (const m of readFileSync(f, 'utf8').matchAll(/'([a-z0-9_]+)'/g)) if (ids.has(m[1])) used.add(m[1]);
const unused = [...ids].filter((i) => !used.has(i));
if (missing.length) {
  console.error('❌ Fuentes que no existen:', missing);
  process.exit(1);
}
console.log(`✅ ${refs} consejos con fuente válida (${ids.size} fuentes).`);
if (unused.length) console.log('ℹ️  Fuentes sin usar:', unused.join(', '));
