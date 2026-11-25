// Un proyecto en casa. Zona EN CASA: puede llevar banner en el futuro.
import { Redirect, Stack, useLocalSearchParams } from 'expo-router';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import { AdSlot, maybeShowProjectVideo } from '../../ads';
import { GuideView } from '../../components/GuideView';
import { Card, H2, Icon, P, Screen } from '../../components/ui';
import { GUIDES } from '../../content';
import { PROJECT_RULES } from '../../content/projects';
import { useSettings } from '../../state/settings';

export default function ProjectScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { tr, t, colors } = useSettings();
  const guide = id ? GUIDES[id] : undefined;
  // Al SALIR del proyecto puede salir un vídeo (con límites: ver src/ads/config.ts).
  useEffect(() => () => void maybeShowProjectVideo(), []);
  // Solo proyectos: una guía de emergencia nunca se abre aquí (pantalla que podrá llevar banner).
  if (!guide || guide.zone !== 'prep') return <Redirect href="/proyectos" />;
  return (
    <Screen top={<AdSlot screen="proyecto" />}>
      <Stack.Screen options={{ title: tr(guide.title) }} />
      <GuideView guide={guide} />
      <Card>
        <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
          <Icon name="shield-check" size={22} color={colors.calm} />
          <H2>{t('beforeStart')}</H2>
        </View>
        <P soft>{tr(PROJECT_RULES)}</P>
      </Card>
    </Screen>
  );
}
