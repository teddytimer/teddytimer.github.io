// Zona EN CASA (proyectos educativos): aquí podrá ir un banner en el futuro.
import { router } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { AdSlot } from '../../ads';
import { Card, H1, H2, Icon, P, Screen, ZoneTag } from '../../components/ui';
import { PROJECTS } from '../../content';
import { PROJECT_RULES } from '../../content/projects';
import { Figure } from '../../figures';
import { useSettings } from '../../state/settings';
import { radius } from '../../theme';

export default function ProjectsScreen() {
  const { t, tr, colors } = useSettings();
  return (
    <Screen inTabs top={<AdSlot screen="proyectos" />}>
      <ZoneTag zone="home" />
      <H1>{t('projectsTitle')}</H1>
      <P soft>{t('projectsSubtitle')}</P>

      <Card style={{ borderColor: colors.calm }}>
        <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
          <Icon name="shield-check" size={22} color={colors.calm} />
          <H2>{t('beforeStart')}</H2>
        </View>
        <P>{tr(PROJECT_RULES)}</P>
      </Card>

      {PROJECTS.map((g) => (
        <Pressable
          key={g.id}
          onPress={() => router.push({ pathname: '/proyecto/[id]', params: { id: g.id } })}
          accessibilityRole="button"
          accessibilityLabel={`${tr(g.title)}. ${tr(g.summary)}`}
          style={({ pressed }) => [styles.card, { backgroundColor: colors.surface, borderColor: colors.border, opacity: pressed ? 0.8 : 1 }]}
        >
          {g.cover ? <Figure name={g.cover} /> : null}
          <View style={styles.cardBody}>
            <View style={{ flex: 1 }}>
              <Text style={[styles.title, { color: colors.text }]}>{tr(g.title)}</Text>
              <Text style={[styles.sub, { color: colors.textSoft }]}>{tr(g.summary)}</Text>
            </View>
            <Icon name="chevron-right" size={28} color={colors.textSoft} />
          </View>
        </Pressable>
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: { borderRadius: radius, borderWidth: 1, overflow: 'hidden' },
  cardBody: { flexDirection: 'row', alignItems: 'center', gap: 10, padding: 14 },
  title: { fontSize: 20, fontWeight: '800' },
  sub: { fontSize: 15, marginTop: 2 },
});
