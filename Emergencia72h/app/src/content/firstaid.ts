// Primeros auxilios básicos. Fuente principal: Cruz Roja Española.
import { Guide, sec, st, t2 } from './types';

export const FIRST_AID: Guide[] = [
  {
    id: 'pas',
    icon: 'account-alert',
    color: '#FF6B81',
    zone: 'emergency',
    title: t2('Lo primero: conducta PAS', 'First: PAS (Protect, Alert, Help)'),
    summary: t2('Proteger, Avisar, Socorrer', 'Protect, Alert, Help'),
    sections: [
      sec('P de Proteger', 'P for Protect', [
        st('cr_pas', 'Haz seguro el lugar para que no haya otro accidente.', 'Make the place safe so there is no second accident.', true),
        st('cr_pas', 'Ejemplo: si se prende una sartén, tápala para ahogar la llama.', 'Example: if a pan catches fire, cover it to smother the flame.'),
      ]),
      sec('A de Avisar', 'A for Alert', [
        st('cr_rcp', 'Llama al 112. Si hay alguien contigo, que llame esa persona.', 'Call 112. If someone is with you, they should call.', true),
        st('cr_rcp', 'No cuelgues y sigue las instrucciones del operador.', 'Stay on the line and follow the operator.'),
      ]),
      sec('S de Socorrer', 'S for Help', [
        st('cr_pas', 'Mira si está consciente y si respira (ver la guía "No responde").', 'Check if they are conscious and breathing (see "Not responding").'),
        st('cr_mayores', 'Si se ha caído y puede tener una lesión de espalda, no la muevas.', 'If they fell and may have a spine injury, do not move them.'),
      ]),
      sec('Lo que dice la ley (España)', 'What the law says (Spain)', [
        st('boe_cp195', 'Si alguien está desamparado y en peligro grave, la ley obliga a ayudarle si puedes hacerlo sin riesgo para ti ni para otras personas (art. 195.1 del Código Penal).', 'If someone is helpless and in serious danger, the law requires you to help if you can do so without risk to yourself or others (Spanish Criminal Code, art. 195.1).', true),
        st('boe_cp195', 'Si no puedes ayudar tú, tienes que pedir ayuda urgente, por ejemplo llamando al 112 (art. 195.2).', 'If you cannot help yourself, you must urgently get help, for example by calling 112 (art. 195.2).', true),
        st('cr_pas', 'Nunca te pongas en peligro: proteger es siempre lo primero.', 'Never put yourself in danger: protecting always comes first.'),
        st('canalsalut_dea', 'En Cataluña, cualquier persona puede usar un desfibrilador (DEA) aunque no tenga formación.', 'In Catalonia, anyone may use a defibrillator (AED) even without training.'),
        st('junta_dea', 'Las normas sobre quién puede usar un DEA las desarrolla cada comunidad autónoma a partir del Real Decreto 365/2009.', 'Rules on who may use an AED are set by each region, based on Royal Decree 365/2009.'),
      ]),
    ],
  },
  {
    id: 'rcp',
    icon: 'heart-pulse',
    color: '#FF6B81',
    zone: 'emergency',
    title: t2('No responde: RCP', 'Not responding: CPR'),
    summary: t2('Llamar al 112, comprimir el pecho y usar el DEA', 'Call 112, chest compressions and the AED'),
    sections: [
      sec('1. ¿Responde?', '1. Do they respond?', [
        st('cr_rcp', 'Arrodíllate, pregúntale en voz alta si está bien y sacude sus hombros con suavidad.', 'Kneel, ask loudly if they are OK and gently shake their shoulders.'),
        st('cr_rcp', 'Si responde: déjala como está, mira si se ha hecho daño y quédate a su lado.', 'If they respond: leave them as they are, check for injuries and stay with them.'),
        st('rcuk_bls', 'Si NO responde: llama al 112 ya, con el altavoz puesto (o que llame otra persona).', 'If they do NOT respond: call 112 now, on speakerphone (or have someone else call).', true),
        st('rcuk_bls', 'Si estás sola o solo y sin teléfono: grita pidiendo ayuda.', 'If you are alone without a phone: shout for help.'),
      ]),
      sec('2. ¿Respira con normalidad?', '2. Are they breathing normally?', [
        st('cr_rcp', 'Abre la vía aérea: una mano en la frente y con la otra levanta la barbilla.', 'Open the airway: one hand on the forehead, lift the chin with the other.'),
        st('cr_rcp', 'Mira si sube el pecho, escucha y siente su aliento en tu mejilla. Máximo 10 segundos.', 'Look for chest movement, listen and feel breath on your cheek. Max 10 seconds.'),
        st('rcuk_bls', 'Respirar lento, con mucho esfuerzo o a bocanadas NO es respirar con normalidad.', 'Slow, laboured breathing or gasping is NOT normal breathing.'),
        st('rcuk_bls', 'Si no respira con normalidad, o si dudas: empieza la RCP.', 'If they are not breathing normally, or if in doubt: start CPR.', true),
        st('cr_rcp', 'Si respira con normalidad: ponla de lado (posición lateral de seguridad) y vigila su respiración.', 'If breathing normally: put them on their side (recovery position) and keep checking.'),
      ], 'recovery'),
      sec('3. RCP', '3. CPR', [
        st('rcuk_bls', 'Talón de una mano en el centro del pecho (mitad inferior del esternón), la otra encima y los dedos entrelazados.', 'Heel of one hand on the centre of the chest (lower half of the breastbone), the other on top, fingers interlocked.'),
        st('rcuk_bls', 'Brazos rectos y hombros justo encima del pecho.', 'Arms straight, shoulders directly above the chest.'),
        st('rcuk_bls', 'Ritmo de 100 a 120 por minuto, hundiendo 5–6 cm. Deja que el pecho suba del todo entre compresiones.', '100 to 120 per minute, 5–6 cm deep. Let the chest come all the way back up.', true),
        st('rcuk_bls', 'Si sabes dar insuflaciones: 30 compresiones y 2 insuflaciones, con el aire justo para que el pecho empiece a subir.', 'If trained in rescue breaths: 30 compressions and 2 breaths, just enough air for the chest to start rising.'),
        st('rcuk_bls', 'Si no sabes o no quieres: solo compresiones, sin parar.', 'If not trained or not willing: compressions only, without stopping.', true),
        st('rcuk_bls', 'Si está en una cama blanda, no la bajes al suelo: comprime más fuerte.', 'On a soft bed, do not move them to the floor: compress harder.'),
        st('cr_rcp', 'Sigue hasta que llegue ayuda o vuelva a respirar con normalidad.', 'Keep going until help arrives or they breathe normally again.'),
      ], 'cpr'),
      sec('4. Desfibrilador (DEA)', '4. Defibrillator (AED)', [
        st('rcuk_bls', 'Cualquier persona puede usar un DEA, sin formación. Úsalo en cuanto lo tengas.', 'Anyone can use an AED, no training needed. Use it as soon as you have it.', true),
        st('cr_rcp', 'Que otra persona lo traiga. Si no sabes dónde hay uno, pregunta al 112.', 'Have someone fetch it. If you do not know where one is, ask 112.'),
        st('canalsalut_dea', 'Enciéndelo y sigue sus instrucciones de voz y las del 112, con el móvil en manos libres.', 'Switch it on and follow its voice prompts and 112, with the phone on hands-free.'),
        st('rcuk_bls', 'Pon los parches sobre la piel desnuda, como indica el dibujo.', 'Put the pads on bare skin as shown in the picture.'),
        st('rcuk_bls', 'Que nadie toque a la persona mientras analiza o da la descarga.', 'Nobody touches the person while it analyses or shocks.'),
        st('rcuk_bls', 'Después de la descarga (o si no la recomienda), vuelve a las compresiones enseguida.', 'After the shock (or if none is advised), restart compressions immediately.', true),
        st('canalsalut_dea', 'No pares las compresiones mientras otra persona coloca el DEA.', 'Do not stop compressions while someone else sets up the AED.'),
        st('cr_rcp', 'Si estás sola o solo, no te vayas a buscarlo: sigue con la RCP.', 'If you are alone, do not leave to fetch it: keep doing CPR.'),
      ]),
    ],
  },
  {
    id: 'hemorragia',
    icon: 'water-alert',
    color: '#FF6B81',
    zone: 'emergency',
    title: t2('Sangra mucho', 'Heavy bleeding'),
    summary: t2('Presionar la herida', 'Press on the wound'),
    sections: [
      sec('Qué hacer', 'What to do', [
        st('cr_cuidate', 'Sienta o tumba a la persona para que no se caiga.', 'Sit or lay the person down so they do not fall.'),
        st('cr_cuidate', 'Cubre la herida con gasas o un paño limpio y aprieta fuerte con la mano 10 minutos.', 'Cover the wound with gauze or a clean cloth and press firmly for 10 minutes.', true),
        st('cr_mayores', 'Si es un brazo o una pierna, levántalo y sigue presionando.', 'If it is an arm or leg, raise it and keep pressing.'),
        st('cr_cuidate', 'Si tienes, pon un vendaje que apriete.', 'If you have one, apply a pressure bandage.'),
        st('cr_pas', 'Si sigue saliendo sangre, pide ayuda médica o ve a urgencias.', 'If it keeps bleeding, get medical help or go to A&E.'),
        st('rcuk_fa', 'Sangrado muy grave en brazo o pierna que no para apretando, y tienes torniquete: ponlo 5–7 cm por encima de la herida, nunca sobre una articulación.', 'Life-threatening arm or leg bleeding that pressure does not stop, and you have a tourniquet: apply it 5–7 cm above the wound, never over a joint.'),
        st('rcuk_fa', 'Apunta la hora y no lo aflojes: solo lo quita personal sanitario.', 'Note the time and do not loosen it: only healthcare staff remove it.'),
      ], 'bleeding'),
    ],
  },
  {
    id: 'herida',
    icon: 'bandage',
    color: '#FF6B81',
    zone: 'emergency',
    title: t2('Herida pequeña', 'Small wound'),
    summary: t2('Limpiar y tapar', 'Clean and cover'),
    sections: [
      sec('Qué hacer', 'What to do', [
        st('cr_cuidate', 'Lávate bien las manos con agua y jabón.', 'Wash your hands well with soap and water.'),
        st('cr_cuidate', 'Lava la herida con agua y jabón o suero, a chorro.', 'Rinse the wound with soap and water or saline.'),
        st('cr_cuidate', 'Limpia de dentro hacia fuera.', 'Clean from the inside outwards.'),
        st('cr_cuidate', 'Pon antiséptico con una gasa y tápala con un apósito o gasa.', 'Apply antiseptic with gauze and cover with a dressing.'),
        st('cr_cuidate', 'Cámbialo cada día.', 'Change it daily.'),
      ]),
    ],
  },
  {
    id: 'quemadura',
    icon: 'fire-alert',
    color: '#FF6B81',
    zone: 'emergency',
    title: t2('Quemadura', 'Burn'),
    summary: t2('Enfriar con agua', 'Cool with water'),
    sections: [
      sec('Qué hacer', 'What to do', [
        st('cr_mayores', 'Enfría la zona con agua fría.', 'Cool the area with cold water.', true),
        st('cr_mayores', 'No uses hielo.', 'Do not use ice.', true),
        st('cr_mayores', 'Cúbrela con un apósito estéril.', 'Cover it with a sterile dressing.'),
        st('cr_guia', 'Si se prende la ropa de alguien: cúbrela con una manta o haz que ruede. Nunca uses un extintor sobre la persona.', 'If someone\'s clothes catch fire: cover them with a blanket or make them roll. Never use an extinguisher on a person.'),
      ]),
    ],
  },
  {
    id: 'atragantamiento',
    icon: 'lungs',
    color: '#FF6B81',
    zone: 'emergency',
    title: t2('Atragantamiento', 'Choking'),
    summary: t2('Adultos y niños mayores de 1 año', 'Adults and children over 1'),
    sections: [
      sec('Qué hacer', 'What to do', [
        st('cr_atragantamiento', 'Mantén la calma y que otra persona llame al 112.', 'Stay calm and have someone else call 112.', true),
        st('cr_mayores', 'Si puede toser, anímale a toser.', 'If they can cough, encourage them to cough.'),
        st('cr_atragantamiento', 'Si no puede toser y está consciente: 5 palmadas fuertes en la espalda, entre los omóplatos.', 'If they cannot cough and are conscious: 5 firm back blows between the shoulder blades.'),
        st('cr_atragantamiento', 'Si no sale: ponte detrás, puño justo encima del ombligo y aprieta fuerte hacia dentro y hacia arriba 5 veces.', 'If still stuck: stand behind, fist just above the belly button, press hard inwards and upwards 5 times.'),
        st('rcuk_fa', 'Si sigue atragantada: llama al 112 y alterna 5 palmadas y 5 compresiones.', 'If still choking: call 112 and alternate 5 back blows and 5 thrusts.', true),
        st('rcuk_fa', 'No le metas los dedos en la boca a ciegas.', 'Do not do blind finger sweeps in the mouth.'),
      ], 'choking'),
    ],
  },
  {
    id: 'convulsiones',
    icon: 'head-alert',
    color: '#FF6B81',
    zone: 'emergency',
    title: t2('Convulsiones', 'Seizures'),
    summary: t2('No sujetar, proteger', 'Do not hold, protect'),
    sections: [
      sec('Qué hacer', 'What to do', [
        st('cr_guia', 'Mantén la calma y no sujetes a la persona mientras convulsiona.', 'Stay calm and do not hold the person while they seize.', true),
        st('cr_guia', 'Túmbala en el suelo y aparta todo con lo que se pueda hacer daño.', 'Lay them on the floor and move away anything they could hurt themselves on.'),
        st('cr_guia', 'Busca ayuda médica.', 'Get medical help.'),
      ]),
    ],
  },
  {
    id: 'corazon',
    icon: 'heart-broken',
    color: '#FF6B81',
    zone: 'emergency',
    title: t2('Dolor en el pecho', 'Chest pain'),
    summary: t2('Posible ataque al corazón', 'Possible heart attack'),
    sections: [
      sec('Qué hacer', 'What to do', [
        st('cr_mayores', 'Llama al 112.', 'Call 112.', true),
        st('cr_mayores', 'Mantén a la persona tranquila.', 'Keep the person calm.'),
        st('cr_mayores', 'Fíjate en señales como dolor en el pecho o dificultad para respirar y díselo al 112.', 'Watch for chest pain or difficulty breathing and tell 112.'),
      ]),
    ],
  },
  {
    id: 'toxico',
    icon: 'flask',
    color: '#FF6B81',
    zone: 'emergency',
    title: t2('Producto tóxico', 'Toxic product'),
    summary: t2('Tragado o en la piel', 'Swallowed or on the skin'),
    sections: [
      sec('Si lo ha tragado', 'If swallowed', [
        st('cr_guia', 'Pide ayuda médica (112).', 'Get medical help (112).', true),
        st('cr_guia', 'Abriga a la persona para que no se enfríe.', 'Keep the person warm.'),
        st('cr_guia', 'Intenta saber qué producto ha tomado.', 'Try to find out which product it was.'),
      ]),
      sec('Si cae en la piel', 'If on the skin', [
        st('cr_guia', 'Lava la zona con mucha agua durante 15 minutos.', 'Rinse the area with plenty of water for 15 minutes.', true),
        st('cr_guia', 'Quita la ropa mojada del producto, relojes, pulseras y anillos.', 'Remove soaked clothing, watches, bracelets and rings.'),
        st('cr_guia', 'Pide asistencia médica.', 'Get medical assistance.'),
      ]),
    ],
  },
];
