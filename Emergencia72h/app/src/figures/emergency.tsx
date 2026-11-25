// Ilustraciones de las guías de emergencia y primeros auxilios.
// Cada una dibuja lo que dicen los pasos de su sección (las fuentes están en los pasos).
import React from 'react';
import { Circle, Ellipse, G, Line, Path, Polygon, Rect } from 'react-native-svg';
import { Arrow, Badge, C, Check, Clock, Head, Label, Limb, NoSign, Panel, Water } from './kit';

export type Tx = (es: string, en: string) => string;

// ---------- Apagón: nevera cerrada · desenchufa · deja una luz ----------
export function Outage({ tx }: { tx: Tx }) {
  return (
    <G>
      <Panel x={4} y={4} w={101} h={192} caption={tx('Nevera cerrada', 'Fridge shut')} />
      <Rect x={33} y={40} width={44} height={110} rx={6} fill={C.foil} />
      <Line x1={33} y1={78} x2={77} y2={78} stroke={C.panel} strokeWidth={3} />
      <Rect x={68} y={52} width={4} height={16} rx={2} fill={C.panel} />
      <Rect x={68} y={88} width={4} height={22} rx={2} fill={C.panel} />
      <Check x={78} y={42} />

      <Panel x={110} y={4} w={101} h={192} caption={tx('Desenchufa', 'Unplug')} />
      <Rect x={170} y={72} width={30} height={46} rx={6} fill={C.foil} />
      <Circle cx={180} cy={95} r={3} fill={C.panel} />
      <Circle cx={190} cy={95} r={3} fill={C.panel} />
      <Rect x={128} y={82} width={22} height={26} rx={5} fill={C.soft} />
      <Line x1={150} y1={90} x2={158} y2={90} stroke={C.soft} strokeWidth={3} />
      <Line x1={150} y1={100} x2={158} y2={100} stroke={C.soft} strokeWidth={3} />
      <Path d="M128,95 C112,95 118,140 140,150" stroke={C.soft} strokeWidth={4} fill="none" />
      <Arrow x1={165} y1={128} x2={132} y2={128} c={C.amber} />

      <Panel x={216} y={4} w={100} h={192} caption={tx('Deja una luz', 'Leave one light')} />
      <Circle cx={266} cy={78} r={30} fill={C.amber} opacity={0.18} />
      <Path d="M266,52 A20,20 0 0 1 278,88 L276,100 L256,100 L254,88 A20,20 0 0 1 266,52 Z" fill={C.amber} />
      <Rect x={256} y={102} width={20} height={6} rx={2} fill={C.soft} />
      <Rect x={258} y={110} width={16} height={6} rx={2} fill={C.soft} />
      <Label x={266} y={150} size={10.5} c={C.soft} bold={false}>{tx('avisa al volver', 'tells you when')}</Label>
      <Label x={266} y={164} size={10.5} c={C.soft} bold={false}>{tx('la corriente', 'power is back')}</Label>
    </G>
  );
}

// ---------- Inundación: no cruces · sube alto ----------
export function Flood({ tx }: { tx: Tx }) {
  return (
    <G>
      <Panel x={4} y={4} w={154} h={192} caption={tx('No cruces el agua', 'Do not cross water')} />
      <Head x={81} y={58} />
      <Limb d="M81,70 L81,108" />
      <Limb d="M81,78 L66,98 M81,78 L96,98" w={7} />
      <Limb d="M81,108 L74,140 M81,108 L88,140" />
      <Water x={8} w={146} top={118} bottom={172} />
      <Arrow x1={30} y1={150} x2={60} y2={150} c="#FFFFFF" w={3} />
      <Arrow x1={100} y1={160} x2={130} y2={160} c="#FFFFFF" w={3} />
      <NoSign x={81} y={100} r={50} />

      <Panel x={162} y={4} w={154} h={192} caption={tx('Sube a lo más alto', 'Go to the highest point')} />
      <Polygon points="190,92 239,48 288,92 288,172 190,172" fill={C.surfaceHouse} />
      <Rect x={218} y={86} width={42} height={44} rx={4} fill={C.panel} />
      <Head x={239} y={102} r={7} />
      <Limb d="M239,110 L239,130" w={8} />
      <Limb d="M239,114 L227,96 M239,114 L251,96" w={5} />
      <Water x={166} w={146} top={140} bottom={172} />
      <Arrow x1={204} y1={160} x2={204} y2={104} c={C.green} />
    </G>
  );
}

