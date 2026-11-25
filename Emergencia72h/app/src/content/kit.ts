// Checklist del kit de emergencia. Cada elemento con su fuente.
import { IconName, L, t2 } from './types';

export type KitItem = { id: string; label: L; src: string };
export type KitGroup = { id: string; icon: IconName; title: L; items: KitItem[] };

const it = (id: string, src: string, es: string, en: string): KitItem => ({ id, src, label: { es, en } });

// Litros mínimos por persona y día (fuente: gencat_kit). Se usan 3 días para el cálculo.
export const WATER_L_PER_PERSON_DAY = 1.5;
export const KIT_DAYS = 3;

export const KIT: KitGroup[] = [
  {
    id: 'basico',
    icon: 'bag-personal',
    title: t2('Kit básico', 'Basic kit'),
    items: [
      it('agua', 'gencat_kit', 'Agua potable (mín. 1,5 L por persona y día)', 'Drinking water (min. 1.5 L per person per day)'),
      it('comida', 'gencat_web_kit', 'Comida de larga duración que no haya que cocinar', 'Long-life food that needs no cooking'),
      it('botiquin', 'gencat_kit', 'Botiquín y medicación habitual', 'First-aid kit and regular medication'),
      it('linterna', 'gencat_kit', 'Linterna con pilas de repuesto o frontal', 'Torch with spare batteries or head torch'),
      it('radio', 'gencat_kit', 'Radio de pilas o de manivela', 'Battery or crank radio'),
      it('docs', 'gencat_plan', 'Documentación (DNI, tarjeta sanitaria, pólizas de seguro)', 'Documents (ID, health card, insurance policies)'),
      it('dinero', 'gencat_prep', 'Dinero en efectivo y tarjeta', 'Cash and bank card'),
      it('movil', 'gencat_prep', 'Móvil y cargador', 'Phone and charger'),
      it('bateria', 'cr_evacuar', 'Batería externa', 'Power bank'),
      it('llaves', 'gencat_mayores', 'Llaves de casa', 'House keys'),
    ],
  },
  {
    id: 'evacuacion',
    icon: 'exit-run',
    title: t2('Si hay que salir de casa', 'If you have to leave home'),
    items: [
      it('higiene', 'gencat_kit_pdf', 'Productos de higiene personal', 'Personal hygiene products'),
      it('ropa', 'gencat_kit_pdf', 'Ropa y zapatos de repuesto', 'Spare clothes and shoes'),
      it('impermeable', 'gencat_kit_pdf', 'Impermeable', 'Raincoat'),
    ],
  },
  {
    id: 'especial',
    icon: 'wheelchair-accessibility',
    title: t2('Necesidades especiales', 'Special needs'),
    items: [
      it('ayudas', 'cr_desastres', 'Ayudas técnicas (audífonos, bastón, cargador de silla eléctrica…)', 'Mobility/hearing aids (hearing aids, cane, wheelchair charger…)'),
      it('tarjeta', 'cr_desastres', 'Tarjeta con datos médicos y contactos', 'Card with medical details and contacts'),
    ],
  },
  {
    id: 'mascotas',
    icon: 'paw',
    title: t2('Mascotas', 'Pets'),
    items: [
      it('transportin', 'cr_evacuar', 'Transportín', 'Pet carrier'),
      it('pienso', 'cr_evacuar', 'Comida para la mascota', 'Pet food'),
      it('cartilla', 'cr_evacuar', 'Documentación veterinaria', 'Vet documents'),
    ],
  },
];

export const KIT_TIPS: { text: L; src: string }[] = [
  { src: 'gencat_kit', text: t2('Tenlo a mano y que todos en casa sepan dónde está.', 'Keep it handy and make sure everyone at home knows where it is.') },
  { src: 'cr_desastres', text: t2('Usa una mochila fácil de llevar y que no pese mucho.', 'Use an easy-to-carry backpack that is not too heavy.') },
  { src: 'cr_desastres', text: t2('Revísalo de vez en cuando: caducidades, documentos y que los aparatos funcionen.', 'Check it now and then: expiry dates, documents and that devices work.') },
  { src: 'gencat_mayores', text: t2('Si tienes coche, ten otro kit en el coche.', 'If you have a car, keep another kit in it.') },
];
