// Contrato que cumple cada "backend" de anuncios (apagado, vista previa o AdMob real).
import type { ComponentType } from 'react';
import type { BannerScreen } from './config';

export type VideoKind = 'interstitial' | 'rewarded';
// Al terminar un vídeo: earned = true si se vio el vídeo voluntario entero.
export type VideoDone = (earned: boolean) => void;

// Puente entre el "Host" (que carga los vídeos) y el resto de la app.
export type AdsBridge = {
  setReady: (kind: VideoKind, ready: boolean) => void;
  setShow: (kind: VideoKind, show: ((done: VideoDone) => void) | null) => void;
};

export type HostProps = { bridge: AdsBridge; ready: boolean; personalized: boolean };

export type AdsBackend = {
  name: 'off' | 'preview' | 'admob';
  // Pide el consentimiento de privacidad (RGPD) e inicia el SDK. Se llama una sola vez,
  // la primera vez que se entra en la zona EN CASA (nunca al abrir la app).
  init: () => Promise<{ personalized: boolean }>;
  // Banner. Recibe la pantalla para poder medir resultados por pantalla.
  Banner: ComponentType<{ screen: BannerScreen }>;
  // Componente invisible, montado una vez, que carga los vídeos y los registra en el puente.
  Host: ComponentType<HostProps>;
  // Botón "Privacidad de los anuncios" (obligatorio en la UE cuando se usan anuncios).
  privacyOptionsRequired: () => boolean;
  showPrivacyOptions: () => Promise<void>;
};