// ---------- Calor: persianas de día · ventanas de noche ----------
export function HeatHome({ tx }: { tx: Tx }) {
  const rays = [0, 45, 90, 135, 180, 225, 270, 315];
  return (
    <G>
      <Panel x={4} y={4} w={154} h={192} caption={tx('De día: baja persianas', 'Day: close blinds')} />
      <Circle cx={40} cy={40} r={13} fill={C.amber} />
      {rays.map((d) => {
        const a = (d * Math.PI) / 180;
        return <Line key={d} x1={40 + Math.cos(a) * 18} y1={40 + Math.sin(a) * 18} x2={40 + Math.cos(a) * 25} y2={40 + Math.sin(a) * 25} stroke={C.amber} strokeWidth={3} strokeLinecap="round" />;
      })}
      <Rect x={60} y={60} width={78} height={100} rx={4} fill="none" stroke={C.foil} strokeWidth={4} />
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <Rect key={i} x={64} y={64 + i * 11.6} width={70} height={8} rx={2} fill={C.soft} />
      ))}

      <Panel x={162} y={4} w={154} h={192} caption={tx('De noche: abre', 'Night: open up')} />
      <Path d="M206,28 A16,16 0 1 0 214,58 A12,12 0 1 1 206,28 Z" fill={C.foil} />
      <Rect x={222} y={60} width={78} height={100} rx={4} fill="none" stroke={C.foil} strokeWidth={4} />
      <Polygon points="226,64 248,74 248,152 226,156" fill={C.surfaceHouse} />
      <Arrow x1={180} y1={92} x2={268} y2={92} c={C.water} />
      <Arrow x1={180} y1={118} x2={268} y2={118} c={C.water} />
    </G>
  );
}

// ---------- Humo: avanza a gatas ----------
export function Smoke({ tx }: { tx: Tx }) {
  return (
    <G>
      <Panel x={4} y={4} w={312} h={192} />
      <Path d="M8,16 L312,16 L312,82 Q290,92 268,82 T224,82 T180,82 T136,82 T92,82 T48,82 Q28,92 8,82 Z" fill={C.smoke} opacity={0.9} />
      <Label x={160} y={52} size={13} c="#D5DAE1">{tx('HUMO', 'SMOKE')}</Label>
      <Line x1={8} y1={170} x2={312} y2={170} stroke={C.floor} strokeWidth={4} />
      <Rect x={262} y={92} width={40} height={78} rx={3} fill={C.surfaceHouse} />
      <Circle cx={293} cy={133} r={3} fill={C.foil} />
      {/* persona a gatas */}
      <Head x={92} y={132} />
      <Rect x={80} y={135} width={12} height={8} rx={2} fill={C.water} />
      <Limb d="M104,140 L156,146" w={11} />
      <Limb d="M108,142 L104,168" w={7} />
      <Limb d="M120,144 L122,168" w={7} />
      <Limb d="M156,146 L170,168 L196,168" w={9} />
      <Arrow x1={204} y1={140} x2={252} y2={140} c={C.green} />
      <Label x={130} y={190} size={11.5}>{tx('Aire limpio abajo: avanza a gatas', 'Clean air is low: crawl')}</Label>
    </G>
  );
}

