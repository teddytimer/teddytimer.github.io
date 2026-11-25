// Aviso: la app no sustituye a los servicios de emergencia. Sin anuncios.
import React from 'react';
import { Logo } from '../components/Logo';
import { Card, P, Screen } from '../components/ui';
import { useSettings } from '../state/settings';

export default function NoticeScreen() {
  const { t } = useSettings();
  return (
    <Screen>
      <Card style={{ alignItems: 'center' }}>
        <Logo size={96} />
      </Card>
      <P>{t('disclaimer')}</P>
    </Screen>
  );
}
