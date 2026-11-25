// Ilustraciones de los proyectos en casa.
import React from 'react';
import { Circle, Ellipse, G, Line, Path, Rect } from 'react-native-svg';
import { Arrow, Badge, C, Label, Led, Panel, Water } from './kit';
import type { Tx } from './emergency';

// ---------- Pila de patatas en serie ----------
function Potato({ cx, cy, i }: { cx: number; cy: number; i: number }) {
  return (
    <G>
      <Ellipse cx={cx} cy={cy} rx={42} ry={30} fill={C.potato} />
      <Circle cx={cx - 18} cy={cy + 8} r={2.5} fill={C.potatoDark} />
      <Circle cx={cx + 14} cy={cy + 14} r={2} fill={C.potatoDark} />
      <Circle cx={cx + 4} cy={cy - 4} r={2} fill={C.potatoDark} />
      {/* moneda de cobre (izquierda) */}
      <Rect x={cx - 26} y={cy - 46} width={16} height={24} rx={8} fill={C.copper} />
      {/* clavo de zinc (derecha) */}
      <Rect x={cx + 14} y={cy - 52} width={6} height={32} rx={2} fill={C.zinc} />
      <Rect x={cx + 10} y={cy - 54} width={14} height={5} rx={2} fill={C.zinc} />
      <Label x={cx - 18} y={cy + 46} size={10} c={C.copper}>Cu</Label>
      <Label x={cx + 17} y={cy + 46} size={10} c={C.zinc}>Zn</Label>
      <Label x={cx} y={cy + 4} size={11} c="#5C4425">{String(i)}</Label>
    </G>
  );
}

export function PotatoBattery({ tx }: { tx: Tx }) {
  const ys = 124;
  const xs = [62, 160, 258];
  return (
    <G>
      <Panel x={4} y={4} w={312} h={192} />
      {xs.map((x, i) => (
        <Potato key={x} cx={x} cy={ys} i={i + 1} />
      ))}
      {/* cables: clavo de una patata → moneda de la siguiente */}
      <Path d={`M${xs[0] + 17},${ys - 54} C${xs[0] + 40},${ys - 80} ${xs[1] - 40},${ys - 80} ${xs[1] - 18},${ys - 46}`} stroke={C.green} strokeWidth={3.5} fill="none" />
      <Path d={`M${xs[1] + 17},${ys - 54} C${xs[1] + 40},${ys - 80} ${xs[2] - 40},${ys - 80} ${xs[2] - 18},${ys - 46}`} stroke={C.green} strokeWidth={3.5} fill="none" />
      {/* cables libres al LED */}
      <Path d={`M${xs[0] - 18},${ys - 46} C${xs[0] - 30},${ys - 110} 120,30 150,34`} stroke={C.red} strokeWidth={3.5} fill="none" />
      <Path d={`M${xs[2] + 17},${ys - 54} C${xs[2] + 30},${ys - 110} 200,30 170,34`} stroke={C.text} strokeWidth={3.5} fill="none" />
      <Led x={160} y={30} />
      <Label x={128} y={24} size={10} c={C.red}>+</Label>
      <Label x={192} y={24} size={10} c={C.text}>−</Label>
      <Label x={40} y={22} size={10} c={C.soft} bold={false}>{tx('patita larga', 'long leg')}</Label>
      <Label x={40} y={34} size={10} c={C.soft} bold={false}>{tx('→ moneda', '→ coin')}</Label>
      <Label x={160} y={188} size={11}>{tx('Moneda (Cu) → clavo (Zn) de la siguiente', 'Coin (Cu) → nail (Zn) of the next one')}</Label>
    </G>
  );
}

// ---------- Motor de juguete que enciende un LED ----------
export function MotorLed({ tx }: { tx: Tx }) {
  return (
    <G>
      <Panel x={4} y={4} w={312} h={192} caption={tx('Gira el eje rápido → el LED se enciende', 'Spin the shaft fast → the LED lights up')} />
      <Rect x={80} y={98} width={96} height={54} rx={12} fill={C.zinc} />
      <Rect x={176} y={108} width={14} height={34} rx={4} fill={C.soft} />
      <Line x1={190} y1={125} x2={236} y2={125} stroke={C.foil} strokeWidth={6} strokeLinecap="round" />
      <Rect x={226} y={110} width={10} height={30} rx={3} fill={C.orange} />
      {/* flecha de giro */}
      <Path d="M252,104 A22,22 0 1 1 252,146" stroke={C.amber} strokeWidth={4} fill="none" strokeLinecap="round" />
      <Path d="M252,146 l-10,-2 l8,-8 Z" fill={C.amber} />
      <Label x={128} y={130} size={12} c="#1B2129">MOTOR</Label>
      {/* cables al LED */}
      <Path d="M100,98 C100,60 130,60 148,58" stroke={C.red} strokeWidth={3.5} fill="none" />
      <Path d="M156,98 C156,74 166,66 172,58" stroke={C.text} strokeWidth={3.5} fill="none" />
      <Led x={160} y={46} />
    </G>
  );
}