// ---------- Terremoto: bajo una mesa, protege la cabeza ----------
export function Quake({ tx }: { tx: Tx }) {
  return (
    <G>
      <Panel x={4} y={4} w={312} h={192} caption={tx('Bajo una mesa fuerte, protege la cabeza', 'Under a sturdy table, protect your head')} />
      <Line x1={8} y1={168} x2={312} y2={168} stroke={C.floor} strokeWidth={4} />
      {/* cuadro que cae */}
      <G transform="rotate(-18 262 52)">
        <Rect x={244} y={36} width={36} height={30} rx={2} fill="none" stroke={C.foil} strokeWidth={3} />
      </G>
      <Arrow x1={262} y1={78} x2={262} y2={100} c={C.amber} w={3} />
      {/* líneas de temblor */}
      <Path d="M24,60 l6,-6 l6,6 l6,-6 l6,6 M24,80 l6,-6 l6,6 l6,-6 l6,6" stroke={C.amber} strokeWidth={3} fill="none" strokeLinecap="round" />
      {/* mesa */}
      <Rect x={82} y={88} width={150} height={10} rx={3} fill={C.potatoDark} />
      <Rect x={92} y={98} width={8} height={70} fill={C.potatoDark} />
      <Rect x={214} y={98} width={8} height={70} fill={C.potatoDark} />
      {/* persona agachada */}
      <Head x={128} y={124} />
      <Limb d="M136,130 Q154,130 164,150" w={12} />
      <Limb d="M164,150 L146,166 L174,166" w={9} />
      <Limb d="M138,134 L124,114 L132,108" w={6} />
      <Limb d="M146,140 L104,140" w={6} />
    </G>
  );
}

// ---------- Gas: no toques nada · ventila · llama desde fuera ----------
export function Gas({ tx }: { tx: Tx }) {
  return (
    <G>
      <Panel x={4} y={4} w={101} h={192} caption={tx('Ni luces ni velas', 'No switches, no flames')} />
      <Rect x={36} y={60} width={38} height={58} rx={6} fill={C.foil} />
      <Rect x={48} y={72} width={14} height={34} rx={3} fill={C.soft} />
      <NoSign x={55} y={89} r={38} />

      <Panel x={110} y={4} w={101} h={192} caption={tx('Ventila', 'Air it out')} />
      <Rect x={128} y={56} width={50} height={70} rx={3} fill="none" stroke={C.foil} strokeWidth={4} />
      <Polygon points="132,60 148,68 148,118 132,122" fill={C.surfaceHouse} />
      <Path d="M160,78 q8,-8 16,0 t16,0 M160,96 q8,-8 16,0 t16,0" stroke={C.green} strokeWidth={3} fill="none" opacity={0.8} />
      <Arrow x1={176} y1={112} x2={204} y2={112} c={C.green} w={3} />

      <Panel x={216} y={4} w={100} h={192} caption={tx('Llama desde fuera', 'Call from outside')} />
      <Rect x={248} y={46} width={36} height={66} rx={7} fill={C.foil} />
      <Rect x={252} y={54} width={28} height={46} rx={3} fill={C.panel} />
      <Label x={266} y={83} size={13} c={C.red}>112</Label>
      <Arrow x1={232} y1={140} x2={300} y2={140} c={C.green} />
    </G>
  );
}

