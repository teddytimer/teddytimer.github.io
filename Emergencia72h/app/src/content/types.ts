// Tipos del contenido. Todo texto va en los dos idiomas.
import type { ComponentProps } from 'react';
import type { MaterialCommunityIcons } from '@expo/vector-icons';
import type { FigureName } from '../figures';

export type Lang = 'es' | 'en';
export type L = { es: string; en: string };
export type IconName = ComponentProps<typeof MaterialCommunityIcons>['name'];

// Un paso de una guía: una idea por línea, siempre con su fuente.
export type Step = { text: L; src: string; strong?: boolean };

// figure: ilustración que acompaña a la sección (ver src/figures).
export type Section = { title: L; steps: Step[]; figure?: FigureName };

// "emergency" = nunca lleva anuncios. "prep" = puede llevar banner en el futuro.
export type Zone = 'emergency' | 'prep';

export type Guide = {
  id: string;
  icon: IconName;
  color: string; // color de la categoría
  title: L;
  summary: L; // una línea para la lista
  zone: Zone;
  warning?: L; // aviso destacado arriba
  cover?: FigureName; // ilustración para la tarjeta (proyectos)
  sections: Section[];
};

export const t2 = (es: string, en: string): L => ({ es, en });
export const st = (src: string, es: string, en: string, strong = false): Step => ({ text: { es, en }, src, strong });
export const sec = (es: string, en: string, steps: Step[], figure?: FigureName): Section => ({ title: { es, en }, steps, figure });
