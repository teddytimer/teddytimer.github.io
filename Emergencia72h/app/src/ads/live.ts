// ─────────────── Interruptor de anuncios reales (AdMob) ───────────────
// En la versión 1 está vacío: la app no lleva el SDK de anuncios.
//
// Para activar AdMob (ver README.md → "Activar anuncios"):
//   1. npx expo install react-native-google-mobile-ads
//   2. Cambia la línea de abajo por:
//        export { admobBackend as liveBackend } from './backends/admob';
//   3. Pon ADS_MODE = 'live' en src/ads/config.ts
// ──────────────────────────────────────────────────────────────────────
import type { AdsBackend } from './types';

export const liveBackend: AdsBackend | null = null;
