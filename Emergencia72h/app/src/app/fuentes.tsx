// Lista de todas las fuentes. Zona PREPARACIÓN: puede llevar banner en el futuro.
import React from 'react';
import { Linking, Pressable, Text } from 'react-native';
import { AdSlot } from '../ads';
import { Card, P, Screen } from '../components/ui';
import { REVIEWED, SOURCES } from '../content/sources';
import { useSettings } from '../state/settings';

export default function SourcesScreen() {
  const { colors, t } = useSettings();
  const byOrg = Object.values(SOURCES).reduce<Record<string, typeof SOURCES[string][]>>((acc, s) => {
    (acc[s.org] ||= []).push(s);
    return acc;
  }, {});

  return (
    <Screen top={<AdSlot screen="fuentes" />}>
      <P soft>
        {t('reviewed')}: {REVIEWED} · {t('openLink')}
      </P>
      <P soft>{t('notAffiliated')}</P>
      {Object.entries(byOrg).map(([org, list]) => (
        <Card key={org}>
          <Text style={{ color: colors.text, fontSize: 17, fontWeight: '800' }}>{org}</Text>
          {list.map((s) => (
            <Pressable key={s.id} onPress={() => Linking.openURL(s.url).catch(() => {})} accessibilityRole="link">
              <Text style={{ color: colors.textSoft, fontSize: 15, lineHeight: 21, textDecorationLine: 'underline' }}>{s.title}</Text>
            </Pressable>
          ))}
        </Card>
      ))}
    </Screen>
  );
}
