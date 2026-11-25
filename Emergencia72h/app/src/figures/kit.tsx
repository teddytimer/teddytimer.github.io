// Piezas para dibujar las ilustraciones (estilo pictograma, alto contraste).
import React from 'react';
import { Platform } from 'react-native';
import { Circle, G, Line, Path, Rect, Text as SvgText } from 'react-native-svg';

export const FONT = Platform.select({ ios: 'Helvetica Neue', android: 'sans-serif', default: 'Helvetica, Arial, sans-serif' });

export const C = {
  panel: '#1C222C',
  floor: '#3A4352',
  person: '#E6EBF2', // persona que actúa
  person2: '#8FA6C4', // persona atendida
  text: '#E6EBF2',
  soft: '#A3ACBA',
  red: '#F0443E',
  green: '#4ADE80',
  water: '#4DA3FF',
  waterDeep: '#2C6DB5',
  amber: '#FFC53D',
  orange: '#FF8A3D',
  smoke: '#5E6878',
  copper: '#D98545',
  zinc: '#B8C2CC',
  potato: '#C9A06A',
  potatoDark: '#9E7B4D',
  skin: '#D9B38C',
  foil: '#D7DEE6',
  black: '#0B0D10',
  brown: '#7A5636',
  mud: '#8A6A43',
  surfaceHouse: '#3A4352',
};

// Fondo de un panel con su pie de texto.
export function Panel({ x, y, w, h, caption }: { x: number; y: number; w: number; h: number; caption?: string }) {
  return (
    <G>
      <Rect x={x} y={y} width={w} height={h} rx={12} fill={C.panel} />
      {caption ? (
        <SvgText x={x + w / 2} y={y + h - 9} fontFamily={FONT} fontSize={11.5} fontWeight="700" fill={C.text} textAnchor="middle">
          {caption}
        </SvgText>
      ) : null}
    </G>
  );
}

// Extremidad o cuerpo: trazo grueso con puntas redondeadas.
export function Limb({ d, c = C.person, w = 9 }: { d: string; c?: string; w?: number }) {
  return <Path d={d} stroke={c} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" fill="none" />;
}

export function Head({ x, y, r = 9, c = C.person }: { x: number; y: number; r?: number; c?: string }) {
  return <Circle cx={x} cy={y} r={r} fill={c} />;
}

export function Label({
  x,
  y,
  children,
  c = C.text,
  size = 11,
  anchor = 'middle',
  bold = true,
}: {
  x: number;
  y: number;
  children: string;
  c?: string;
  size?: number;
  anchor?: 'start' | 'middle' | 'end';
  bold?: boolean;
}) {
  return (
    <SvgText x={x} y={y} fontFamily={FONT} fontSize={size} fontWeight={bold ? '700' : '400'} fill={c} textAnchor={anchor}>
      {children}
    </SvgText>
  );
}

// Pastilla de color con texto (p. ej. "×5", "30:2").
export function Badge({ x, y, text, bg = C.red, fg = '#FFFFFF', w }: { x: number; y: number; text: string; bg?: string; fg?: string; w?: number }) {
  const width = w ?? Math.max(30, text.length * 7.4 + 14);
  return (
    <G>
      <Rect x={x - width / 2} y={y - 11} width={width} height={22} rx={11} fill={bg} />
      <SvgText x={x} y={y + 4.5} fontFamily={FONT} fontSize={12.5} fontWeight="800" fill={fg} textAnchor="middle">
        {text}
      </SvgText>
    </G>
  );
}

