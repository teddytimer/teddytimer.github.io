// Linterna. Zona EMERGENCIA: sin anuncios.
import { useKeepAwake } from 'expo-keep-awake';
import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { HiddenTorch, TorchPermission, useTorchPermission } from '../components/Torch';
import { Button, Card, Icon, P, Screen } from '../components/ui';
import { useSettings } from '../state/settings';
import { useEmergencyScreen } from '../state/emergency';

export default function FlashlightScreen() {
  useKeepAwake();
  useEmergencyScreen();
  const { colors, t } = useSettings();
  const { granted, request } = useTorchPermission();
  const [on, setOn] = useState(false);
  const [screenLight, setScreenLight] = useState(false);


  return (
    <Screen>
      {granted ? <HiddenTorch on={on} /> : null}
      <Card style={{ alignItems: 'center', gap: 16, paddingVertical: 28 }}>
        <Pressable
          onPress={() => granted && setOn((v) => !v)}
          accessibilityRole="switch"
          accessibilityState={{ checked: on }}
          accessibilityLabel={t('flashlight')}
          style={[styles.bigBtn, { backgroundColor: on ? '#FFC53D' : colors.surface2, borderColor: on ? '#FFC53D' : colors.border }]}
        >
          <Icon name={on ? 'flashlight' : 'flashlight-off'} size={72} color={on ? '#1A1405' : colors.text} />
          <Text style={[styles.bigText, { color: on ? '#1A1405' : colors.text }]}>{on ? t('off') : t('on')}</Text>
        </Pressable>
        {!granted ? <TorchPermission onRequest={request} /> : null}
      </Card>
      <Button icon="cellphone" title={t('useScreen')} onPress={() => setScreenLight(true)} />
      <P soft>{t('noFlash')}</P>

      <Modal visible={screenLight} animationType="none" onRequestClose={() => setScreenLight(false)}>
        <Pressable style={styles.white} onPress={() => setScreenLight(false)} accessibilityLabel={t('screenLightTip')}>
          <Text style={styles.whiteTip}>{t('screenLightTip')}</Text>
        </Pressable>
      </Modal>
    </Screen>
  );
}

const styles = StyleSheet.create({
  bigBtn: { width: 200, height: 200, borderRadius: 100, alignItems: 'center', justifyContent: 'center', borderWidth: 3 },
  bigEmoji: { fontSize: 64 },
  bigText: { fontSize: 22, fontWeight: '800', marginTop: 6 },
  white: { flex: 1, backgroundColor: '#FFFFFF', alignItems: 'center', justifyContent: 'flex-end', paddingBottom: 60 },
  whiteTip: { color: '#999', fontSize: 16 },
});
