// Anuncios DE MENTIRA para ver dónde y cuándo saldrían (solo en desarrollo).
// No usa ningún SDK ni internet.
import React, { useEffect, useRef, useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import type { AdsBackend, HostProps, VideoDone, VideoKind } from '../types';

const SECONDS = 5;

function PreviewBanner({ screen }: { screen: string }) {
  return (
    <View style={styles.banner} accessibilityLabel="Anuncio (vista previa)">
      <Text style={styles.bannerText}>ANUNCIO · banner de prueba</Text>
      <Text style={styles.bannerSub}>{screen}</Text>
    </View>
  );
}

function PreviewHost({ bridge, ready }: HostProps) {
  const [showing, setShowing] = useState<VideoKind | null>(null);
  const [left, setLeft] = useState(SECONDS);
  const done = useRef<VideoDone | null>(null);

  useEffect(() => {
    if (!ready) return;
    const make = (kind: VideoKind) => (cb: VideoDone) => {
      done.current = cb;
      setLeft(SECONDS);
      setShowing(kind);
    };
    bridge.setShow('interstitial', make('interstitial'));
    bridge.setShow('rewarded', make('rewarded'));
    bridge.setReady('interstitial', true);
    bridge.setReady('rewarded', true);
    return () => {
      bridge.setShow('interstitial', null);
      bridge.setShow('rewarded', null);
    };
  }, [ready, bridge]);

  useEffect(() => {
    if (!showing || left <= 0) return;
    const id = setTimeout(() => setLeft((s) => s - 1), 1000);
    return () => clearTimeout(id);
  }, [showing, left]);

  const close = () => {
    const earned = showing === 'rewarded' && left <= 0;
    setShowing(null);
    done.current?.(earned);
    done.current = null;
  };

  return (
    <Modal visible={showing !== null} animationType="fade" onRequestClose={close}>
      <View style={styles.video}>
        <Text style={styles.videoTitle}>{showing === 'rewarded' ? 'Vídeo voluntario' : 'Vídeo de anuncio'}</Text>
        <Text style={styles.videoSub}>(vista previa · no es un anuncio real)</Text>
        <Text style={styles.count}>{left > 0 ? left : '✓'}</Text>
        {/* El intersticial se puede cerrar ya; el voluntario da la "recompensa" si se ve entero. */}
        {showing === 'interstitial' || left <= 0 ? (
          <Pressable onPress={close} style={styles.close} accessibilityRole="button" accessibilityLabel="Cerrar">
            <Text style={styles.closeText}>Cerrar ✕</Text>
          </Pressable>
        ) : null}
      </View>
    </Modal>
  );
}

export const previewBackend: AdsBackend = {
  name: 'preview',
  init: async () => ({ personalized: false }),
  Banner: PreviewBanner,
  Host: PreviewHost,
  privacyOptionsRequired: () => true,
  showPrivacyOptions: async () => {},
};

const styles = StyleSheet.create({
  banner: {
    height: 54,
    alignSelf: 'stretch',
    marginHorizontal: 12,
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: '#7A8494',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1A1F27',
  },
  bannerText: { color: '#C9D1DC', fontWeight: '800', fontSize: 13, letterSpacing: 0.5 },
  bannerSub: { color: '#7A8494', fontSize: 11 },
  video: { flex: 1, backgroundColor: '#05070A', alignItems: 'center', justifyContent: 'center', gap: 12 },
  videoTitle: { color: '#FFFFFF', fontSize: 24, fontWeight: '800' },
  videoSub: { color: '#8A94A3', fontSize: 15 },
  count: { color: '#FFFFFF', fontSize: 64, fontWeight: '900', marginVertical: 16 },
  close: { position: 'absolute', top: 60, right: 20, backgroundColor: '#FFFFFF22', paddingHorizontal: 16, paddingVertical: 10, borderRadius: 999 },
  closeText: { color: '#FFFFFF', fontSize: 16, fontWeight: '700' },
});
