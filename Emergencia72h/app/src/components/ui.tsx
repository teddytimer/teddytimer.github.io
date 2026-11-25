// Piezas de interfaz comunes: pantalla con botón 112, tarjetas, filas, mosaicos y textos.
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Href, router } from 'expo-router';
import React, { useState } from 'react';
import { Linking, Modal, Pressable, ScrollView, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { IconName } from '../content/types';
import { markCalled112 } from '../state/emergency';
import { useSettings } from '../state/settings';
import { font, radius } from '../theme';

// Llama de verdad. Solo se usa DESPUÉS de que la persona confirme.
// En iPhone, iOS marca los números de emergencia sin pedir confirmación propia,
// así que la confirmación la pone la app (Confirm112).
function dial112() {
  markCalled112(); // a partir de aquí, ningún anuncio en esta sesión
  Linking.openURL('tel:112').catch(() => {});
}

export function callNumber(phone: string) {
  const clean = phone.replace(/[^\d+]/g, '');
  if (clean) Linking.openURL(`tel:${clean}`).catch(() => {});
}

export function Icon({ name, size = 24, color }: { name: IconName; size?: number; color: string }) {
  return <MaterialCommunityIcons name={name} size={size} color={color} />;
}

// Ventana de confirmación: "Sí, llamar al 112" / "Cancelar".
// El botón de llamar va abajo, grande y lejos de "Cancelar" para no fallar con prisa.
function Confirm112({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  const { colors, t, settings } = useSettings();
  return (
    <Modal visible={visible} transparent animationType={settings.saver ? 'none' : 'fade'} onRequestClose={onClose}>
      <View style={styles.backdrop}>
        <View style={[styles.sheet, { backgroundColor: colors.surface, borderColor: colors.border }]} accessibilityViewIsModal>
          <View style={[styles.sheetIcon, { backgroundColor: colors.urgentSoft }]}>
            <Icon name="phone-alert" size={34} color={colors.urgent} />
          </View>
          <Text style={[styles.sheetTitle, { color: colors.text }]} accessibilityRole="header">
            {t('confirm112Title')}
          </Text>
          <Text style={[styles.sheetText, { color: colors.textSoft }]}>{t('confirm112Tip')}</Text>
          <Pressable
            onPress={onClose}
            accessibilityRole="button"
            accessibilityLabel={t('cancel')}
            style={({ pressed }) => [styles.sheetCancel, { borderColor: colors.border, opacity: pressed ? 0.8 : 1 }]}
          >
            <Text style={[styles.sheetCancelText, { color: colors.text }]}>{t('cancel')}</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              onClose();
              dial112();
            }}
            accessibilityRole="button"
            accessibilityLabel={t('confirm112Yes')}
            style={({ pressed }) => [styles.call, styles.sheetCall, { backgroundColor: colors.urgent, opacity: pressed ? 0.85 : 1 }]}
          >
            <Icon name="phone" size={26} color={colors.onAccent} />
            <Text style={[styles.callText, { color: colors.onAccent }]}>{t('confirm112Yes')}</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

// Botón rojo fijo. Está en TODAS las pantallas. Pide confirmación antes de llamar.
export function Call112Bar() {
  const { colors, t } = useSettings();
  const [asking, setAsking] = useState(false);
  return (
    <>
      <Pressable
        onPress={() => setAsking(true)}
        accessibilityRole="button"
        accessibilityLabel={t('call112')}
        accessibilityHint={t('call112Hint')}
        style={({ pressed }) => [styles.call, { backgroundColor: colors.urgent, opacity: pressed ? 0.85 : 1 }]}
      >
        <Icon name="phone" size={24} color={colors.onAccent} />
        <Text style={[styles.callText, { color: colors.onAccent }]}>{t('call112')}</Text>
      </Pressable>
      <Confirm112 visible={asking} onClose={() => setAsking(false)} />
    </>
  );
}

// Contenedor de pantalla: fondo, scroll y barra 112 abajo.
// inTabs: la barra de pestañas ya deja el hueco de abajo; en el resto añadimos la zona segura.
// top: zona fija arriba (banner de anuncio en la zona EN CASA).
export function Screen({ children, scroll = true, footer, top, inTabs = false }: { children: React.ReactNode; scroll?: boolean; footer?: React.ReactNode; top?: React.ReactNode; inTabs?: boolean }) {
  const { colors } = useSettings();
  const insets = useSafeAreaInsets();
  const body = scroll ? (
    <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
      {children}
    </ScrollView>
  ) : (
    <View style={[styles.content, { flex: 1 }]}>{children}</View>
  );
  return (
    <View style={{ flex: 1, backgroundColor: colors.bg }}>
      {top}
      {body}
      <View style={[styles.footer, { backgroundColor: colors.bg, borderTopColor: colors.border, paddingBottom: 8 + (inTabs ? 0 : insets.bottom) }]}>
        {footer}
        <Call112Bar />
      </View>
    </View>
  );
}

// Etiqueta de zona: EMERGENCIA (rojo) o EN CASA (verde azulado).
export function ZoneTag({ zone }: { zone: 'urgent' | 'home' }) {
  const { colors, t } = useSettings();
  const c = zone === 'urgent' ? colors.urgent : colors.calm;
  const bg = zone === 'urgent' ? colors.urgentSoft : colors.calmSoft;
  return (
    <View style={[styles.zone, { backgroundColor: bg }]}>
      <View style={[styles.zoneDot, { backgroundColor: c }]} />
      <Text style={[styles.zoneText, { color: c }]}>{zone === 'urgent' ? t('zoneUrgent') : t('zoneHome')}</Text>
    </View>
  );
}

export function H1({ children }: { children: React.ReactNode }) {
  const { colors } = useSettings();
  return (
    <Text style={[styles.h1, { color: colors.text }]} accessibilityRole="header">
      {children}
    </Text>
  );
}
export function H2({ children }: { children: React.ReactNode }) {
  const { colors } = useSettings();
  return (
    <Text style={[styles.h2, { color: colors.text }]} accessibilityRole="header">
      {children}
    </Text>
  );
}
export function P({ children, soft, style }: { children: React.ReactNode; soft?: boolean; style?: object }) {
  const { colors } = useSettings();
  return <Text style={[styles.p, { color: soft ? colors.textSoft : colors.text }, style]}>{children}</Text>;
}

export function Card({ children, style }: { children: React.ReactNode; style?: ViewStyle }) {
  const { colors } = useSettings();
  return <View style={[styles.card, { backgroundColor: colors.surface, borderColor: colors.border }, style]}>{children}</View>;
}

// Icono dentro de un cuadrado de color.
export function IconBadge({ name, color, size = 46 }: { name: IconName; color: string; size?: number }) {
  return (
    <View style={{ width: size, height: size, borderRadius: size * 0.3, backgroundColor: color + '26', alignItems: 'center', justifyContent: 'center' }}>
      <Icon name={name} size={size * 0.56} color={color} />
    </View>
  );
}

// Fila grande y tocable que lleva a otra pantalla.
export function NavRow({ href, icon, color, title, subtitle }: { href: Href; icon: IconName; color: string; title: string; subtitle?: string }) {
  const { colors } = useSettings();
  return (
    <Pressable
      onPress={() => router.push(href)}
      accessibilityRole="button"
      accessibilityLabel={subtitle ? `${title}. ${subtitle}` : title}
      style={({ pressed }) => [styles.row, { backgroundColor: colors.surface, borderColor: colors.border, opacity: pressed ? 0.75 : 1 }]}
    >
      <IconBadge name={icon} color={color} />
      <View style={{ flex: 1 }}>
        <Text style={[styles.rowTitle, { color: colors.text }]}>{title}</Text>
        {subtitle ? <Text style={[styles.rowSub, { color: colors.textSoft }]}>{subtitle}</Text> : null}
      </View>
      <Icon name="chevron-right" size={26} color={colors.textSoft} />
    </Pressable>
  );
}

// Mosaico cuadrado para la cuadrícula de situaciones.
export function Tile({ href, icon, color, title }: { href: Href; icon: IconName; color: string; title: string }) {
  const { colors } = useSettings();
  return (
    <Pressable
      onPress={() => router.push(href)}
      accessibilityRole="button"
      accessibilityLabel={title}
      style={({ pressed }) => [styles.tile, { backgroundColor: colors.surface, borderColor: colors.border, opacity: pressed ? 0.75 : 1 }]}
    >
      <View style={[styles.tileBar, { backgroundColor: color }]} />
      <IconBadge name={icon} color={color} size={50} />
      <Text style={[styles.tileTitle, { color: colors.text }]} numberOfLines={2}>
        {title}
      </Text>
    </Pressable>
  );
}

export function Grid({ children }: { children: React.ReactNode }) {
  return <View style={styles.grid}>{children}</View>;
}

// Botón de acceso rápido (linterna, SOS, ficha).
export function QuickAction({ href, icon, label }: { href: Href; icon: IconName; label: string }) {
  const { colors } = useSettings();
  return (
    <Pressable
      onPress={() => router.push(href)}
      accessibilityRole="button"
      accessibilityLabel={label}
      style={({ pressed }) => [styles.quick, { backgroundColor: colors.surface2, borderColor: colors.border, opacity: pressed ? 0.75 : 1 }]}
    >
      <Icon name={icon} size={30} color={colors.text} />
      <Text style={[styles.quickText, { color: colors.text }]} numberOfLines={1}>
        {label}
      </Text>
    </Pressable>
  );
}

export function Button({ title, onPress, kind = 'normal', icon, style, label }: { title: string; onPress: () => void; kind?: 'normal' | 'calm' | 'urgent'; icon?: IconName; style?: ViewStyle; label?: string }) {
  const { colors } = useSettings();
  const bg = kind === 'calm' ? colors.calm : kind === 'urgent' ? colors.urgent : colors.surface2;
  const fg = kind === 'normal' ? colors.text : kind === 'calm' ? '#06201A' : colors.onAccent;
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label ?? title}
      style={({ pressed }) => [styles.btn, { backgroundColor: bg, borderColor: colors.border, opacity: pressed ? 0.85 : 1 }, style]}
    >
      {icon ? <Icon name={icon} size={22} color={fg} /> : null}
      {title ? <Text style={[styles.btnText, { color: fg }]}>{title}</Text> : null}
    </Pressable>
  );
}

