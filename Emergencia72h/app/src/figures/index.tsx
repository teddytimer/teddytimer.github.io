// Registro de ilustraciones. Se dibujan con SVG: funcionan sin internet,
// pesan muy poco y se adaptan a cualquier pantalla.
import React from 'react';
import { View } from 'react-native';
import Svg from 'react-native-svg';
import { useSettings } from '../state/settings';
import { Bleeding, Choking, Cpr, Flood, Gas, HeatHome, Outage, Quake, Recovery, Smoke, Tx, WaterSafe } from './emergency';
import { Compass, FilterDemo, MotorLed, PotatoBattery, SolarOven } from './projects';

const FIGURES = {
  outage: { C: Outage, alt: ['Nevera cerrada, aparato desenchufado y una bombilla encendida', 'Closed fridge, unplugged appliance and one bulb on'] },
  flood: { C: Flood, alt: ['No cruzar el agua; subir a la parte más alta de la casa', 'Do not cross water; go to the highest part of the house'] },
  heatHome: { C: HeatHome, alt: ['De día persianas bajadas; de noche ventanas abiertas', 'Blinds down by day; windows open at night'] },
  smoke: { C: Smoke, alt: ['Persona avanzando a gatas por debajo del humo hacia la puerta', 'Person crawling under the smoke towards the door'] },
  quake: { C: Quake, alt: ['Persona agachada bajo una mesa protegiéndose la cabeza', 'Person crouched under a table protecting their head'] },
  gas: { C: Gas, alt: ['No tocar interruptores, ventilar y llamar al 112 desde fuera', 'Do not touch switches, air the room and call 112 from outside'] },
  water: { C: WaterSafe, alt: ['Filtrar con un paño, hervir un minuto o desinfectar con 2 gotas de lejía por litro y esperar 30 minutos', 'Filter through cloth, boil one minute or disinfect with 2 drops of bleach per litre and wait 30 minutes'] },
  cpr: { C: Cpr, alt: ['RCP: manos en el centro del pecho, brazos rectos, 100 a 120 compresiones por minuto hundiendo 5 a 6 cm, 30 compresiones y 2 insuflaciones', 'CPR: hands on centre of chest, arms straight, 100 to 120 compressions per minute 5 to 6 cm deep, 30 compressions and 2 breaths'] },
  recovery: { C: Recovery, alt: ['Persona tumbada de lado en posición lateral de seguridad', 'Person lying on their side in the recovery position'] },
  bleeding: { C: Bleeding, alt: ['Mano apretando un paño sobre una herida del brazo durante 10 minutos', 'Hand pressing a cloth on an arm wound for 10 minutes'] },
  choking: { C: Choking, alt: ['5 palmadas en la espalda y 5 compresiones encima del ombligo', '5 back blows and 5 thrusts above the belly button'] },
  potato: { C: PotatoBattery, alt: ['Tres patatas con moneda y clavo conectadas en serie a un LED encendido', 'Three potatoes with coin and nail connected in series to a lit LED'] },
  motor: { C: MotorLed, alt: ['Motor pequeño con el eje girando y conectado a un LED encendido', 'Small motor with spinning shaft connected to a lit LED'] },
  compass: { C: Compass, alt: ['Imán frotando una aguja en un sentido; aguja flotando en agua señalando norte y sur', 'Magnet rubbing a needle one way; needle floating on water pointing north and south'] },
  solarOven: { C: SolarOven, alt: ['Caja de pizza con solapa de aluminio que refleja el sol hacia dentro', 'Pizza box with a foil flap reflecting sunlight inside'] },
  filterDemo: { C: FilterDemo, alt: ['Botella boca abajo con capas de grava, arena, carbón y tela filtrando agua turbia', 'Upside-down bottle with layers of gravel, sand, charcoal and cloth filtering muddy water'] },
} satisfies Record<string, { C: React.ComponentType<{ tx: Tx }>; alt: [string, string] }>;

export type FigureName = keyof typeof FIGURES;

export function Figure({ name, height }: { name: FigureName; height?: number }) {
  const { lang } = useSettings();
  const f = FIGURES[name];
  const tx: Tx = (es, en) => (lang === 'es' ? es : en);
  const Comp = f.C;
  return (
    <View
      accessible
      accessibilityRole="image"
      accessibilityLabel={lang === 'es' ? f.alt[0] : f.alt[1]}
      style={height ? { height, aspectRatio: 320 / 200 } : { width: '100%', aspectRatio: 320 / 200 }}
    >
      <Svg width="100%" height="100%" viewBox="0 0 320 200">
        <Comp tx={tx} />
      </Svg>
    </View>
  );
}