// Flecha recta.
export function Arrow({ x1, y1, x2, y2, c = C.green, w = 4 }: { x1: number; y1: number; x2: number; y2: number; c?: string; w?: number }) {
  const a = Math.atan2(y2 - y1, x2 - x1);
  const s = 4 + w * 1.6;
  const p1 = `${x2 - s * Math.cos(a - 0.5)},${y2 - s * Math.sin(a - 0.5)}`;
  const p2 = `${x2 - s * Math.cos(a + 0.5)},${y2 - s * Math.sin(a + 0.5)}`;
  return (
    <G>
      <Line x1={x1} y1={y1} x2={x2 - Math.cos(a) * s * 0.6} y2={y2 - Math.sin(a) * s * 0.6} stroke={c} strokeWidth={w} strokeLinecap="round" />
      <Path d={`M${x2},${y2} L${p1} L${p2} Z`} fill={c} />
    </G>
  );
}

// Señal de prohibido (círculo rojo con barra).
export function NoSign({ x, y, r }: { x: number; y: number; r: number }) {
  const d = r * 0.707;
  return (
    <G>
      <Circle cx={x} cy={y} r={r} stroke={C.red} strokeWidth={6} fill="none" />
      <Line x1={x - d} y1={y - d} x2={x + d} y2={y + d} stroke={C.red} strokeWidth={6} strokeLinecap="round" />
    </G>
  );
}

// Marca de "bien hecho".
export function Check({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <G>
      <Circle cx={x} cy={y} r={12 * s} fill={C.green} />
      <Path d={`M${x - 5 * s},${y} L${x - 1 * s},${y + 4 * s} L${x + 6 * s},${y - 5 * s}`} stroke="#0B1F14" strokeWidth={3 * s} fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </G>
  );
}

// Olas de agua desde "top" hasta "bottom".
export function Water({ x, w, top, bottom, c = C.water, opacity = 0.85 }: { x: number; w: number; top: number; bottom: number; c?: string; opacity?: number }) {
  const n = Math.max(2, Math.round(w / 24));
  const step = w / n;
  let d = `M${x},${top}`;
  for (let i = 0; i < n; i++) {
    const x0 = x + i * step;
    d += ` Q${x0 + step / 4},${top - 5} ${x0 + step / 2},${top} T${x0 + step},${top}`;
  }
  d += ` L${x + w},${bottom} L${x},${bottom} Z`;
  return <Path d={d} fill={c} opacity={opacity} />;
}

// Reloj pequeño con texto debajo.
export function Clock({ x, y, r = 14, label }: { x: number; y: number; r?: number; label?: string }) {
  return (
    <G>
      <Circle cx={x} cy={y} r={r} fill="none" stroke={C.text} strokeWidth={3} />
      <Line x1={x} y1={y} x2={x} y2={y - r * 0.6} stroke={C.text} strokeWidth={3} strokeLinecap="round" />
      <Line x1={x} y1={y} x2={x + r * 0.45} y2={y + r * 0.2} stroke={C.text} strokeWidth={3} strokeLinecap="round" />
      {label ? <Label x={x} y={y + r + 15} size={12}>{label}</Label> : null}
    </G>
  );
}

// LED encendido (o apagado).
export function Led({ x, y, on = true, color = C.red }: { x: number; y: number; on?: boolean; color?: string }) {
  return (
    <G>
      {on ? (
        <G opacity={0.9}>
          {[-60, -30, 0, 30, 60].map((deg) => {
            const a = ((deg - 90) * Math.PI) / 180;
            return (
              <Line key={deg} x1={x + Math.cos(a) * 20} y1={y - 4 + Math.sin(a) * 20} x2={x + Math.cos(a) * 30} y2={y - 4 + Math.sin(a) * 30} stroke={C.amber} strokeWidth={3} strokeLinecap="round" />
            );
          })}
          <Circle cx={x} cy={y - 4} r={17} fill={C.amber} opacity={0.25} />
        </G>
      ) : null}
      <Path d={`M${x - 9},${y + 8} L${x - 9},${y - 4} A9,9 0 0 1 ${x + 9},${y - 4} L${x + 9},${y + 8} Z`} fill={color} />
      <Rect x={x - 11} y={y + 7} width={22} height={4} rx={1.5} fill={color} opacity={0.8} />
    </G>
  );
}
