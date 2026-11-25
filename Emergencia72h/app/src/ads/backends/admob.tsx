// Anuncios REALES con Google AdMob (librería react-native-google-mobile-ads, v17).
// ESTE ARCHIVO NO SE USA EN LA VERSIÓN 1: la librería no está instalada todavía.
// Para activarlo, sigue "Activar anuncios" en README.md.
import React, { useEffect, useMemo, useRef } from 'react';
import { Platform } from 'react-native';
import mobileAds, {
  AdsConsent,
  AdsConsentPrivacyOptionsRequirementStatus,
  BannerAd,
  BannerAdSize,
  MaxAdContentRating,
  TestIds,
  useInterstitialAd,
  useRewardedAd,
} from 'react-native-google-mobile-ads';
import { AD_UNIT_IDS, MAX_AD_RATING } from '../config';
import type { AdsBackend, HostProps, VideoDone } from '../types';

// En desarrollo, siempre los IDs de prueba de Google (no se cobran ni penalizan la cuenta).
const mine = Platform.OS === 'ios' ? AD_UNIT_IDS.ios : AD_UNIT_IDS.android;
const UNIT = {
  banner: __DEV__ ? TestIds.ADAPTIVE_BANNER : mine.banner,
  interstitial: __DEV__ ? TestIds.INTERSTITIAL : mine.interstitial,
  rewarded: __DEV__ ? TestIds.REWARDED : mine.rewarded,
};

let privacyRequired = false;
let personalizedAds = false;

// 1) Consentimiento RGPD (formulario de Google, obligatorio en la UE) → 2) configuración → 3) iniciar SDK.
async function init() {
  const info = await AdsConsent.gatherConsent();
  privacyRequired = info.privacyOptionsRequirementStatus === AdsConsentPrivacyOptionsRequirementStatus.REQUIRED;
  if (!info.canRequestAds) throw new Error('Sin consentimiento: no se piden anuncios.');
  try {
    personalizedAds = (await AdsConsent.getUserChoices()).selectPersonalisedAds;
  } catch {
    personalizedAds = false;
  }
  await mobileAds().setRequestConfiguration({ maxAdContentRating: MaxAdContentRating[MAX_AD_RATING] });
  await mobileAds().initialize();
  return { personalized: personalizedAds };
}

function AdmobBanner(_props: { screen: string }) {
  return (
    <BannerAd
      unitId={UNIT.banner}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      requestOptions={{ requestNonPersonalizedAdsOnly: !personalizedAds }}
    />
  );
}

// Carga los dos vídeos (pantalla completa y voluntario) y los registra en el puente.
function AdmobHost({ bridge, ready, personalized }: HostProps) {
  const requestOptions = useMemo(() => ({ requestNonPersonalizedAdsOnly: !personalized }), [personalized]);
  const inter = useInterstitialAd({ adUnitId: UNIT.interstitial, autoLoad: ready, requestOptions });
  const rew = useRewardedAd({ adUnitId: UNIT.rewarded, autoLoad: ready, requestOptions });
  const interDone = useRef<VideoDone | null>(null);
  const rewDone = useRef<VideoDone | null>(null);
  const { show: showInter, load: loadInter } = inter;
  const { show: showRew, load: loadRew } = rew;

  useEffect(() => bridge.setReady('interstitial', inter.status === 'loaded'), [bridge, inter.status]);
  useEffect(() => bridge.setReady('rewarded', rew.status === 'loaded'), [bridge, rew.status]);

  useEffect(() => {
    bridge.setShow('interstitial', (done) => {
      interDone.current = done;
      showInter();
    });
    bridge.setShow('rewarded', (done) => {
      rewDone.current = done;
      showRew();
    });
    return () => {
      bridge.setShow('interstitial', null);
      bridge.setShow('rewarded', null);
    };
  }, [bridge, showInter, showRew]);

  // Al cerrarse: avisar y dejar el siguiente vídeo cargando.
  useEffect(() => {
    if (inter.status === 'closed' || (inter.status === 'error' && inter.error.phase === 'show')) {
      interDone.current?.(false);
      interDone.current = null;
      if (inter.status === 'closed') loadInter();
    }
  }, [inter.status, inter.error, loadInter]);

  useEffect(() => {
    if (rew.status === 'closed' || (rew.status === 'error' && rew.error.phase === 'show')) {
      rewDone.current?.(rew.status === 'closed' && rew.earnedReward);
      rewDone.current = null;
      if (rew.status === 'closed') loadRew();
    }
  }, [rew.status, rew.error, rew.earnedReward, loadRew]);

  return null;
}

export const admobBackend: AdsBackend = {
  name: 'admob',
  init,
  Banner: AdmobBanner,
  Host: AdmobHost,
  privacyOptionsRequired: () => privacyRequired,
  showPrivacyOptions: async () => {
    await AdsConsent.showPrivacyOptionsForm();
  },
};