// ---------- Agua segura: filtra · hierve · desinfecta ----------
export function WaterSafe({ tx }: { tx: Tx }) {
  return (
    <G>
      <Panel x={4} y={4} w={101} h={192} caption={tx('1 · Filtra (paño)', '1 · Filter (cloth)')} />
      <Path d="M30,42 L48,42 L52,54" stroke={C.mud} strokeWidth={6} fill="none" strokeLinecap="round" />
      <Path d="M52,54 L52,70" stroke={C.mud} strokeWidth={4} strokeLinecap="round" />
      <Path d="M28,74 Q54,96 80,74 Z" fill={C.foil} />
      <Path d="M32,96 L32,150 Q32,158 40,158 L70,158 Q78,158 78,150 L78,96" stroke={C.foil} strokeWidth={3} fill="none" />
      <Rect x={34} y={122} width={42} height={34} fill={C.water} opacity={0.7} />
      <Circle cx={55} cy={106} r={3} fill={C.water} />

      <Panel x={110} y={4} w={101} h={192} caption={tx('2 · Hierve 1 min', '2 · Boil 1 min')} />
      <Rect x={128} y={84} width={64} height={46} rx={6} fill={C.soft} />
      <Rect x={120} y={84} width={80} height={7} rx={3} fill={C.foil} />
      {[140, 156, 172].map((x, i) => (
        <Circle key={x} cx={x} cy={70 - i * 6} r={5 - i} fill="none" stroke={C.water} strokeWidth={2.5} />
      ))}
      <Path d="M140,150 q6,-14 12,0 q6,-14 12,0 q6,-14 12,0" fill={C.orange} />
      <Clock x={160} y={40} r={12} />

      <Panel x={216} y={4} w={100} h={192} caption={tx('3 · o lejía: 2 gotas/L', '3 · or bleach: 2 drops/L')} />
      <Rect x={252} y={30} width={10} height={28} rx={3} fill={C.foil} />
      <Path d="M249,58 L265,58 L259,74 L255,74 Z" fill={C.foil} />
      <Path d="M257,82 q-5,8 0,11 q5,-3 0,-11 Z M257,98 q-5,8 0,11 q5,-3 0,-11 Z" fill={C.foil} />
      <Rect x={236} y={116} width={42} height={46} rx={6} fill={C.water} opacity={0.7} />
      <Label x={257} y={145} size={12}>1 L</Label>
      <Clock x={296} y={70} r={11} />
      <Label x={296} y={98} size={11}>30 min</Label>
    </G>
  );
}

// ---------- RCP: 30 compresiones en el centro del pecho y 2 insuflaciones ----------
export function Cpr({ tx }: { tx: Tx }) {
  return (
    <G>
      <Panel x={4} y={4} w={312} h={192} caption={tx('Manos en el centro del pecho · brazos rectos', 'Hands on centre of chest · arms straight')} />
      <Line x1={8} y1={164} x2={312} y2={164} stroke={C.floor} strokeWidth={4} />
      {/* persona en el suelo */}
      <Head x={60} y={146} c={C.person2} />
      <Limb d="M74,148 L200,150" c={C.person2} w={14} />
      <Limb d="M200,150 L270,154" c={C.person2} w={10} />
      {/* persona que ayuda, de rodillas al lado */}
      <Head x={116} y={50} />
      <Limb d="M120,62 L148,104" w={12} />
      <Limb d="M148,104 L150,160 L196,160" w={10} />
      <Limb d="M118,68 L112,134" w={7} />
      <Rect x={102} y={130} width={24} height={9} rx={4} fill={C.person} />
      <Arrow x1={114} y1={20} x2={114} y2={42} c={C.red} />
      <Badge x={254} y={40} text="30 : 2" w={74} />
      <Label x={254} y={68} size={10.5} c={C.soft} bold={false}>{tx('100–120 por minuto', '100–120 per minute')}</Label>
      <Label x={254} y={82} size={10.5} c={C.soft} bold={false}>{tx('hundir 5–6 cm', '5–6 cm deep')}</Label>
    </G>
  );
}

