// "Proyectos en casa": experimentos para aprender. NO son ayuda para emergencias.
// Zona "prep": aquí sí podrá ir un banner en el futuro.
// Fuentes: universidades, museos de ciencia y organismos públicos (ver sources.ts).
import { Guide, sec, st, t2 } from './types';

export const PROJECT_RULES = t2(
  'Son experimentos para aprender y no sustituyen al kit de emergencia. Usa solo materiales de casa, frutas o verduras, pilas pequeñas y motores de juguete. Nunca enchufes, la instalación eléctrica ni baterías de coche. Con niños, siempre con una persona adulta.',
  'These are experiments for learning and do not replace your emergency kit. Use only household items, fruit or vegetables, small batteries and toy motors. Never sockets, house wiring or car batteries. With children, always with an adult.'
);

export const PROJECTS: Guide[] = [
  {
    id: 'pila-patata',
    icon: 'lightbulb-on',
    color: '#E0B15C',
    zone: 'prep',
    cover: 'potato',
    title: t2('Pila de patatas', 'Potato battery'),
    summary: t2('Enciende un LED con patatas y monedas', 'Light an LED with potatoes and coins'),
    warning: t2('No te comas las patatas ni los limones después del experimento.', 'Do not eat the potatoes or lemons after the experiment.'),
    sections: [
      sec('Cómo funciona', 'How it works', [
        st('ucm_pila', 'Dos metales distintos (zinc y cobre) dentro de algo ácido producen una pequeña corriente eléctrica.', 'Two different metals (zinc and copper) inside something acidic produce a small electric current.'),
        st('xunta_patata', 'La patata tiene agua, azúcar y ácidos. Cada metal hace de polo (+ o −) y los electrones viajan de uno a otro.', 'A potato contains water, sugar and acids. Each metal becomes a pole (+ or −) and electrons travel between them.'),
      ]),
      sec('Necesitas', 'You need', [
        st('xunta_patata', '2 o más patatas.', '2 or more potatoes.'),
        st('illinois_pila', 'También funciona con limones, limas o naranjas.', 'Lemons, limes or oranges also work.'),
        st('xunta_patata', 'Por cada patata: un tornillo o clavo galvanizado (con baño de zinc) y una moneda de cobre.', 'For each potato: a galvanised (zinc-coated) screw or nail and a copper coin.'),
        st('ujaen_pila', 'Sirven las monedas de 1, 2 o 5 céntimos.', '1, 2 or 5 euro-cent coins work.'),
        st('illinois_pila', 'Cables (mejor con pinzas de cocodrilo) y un LED.', 'Wires (ideally with crocodile clips) and an LED.'),
      ]),
      sec('Pasos', 'Steps', [
        st('xunta_patata', 'Clava en cada patata el clavo en un lado y la moneda en el otro, sin que se toquen.', 'Push the nail into one side of each potato and the coin into the other, not touching.'),
        st('carm_pila', 'Une la moneda de una patata con el clavo de la siguiente: siempre alternando moneda–clavo.', 'Connect the coin of one potato to the nail of the next: always alternating coin–nail.', true),
        st('illinois_pila', 'Te quedan dos cables libres: uno sale de un clavo y otro de una moneda.', 'Two loose wires remain: one from a nail and one from a coin.'),
        st('acs_pila', 'Conéctalos al LED: la patita larga del LED va al lado de la moneda.', 'Connect them to the LED: the long LED leg goes to the coin side.', true),
        st('siemens_pila', 'Si no se enciende, añade patatas: cada una da como mucho 1,1 V y un LED rojo necesita unos 1,7 V.', 'If it does not light, add potatoes: each gives at most 1.1 V and a red LED needs about 1.7 V.'),
      ], 'potato'),
      sec('Seguridad', 'Safety', [
        st('illinois_pila', 'Si hay que hacer agujeros con cuchillo o tijeras, que lo haga una persona adulta.', 'If holes need cutting with a knife or scissors, an adult should do it.', true),
        st('siemens_pila', 'Al acabar, tira los materiales correctamente.', 'When finished, dispose of the materials properly.'),
      ]),
    ],
  },
  {
    id: 'motor-generador',
    icon: 'engine',
    color: '#7FD6FF',
    zone: 'prep',
    cover: 'motor',
    title: t2('Un motor que da luz', 'A motor that makes light'),
    summary: t2('Un motor de juguete al revés funciona como generador', 'A toy motor in reverse works as a generator'),
    sections: [
      sec('Cómo funciona', 'How it works', [
        st('waterloo_generador', 'Un motor pequeño de corriente continua con imán también sirve de generador: si lo giras, convierte tu movimiento en electricidad.', 'A small permanent-magnet DC motor can also be a generator: spin it and your movement becomes electricity.'),
        st('uw_generador', 'Un LED necesita muy poca energía: es lo más fácil de encender.', 'An LED needs very little energy: it is the easiest thing to light.'),
      ]),
      sec('Necesitas', 'You need', [
        st('waterloo_generador', 'Un motor pequeño de corriente continua (por ejemplo, de un juguete roto).', 'A small DC motor (for example, from a broken toy).'),
        st('sfu_generador', 'Uno o varios LED.', 'One or more LEDs.'),
      ]),
      sec('Pasos', 'Steps', [
        st('sfu_generador', 'Conecta los dos cables del motor a las dos patitas del LED.', 'Connect the two motor wires to the two LED legs.'),
        st('sfu_generador', 'Gira el eje rápido. Cuanto más rápido, más brilla.', 'Spin the shaft fast. The faster, the brighter.', true),
        st('sfu_generador', 'Si no se enciende, gira hacia el otro lado: el LED solo deja pasar la corriente en un sentido.', 'If it does not light, spin the other way: the LED only lets current through one way.'),
        st('ucsb_generador', 'Truco: los generadores de manivela usan engranajes para que el eje gire mucho más rápido que tu mano.', 'Tip: crank generators use gears so the shaft spins much faster than your hand.'),
      ], 'motor'),
      sec('Experimento extra', 'Bonus experiment', [
        st('sfu_generador', 'Conecta dos motores entre sí: al girar uno, el otro se mueve.', 'Connect two motors together: spin one and the other turns.'),
        st('sfu_generador', 'Si sujetas el segundo, cuesta más girar el primero: la energía no sale gratis.', 'Hold the second one and the first gets harder to turn: energy is not free.'),
      ]),
    ],
  },
  {
    id: 'brujula',
    icon: 'compass',
    color: '#FF6B5E',
    zone: 'prep',
    cover: 'compass',
    title: t2('Brújula casera', 'Homemade compass'),
    summary: t2('Una aguja, un imán y un cuenco con agua', 'A needle, a magnet and a bowl of water'),
    sections: [
      sec('Cómo funciona', 'How it works', [
        st('maglab_brujula', 'La Tierra es un imán enorme: una aguja imantada que puede girar libremente se alinea con él.', 'The Earth is a huge magnet: a magnetised needle that can turn freely lines up with it.'),
        st('noaa_brujula', 'Al flotar en el agua, la aguja gira sin rozar y puede orientarse.', 'Floating on water, the needle turns without friction and can align itself.'),
      ]),
      sec('Necesitas', 'You need', [
        st('noaa_brujula', 'Una aguja de coser y un trozo pequeño de corcho.', 'A sewing needle and a small piece of cork.'),
        st('ncmuseum_brujula', 'Si no tienes corcho: una hoja seca o el tapón de una botella.', 'No cork? A dry leaf or a bottle cap.'),
        st('maglab_brujula', 'Un imán y un cuenco con agua.', 'A magnet and a bowl of water.'),
      ]),
      sec('Pasos', 'Steps', [
        st('ingenium_brujula', 'Frota la aguja con el imán unas 50 veces, siempre en el mismo sentido: del ojo a la punta.', 'Rub the needle with the magnet about 50 times, always the same way: from eye to tip.', true),
        st('noaa_brujula', 'Pon la aguja sobre el corcho y déjalo flotar en el centro del cuenco.', 'Place the needle on the cork and float it in the middle of the bowl.'),
        st('maglab_brujula', 'Espera a que se quede quieta: una punta señala al norte y la otra al sur.', 'Wait until it stops: one end points north and the other south.', true),
        st('hawaii_brujula', 'Aleja el imán y los objetos de metal: desvían la aguja.', 'Keep the magnet and metal objects away: they deflect the needle.'),
        st('nps_brujula', 'Para saber qué punta es el norte, compárala con una brújula o con el sol.', 'To know which end is north, compare with a real compass or the sun.'),
      ], 'compass'),
      sec('Seguridad', 'Safety', [
        st('noaa_brujula', 'Cuidado con la punta de la aguja: usa unos alicates para manejarla.', 'Careful with the needle point: use pliers to handle it.'),
      ]),
    ],
  },
  {
    id: 'horno-solar',
    icon: 'solar-power',
    color: '#FFC53D',
    zone: 'prep',
    cover: 'solarOven',
    title: t2('Horno solar', 'Solar oven'),
    summary: t2('Calienta comida con el sol y una caja de pizza', 'Heat food with sunshine and a pizza box'),
    warning: t2('No mires directamente al sol. Dentro se calienta mucho: saca la comida con cuidado.', 'Do not look directly at the sun. It gets very hot inside: take food out carefully.'),
    sections: [
      sec('Cómo funciona', 'How it works', [
        st('nasa_horno', 'Es una caja que atrapa la energía del sol: dentro se calienta más que fuera, como un invernadero.', 'It is a box that traps the sun\'s energy: inside gets hotter than outside, like a greenhouse.'),
        st('lhs_horno', 'El aluminio refleja la luz, el papel negro la absorbe y el plástico atrapa el calor.', 'The foil reflects light, the black paper absorbs it and the plastic traps the heat.'),
      ]),
      sec('Necesitas', 'You need', [
        st('lhs_horno', 'Una caja de pizza grande, papel de aluminio, cartulina negra y film transparente.', 'A large pizza box, aluminium foil, black card and cling film.'),
        st('lhs_horno', 'Cinta adhesiva, pegamento, tijeras y una regla.', 'Tape, glue, scissors and a ruler.'),
        st('osu_horno', 'Un palito o un lápiz para sujetar la solapa.', 'A stick or pencil to hold the flap up.'),
      ]),
      sec('Pasos', 'Steps', [
        st('osu_horno', 'En la tapa, corta tres lados de un cuadrado a unos 2,5–5 cm del borde para hacer una solapa.', 'On the lid, cut three sides of a square about 2.5–5 cm from the edge to make a flap.'),
        st('nasa_horno', 'El corte con cúter lo hace una persona adulta.', 'An adult does the cutting with the craft knife.', true),
        st('imperial_horno', 'Forra la solapa por dentro con papel de aluminio bien liso.', 'Line the inside of the flap with smooth foil.'),
        st('imperial_horno', 'Cubre el fondo de la caja con cartulina negra.', 'Cover the bottom of the box with black card.'),
        st('lhs_horno', 'Tapa el hueco de la tapa con film transparente bien tenso.', 'Cover the hole in the lid with tight cling film.'),
        st('osu_horno', 'Ponla al sol y levanta la solapa con el palito para que refleje la luz hacia dentro.', 'Put it in the sun and prop the flap with the stick so it reflects light inside.', true),
        st('nasa_horno', 'Mete algo fácil de calentar, como chocolate, cierra y espera.', 'Put in something easy to heat, like chocolate, close it and wait.'),
      ], 'solarOven'),
      sec('Seguridad', 'Safety', [
        st('lhs_horno', 'No mires directamente al sol.', 'Do not look directly at the sun.', true),
        st('nasabest_horno', 'Usa un guante o una herramienta para meter y sacar cosas del horno.', 'Use a glove or a tool to put things in and take them out.'),
      ]),
    ],
  },
  {
    id: 'filtro-agua',
    icon: 'filter',
    color: '#4DA3FF',
    zone: 'prep',
    cover: 'filterDemo',
    title: t2('Filtro de agua (experimento)', 'Water filter (experiment)'),
    summary: t2('Mira cómo la arena y la grava limpian el agua turbia', 'See how sand and gravel clean muddy water'),
    warning: t2(
      'Este agua NO se puede beber. Para que sea potable hay que hervirla o desinfectarla: mira la guía «Agua segura».',
      'This water is NOT safe to drink. To make it drinkable, boil or disinfect it: see the "Safe water" guide.'
    ),
    sections: [
      sec('Cómo funciona', 'How it works', [
        st('utexas_filtro', 'Las capas de grava, arena y carbón retienen partículas cada vez más pequeñas.', 'Layers of gravel, sand and charcoal trap smaller and smaller particles.'),
        st('teacheng_filtro', 'Filtrar quita mucha suciedad, pero no toda.', 'Filtering removes a lot of dirt, but not all of it.'),
        st('epa_filtro', 'Falta el último paso de una potabilizadora, la desinfección. Por eso el agua no es segura.', 'The last step of a treatment plant, disinfection, is missing. That is why the water is not safe.', true),
      ]),
      sec('Necesitas', 'You need', [
        st('utexas_filtro', 'Una botella de plástico transparente de 2 litros.', 'A clear 2-litre plastic bottle.'),
        st('utexas_filtro', 'Grava (de acuario), arena y carbón activo de acuario.', 'Gravel (aquarium), sand and aquarium activated charcoal.'),
        st('utexas_filtro', 'Un trozo de gasa o una media, gomas y agua con barro.', 'A piece of cheesecloth or a stocking, rubber bands and muddy water.'),
      ]),
      sec('Pasos', 'Steps', [
        st('nps_filtro', 'Corta la botella por la mitad (que lo haga una persona adulta).', 'Cut the bottle in half (an adult should do this).'),
        st('teacheng_seguro', 'Pon la parte de arriba boca abajo, encajada en la de abajo.', 'Place the top half upside down inside the bottom half.'),
        st('utexas_filtro', 'Tapa el cuello con la gasa y sujétala con una goma.', 'Cover the neck with the cloth and secure it with a rubber band.'),
        st('utexas_filtro', 'Añade capas: carbón, arena y, arriba, 5–8 cm de grava.', 'Add layers: charcoal, sand and, on top, 5–8 cm of gravel.', true),
        st('utexas_filtro', 'Remueve el agua con barro y viértela despacio. Mira cómo baja por las capas.', 'Stir the muddy water and pour it slowly. Watch it go through the layers.'),
        st('epa_filtro', 'Compara el aspecto del agua antes y después. ¡No la bebas!', 'Compare how the water looks before and after. Do not drink it!', true),
      ], 'filterDemo'),
    ],
  },
];
