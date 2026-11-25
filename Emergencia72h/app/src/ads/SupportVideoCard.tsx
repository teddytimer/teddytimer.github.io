// Tarjeta "Apoya la app": vídeo voluntario. Solo aparece si hay anuncios activos y un vídeo cargado.
// No desbloquea nada: todo el contenido de la app es y seguirá siendo gratis.
import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Card, H2, Icon, P } from '../components/ui';
import { useSettings } from '../state/settings';
import { useSupportVideo } from './index';

export function SupportVideoCard() {
  const { t, colors } = useSettings();
  const { available, show } = useSupportVideo();
  const [thanks, setThanks] = useState(false);
  if (!available && !thanks) return null;
  return (
    <Card>
      <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
        <Icon name="heart" size={22} color={colors.calm} />
        <H2>{t('supportTitle')}</H2>
      </View>
      {thanks ? (
        <P>{t('supportThanks')}</P>
      ) : (
        <>
          <P soft>{t('supportDesc')}</P>
          <Button title={t('supportButton')} icon="play-circle" onPress={() => show((earned) => earned && setThanks(true))} />
        </>
      )}
    </Card>
  );
}
