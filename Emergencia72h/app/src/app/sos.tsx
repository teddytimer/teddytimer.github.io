// Señal SOS en Morse (··· – – – ···) con el flash o con la pantalla.
// Zona EMERGENCIA: sin anuncios.
import { useKeepAwake } from 'expo-keep-awake';
import React, { useEffect, useRef, useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { HiddenTorch, TorchPermission, useTorchPermission } from '../components/Torch';
import { Button, Card, P, Screen } from '../components/ui';
import { useSettings } from '../state/settings';
import { useEmergencyScreen } from '../state/emergency';

// Tiempos Morse: punto = 1 unidad, raya = 3, hueco entre señales = 1,
// entre letras = 3, entre repeticiones = 7.
const UNIT = 250; // ms
type Pulse = [boolean, number];
const letter = (marks: number[]): Pulse[] => marks.flatMap((m, i) => [[true, m] as Pulse, [false, i < marks.length - 1 ? 1 : 3] as Pulse]);
const S = letter([1, 1, 1]);
const O = letter([3, 3, 3]);
const SOS_PATTERN: Pulse[] = [...S, ...O, ...S.slice(0, -1), [false, 7]];

function useSosLoop(running: boolean, onChange: (lit: boolean) => void) {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    if (!running) {
      onChange(false);
      return;
    }
    let i = 0;
    const tick = () => {
      const [lit, units] = SOS_PATTERN[i];
      onChange(lit);
      i = (i + 1) % SOS_PATTERN.length;
      timer.current = setTimeout(tick, units * UNIT);
    };
    tick();
    return () => {
      if (timer.current) clearTimeout(timer.current);
      onChange(false);
    };
  }, [running, onChange]);
}

export default function SosScreen() {
  useKeepAwake();
  useEmergencyScreen();
  const { colors, t } = useSettings();
  const { granted, request } = useTorchPermission();
  const [mode, setMode] = useState<'flash' | 'screen' | null>(null);
  const [lit, setLit] = useState(false);
  const stableSetLit = useRef((v: boolean) => setLit(v)).current;

  useSosLoop(mode !== null, stableSetLit);

  return (
    <Screen>
      {granted ? <HiddenTorch on={mode === 'flash' && lit} /> : null}
      <Card style={{ alignItems: 'center', gap: 14 }}>
        <Text style={[styles.morse, { color: lit ? '#FFC53D' : colors.text }]}>··· – – – ···</Text>
        <View style={[styles.lamp, { backgroundColor: lit ? '#FFC53D' : colors.surface2 }]} />
        {mode === null ? (
          <View style={{ alignSelf: 'stretch', gap: 10 }}>
            {granted ? (
              <Button icon="flashlight" title={`${t('start')} · ${t('useFlash')}`} kind="calm" onPress={() => setMode('flash')} />
            ) : (
              <TorchPermission onRequest={request} />
            )}
            <Button icon="cellphone" title={`${t('start')} · ${t('useScreen')}`} onPress={() => setMode('screen')} />
          </View>
        ) : (
          <Button icon="stop" title={t('stop')} kind="urgent" onPress={() => setMode(null)} style={{ alignSelf: 'stretch' }} />
        )}
      </Card>
      <P soft>{t('sosTip')}</P>

      <Modal visible={mode === 'screen'} animationType="none" onRequestClose={() => setMode(null)}>
        <Pressable style={[styles.full, { backgroundColor: lit ? '#FFFFFF' : '#000000' }]} onPress={() => setMode(null)} accessibilityLabel={t('stop')}>
          <Text style={styles.fullTip}>{t('screenLightTip')}</Text>
        </Pressable>
      </Modal>
    </Screen>
  );
}

const styles = StyleSheet.create({
  morse: { fontSize: 34, fontWeight: '900', letterSpacing: 2 },
  lamp: { width: 120, height: 120, borderRadius: 60 },
  full: { flex: 1, alignItems: 'center', justifyContent: 'flex-end', paddingBottom: 60 },
  fullTip: { color: '#777', fontSize: 16 },
});
