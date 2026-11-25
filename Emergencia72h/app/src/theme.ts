// Estilo neutro, oscuro y de alto contraste: se lee bien con prisa y de noche,
// y en pantallas OLED gasta menos batería.
// Dos "zonas" con color propio:
//   - Emergencia → rojo (urgente)
//   - En casa (preparar y proyectos) → verde azulado (con calma)
export type Palette = {
  bg: string;
  surface: string;
  surface2: string;
  border: string;
  text: string;
  textSoft: string;
  urgent: string; // zona Emergencia y botón 112
  urgentSoft: string;
  calm: string; // zona En casa
  calmSoft: string;
  onAccent: string; // texto sobre botones de color
  ok: string;
  warnBg: string;
  warnText: string;
};

const normal: Palette = {
  bg: '#0F1217',
  surface: '#171B22',
  surface2: '#1F2530',
  border: '#2A313D',
  text: '#F2F4F7',
  textSoft: '#A3ACBA',
  urgent: '#F0443E',
  urgentSoft: '#3A1517',
  calm: '#2FBF9F',
  calmSoft: '#10302A',
  onAccent: '#FFFFFF',
  ok: '#4ADE80',
  warnBg: '#3A2B10',
  warnText: '#FFD27A',
};

const saver: Palette = {
  ...normal,
  bg: '#000000',
  surface: '#0A0A0A',
  surface2: '#121212',
  border: '#1F1F1F',
  urgentSoft: '#240B0C',
  calmSoft: '#081A17',
  warnBg: '#1F170A',
};

export const palette = (batterySaver: boolean) => (batterySaver ? saver : normal);

export const font = {
  h1: 28,
  h2: 20,
  body: 18, // texto grande: se lee con prisa
  small: 14,
};

export const radius = 16;
