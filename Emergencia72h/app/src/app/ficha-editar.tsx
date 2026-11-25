// Editar "Mi ficha". Sin anuncios: contiene datos médicos.
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Button, Card, H2, P, Screen } from '../components/ui';
import { StringKey } from '../i18n/strings';
import { useSettings } from '../state/settings';
import { EMPTY_CARD, EmergencyCard, KEYS, useStored } from '../state/storage';

const FIELDS: { key: keyof Omit<EmergencyCard, 'contacts'>; label: StringKey; multi?: boolean }[] = [
  { key: 'name', label: 'name' },
  { key: 'blood', label: 'blood' },
  { key: 'allergies', label: 'allergies', multi: true },
  { key: 'conditions', label: 'conditions', multi: true },
  { key: 'meds', label: 'meds', multi: true },
  { key: 'notes', label: 'notes', multi: true },
];

const MAX_CONTACTS = 5;

export default function EditCardScreen() {
  const { colors, t } = useSettings();
  const [stored, save, loaded] = useStored<EmergencyCard>(KEYS.card, EMPTY_CARD);
  const [draft, setDraft] = useState<EmergencyCard>(EMPTY_CARD);

  useEffect(() => {
    if (loaded) setDraft(stored);
  }, [loaded, stored]);

  const input = [styles.input, { color: colors.text, borderColor: colors.border, backgroundColor: colors.bg }];

  const setContact = (i: number, patch: Partial<EmergencyCard['contacts'][number]>) =>
    setDraft((d) => ({ ...d, contacts: d.contacts.map((c, j) => (j === i ? { ...c, ...patch } : c)) }));

  return (
    <Screen>
      <Card>
        {FIELDS.map((f) => (
          <View key={f.key} style={{ gap: 4 }}>
            <Text style={[styles.label, { color: colors.textSoft }]}>{t(f.label)}</Text>
            <TextInput
              value={draft[f.key]}
              onChangeText={(v) => setDraft((d) => ({ ...d, [f.key]: v }))}
              multiline={f.multi}
              style={[input, f.multi && { minHeight: 70, textAlignVertical: 'top' }]}
              placeholderTextColor={colors.textSoft}
              accessibilityLabel={t(f.label)}
            />
          </View>
        ))}
      </Card>

      <Card>
        <H2>{t('contacts')}</H2>
        {draft.contacts.map((c, i) => (
          <View key={i} style={{ gap: 6, paddingBottom: 8 }}>
            <TextInput value={c.name} onChangeText={(v) => setContact(i, { name: v })} placeholder={t('contactName')} placeholderTextColor={colors.textSoft} style={input} />
            <TextInput
              value={c.phone}
              onChangeText={(v) => setContact(i, { phone: v })}
              placeholder={t('contactPhone')}
              placeholderTextColor={colors.textSoft}
              keyboardType="phone-pad"
              style={input}
            />
            <Button title={t('remove')} onPress={() => setDraft((d) => ({ ...d, contacts: d.contacts.filter((_, j) => j !== i) }))} />
          </View>
        ))}
        {draft.contacts.length < MAX_CONTACTS ? (
          <Button icon="plus" title={t('addContact')} onPress={() => setDraft((d) => ({ ...d, contacts: [...d.contacts, { name: '', phone: '' }] }))} />
        ) : null}
      </Card>

      <Button
        icon="content-save" title={t('save')}
        kind="calm"
        onPress={() => {
          save({ ...draft, contacts: draft.contacts.filter((c) => c.name.trim() || c.phone.trim()) });
          router.back();
        }}
      />
      <Button title={t('cancel')} onPress={() => router.back()} />
      <P soft>{t('cardPrivacy')}</P>
    </Screen>
  );
}

const styles = StyleSheet.create({
  label: { fontSize: 14, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 0.5 },
  input: { borderWidth: 1, borderRadius: 12, paddingHorizontal: 12, paddingVertical: 10, fontSize: 18 },
});
