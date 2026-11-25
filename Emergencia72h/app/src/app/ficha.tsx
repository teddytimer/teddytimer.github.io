// Ver "Mi ficha" (datos médicos y contactos). Zona EMERGENCIA: sin anuncios.
import { router } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Card, H2, Icon, P, Screen, callNumber } from '../components/ui';
import { useSettings } from '../state/settings';
import { EMPTY_CARD, EmergencyCard, KEYS, useStored } from '../state/storage';
import { StringKey } from '../i18n/strings';
import { useEmergencyScreen } from '../state/emergency';

const FIELDS: { key: keyof Omit<EmergencyCard, 'contacts'>; label: StringKey }[] = [
  { key: 'name', label: 'name' },
  { key: 'blood', label: 'blood' },
  { key: 'allergies', label: 'allergies' },
  { key: 'conditions', label: 'conditions' },
  { key: 'meds', label: 'meds' },
  { key: 'notes', label: 'notes' },
];

export default function CardScreen() {
  const { colors, t } = useSettings();
  useEmergencyScreen();
  const [card, , loaded] = useStored<EmergencyCard>(KEYS.card, EMPTY_CARD);
  const empty = loaded && FIELDS.every((f) => !card[f.key]) && card.contacts.length === 0;

  return (
    <Screen>
      {empty ? (
        <Card style={{ alignItems: 'center', gap: 12 }}>
          <Icon name="card-account-details-outline" size={64} color={colors.textSoft} />
          <P>{t('cardEmpty')}</P>
        </Card>
      ) : (
        <Card>
          {FIELDS.filter((f) => card[f.key]).map((f) => (
            <View key={f.key} style={styles.field}>
              <Text style={[styles.label, { color: colors.textSoft }]}>{t(f.label)}</Text>
              <Text style={[styles.value, { color: colors.text }]}>{card[f.key]}</Text>
            </View>
          ))}
        </Card>
      )}

      {card.contacts.length > 0 ? (
        <Card>
          <H2>{t('contacts')}</H2>
          {card.contacts.map((c, i) => (
            <View key={i} style={styles.contact}>
              <View style={{ flex: 1 }}>
                <Text style={[styles.value, { color: colors.text }]}>{c.name}</Text>
                <Text style={[styles.label, { color: colors.textSoft }]}>{c.phone}</Text>
              </View>
              <Button title={t('call')} kind="calm" onPress={() => callNumber(c.phone)} />
            </View>
          ))}
        </Card>
      ) : null}

      <Button title={t('edit')} icon="pencil" onPress={() => router.push('/ficha-editar')} />
      <P soft>{t('cardPrivacy')}</P>
      <P soft>{t('cardIosTip')}</P>
    </Screen>
  );
}

const styles = StyleSheet.create({
  field: { gap: 2, paddingVertical: 4 },
  label: { fontSize: 14, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 0.5 },
  value: { fontSize: 22, fontWeight: '700', lineHeight: 28 },
  contact: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 6 },
});
