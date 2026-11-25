// ============================ ANUNCIOS · CONFIGURACIÓN ============================
// Versión 1: ADS_MODE = 'off' → la app sale SIN anuncios y sin el SDK de anuncios dentro.
//
// Modos:
//   'off'     → sin anuncios (v1).
//   'preview' → anuncios DE MENTIRA para ver dónde saldrían. Solo funciona en desarrollo
//               (Expo Go / `npx expo start`); en la app publicada se comporta como 'off'.
//   'live'    → anuncios reales de AdMob. Antes hay que seguir los pasos de README.md
//               ("Activar anuncios"): instalar la librería, poner tus IDs y activar el backend.
//
// Dónde sale cada anuncio (solo zona EN CASA; NUNCA en la zona EMERGENCIA):
//   • Banner: arriba del todo, fijo, en Preparar, Proyectos, cada proyecto, Kit, Ajustes y Fuentes.
//     Arriba y no abajo para que nadie lo toque sin querer al buscar el botón 112.
//     No va en "Editar mi ficha" (datos médicos).
//   • Vídeo a pantalla completa (intersticial): al SALIR de un proyecto, como mucho
//     1 de cada 3 proyectos y con 5 minutos de separación. Se puede cerrar.
//   • Vídeo voluntario (bonificado): botón "Apoya la app" en Preparar. Nadie está obligado
//     a verlo y no desbloquea nada: todo el contenido es gratis.
//   • Nunca sale ningún anuncio si se ha pulsado "Llamar al 112" en esta sesión, ni vídeos
//     durante 30 minutos después de abrir una guía de emergencia, la linterna, el SOS o Mi ficha.
// ==================================================================================

export type AdsMode = 'off' | 'preview' | 'live';
export const ADS_MODE: AdsMode = 'off';

// Pantallas con banner (rutas de expo-router). Cualquier otra pantalla no puede mostrarlo.
export const BANNER_SCREENS = ['preparar', 'proyectos', 'proyecto', 'kit', 'ajustes', 'fuentes'] as const;
export type BannerScreen = (typeof BANNER_SCREENS)[number];

// Reglas del vídeo a pantalla completa.
export const INTERSTITIAL_RULES = {
  everyNProjects: 3, // como mucho 1 vídeo cada 3 proyectos que se cierran
  minMinutesBetween: 5, // y al menos 5 minutos entre vídeos
};

// Silencio de vídeos tras usar algo de la zona EMERGENCIA.
export const QUIET_MINUTES_AFTER_EMERGENCY = 30;

// Clasificación máxima de los anuncios: "G" = aptos para todos los públicos.
export const MAX_AD_RATING = 'G' as const;

// IDs de tus bloques de anuncios en AdMob (los pones al activar los anuncios).
// En desarrollo se usan siempre los IDs de prueba de Google, que no generan ingresos
// ni ponen en riesgo tu cuenta.
export const AD_UNIT_IDS = {
  ios: {
    banner: 'ca-app-pub-XXXXXXXXXXXXXXXX/XXXXXXXXXX',
    interstitial: 'ca-app-pub-XXXXXXXXXXXXXXXX/XXXXXXXXXX',
    rewarded: 'ca-app-pub-XXXXXXXXXXXXXXXX/XXXXXXXXXX',
  },
  android: {
    banner: 'ca-app-pub-XXXXXXXXXXXXXXXX/XXXXXXXXXX',
    interstitial: 'ca-app-pub-XXXXXXXXXXXXXXXX/XXXXXXXXXX',
    rewarded: 'ca-app-pub-XXXXXXXXXXXXXXXX/XXXXXXXXXX',
  },
};
