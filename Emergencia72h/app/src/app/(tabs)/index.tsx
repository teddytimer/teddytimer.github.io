// Pantalla principal. Zona EMERGENCIA: sin anuncios.
import React from 'react';
import { View } from 'react-native';
import { Grid, H1, NavRow, P, QuickAction, Screen, SectionTitle, Tile, ZoneTag } from '../../components/ui';
import { RISKS, SURVIVAL } from '../../content';
import { useSettings } from '../../state/settings';

export default function EmergencyHome() {
  const { t, tr } = useSettings();
  return (
    <Screen inTabs>
      <ZoneTag zone="urgent" />
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <QuickAction href="/linterna" icon="flashlight" label={t('flashlight')} />
        <QuickAction href="/sos" icon="alarm-light" label="SOS" />
        <QuickAction href="/ficha" icon="card-account-details" label={t('myCard')} />
      </View>

      <View style={{ gap: 2, marginTop: 6 }}>
        <H1>{t('nowTitle')}</H1>
        <P soft>{t('nowSubtitle')}</P>
      </View>
      <Grid>
        {RISKS.map((g) => (
          <Tile key={g.id} href={{ pathname: '/guia/[id]', params: { id: g.id } }} icon={g.icon} color={g.color} title={tr(g.title)} />
        ))}
      </Grid>

      <SectionTitle title={t('longTitle')} subtitle={t('longSubtitle')} />
      {SURVIVAL.map((g) => (
        <NavRow key={g.id} href={{ pathname: '/guia/[id]', params: { id: g.id } }} icon={g.icon} color={g.color} title={tr(g.title)} subtitle={tr(g.summary)} />
      ))}
    </Screen>
  );
}
