// Cuatro pestañas en dos zonas:
//   EMERGENCIA (rojo): Emergencia · Auxilios
//   EN CASA (verde azulado): Preparar · Proyectos
import { router } from 'expo-router';
import Tabs from 'expo-router/js-tabs';
import React from 'react';
import { Pressable } from 'react-native';
import { Icon } from '../../components/ui';
import type { IconName } from '../../content/types';
import { useSettings } from '../../state/settings';

const tabIcon = (name: IconName) =>
  function TabIcon({ color }: { color: unknown }) {
    return <Icon name={name} size={26} color={String(color)} />;
  };

function SettingsButton() {
  const { t, colors } = useSettings();
  return (
    <Pressable onPress={() => router.push('/ajustes')} accessibilityRole="button" accessibilityLabel={t('settings')} hitSlop={12} style={{ paddingHorizontal: 16 }}>
      <Icon name="cog" size={24} color={colors.textSoft} />
    </Pressable>
  );
}

export default function TabsLayout() {
  const { colors, t, settings } = useSettings();
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: colors.bg },
        headerTintColor: colors.text,
        headerTitleStyle: { fontWeight: '800' },
        headerShadowVisible: false,
        headerRight: () => <SettingsButton />,
        tabBarStyle: { backgroundColor: colors.surface, borderTopColor: colors.border },
        tabBarInactiveTintColor: colors.textSoft,
        tabBarLabelStyle: { fontSize: 12, fontWeight: '700' },
        sceneStyle: { backgroundColor: colors.bg },
        animation: settings.saver ? 'none' : 'shift',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ title: t('tabEmergency'), headerTitle: t('appName'), tabBarActiveTintColor: colors.urgent, tabBarIcon: tabIcon('alarm-light') }}
      />
      <Tabs.Screen name="auxilios" options={{ title: t('tabAid'), tabBarActiveTintColor: colors.urgent, tabBarIcon: tabIcon('medical-bag') }} />
      <Tabs.Screen name="preparar" options={{ title: t('tabPrep'), tabBarActiveTintColor: colors.calm, tabBarIcon: tabIcon('bag-personal') }} />
      <Tabs.Screen name="proyectos" options={{ title: t('tabProjects'), tabBarActiveTintColor: colors.calm, tabBarIcon: tabIcon('flask') }} />
    </Tabs>
  );
}
