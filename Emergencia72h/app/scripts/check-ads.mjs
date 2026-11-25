// Comprueba que los anuncios solo pueden aparecer en la zona EN CASA.
// - Solo estas pantallas pueden importar algo de src/ads.
// - _layout.tsx solo puede montar <AdsHost/> (carga los vídeos, no muestra nada por sí mismo).
// - El backend real de AdMob solo se puede conectar desde src/ads/live.ts.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ALLOWED = new Set([
  'src/app/(tabs)/preparar.tsx',
  'src/app/(tabs)/proyectos.tsx',
  'src/app/proyecto/[id].tsx',
  'src/app/kit.tsx',
  'src/app/ajustes.tsx',
  'src/app/fuentes.tsx',
]);
const LAYOUT = 'src/app/_layout.tsx';

const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));
const rel = (f) => relative('.', f).split('\\').join('/');
const importsAds = (txt) => [...txt.matchAll(/import\s+([^;]+?)\s+from\s+'[./]*ads(?:\/[^']*)?'/g)].map((m) => m[1]);

const errors = [];
for (const f of walk('src/app').filter((x) => /\.tsx?$/.test(x)).map(rel)) {
  const imps = importsAds(readFileSync(f, 'utf8'));
  if (!imps.length) continue;
  if (f === LAYOUT) {
    if (imps.some((i) => i.replace(/[{}\s]/g, '') !== 'AdsHost')) errors.push(`${f}: solo puede importar AdsHost`);
    continue;
  }
  if (!ALLOWED.has(f)) errors.push(`${f}: pantalla de EMERGENCIA con anuncios`);
}
for (const f of walk('src').filter((x) => /\.tsx?$/.test(x)).map(rel)) {
  if (f === 'src/ads/live.ts') continue;
  if (/from '\.\/backends\/admob'|from '\.\.\/backends\/admob'/.test(readFileSync(f, 'utf8'))) errors.push(`${f}: AdMob solo se conecta en src/ads/live.ts`);
}
if (errors.length) {
  console.error('❌ Anuncios fuera de sitio:\n' + errors.join('\n'));
  process.exit(1);
}
console.log('✅ Anuncios solo en la zona EN CASA (Preparar, Proyectos, Kit, Ajustes, Fuentes).');
