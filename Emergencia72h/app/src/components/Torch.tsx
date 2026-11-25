// El flash del móvil se controla con una cámara invisible (expo-camera, prop enableTorch).
// No se hacen fotos ni vídeos.
import { CameraView, useCameraPermissions } from 'expo-camera';
import React from 'react';
import { Platform, View } from 'react-native';
import { useSettings } from '../state/settings';
import { Button, P } from './ui';

export function useTorchPermission() {
  const [perm, request] = useCameraPermissions();
  return { granted: !!perm?.granted, canAsk: perm?.canAskAgain !== false, request };
}

export function HiddenTorch({ on }: { on: boolean }) {
  if (Platform.OS === 'web') return null;
  return (
    <View style={{ width: 1, height: 1, opacity: 0, position: 'absolute' }} pointerEvents="none">
      <CameraView style={{ width: 1, height: 1 }} facing="back" enableTorch={on} />
    </View>
  );
}

export function TorchPermission({ onRequest }: { onRequest: () => void }) {
  const { t } = useSettings();
  return (
    <View style={{ gap: 10 }}>
      <P>{t('cameraNeeded')}</P>
      <Button title={t('allow')} kind="calm" onPress={onRequest} />
      <P soft>{t('noFlash')}</P>
    </View>
  );
}
