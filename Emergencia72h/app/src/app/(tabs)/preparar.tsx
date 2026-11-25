// Zona EN CASA (preparación): aquí podrá ir un banner en el futuro.
import React from 'react';
import { AdSlot } from '../../ads';
import { SupportVideoCard } from '../../ads/SupportVideoCard';
import { H1, NavRow, P, Screen, ZoneTag } from '../../components/ui';
import { useSettings } from '../../state/settings';

export default function PrepareScreen() {
  const { t, colors } = useSettings();
  return (
    <Screen inTabs top={<AdSlot screen="preparar" />}>
      <ZoneTag zone="home" />
      <H1>{t('prepTitle')}</H1>
      <P soft>{t('prepSubtitle')}</P>
      <NavRow href="/kit" icon="bag-personal" color={colors.calm} title={t('kit')} subtitle={t('kitDesc')} />
      <NavRow href="/ficha-editar" icon="card-account-details" color={colors.calm} title={t('myCard')} subtitle={t('myCardDesc')} />
      <NavRow href="/fuentes" icon="book-open-variant" color="#A98BFF" title={t('sources')} subtitle={t('sourcesDesc')} />
      <NavRow href="/aviso" icon="information" color="#FFC53D" title={t('about')} />
      <NavRow href="/ajustes" icon="cog" color="#A3ACBA" title={t('settings')} />
      <SupportVideoCard />
    </Screen>
  );
}
