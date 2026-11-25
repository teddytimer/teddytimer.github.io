// Guía de emergencia / supervivencia / primeros auxilios.
// Zona EMERGENCIA: aquí NUNCA va un banner.
import { Redirect, Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { GuideView } from '../../components/GuideView';
import { Screen } from '../../components/ui';
import { GUIDES } from '../../content';
import { useSettings } from '../../state/settings';
import { useEmergencyScreen } from '../../state/emergency';

export default function GuideScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { tr } = useSettings();
  useEmergencyScreen();
  const guide = id ? GUIDES[id] : undefined;
  if (!guide) return <Redirect href="/" />;
  if (guide.zone === 'prep') return <Redirect href={{ pathname: '/proyecto/[id]', params: { id: guide.id } }} />;
  return (
    <Screen>
      <Stack.Screen options={{ title: tr(guide.title) }} />
      <GuideView guide={guide} />
    </Screen>
  );
}
