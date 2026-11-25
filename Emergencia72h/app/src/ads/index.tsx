// Punto único de anuncios para el resto de la app.
// Las pantallas SOLO usan lo que exporta este archivo: <AdSlot/>, <AdsHost/>,
// maybeShowProjectVideo(), useSupportVideo() y la privacidad de anuncios.
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useSyncExternalStore } from 'react';
import { View } from 'react-native';
import { hasCalled112, minutesSinceEmergency, useCalled112 } from '../state/emergency';
import { offBackend } from './backends/off';
import { previewBackend } from './backends/preview';
import { ADS_MODE, BANNER_SCREENS, BannerScreen, INTERSTITIAL_RULES, QUIET_MINUTES_AFTER_EMERGENCY } from './config';
import { liveBackend } from './live';
import type { AdsBackend, AdsBridge, VideoDone, VideoKind } from './types';

// Qué backend se usa. 'preview' nunca llega a la app publicada (solo con __DEV__).
const backend: AdsBackend =
  ADS_MODE === 'live' && liveBackend ? liveBackend : ADS_MODE === 'preview' && __DEV__ ? previewBackend : offBackend;

export const ADS_ACTIVE = backend.name !== 'off';

// ---------- Estado compartido ----------
type State = { initDone: boolean; ready: boolean; personalized: boolean; video: Record<VideoKind, boolean> };
let state: State = { initDone: false, ready: false, personalized: false, video: { interstitial: false, rewarded: false } };
const listeners = new Set<() => void>();
const set = (patch: Partial<State>) => {
  state = { ...state, ...patch };
  listeners.forEach((l) => l());
};
const subscribe = (cb: () => void) => {
  listeners.add(cb);
  return () => listeners.delete(cb);
};
const useAdsState = () => useSyncExternalStore(subscribe, () => state);

const showers: Partial<Record<VideoKind, (done: VideoDone) => void>> = {};
const bridge: AdsBridge = {
  setReady: (kind, ready) => {
    if (state.video[kind] !== ready) set({ video: { ...state.video, [kind]: ready } });
  },
  setShow: (kind, fn) => {
    if (fn) showers[kind] = fn;
    else delete showers[kind];
  },
};

// Se inicia la primera vez que se entra en la zona EN CASA (nunca al abrir la app).
let initPromise: Promise<void> | null = null;
function ensureInit() {
  if (!ADS_ACTIVE || initPromise) return;
  initPromise = backend
    .init()
    .then(({ personalized }) => set({ initDone: true, ready: true, personalized }))
    .catch(() => {
      // Sin consentimiento o sin conexión: simplemente no hay anuncios.
      set({ initDone: true });
    });
}

// ---------- Banner ----------
export function AdSlot({ screen }: { screen: BannerScreen }) {
  const s = useAdsState();
  const called112 = useCalled112();
  useEffect(ensureInit, []);
  if (!ADS_ACTIVE || !s.ready || called112) return null;
  if (!(BANNER_SCREENS as readonly string[]).includes(screen)) return null;
  const Banner = backend.Banner;
  return (
    <View style={{ alignItems: 'center', paddingTop: 6 }}>
      <Banner screen={screen} />
    </View>
  );
}

// ---------- Host (montado una vez en _layout) ----------
export function AdsHost() {
  const s = useAdsState();
  if (!ADS_ACTIVE) return null;
  const Host = backend.Host;
  return <Host bridge={bridge} ready={s.ready} personalized={s.personalized} />;
}

// ---------- Vídeo a pantalla completa: al salir de un proyecto ----------
const LAST_VIDEO_KEY = 'ads.lastInterstitial.v1';
let projectsClosed = 0;

export async function maybeShowProjectVideo() {
  if (!ADS_ACTIVE || !state.ready) return;
  if (hasCalled112() || minutesSinceEmergency() < QUIET_MINUTES_AFTER_EMERGENCY) return;
  projectsClosed += 1;
  if (projectsClosed % INTERSTITIAL_RULES.everyNProjects !== 0) return;
  const last = Number((await AsyncStorage.getItem(LAST_VIDEO_KEY).catch(() => null)) ?? 0);
  if (Date.now() - last < INTERSTITIAL_RULES.minMinutesBetween * 60000) return;
  const show = showers.interstitial;
  if (!state.video.interstitial || !show) return;
  AsyncStorage.setItem(LAST_VIDEO_KEY, String(Date.now())).catch(() => {});
  show(() => {});
}

// ---------- Vídeo voluntario "Apoya la app" ----------
export function useSupportVideo() {
  const s = useAdsState();
  const called112 = useCalled112();
  useEffect(ensureInit, []);
  const available = ADS_ACTIVE && s.ready && s.video.rewarded && !called112;
  const show = (onFinish: (earned: boolean) => void) => {
    const fn = showers.rewarded;
    if (available && fn) fn(onFinish);
  };
  return { available, show };
}

// ---------- Privacidad (RGPD) ----------
export function useAdsPrivacy() {
  const s = useAdsState();
  useEffect(ensureInit, []);
  return {
    required: ADS_ACTIVE && s.initDone && backend.privacyOptionsRequired(),
    open: () => backend.showPrivacyOptions().catch(() => {}),
  };
}