// ---------- Brújula casera ----------
export function Compass({ tx }: { tx: Tx }) {
  return (
    <G>
      <Panel x={4} y={4} w={154} h={192} caption={tx('Frota ~50 veces, un sentido', 'Rub ~50 times, one way')} />
      <Path d="M22,128 L130,124 L134,126 L130,128 L22,132 Z" fill={C.foil} />
      <Ellipse cx={26} cy={130} rx={5} ry={3} fill="none" stroke={C.panel} strokeWidth={1.5} />
      <Rect x={50} y={92} width={30} height={32} rx={4} fill={C.red} />
      <Rect x={50} y={74} width={30} height={20} rx={4} fill={C.water} />
      <Label x={65} y={114} size={11}>N</Label>
      <Arrow x1={52} y1={58} x2={132} y2={58} c={C.amber} />
      <Badge x={112} y={92} text="×50" bg={C.amber} fg="#2A1E05" />
      <Label x={28} y={150} size={10} c={C.soft} bold={false}>{tx('ojo', 'eye')}</Label>
      <Label x={128} y={150} size={10} c={C.soft} bold={false}>{tx('punta', 'tip')}</Label>

      <Panel x={162} y={4} w={154} h={192} caption={tx('Flota y señala norte–sur', 'Floats and points N–S')} />
      <Path d="M180,104 Q180,166 239,166 Q298,166 298,104 Z" fill={C.surfaceHouse} />
      <Ellipse cx={239} cy={104} rx={59} ry={18} fill={C.waterDeep} />
      <Ellipse cx={239} cy={104} rx={20} ry={7} fill={C.potatoDark} />
      <Path d="M199,104 L279,102 L282,104 L279,106 Z" fill={C.foil} />
      <Label x={290} y={84} size={14} c={C.red}>N</Label>
      <Label x={188} y={84} size={14} c={C.water}>S</Label>
    </G>
  );
}

// ---------- Horno solar con caja de pizza ----------
export function SolarOven({ tx }: { tx: Tx }) {
  return (
    <G>
      <Panel x={4} y={4} w={312} h={192} />
      <Circle cx={46} cy={44} r={18} fill={C.amber} />
      {/* rayos que rebotan en la solapa */}
      <Path d="M64,56 L196,70 L170,128" stroke={C.amber} strokeWidth={2.5} strokeDasharray="6 5" fill="none" />
      <Path d="M60,68 L200,92 L186,128" stroke={C.amber} strokeWidth={2.5} strokeDasharray="6 5" fill="none" />
      {/* caja */}
      <Rect x={90} y={128} width={170} height={36} rx={3} fill={C.potato} />
      <Rect x={104} y={136} width={120} height={20} fill={C.black} />
      <Rect x={150} y={140} width={22} height={12} rx={2} fill={C.brown} />
      <Line x1={98} y1={128} x2={230} y2={128} stroke="#9FD0FF" strokeWidth={4} opacity={0.9} />
      {/* solapa con aluminio y palito */}
      <Line x1={232} y1={128} x2={204} y2={44} stroke={C.foil} strokeWidth={8} strokeLinecap="round" />
      <Line x1={252} y1={128} x2={214} y2={76} stroke={C.brown} strokeWidth={4} strokeLinecap="round" />
      <Label x={262} y={52} size={10.5} anchor="start" c={C.foil}>{tx('aluminio', 'foil')}</Label>
      <Label x={60} y={124} size={10.5} anchor="start" c="#9FD0FF">{tx('film', 'film')}</Label>
      <Line x1={120} y1={150} x2={120} y2={176} stroke={C.soft} strokeWidth={1.5} />
      <Label x={124} y={184} size={10.5} anchor="start" c={C.soft} bold={false}>{tx('fondo negro', 'black bottom')}</Label>
    </G>
  );
}

// ---------- Filtro de agua (experimento) ----------
export function FilterDemo({ tx }: { tx: Tx }) {
  const L = (y: number, es: string, en: string) => (
    <G>
      <Line x1={212} y1={y} x2={232} y2={y} stroke={C.soft} strokeWidth={1.5} />
      <Label x={236} y={y + 4} size={11} anchor="start">{tx(es, en)}</Label>
    </G>
  );
  return (
    <G>
      <Panel x={4} y={4} w={312} h={192} />
      {/* vaso con agua turbia que se vierte */}
      <G transform="rotate(55 62 36)">
        <Path d="M44,14 L80,14 L76,58 L48,58 Z" fill="none" stroke={C.foil} strokeWidth={3} />
        <Path d="M46,30 L78,30 L76,56 L48,56 Z" fill={C.mud} />
      </G>
      <Path d="M86,44 Q110,44 126,52" stroke={C.mud} strokeWidth={6} fill="none" strokeLinecap="round" />
      {/* mitad de arriba de la botella, boca abajo */}
      <Path d="M108,44 L212,44 L212,120 L172,148 L148,148 L108,120 Z" fill="none" stroke={C.foil} strokeWidth={3} />
      <Rect x={111} y={50} width={98} height={26} fill={C.soft} />
      {[120, 136, 152, 168, 184, 200].map((x, i) => (
        <Circle key={x} cx={x} cy={58 + (i % 2) * 8} r={5} fill="#7D8796" />
      ))}
      <Rect x={111} y={76} width={98} height={26} fill="#E3C58E" />
      <Path d="M111,102 L209,102 L209,118 L171,144 L149,144 L111,118 Z" fill={C.black} />
      <Rect x={150} y={144} width={20} height={8} rx={2} fill={C.foil} />
      {L(62, 'Grava', 'Gravel')}
      {L(89, 'Arena', 'Sand')}
      {L(116, 'Carbón', 'Charcoal')}
      {L(148, 'Tela', 'Cloth')}
      {/* gotas y vaso de abajo */}
      <Circle cx={160} cy={160} r={3} fill={C.water} />
      <Path d="M126,152 L126,186 L194,186 L194,152" stroke={C.foil} strokeWidth={3} fill="none" />
      <Water x={128} w={64} top={172} bottom={185} c={C.water} opacity={0.55} />
      <Badge x={60} y={160} text={tx('¡No beber!', 'Do not drink!')} />
    </G>
  );
}
