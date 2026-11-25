// Muestra una guía: cabecera, aviso, secciones con ilustración y pasos numerados, y sus fuentes.
import React from 'react';
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { REVIEWED, SOURCES } from '../content/sources';
import { Guide } from '../content/types';
import { Figure } from '../figures';
import { useSettings } from '../state/settings';
import { font } from '../theme';
import { Card, H1, H2, IconBadge, P, Warning, ZoneTag } from './ui';

export function GuideView({ guide }: { guide: Guide }) {
  const { colors, tr, t } = useSettings();

  // Fuentes en el orden en que aparecen; cada una con su número.
  const order: string[] = [];
  guide.sections.forEach((s) => s.steps.forEach((st) => !order.includes(st.src) && order.push(st.src)));
  const num = (id: string) => order.indexOf(id) + 1;

  return (
    <View style={{ gap: 12 }}>
      <ZoneTag zone={guide.zone === 'prep' ? 'home' : 'urgent'} />
      <View style={styles.head}>
        <IconBadge name={guide.icon} color={guide.color} size={54} />
        <View style={{ flex: 1 }}>
          <H1>{tr(guide.title)}</H1>
        </View>
      </View>
      {guide.warning ? <Warning>{tr(guide.warning)}</Warning> : null}

      {guide.sections.map((s, i) => (
        <Card key={i}>
          <H2>{tr(s.title)}</H2>
          {s.figure ? <Figure name={s.figure} /> : null}
          {s.steps.map((step, j) => (
            <View key={j} style={styles.step}>
              <View style={[styles.bullet, { backgroundColor: step.strong ? guide.color : colors.surface2 }]}>
                <Text style={[styles.bulletText, { color: step.strong ? '#0F1217' : colors.text }]}>{j + 1}</Text>
              </View>
              <Text style={[styles.stepText, { color: colors.text, fontWeight: step.strong ? '700' : '400' }]}>
                {tr(step.text)}
                <Text style={{ color: colors.textSoft, fontSize: 13, fontWeight: '400' }}> [{num(step.src)}]</Text>
              </Text>
            </View>
          ))}
        </Card>
      ))}

      <Card>
        <Text style={[styles.srcTitle, { color: colors.textSoft }]}>{t('sourcesUsed')}</Text>
        {order.map((id) => {
          const s = SOURCES[id];
          if (!s) return null;
          return (
            <Pressable key={id} onPress={() => Linking.openURL(s.url).catch(() => {})} accessibilityRole="link" accessibilityHint={t('openLink')}>
              <Text style={[styles.src, { color: colors.textSoft }]}>
                [{num(id)}] {s.org}. «{s.title}».
              </Text>
            </Pressable>
          );
        })}
        <P soft style={{ fontSize: 13 }}>
          {t('reviewed')}: {REVIEWED}
        </P>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  head: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  step: { flexDirection: 'row', gap: 12, alignItems: 'flex-start' },
  bullet: { width: 30, height: 30, borderRadius: 15, alignItems: 'center', justifyContent: 'center', marginTop: 1 },
  bulletText: { fontWeight: '800', fontSize: 15 },
  stepText: { flex: 1, fontSize: font.body, lineHeight: 26 },
  srcTitle: { fontSize: font.small, fontWeight: '700' },
  src: { fontSize: 13, lineHeight: 19, textDecorationLine: 'underline' },
});
