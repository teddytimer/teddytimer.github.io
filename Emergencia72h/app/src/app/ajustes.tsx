// Ajustes. Zona PREPARACIÓN: puede llevar banner en el futuro.
import React from 'react';
import { Alert, StyleSheet, Switch, Text, View } from 'react-native';
import { AdSlot, useAdsPrivacy } from '../ads';
import { Button, Card, H2, P, Screen } from '../components/ui';
import { useSettings } from '../state/settings';
import { clearUserData } from '../state/storage';

export default function SettingsScreen() {
  const { colors, t, settings, set } = useSettings();
  const adsPrivacy = useAdsPrivacy();
  const langs: { v: 'system' | 'es' | 'en'; label: string }[] = [
    { v: 'system', label: t('langSystem') },
    { v: 'es', label: 'Español' },
    { v: 'en', label: 'English' },
  ];

  return (
    <Screen top={<AdSlot screen="ajustes" />}>
      <Card>
        <H2>{t('language')}</H2>
        <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
          {langs.map((l) => (
            <Button key={l.v} title={l.label} kind={settings.lang === l.v ? 'calm' : 'normal'} onPress={() => set({ lang: l.v })} />
          ))}
        </View>
      </Card>

      <Card style={styles.row}>
        <View style={{ flex: 1 }}>
          <Text style={[styles.title, { color: colors.text }]}>{t('batterySaver')}</Text>
          <P soft>{t('batterySaverDesc')}</P>
        </View>
        <Switch value={settings.saver} onValueChange={(v) => set({ saver: v })} accessibilityLabel={t('batterySaver')} />
      </Card>

      {adsPrivacy.required ? <Button icon="shield-account" title={t('adsPrivacy')} onPress={adsPrivacy.open} /> : null}
      <Button
        icon="delete-outline" title={t('resetAll')}
        onPress={() =>
          Alert.alert(t('resetAll'), t('resetConfirm'), [
            { text: t('cancel'), style: 'cancel' },
            { text: t('yesDelete'), style: 'destructive', onPress: () => clearUserData() },
          ])
        }
      />
      <P soft>{t('offline')} · v1.0.0</P>
    </Screen>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  title: { fontSize: 20, fontWeight: '700' },
});
