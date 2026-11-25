// Zona EMERGENCIA: sin anuncios.
import React from 'react';
import { H1, NavRow, P, Screen, ZoneTag } from '../../components/ui';
import { FIRST_AID } from '../../content';
import { useSettings } from '../../state/settings';

export default function AidScreen() {
  const { t, tr } = useSettings();
  return (
    <Screen inTabs>
      <ZoneTag zone="urgent" />
      <H1>{t('aidTitle')}</H1>
      <P soft>{t('aidSubtitle')}</P>
      {FIRST_AID.map((g) => (
        <NavRow key={g.id} href={{ pathname: '/guia/[id]', params: { id: g.id } }} icon={g.icon} color={g.color} title={tr(g.title)} subtitle={tr(g.summary)} />
      ))}
    </Screen>
  );
}
