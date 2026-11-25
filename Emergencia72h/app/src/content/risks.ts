// Guías de "¿Qué está pasando?": apagón, inundación, calor, incendio, terremoto, frío, tormenta, gas.
// Cada paso parafrasea su fuente (ver sources.ts). No añadir consejos sin fuente.
import { Guide, sec, st, t2 } from './types';

export const RISKS: Guide[] = [
  {
    id: 'apagon',
    icon: 'power-plug-off',
    color: '#FFC53D',
    zone: 'emergency',
    title: t2('Apagón', 'Power outage'),
    summary: t2('Sin luz en casa o en toda la zona', 'No power at home or in the whole area'),
    sections: [
      sec('Ahora mismo', 'Right now', [
        st('junta_apagon', 'Si vives con alguien conectado a aparatos médicos (por ejemplo, un respirador), avisa al 112 de inmediato.', 'If you live with someone on medical devices (e.g. a ventilator), call 112 right away.', true),
        st('junta_apagon', 'Si te pilla en un ascensor: mantén la calma, pulsa el botón de emergencia y pide ayuda.', 'If you are stuck in a lift: stay calm, press the emergency button and ask for help.'),
        st('junta_apagon', 'Desconecta los aparatos eléctricos.', 'Unplug electrical appliances.'),
        st('junta_apagon', 'Deja una sola luz encendida para saber cuándo vuelve la electricidad.', 'Leave one light switched on so you know when power is back.'),
      ], 'outage'),
      sec('Comida y medicinas', 'Food and medicines', [
        st('junta_apagon', 'No abras la nevera ni el congelador: así guardan el frío más tiempo.', 'Keep the fridge and freezer closed so they stay cold longer.'),
        st('junta_apagon', 'Medicinas de la nevera: no les pongas hielo directamente encima, se pueden congelar.', 'Fridge medicines: do not put ice directly on them, they could freeze.'),
      ]),
      sec('Móvil e información', 'Phone and information', [
        st('cr_desastres', 'Activa el modo ahorro de energía y apaga Bluetooth y WiFi si no los usas.', 'Turn on battery saver and switch off Bluetooth and WiFi if you are not using them.'),
        st('cr_desastres', 'Una radio de pilas o de manivela puede ser tu única fuente fiable si caen las líneas.', 'A battery or crank radio may be your only reliable source if networks go down.'),
        st('dgpce_colectiva', 'No llames si no es necesario: el uso masivo del teléfono bloquea las líneas.', 'Avoid unnecessary calls: mass phone use blocks the lines.'),
      ]),
      sec('Cuando vuelva la luz', 'When power returns', [
        st('junta_apagon', 'Tira la comida y las medicinas que hayan estado a más de 4 °C durante más de 2 horas o estén tibias al tacto.', 'Throw away food and medicines that were above 4 °C for more than 2 hours or feel warm.'),
        st('junta_apagon', 'Cuidado con estufas o calefactores que se quedaron enchufados.', 'Watch out for heaters that were left plugged in.'),
        st('junta_apagon', 'Repón velas, pilas y baterías para la próxima vez.', 'Replace candles, batteries and power banks for next time.'),
      ]),
    ],
  },
  {
    id: 'inundacion',
    icon: 'home-flood',
    color: '#4DA3FF',
    zone: 'emergency',
    title: t2('Inundación', 'Flood'),
    summary: t2('Lluvias fuertes, riadas, agua en casa', 'Heavy rain, flash floods, water at home'),
    warning: t2('Nunca cruces una zona inundada, ni a pie ni en coche.', 'Never cross a flooded area, on foot or by car.'),
    sections: [
      sec('En casa', 'At home', [
        st('gencat_lluvias', 'Cierra las llaves del agua y del gas y baja el interruptor general de la luz.', 'Shut off water and gas and switch off the main electrical switch.', true),
        st('gencat_lluvias', 'No bajes a sótanos, garajes ni zonas bajas del edificio.', 'Do not go down to basements, garages or low parts of the building.', true),
        st('gencat_lluvias', 'Cierra y asegura puertas y ventanas.', 'Close and secure doors and windows.'),
        st('cr_inundacion', 'Si el agua bloquea la salida, sube al punto más alto posible, incluso al tejado.', 'If water blocks the way out, go to the highest point possible, even the roof.'),
        st('cr_inundacion', 'Sigue la situación por la radio o la tele.', 'Follow the situation on radio or TV.'),
      ], 'flood'),
      sec('En la calle', 'Outside', [
        st('cr_inundacion', 'No cruces zonas inundadas ni te pares donde baje mucha agua.', 'Do not cross flooded areas or stop where lots of water flows.', true),
        st('cr_inundacion', 'Aléjate de ríos y barrancos y no te quedes en los puentes.', 'Stay away from rivers and ravines and do not stay on bridges.'),
        st('dgpce_inundaciones', 'El agua en movimiento puede arrastrar árboles y piedras que te golpeen.', 'Moving water can carry trees and stones that may hit you.'),
      ]),
      sec('En coche', 'In a car', [
        st('cr_inundacion', 'Aleja el coche de las zonas que se pueden inundar.', 'Move the car away from areas that may flood.'),
        st('cr_inundacion', 'Si el agua te atrapa en el coche, sube al techo.', 'If water traps you in the car, climb onto the roof.', true),
      ]),
      sec('Si os mandan evacuar', 'If you are told to evacuate', [
        st('cr_inundacion', 'Sigue las instrucciones de las autoridades y antes de salir corta agua, gas y luz.', 'Follow the authorities and shut off water, gas and power before leaving.'),
      ]),
      sec('Después', 'Afterwards', [
        st('dgpce_inundaciones', 'No toques ni pises cables caídos.', 'Do not touch or step on fallen cables.', true),
        st('dgpce_inundaciones', 'No comas alimentos que hayan tocado el agua de la inundación.', 'Do not eat food that touched flood water.'),
        st('dgpce_inundaciones', 'No bebas agua que no sea potable: hiérvela o fíltrala antes.', 'Do not drink non-drinking water: boil or filter it first.'),
        st('dgpce_inundaciones', 'No muevas a las personas heridas: pide ayuda especializada.', 'Do not move injured people: call for specialised help.'),
        st('cr_inundacion', 'No uses aparatos eléctricos hasta comprobar que la instalación es segura.', 'Do not use electrical appliances until the wiring is confirmed safe.'),
      ]),
    ],
  },
  {
    id: 'calor',
    icon: 'thermometer-high',
    color: '#FF8A3D',
    zone: 'emergency',
    title: t2('Ola de calor', 'Heat wave'),
    summary: t2('Calor extremo y golpe de calor', 'Extreme heat and heat stroke'),
    sections: [
      sec('Golpe de calor: cómo reconocerlo', 'Heat stroke: how to spot it', [
        st('clm_calor', 'Piel caliente, roja y seca.', 'Hot, red, dry skin.'),
        st('clm_calor', 'Dolor de cabeza, náuseas, somnolencia y mucha sed.', 'Headache, nausea, drowsiness and intense thirst.'),
        st('clm_calor', 'Confusión, convulsiones o pérdida de conocimiento.', 'Confusion, seizures or loss of consciousness.'),
      ]),
      sec('Golpe de calor: qué hacer', 'Heat stroke: what to do', [
        st('clm_calor', 'Llama al 112.', 'Call 112.', true),
        st('clm_calor', 'Lleva a la persona a un sitio fresco.', 'Move the person to a cool place.'),
        st('clm_calor', 'Quítale ropa y mójale el cuerpo con agua fresca o sábanas mojadas.', 'Remove clothing and wet their body with cool water or wet sheets.'),
        st('clm_calor', 'Hazle aire y dale de beber.', 'Fan them and give them something to drink.'),
        st('rcuk_fa', 'Sigue enfriándola mientras llega la ayuda: primero enfriar, luego trasladar.', 'Keep cooling while help arrives: cool first, transfer second.'),
      ]),
      sec('En casa', 'At home', [
        st('gencat_calor', 'De día, baja las persianas donde da el sol. De noche, abre para que entre el fresco.', 'By day, close blinds where the sun hits. At night, open up to let cool air in.'),
        st('gencat_calor', 'Quédate en las habitaciones más frescas.', 'Stay in the coolest rooms.'),
        st('gencat_calor', 'Si no tienes ventilador o aire acondicionado, pasa al menos 2 horas al día en un sitio climatizado.', 'If you have no fan or AC, spend at least 2 hours a day in a cooled place.'),
        st('clm_calor', 'Dúchate o mójate varias veces al día.', 'Shower or wet your body several times a day.'),
      ], 'heatHome'),
      sec('Beber y comer', 'Drinking and eating', [
        st('clm_calor', 'Bebe agua aunque no tengas sed. Evita el alcohol.', 'Drink water even if you are not thirsty. Avoid alcohol.'),
        st('clm_calor', 'Comidas ligeras, con fruta y verdura.', 'Light meals with fruit and vegetables.'),
      ]),
      sec('Si sales', 'If you go out', [
        st('clm_calor', 'Evita salir y hacer esfuerzos entre las 14 y las 18 h.', 'Avoid going out and exertion between 2 and 6 pm.'),
        st('clm_calor', 'Ve por la sombra, lleva agua, gorra y ropa clara y holgada.', 'Stay in the shade, carry water, wear a hat and light loose clothes.'),
        st('clm_calor', 'Nunca dejes a niños solos en un coche al sol.', 'Never leave children alone in a car in the sun.', true),
      ]),
      sec('Cuida a los demás', 'Look after others', [
        st('clm_calor', 'Pregunta por las personas mayores que viven solas y ayúdalas a comer y beber.', 'Check on older people who live alone and help them eat and drink.'),
        st('clm_calor', 'Si tomas medicación o notas síntomas raros, consulta a tu médico.', 'If you take medication or notice unusual symptoms, ask your doctor.'),
      ]),
    ],
  },
  {
    id: 'incendio',
    icon: 'fire',
    color: '#FF5A4E',
    zone: 'emergency',
    title: t2('Incendio', 'Fire'),
    summary: t2('En casa, en el edificio o en el monte', 'At home, in the building or in the countryside'),
    sections: [
      sec('Fuego en casa', 'Fire at home', [
        st('gencat_hogar', 'Mantén la calma, aparta lo que pueda propagar el fuego y llama al 112.', 'Stay calm, move away anything that could spread the fire and call 112.', true),
        st('gencat_hogar', 'Si no puedes controlarlo, cierra todas las puertas que puedas y sal a la calle sin usar el ascensor.', 'If you cannot control it, close as many doors as you can and get out without using the lift.'),
        st('madrid_incendio', 'Lleva las llaves de casa por si los bomberos necesitan entrar.', 'Take your house keys in case firefighters need to get in.'),
      ]),
      sec('Si no puedes salir', 'If you cannot get out', [
        st('gencat_incendio_casa', 'Ve a un sitio donde te vean desde fuera y cierra las puertas que atravieses.', 'Go somewhere you can be seen from outside and close doors behind you.'),
        st('gencat_incendio_casa', 'Pon ropa mojada en las rendijas de la puerta para que no entre el humo.', 'Put wet cloth in the door gaps to keep smoke out.'),
        st('gencat_incendio_casa', 'Llama a los bomberos y hazte ver desde la ventana.', 'Call the fire service and make yourself visible at the window.'),
      ]),
      sec('Con humo', 'With smoke', [
        st('gencat_hogar', 'El aire limpio está a ras de suelo: avanza a gatas.', 'Clean air is near the floor: crawl.', true),
        st('dgpce_infantil_incendio', 'Tápate la nariz con un pañuelo húmedo.', 'Cover your nose with a damp cloth.'),
        st('gencat_hogar', 'No bajes nunca por una escalera con humo.', 'Never go down a smoke-filled staircase.'),
        st('dgpce_infantil_incendio', 'Nunca uses ascensores ni ventanas para escapar.', 'Never use lifts or windows to escape.'),
      ], 'smoke'),
      sec('Si se prende la ropa', 'If clothes catch fire', [
        st('dgpce_infantil_incendio', 'Rueda por el suelo o cúbrete con una manta o un abrigo.', 'Roll on the ground or cover yourself with a blanket or coat.', true),
      ]),
      sec('Incendio en el monte', 'Forest fire', [
        st('dgpce_incendios_news', 'Si ves fuego o una columna de humo, avisa al 112 enseguida.', 'If you see fire or a column of smoke, call 112 straight away.', true),
        st('clm_forestal', 'Aléjate por los lados del fuego, donde hay menos vegetación, y en contra del viento.', 'Move away along the sides of the fire, where there is less vegetation, against the wind.'),
        st('clm_forestal', 'No vayas hacia barrancos ni huyas cuesta arriba si el fuego sube la ladera.', 'Do not head into ravines or flee uphill if the fire is climbing the slope.'),
        st('cr_forestal', 'Si el fuego te rodea, ve a una zona ya quemada. Si las llamas están muy cerca, túmbate y cúbrete con tierra.', 'If fire surrounds you, go to an already burnt area. If flames are very close, lie down and cover yourself with soil.'),
      ]),
      sec('Si os mandan evacuar', 'If you are told to evacuate', [
        st('cr_evacuar', 'Sal en cuanto lo digan las autoridades, no esperes al último momento.', 'Leave as soon as the authorities say so, do not wait.', true),
        st('cr_evacuar', 'Desconecta luz y gas; si hay tiempo, baja persianas y cierra puertas y ventanas.', 'Switch off power and gas; if there is time, close blinds, doors and windows.'),
        st('cr_evacuar', 'Usa solo las rutas que indiquen las autoridades.', 'Use only the routes given by the authorities.'),
      ]),
    ],
  },
  {
    id: 'terremoto',
    icon: 'home-alert',
    color: '#C9A27A',
    zone: 'emergency',
    title: t2('Terremoto', 'Earthquake'),
    summary: t2('Mientras tiembla y justo después', 'While it shakes and right after'),
    sections: [
      sec('Mientras tiembla, en casa', 'While shaking, indoors', [
        st('gencat_sismos', 'Métete bajo una mesa fuerte o en una esquina interior y protégete la cabeza.', 'Get under a sturdy table or into an inside corner and protect your head.', true),
        st('gencat_sismos', 'Aléjate de ventanas y de cosas que puedan caer.', 'Move away from windows and things that could fall.'),
        st('gencat_sismos', 'No salgas del edificio mientras tiembla: muchos heridos son por objetos que caen.', 'Do not leave the building while it shakes: many injuries come from falling objects.'),
        st('gencat_sismos', 'No uses el ascensor.', 'Do not use the lift.'),
      ], 'quake'),
      sec('Mientras tiembla, fuera', 'While shaking, outdoors', [
        st('gencat_sismos', 'Aléjate de edificios, farolas y cables. Si no puedes, refúgiate en un portal.', 'Move away from buildings, streetlights and power lines. If you cannot, shelter in a doorway.'),
        st('gencat_sismos', 'En coche: para en un sitio despejado y quédate dentro.', 'In a car: stop in a clear spot and stay inside.'),
        st('clm_terremotos', 'Mantente lejos de puentes, postes y edificios dañados.', 'Keep away from bridges, poles and damaged buildings.'),
      ]),
      sec('Justo después', 'Right after', [
        st('clm_terremotos', 'Usa linternas, no velas ni cerillas.', 'Use torches, not candles or matches.', true),
        st('gencat_sismos', 'No entres en edificios dañados: se pueden derrumbar.', 'Do not enter damaged buildings: they may collapse.'),
        st('clm_terremotos', 'Puede haber réplicas (temblores más pequeños después).', 'Aftershocks (smaller quakes afterwards) may follow.'),
        st('gencat_sismos', 'Aléjate de la costa: puede haber olas grandes.', 'Stay away from the coast: big waves may come.'),
        st('gencat_sismos', 'Sigue las instrucciones de las autoridades.', 'Follow the authorities\' instructions.'),
      ]),
    ],
  },
  {
    id: 'frio',
    icon: 'snowflake-thermometer',
    color: '#7FD6FF',
    zone: 'emergency',
    title: t2('Frío intenso y nevadas', 'Severe cold and snow'),
    summary: t2('Calentarse sin intoxicarse', 'Keeping warm without poisoning'),
    sections: [
      sec('Calentar la casa sin peligro', 'Heating the home safely', [
        st('gencat_nevadas', 'No uses estufas de leña, carbón o gas ni braseros en sitios cerrados.', 'Do not use wood, coal or gas stoves or braziers in closed rooms.', true),
        st('dgpce_fma', 'Nunca calientes la casa con la cocina o el horno de gas.', 'Never heat your home with a gas cooker or oven.', true),
        st('gencat_frio', 'Si notas mareo en una habitación con estufa, brasero o caldera, abre una puerta o ventana enseguida.', 'If you feel dizzy in a room with a stove, brazier or boiler, open a door or window at once.'),
        st('cr_frio', 'Apaga las estufas eléctricas y de gas por la noche.', 'Turn off electric and gas heaters at night.'),
      ]),
      sec('Cuidarte', 'Looking after yourself', [
        st('dgpce_fma', 'Ropa de abrigo que cubra todo el cuerpo: abrigo, bufanda y guantes.', 'Warm clothes covering your whole body: coat, scarf and gloves.'),
        st('cr_frio', 'Bebe líquidos calientes y evita el alcohol.', 'Drink warm drinks and avoid alcohol.'),
        st('dgpce_fma', 'Al salir de un sitio caliente, tápate la boca y la nariz.', 'When leaving a warm place, cover your mouth and nose.'),
        st('dgpce_fma', 'Con ventisca, evita salir si puedes.', 'In a blizzard, avoid going out if you can.'),
      ]),
      sec('Si alguien tiene mucho frío', 'If someone is very cold', [
        st('cr_olafrio', 'Para la actividad, busca un sitio seco y cálido y abrígate con ropa seca o mantas.', 'Stop, find a dry warm place and wrap up in dry clothes or blankets.'),
        st('cr_olafrio', 'Si está consciente, una bebida caliente sin alcohol. Pide ayuda si no mejora.', 'If conscious, a warm non-alcoholic drink. Get help if it does not improve.'),
      ]),
      sec('Ten preparado', 'Have ready', [
        st('gencat_frio', 'Radio, pilas, linternas, comida energética, combustible de calefacción y botiquín.', 'Radio, batteries, torches, high-energy food, heating fuel and a first-aid kit.'),
      ]),
    ],
  },
  {
    id: 'tormenta',
    icon: 'weather-lightning-rainy',
    color: '#A98BFF',
    zone: 'emergency',
    title: t2('Tormenta eléctrica', 'Thunderstorm'),
    summary: t2('Rayos y viento fuerte', 'Lightning and strong wind'),
    sections: [
      sec('Dónde estar', 'Where to be', [
        st('gencat_tormentas', 'Lo más seguro es un edificio o un coche cerrado.', 'The safest places are buildings or closed cars.', true),
        st('gencat_tormentas', 'Aléjate de antenas, árboles, objetos de metal y del agua.', 'Stay away from antennas, trees, metal objects and water.'),
      ]),
      sec('En casa', 'At home', [
        st('gencat_tormentas', 'Cierra puertas y ventanas.', 'Close doors and windows.'),
        st('gencat_tormentas', 'Apaga la chimenea y aléjate de ella.', 'Put out the fireplace and stay away from it.'),
        st('gencat_tormentas', 'Desconecta televisores y ordenadores.', 'Unplug TVs and computers.'),
        st('dgpce_fma', 'No te bañes ni abras los grifos.', 'Do not bathe or run the taps.'),
        st('dgpce_fma', 'Ten a mano otra forma de iluminarte, como una linterna.', 'Keep another light source at hand, like a torch.'),
      ]),
      sec('Con viento fuerte', 'With strong wind', [
        st('dgpce_fma', 'Aléjate de cornisas, árboles, muros, andamios y grúas.', 'Keep away from ledges, trees, walls, scaffolding and cranes.'),
        st('dgpce_fma', 'No toques cables caídos.', 'Do not touch fallen cables.', true),
      ]),
    ],
  },
  {
    id: 'gas',
    icon: 'gas-cylinder',
    color: '#8BD17C',
    zone: 'emergency',
    title: t2('Olor a gas', 'Gas smell'),
    summary: t2('Fuga de gas o intoxicación', 'Gas leak or poisoning'),
    warning: t2('No toques interruptores ni enciendas nada: ni luces, ni timbre, ni velas.', 'Do not touch switches or light anything: no lights, doorbell or candles.'),
    sections: [
      sec('Si huele a gas', 'If you smell gas', [
        st('gencat_prevenir_incendios', 'No enciendas ningún interruptor: luz, extractor ni timbre.', 'Do not flip any switch: lights, extractor fan or doorbell.', true),
        st('gencat_hogar', 'No fumes ni enciendas velas.', 'Do not smoke or light candles.', true),
        st('gencat_hogar', 'Abre puertas y ventanas para ventilar toda la casa.', 'Open doors and windows to air the whole home.'),
        st('gencat_hogar', 'Cierra los mandos de los aparatos de gas y la llave general.', 'Turn off gas appliances and the main gas valve.'),
        st('gencat_hogar', 'Llama al 112, pero siempre desde fuera de la zona con olor a gas.', 'Call 112, but always from outside the area that smells of gas.', true),
      ], 'gas'),
      sec('Si sospechas intoxicación (mareo, malestar)', 'If you suspect poisoning (dizziness, feeling unwell)', [
        st('madrid_co', 'Llama al 112.', 'Call 112.', true),
        st('madrid_co', 'Saca a las personas al exterior.', 'Get people outside.'),
        st('madrid_co', 'Ventila la casa inmediatamente.', 'Air the home immediately.'),
      ]),
      sec('Prevenir', 'Prevention', [
        st('madrid_gas', 'La llama debe ser azul. Si es amarilla, la combustión no es correcta.', 'The flame should be blue. Yellow means bad combustion.'),
        st('madrid_gas', 'No tapes las rejillas ni el tubo de salida de calderas y calentadores.', 'Do not block vents or flues of boilers and water heaters.'),
      ]),
    ],
  },
];