export function Warning({ children }: { children: React.ReactNode }) {
  const { colors } = useSettings();
  return (
    <View style={[styles.warn, { backgroundColor: colors.warnBg }]}>
      <Icon name="alert" size={24} color={colors.warnText} />
      <Text style={[styles.warnText, { color: colors.warnText }]}>{children}</Text>
    </View>
  );
}

export function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  const { colors } = useSettings();
  return (
    <View style={{ marginTop: 10, gap: 2 }}>
      <Text style={[styles.secTitle, { color: colors.text }]} accessibilityRole="header">
        {title}
      </Text>
      {subtitle ? <Text style={{ color: colors.textSoft, fontSize: font.small + 1 }}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  content: { padding: 16, paddingBottom: 24, gap: 12 },
  footer: { paddingHorizontal: 12, paddingTop: 8, borderTopWidth: StyleSheet.hairlineWidth, gap: 8 },
  call: { minHeight: 56, borderRadius: radius, flexDirection: 'row', gap: 10, alignItems: 'center', justifyContent: 'center' },
  callText: { fontSize: 21, fontWeight: '800', letterSpacing: 0.3 },
  backdrop: { flex: 1, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'flex-end', padding: 12 },
  sheet: { borderRadius: 24, borderWidth: 1, padding: 20, gap: 14, alignItems: 'stretch', marginBottom: 12 },
  sheetIcon: { width: 64, height: 64, borderRadius: 32, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' },
  sheetTitle: { fontSize: 26, fontWeight: '800', textAlign: 'center' },
  sheetText: { fontSize: 17, lineHeight: 24, textAlign: 'center' },
  sheetCancel: { minHeight: 52, borderRadius: radius, borderWidth: 1, alignItems: 'center', justifyContent: 'center' },
  sheetCancelText: { fontSize: 18, fontWeight: '700' },
  sheetCall: { minHeight: 68, marginTop: 6 },
  zone: { flexDirection: 'row', alignItems: 'center', gap: 6, alignSelf: 'flex-start', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 999 },
  zoneDot: { width: 8, height: 8, borderRadius: 4 },
  zoneText: { fontSize: 12, fontWeight: '800', letterSpacing: 1 },
  h1: { fontSize: font.h1, fontWeight: '800' },
  h2: { fontSize: font.h2, fontWeight: '700' },
  p: { fontSize: font.body, lineHeight: 26 },
  secTitle: { fontSize: 20, fontWeight: '800' },
  card: { borderRadius: radius, borderWidth: 1, padding: 14, gap: 10 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 14, borderRadius: radius, borderWidth: 1, padding: 14, minHeight: 74 },
  rowTitle: { fontSize: 19, fontWeight: '700' },
  rowSub: { fontSize: font.small + 1, marginTop: 2 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  tile: { width: '48.4%', minHeight: 120, borderRadius: radius, borderWidth: 1, padding: 14, gap: 10, overflow: 'hidden', justifyContent: 'space-between' },
  tileBar: { position: 'absolute', left: 0, top: 0, bottom: 0, width: 4 },
  tileTitle: { fontSize: 18, fontWeight: '800', lineHeight: 22 },
  quick: { flex: 1, minHeight: 84, borderRadius: radius, borderWidth: 1, alignItems: 'center', justifyContent: 'center', gap: 6, paddingHorizontal: 4 },
  quickText: { fontSize: 15, fontWeight: '700' },
  btn: { minHeight: 52, borderRadius: 14, borderWidth: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 16, flexDirection: 'row', gap: 8 },
  btnText: { fontSize: 18, fontWeight: '700' },
  warn: { borderRadius: 14, padding: 14, flexDirection: 'row', gap: 10, alignItems: 'flex-start' },
  warnText: { flex: 1, fontSize: font.body, fontWeight: '700', lineHeight: 25 },
});
