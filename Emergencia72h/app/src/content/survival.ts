// "Básicos de supervivencia": agua, energía, luz y calor, comida, confinarse/evacuar, informarse.
import { Guide, sec, st, t2 } from './types';

export const SURVIVAL: Guide[] = [
  {
    id: 'agua',
    icon: 'water-check',
    color: '#4DA3FF',
    zone: 'emergency',
    title: t2('Agua segura', 'Safe water'),
    summary: t2('Guardar, filtrar, hervir y desinfectar', 'Store, filter, boil and disinfect'),
    warning: t2(
      'Hervir o desinfectar mata gérmenes, pero no quita metales, sales ni productos químicos.',
      'Boiling or disinfecting kills germs, but does not remove metals, salts or chemicals.'
    ),
    sections: [
      sec('Cuánta guardar', 'How much to store', [
        st('gencat_kit', 'Mínimo 1,5 litros por persona y día solo para beber.', 'At least 1.5 litres per person per day just for drinking.', true),
        st('gencat_web_kit', 'Prepárate para ser autosuficiente unas horas o días.', 'Be ready to be self-sufficient for a few hours or days.'),
        st('junta_apagon', 'Unas botellas en el congelador ayudan a mantener fría la comida si se va la luz.', 'A few bottles in the freezer help keep food cold during a power cut.'),
      ]),
      sec('1. Si está turbia: filtrar', '1. If cloudy: filter', [
        st('alaska_agua', 'Déjala reposar y pásala por un paño limpio, papel de cocina o un filtro de café.', 'Let it settle and pour it through a clean cloth, paper towel or coffee filter.'),
        st('alaska_agua', 'Después de filtrarla, hiérvela o desinféctala.', 'After filtering, boil or disinfect it.', true),
      ], 'water'),
      sec('2. Hervir (lo mejor)', '2. Boil (best option)', [
        st('digesa_agua', 'Déjala hervir al menos 1 minuto desde que empieza a burbujear.', 'Let it boil for at least 1 minute once it starts bubbling.', true),
        st('digesa_agua', 'Guárdala en recipientes limpios y con tapa.', 'Store it in clean, covered containers.'),
        st('cdc_agua', 'Para quitar el sabor soso: pásala de un recipiente a otro o añade una pizca de sal por litro.', 'To improve flat taste: pour it between containers or add a pinch of salt per litre.'),
      ]),
      sec('3. Si no puedes hervir: lejía', '3. If you cannot boil: bleach', [
        st('bc_agua', 'Usa solo lejía normal: sin perfume, sin detergente y sin "protector del color".', 'Use plain bleach only: no scent, no detergent, no "colour-safe".', true),
        st('epa_agua_folleto', 'Lejía al 4–6 %: 2 gotas por litro de agua clara.', 'Bleach at 4–6 %: 2 drops per litre of clear water.'),
        st('epa_agua_folleto', 'Si el agua está turbia o muy fría, pon el doble.', 'If the water is cloudy or very cold, use double.'),
        st('epa_agua_folleto', 'Si no sabes la concentración: 10 gotas por litro.', 'If you do not know the strength: 10 drops per litre.'),
        st('cdc_agua_pdf', 'Mezcla y espera 30 minutos antes de beber.', 'Mix and wait 30 minutes before drinking.', true),
        st('epa_agua', 'Si la etiqueta de tu lejía da otra dosis para agua, sigue la etiqueta.', 'If your bleach label gives a dose for water, follow the label.'),
      ]),
    ],
  },
  {
    id: 'energia',
    icon: 'battery-charging',
    color: '#FFC53D',
    zone: 'emergency',
    title: t2('Energía sin luz', 'Power without electricity'),
    summary: t2('Batería del móvil, radio y generadores', 'Phone battery, radio and generators'),
    sections: [
      sec('Ahorra batería', 'Save battery', [
        st('cr_desastres', 'Activa el modo ahorro de energía del móvil.', 'Turn on your phone\'s battery saver.', true),
        st('cr_desastres', 'Apaga lo que no uses: Bluetooth, WiFi…', 'Switch off what you do not use: Bluetooth, WiFi…'),
        st('cr_evacuar', 'Ten una batería externa cargada en tu kit.', 'Keep a charged power bank in your kit.'),
      ]),
      sec('Sin necesitar enchufe', 'No socket needed', [
        st('gencat_kit', 'Radio de pilas o de manivela.', 'Battery or crank radio.'),
        st('gencat_kit', 'Linterna con pilas de repuesto, o una linterna frontal.', 'Torch with spare batteries, or a head torch.'),
      ]),
      sec('Si alguien depende de un aparato eléctrico', 'If someone depends on a powered device', [
        st('junta_apagon', 'Ten un plan preparado para seguir atendiéndole sin luz.', 'Have a plan ready to keep caring for them without power.'),
        st('junta_apagon', 'Si usa un respirador u otro aparato médico, avisa al 112 en cuanto se vaya la luz.', 'If they use a ventilator or other medical device, call 112 as soon as power goes.', true),
      ]),
      sec('Generadores de gasolina', 'Petrol generators', [
        st('epa_generador', 'Nunca dentro de casa ni en el garaje, aunque abras puertas y ventanas.', 'Never inside the home or garage, even with doors and windows open.', true),
        st('epa_generador', 'Sus gases tienen monóxido de carbono: no se ve ni se huele y puede matar.', 'Their fumes contain carbon monoxide: you cannot see or smell it and it can kill.'),
        st('fema_generador', 'Pon detectores de monóxido de carbono con pilas dentro de casa.', 'Install battery-powered carbon monoxide alarms inside the home.'),
        st('cpsc_generador', 'Mejor si el generador tiene apagado automático por monóxido de carbono.', 'Ideally choose a generator with automatic CO shut-off.'),
      ]),
    ],
  },
  {
    id: 'luzcalor',
    icon: 'candle',
    color: '#FF8A3D',
    zone: 'emergency',
    title: t2('Luz y calor seguros', 'Safe light and heat'),
    summary: t2('Linternas, velas, estufas y monóxido', 'Torches, candles, heaters and CO'),
    sections: [
      sec('Luz', 'Light', [
        st('junta_apagon', 'Ten luces de emergencia o linternas a pilas o con batería.', 'Keep emergency lights or battery torches.', true),
        st('gencat_prevenir_incendios', 'Las velas, lejos de cualquier cosa que arda, y bien apagadas antes de dormir o salir.', 'Keep candles away from anything flammable and put them out before sleeping or leaving.'),
        st('gencat_hogar', 'Si huele a gas, nunca enciendas velas.', 'If you smell gas, never light candles.', true),
        st('clm_terremotos', 'Después de un terremoto, linternas: nada de velas ni cerillas.', 'After an earthquake, use torches: no candles or matches.'),
      ]),
      sec('Calor', 'Heat', [
        st('gencat_co', 'Nunca dejes un brasero o estufa de leña o carbón en una habitación cerrada: deja una puerta o ventana abierta.', 'Never leave a brazier or wood/coal stove in a closed room: keep a door or window open.', true),
        st('dgpce_fma', 'Nunca calientes la casa con la cocina o el horno de gas.', 'Never heat the home with a gas cooker or oven.', true),
        st('gencat_frio', 'Ventila cada día unos minutos si usas estufa o calentador de llama.', 'Air the room a few minutes daily if you use a flame heater.'),
        st('gencat_frio', 'Si un aparato funciona mal o huele raro, no lo uses.', 'If an appliance works badly or smells odd, do not use it.'),
        st('gencat_llarfoc', 'Chimenea: aparta lo que pueda arder y apágala antes de dormir o salir.', 'Fireplace: keep flammables away and put it out before sleeping or leaving.'),
        st('wadoh_co', 'Nunca cocines ni calientes dentro de casa con una barbacoa de carbón o gas.', 'Never cook or heat indoors with a charcoal or gas barbecue.'),
      ]),
      sec('Monóxido de carbono', 'Carbon monoxide', [
        st('gencat_co', 'Es un gas sin color, sin olor y sin sabor.', 'It is a gas with no colour, smell or taste.'),
        st('canalsalut_frio', 'Instala un detector de humo y de monóxido de carbono.', 'Install a smoke and carbon monoxide detector.'),
        st('gencat_frio', 'Llama al 112 si te encuentras mal y crees que es por una mala combustión.', 'Call 112 if you feel unwell and suspect bad combustion.', true),
      ]),
    ],
  },
  {
    id: 'comida',
    icon: 'food-variant',
    color: '#C9A27A',
    zone: 'emergency',
    title: t2('Comida sin nevera ni cocina', 'Food without fridge or cooker'),
    summary: t2('Qué comer y qué tirar', 'What to eat and what to throw away'),
    sections: [
      sec('Qué tener', 'What to keep', [
        st('gencat_web_kit', 'Alimentos de larga duración que no necesiten cocinarse.', 'Long-lasting foods that need no cooking.', true),
        st('gencat_frio', 'Con frío, comida energética (calórica).', 'In cold weather, high-energy food.'),
        st('cr_inundacion', 'Ten a mano un hornillo de camping.', 'Keep a camping stove at hand.'),
        st('wadoh_co', 'Nunca cocines dentro de casa con una barbacoa de carbón o gas.', 'Never cook indoors with a charcoal or gas barbecue.', true),
      ]),
      sec('Nevera sin luz', 'Fridge without power', [
        st('junta_apagon', 'Ábrela lo menos posible.', 'Open it as little as possible.', true),
        st('junta_apagon', 'Tira lo que haya estado a más de 4 °C durante más de 2 horas o esté tibio.', 'Throw away anything above 4 °C for more than 2 hours or that feels warm.'),
      ]),
      sec('Después de una inundación', 'After a flood', [
        st('dgpce_inundaciones', 'No comas nada que haya tocado el agua de la inundación.', 'Do not eat anything that touched flood water.', true),
      ]),
    ],
  },
  {
    id: 'refugio',
    icon: 'home-lock',
    color: '#2FBF9F',
    zone: 'emergency',
    title: t2('Confinarse o evacuar', 'Shelter in place or evacuate'),
    summary: t2('Quedarte dentro o salir de casa', 'Stay inside or leave home'),
    sections: [
      sec('Si os piden confinaros', 'If told to shelter in place', [
        st('gencat_quimico', 'Si estás en la calle, entra en el primer edificio que encuentres.', 'If you are outside, go into the first building you find.', true),
        st('gencat_quimico', 'Cierra puertas y ventanas. Mejor en las habitaciones más interiores.', 'Close doors and windows. Inner rooms are best.'),
        st('gencat_quimico', 'Apaga la calefacción, el aire acondicionado y la ventilación.', 'Turn off heating, air conditioning and ventilation.'),
        st('gencat_quimico', 'Evita usar el teléfono: las líneas se colapsan.', 'Avoid using the phone: lines get jammed.'),
      ]),
      sec('Si os mandan evacuar', 'If told to evacuate', [
        st('cr_evacuar', 'Sal en cuanto lo indiquen. Solo la autoridad puede dar la orden.', 'Leave as soon as told. Only the authorities can give the order.', true),
        st('cr_evacuar', 'Desconecta luz y gas y cierra la casa.', 'Switch off power and gas and lock up.'),
        st('cr_evacuar', 'Lleva solo lo imprescindible: documentos, móvil y cargador, medicación.', 'Take only essentials: documents, phone and charger, medication.'),
        st('cr_evacuar', 'Mascotas contigo si es posible, con transportín, comida y su documentación.', 'Take pets if possible, with carrier, food and their papers.'),
        st('cr_evacuar', 'Ponte buen calzado y usa solo las rutas oficiales.', 'Wear good shoes and use only official routes.'),
      ]),
      sec('Plan familiar', 'Family plan', [
        st('cr_evacuar', 'Acordad un punto de encuentro por si os separáis.', 'Agree on a meeting point in case you get separated.'),
        st('dgpce_infantil_inundaciones', 'Todos en casa deben saber cortar el gas, la luz y el agua.', 'Everyone at home should know how to shut off gas, power and water.'),
        st('cr_evacuar', 'Piensa cómo ayudar a mayores, niños y personas con discapacidad de tu entorno.', 'Plan how to help older people, children and people with disabilities around you.'),
      ]),
    ],
  },
  {
    id: 'info',
    icon: 'radio',
    color: '#A98BFF',
    zone: 'emergency',
    title: t2('Informarse sin internet', 'Staying informed offline'),
    summary: t2('Radio, alertas oficiales y bulos', 'Radio, official alerts and hoaxes'),
    sections: [
      sec('Dónde informarte', 'Where to get information', [
        st('cr_desastres', 'Radio de pilas o de manivela: si caen las líneas puede ser tu única fuente fiable.', 'Battery or crank radio: if networks fail it may be your only reliable source.', true),
        st('gencat_prep', 'ES-Alert: las autoridades pueden mandar avisos al móvil en una emergencia.', 'ES-Alert: authorities can send alerts to your phone in an emergency.'),
        st('dgpce_colectiva', 'Sigue la radio y las fuentes oficiales y haz caso de sus indicaciones.', 'Follow radio and official sources and do what they say.'),
      ]),
      sec('Bulos', 'Hoaxes', [
        st('cr_desastres', 'En las emergencias corren muchos bulos: contrasta antes de reenviar.', 'Hoaxes spread in emergencies: check before forwarding.', true),
        st('dgpce_colectiva', 'No difundas rumores ni información exagerada.', 'Do not spread rumours or exaggerated information.'),
      ]),
      sec('Llamar al 112', 'Calling 112', [
        st('madrid_pas', 'Di primero DÓNDE estás: aunque se corte la llamada, ya pueden enviar ayuda.', 'Say WHERE you are first: even if the call drops, help can be sent.', true),
        st('junta_112', 'Después, QUÉ ha pasado. Te pedirán también tu número de teléfono.', 'Then WHAT happened. They will also check your phone number.'),
        st('madrid_pas', 'Responde con calma: mientras hablas, el operador ya está activando la ayuda.', 'Answer calmly: while you talk, the operator is already sending help.'),
        st('dgpce_colectiva', 'Llama solo si hace falta: el uso masivo bloquea las líneas.', 'Call only if needed: mass use blocks the lines.'),
        st('cr_rcp', 'Quédate al teléfono y sigue lo que te diga el operador.', 'Stay on the line and follow the operator\'s instructions.'),
      ]),
      sec('Cómo estás tú', 'How you are doing', [
        st('dgpce_colectiva', 'Es normal sentir miedo o ansiedad, incluso semanas después. Pide ayuda si lo necesitas.', 'Feeling fear or anxiety is normal, even weeks later. Ask for help if you need it.'),
      ]),
    ],
  },
];
