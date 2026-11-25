import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { AdsHost } from '../ads';
import { Logo } from '../components/Logo';
import { Button, Call112Bar } from '../components/ui';
import { SettingsProvider, useSettings } from '../state/settings';

// Aviso inicial: la app no sustituye a los servicios de emergencia.
function Disclaimer() {
  const { colors, t, set } = useSettings();
  return (
    <SafeAreaView style={[StyleSheet.absoluteFill, { backgroundColor: colors.bg }]}>
      <ScrollView contentContainerStyle={{ padding: 24, gap: 18, alignItems: 'center' }}>
        <Logo size={110} />
        <Text style={{ color: colors.text, fontSize: 28, fontWeight: '800', textAlign: 'center' }}>{t('disclaimerTitle')}</Text>
        <Text style={{ color: colors.text, fontSize: 18, lineHeight: 27 }}>{t('disclaimer')}</Text>
        <Button title={t('understood')} kind="calm" onPress={() => set({ accepted: true })} style={{ alignSelf: 'stretch' }} />
        <View style={{ alignSelf: 'stretch' }}>
          <Call112Bar />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function RootStack() {
  const { colors, t, ready, settings } = useSettings();
  if (!ready) return <View style={{ flex: 1, backgroundColor: '#000' }} />;
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: colors.bg },
          headerTintColor: colors.text,
          headerTitleStyle: { fontWeight: '700' },
          headerShadowVisible: false,
          contentStyle: { backgroundColor: colors.bg },
          headerBackTitle: t('back'),
          animation: settings.saver ? 'none' : 'default',
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="kit" options={{ title: t('kit') }} />
        <Stack.Screen name="linterna" options={{ title: t('flashlight') }} />
        <Stack.Screen name="sos" options={{ title: t('sos') }} />
        <Stack.Screen name="ficha" options={{ title: t('myCard') }} />
        <Stack.Screen name="ficha-editar" options={{ title: t('edit') }} />
        <Stack.Screen name="ajustes" options={{ title: t('settings') }} />
        <Stack.Screen name="fuentes" options={{ title: t('sources') }} />
        <Stack.Screen name="aviso" options={{ title: t('about') }} />
      </Stack>
      <AdsHost />
      {!settings.accepted ? <Disclaimer /> : null}
    </>
  );
}

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SettingsProvider>
        <RootStack />
      </SettingsProvider>
    </SafeAreaProvider>
  );
}