// ---------- Posición lateral de seguridad ----------
export function Recovery({ tx }: { tx: Tx }) {
  return (
    <G>
      <Panel x={4} y={4} w={312} h={192} caption={tx('Si respira: de lado y vigila', 'If breathing: on their side, keep watching')} />
      <Line x1={8} y1={150} x2={312} y2={150} stroke={C.floor} strokeWidth={4} />
      <Head x={70} y={126} c={C.person2} r={10} />
      <Limb d="M84,128 L96,140 L80,142" c={C.person2} w={7} />
      <Limb d="M84,130 L190,134" c={C.person2} w={14} />
      <Limb d="M120,134 L136,146" c={C.person2} w={7} />
      <Limb d="M190,134 L222,112 L244,142" c={C.person2} w={10} />
      <Limb d="M190,138 L272,144" c={C.person2} w={10} />
      <Path d="M44,110 q8,-8 16,0" stroke={C.water} strokeWidth={3} fill="none" />
      <Path d="M36,100 q12,-12 24,0" stroke={C.water} strokeWidth={3} fill="none" opacity={0.7} />
      <Label x={60} y={60} size={11} c={C.soft} bold={false}>{tx('vía aérea abierta', 'airway open')}</Label>
    </G>
  );
}

// ---------- Hemorragia: comprime 10 minutos ----------
export function Bleeding({ tx }: { tx: Tx }) {
  return (
    <G>
      <Panel x={4} y={4} w={312} h={192} caption={tx('Paño limpio y aprieta fuerte 10 minutos', 'Clean cloth and press firmly for 10 minutes')} />
      <Rect x={40} y={112} width={200} height={34} rx={17} fill={C.skin} />
      <Rect x={124} y={104} width={56} height={50} rx={6} fill={C.foil} />
      <Ellipse cx={152} cy={130} rx={10} ry={6} fill={C.red} opacity={0.5} />
      {/* mano que presiona sobre el paño */}
      <Limb d="M176,122 L236,46" w={24} />
      <Rect x={134} y={108} width={46} height={34} rx={10} fill={C.person} />
      {[110, 118, 126, 134].map((y) => (
        <Rect key={y} x={112} y={y} width={28} height={7} rx={3.5} fill={C.person} />
      ))}
      <Limb d="M152,110 L140,96" w={8} />
      <Arrow x1={108} y1={40} x2={124} y2={92} c={C.red} />
      <Clock x={262} y={58} r={18} />
      <Label x={262} y={100} size={13}>10 min</Label>
    </G>
  );
}

// ---------- Atragantamiento: 5 palmadas · 5 compresiones ----------
export function Choking({ tx }: { tx: Tx }) {
  return (
    <G>
      <Panel x={4} y={4} w={154} h={192} caption={tx('5 palmadas en la espalda', '5 back blows')} />
      {/* persona inclinada hacia delante */}
      <Head x={46} y={78} c={C.person2} />
      <Limb d="M56,84 L96,104" c={C.person2} w={12} />
      <Limb d="M96,104 L98,164" c={C.person2} w={9} />
      <Limb d="M60,90 L52,116" c={C.person2} w={6} />
      {/* persona que ayuda */}
      <Head x={124} y={52} />
      <Limb d="M124,64 L128,120 L126,164" w={11} />
      <Limb d="M122,72 L98,84" w={7} />
      <Path d="M84,72 l6,6 M78,82 l8,4 M84,94 l6,-2" stroke={C.amber} strokeWidth={3} strokeLinecap="round" />
      <Badge x={44} y={30} text="×5" />

      <Panel x={162} y={4} w={154} h={192} caption={tx('5 compresiones abdominales', '5 abdominal thrusts')} />
      <Head x={244} y={44} />
      <Limb d="M244,56 L246,120 L250,166" w={12} />
      <Limb d="M244,72 L232,100" w={6} />
      <Head x={226} y={54} c={C.person2} />
      <Limb d="M226,66 L226,122 L224,166" c={C.person2} w={12} />
      <Limb d="M244,74 Q236,104 218,106" w={7} />
      <Circle cx={216} cy={106} r={7} fill={C.person} />
      <Arrow x1={186} y1={126} x2={206} y2={110} c={C.red} w={3} />
      <Badge x={292} y={30} text="×5" />
      <Label x={190} y={140} size={10} c={C.soft} bold={false}>{tx('encima del', 'above the')}</Label>
      <Label x={190} y={152} size={10} c={C.soft} bold={false}>{tx('ombligo', 'belly button')}</Label>
    </G>
  );
}
