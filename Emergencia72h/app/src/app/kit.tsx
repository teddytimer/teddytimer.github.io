// Checklist del kit. Zona EN CASA (preparación): puede llevar banner en el futuro.
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { AdSlot } from '../ads';
import { Button, Card, H2, Icon, IconBadge, P, Screen, ZoneTag } from '../components/ui';
import { KIT, KIT_DAYS, KIT_TIPS, WATER_L_PER_PERSON_DAY } from '../content/kit';
import { SOURCES } from '../content/sources';
import { useSettings } from '../state/settings';
import { KEYS, useStored } from '../state/storage';

export default function KitScreen() {
  const { colors, t, tr, lang } = useSettings();
  const [checked, setChecked] = useStored<Record<string, boolean>>(KEYS.kit, {});
  const [review, setReview] = useStored<string | null>(KEYS.kitReview, null);
  const [people, setPeople] = useStored<number>(KEYS.people, 1);

  const all = KIT.flatMap((g) => g.items);
  const done = all.filter((i) => checked[i.id]).length;
  const pct = Math.round((done / all.length) * 100);
  const water = people * WATER_L_PER_PERSON_DAY * KIT_DAYS;
  const fmt = (n: number) => n.toLocaleString(lang === 'es' ? 'es-ES' : 'en-GB', { maximumFractionDigits: 1 });

  return (
    <Screen top={<AdSlot screen="kit" />}>
      <ZoneTag zone="home" />
      <Card>
        <View style={{ flexDirection: 'row', alignItems: 'baseline', justifyContent: 'space-between' }}>
          <Text style={[styles.big, { color: colors.text }]}>{pct}%</Text>
          <Text style={{ color: colors.textSoft, fontSize: 16 }}>
            {done}/{all.length} · {t('progress')}
          </Text>
        </View>
        <View style={[styles.barBg, { backgroundColor: colors.surface2 }]}>
          <View style={[styles.barFill, { width: `${pct}%`, backgroundColor: colors.calm }]} />
        </View>
      </Card>

      <Card>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <IconBadge name="water" color="#4DA3FF" size={40} />
          <H2>{t('waterNeeded')}</H2>
        </View>
        <View style={styles.stepper}>
          <Text style={[styles.label, { color: colors.text }]}>{t('people')}</Text>
          <Button title="" label="−1" icon="minus" onPress={() => setPeople((p) => Math.max(1, p - 1))} style={styles.stepBtn} />
          <Text style={[styles.big, { color: colors.text, minWidth: 36, textAlign: 'center' }]}>{people}</Text>
          <Button title="" label="+1" icon="plus" onPress={() => setPeople((p) => Math.min(20, p + 1))} style={styles.stepBtn} />
        </View>
        <Text style={[styles.big, { color: '#4DA3FF' }]}>
          {fmt(water)} {t('liters')}
        </Text>
        <P soft style={{ fontSize: 13 }}>
          {fmt(WATER_L_PER_PERSON_DAY)} L × {people} × {KIT_DAYS} · {SOURCES.gencat_kit.org}
        </P>
      </Card>

      {KIT.map((g) => (
        <Card key={g.id}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <IconBadge name={g.icon} color={colors.calm} size={40} />
            <H2>{tr(g.title)}</H2>
          </View>
          {g.items.map((item) => {
            const on = !!checked[item.id];
            return (
              <Pressable
                key={item.id}
                onPress={() => setChecked((c) => ({ ...c, [item.id]: !c[item.id] }))}
                accessibilityRole="checkbox"
                accessibilityState={{ checked: on }}
                accessibilityLabel={tr(item.label)}
                style={styles.item}
              >
                <View style={[styles.box, { borderColor: on ? colors.calm : colors.textSoft, backgroundColor: on ? colors.calm : 'transparent' }]}>
                  {on ? <Icon name="check-bold" size={20} color="#06201A" /> : null}
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={[styles.itemText, { color: colors.text, textDecorationLine: on ? 'line-through' : 'none', opacity: on ? 0.65 : 1 }]}>{tr(item.label)}</Text>
                  <Text style={[styles.src, { color: colors.textSoft }]}>{SOURCES[item.src]?.org}</Text>
                </View>
              </Pressable>
            );
          })}
        </Card>
      ))}

      <Card>
        <H2>{t('tips')}</H2>
        {KIT_TIPS.map((tip, i) => (
          <View key={i} style={{ flexDirection: 'row', gap: 10 }}>
            <Icon name="check" size={22} color={colors.calm} />
            <View style={{ flex: 1 }}>
              <P>{tr(tip.text)}</P>
              <Text style={[styles.src, { color: colors.textSoft }]}>{SOURCES[tip.src]?.org}</Text>
            </View>
          </View>
        ))}
        <P soft>
          {t('lastReview')}: {review ? new Date(review).toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-GB') : t('never')}
        </P>
        <Button title={t('reviewedKit')} icon="calendar-check" kind="calm" onPress={() => setReview(new Date().toISOString())} />
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  big: { fontSize: 30, fontWeight: '800' },
  barBg: { height: 12, borderRadius: 6, overflow: 'hidden' },
  barFill: { height: 12, borderRadius: 6 },
  stepper: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  stepBtn: { width: 56, paddingHorizontal: 0 },
  label: { flex: 1, fontSize: 18 },
  item: { flexDirection: 'row', gap: 12, alignItems: 'center', paddingVertical: 6, minHeight: 48 },
  box: { width: 30, height: 30, borderRadius: 9, borderWidth: 2, alignItems: 'center', justifyContent: 'center' },
  itemText: { fontSize: 18, lineHeight: 24 },
  src: { fontSize: 12, marginTop: 2 },
});
