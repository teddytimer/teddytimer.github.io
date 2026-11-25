// Fuentes oficiales citadas en la app.
// Cada consejo de la app apunta a una de estas fuentes por su id.
// "reviewed" = fecha en la que se revisó el contenido frente a la fuente.

export type Source = {
  id: string;
  org: string; // organismo que publica
  title: string; // título de la página o documento
  url: string;
};

export const REVIEWED = '2026-11';

const S = (id: string, org: string, title: string, url: string): Source => ({ id, org, title, url });

const PC_CAT = 'Protecció Civil – Generalitat de Catalunya';
const BOMBERS_CAT = 'Bombers – Generalitat de Catalunya';
const DGPCE = 'Dirección General de Protección Civil y Emergencias (Ministerio del Interior)';
const CR = 'Cruz Roja Española';
const CLM = '112 Castilla-La Mancha (Protección Ciudadana)';

export const SOURCES: Record<string, Source> = Object.fromEntries(
  [
    // --- Protecció Civil de Catalunya ---
    S('gencat_kit', PC_CAT, "Kit d'emergències", 'https://interior.gencat.cat/ca/arees_dactuacio/proteccio_civil/consells_autoproteccio_emergencia/preparat_per_les_emergencies/equip_emergencies/index.html'),
    S('gencat_kit_pdf', PC_CAT, 'Kit de emergencias de evacuación (PDF)', 'https://interior.gencat.cat/web/.content/home/030_arees_dactuacio/proteccio_civil/consells_autoproteccio_emergencies/1.preparat_emergencies/2.subcanal_equip_emergies/imatges/CAST/ES-Kit-emergencia-evacuacion.pdf'),
    S('gencat_web_kit', 'Generalitat de Catalunya', 'Com preparar-te per a una emergència', 'https://web.gencat.cat/en/ciutadania/emergencies-seguretat/com-preparar-te-per-a-una-emergencia'),
    S('gencat_prep', PC_CAT, "Prepara't per a les emergències", 'https://interior.gencat.cat/ca/arees_dactuacio/proteccio_civil/consells_autoproteccio_emergencia/preparat_per_les_emergencies/index.html'),
    S('gencat_plan', PC_CAT, "Pla d'emergència familiar", 'https://interior.gencat.cat/ca/arees_dactuacio/proteccio_civil/consells_autoproteccio_emergencia/preparat_per_les_emergencies/pla-demergencia-familiar/index.html'),
    S('gencat_mayores', PC_CAT, 'Protección civil para gente mayor', 'https://interior.gencat.cat/es/arees_dactuacio/proteccio_civil/proteccio-civil-per-a-gent-gran/index.html'),
    S('gencat_lluvias', PC_CAT, 'Fortes pluges', 'https://interior.gencat.cat/ca/arees_dactuacio/proteccio_civil/consells_autoproteccio_emergencia/riscos_naturals/aiguats_i_inundacions/fortes-pluges/'),
    S('gencat_calor', PC_CAT, 'Calor intensa', 'https://interior.gencat.cat/ca/arees_dactuacio/proteccio_civil/consells_autoproteccio_emergencia/riscos_naturals/onada_de_calor/'),
    S('gencat_sismos', PC_CAT, 'Earthquake safety tips / Sismes', 'https://interior.gencat.cat/en/detalls/Article/Sismes'),
    S('gencat_frio', PC_CAT, 'Frío intenso', 'https://interior.gencat.cat/es/arees_dactuacio/proteccio_civil/consells_autoproteccio_emergencia/riscos_naturals/onada_de_fred/'),
    S('gencat_nevadas', PC_CAT, 'Nevades i glaçades', 'https://interior.gencat.cat/ca/arees_dactuacio/proteccio_civil/consells_autoproteccio_emergencia/riscos_naturals/nevades_glacades_i_onades_de_fred/'),
    S('gencat_tormentas', PC_CAT, 'Tempestes i llamps', 'https://interior.gencat.cat/ca/arees_dactuacio/proteccio_civil/consells_autoproteccio_emergencia/riscos_naturals/tempestes_electriques/'),
    S('gencat_hogar', PC_CAT, 'Seguridad en el hogar', 'https://interior.gencat.cat/es/arees_dactuacio/proteccio_civil/consells_autoproteccio_emergencia/mes_consells_dautoproteccio/seguretat_a_la_llar/index.html'),
    S('gencat_co', PC_CAT, 'Evita les intoxicacions amb calderes, estufes, escalfadors i llars de foc', 'https://interior.gencat.cat/ca/arees_dactuacio/proteccio_civil/consells_autoproteccio_emergencia/mes_consells_dautoproteccio/intoxicacio_co/index.html'),
    S('gencat_quimico', PC_CAT, 'Risc químic (confinament)', 'https://interior.gencat.cat/ca/arees_dactuacio/proteccio_civil/consells_autoproteccio_emergencia/riscos_tecnologics/risc_quimic/index.html'),
    S('gencat_llarfoc', BOMBERS_CAT, 'Tens una llar de foc?', 'https://interior.gencat.cat/ca/arees_dactuacio/bombers/seguretat_a_la_llar_en_cas_dincendi/consells_de_seguretat_sobre_llars_de_foc/'),
    S('gencat_incendio_casa', BOMBERS_CAT, 'Consejos en caso de incendio en casa (comunidades de vecinos)', 'https://interior.gencat.cat/es/arees_dactuacio/bombers/seguretat_a_la_llar_en_cas_dincendi/consells_de_seguretat_en_cas_d_incendi_en_diferents_idiomes/index.html'),
    S('gencat_prevenir_incendios', BOMBERS_CAT, '¿Cómo podemos prevenir incendios en casa?', 'https://interior.gencat.cat/es/arees_dactuacio/bombers/seguretat_a_la_llar_en_cas_dincendi/com_podem_prevenir_incendis_a_casa/index.html'),
    S('canalsalut_frio', 'Canal Salut – Generalitat de Catalunya', 'El fred', 'https://canalsalut.gencat.cat/ca/vida-saludable/consells-estacionals/hivern/fred/'),

    // --- Otras comunidades autónomas / 112 ---
    S('junta_apagon', 'Junta de Andalucía – Emergencias 112', 'Plan de Emergencias de Protección Civil ante el apagón (28/04/2025)', 'https://www.juntadeandalucia.es/presidencia/portavoz/emergencias112/204138/junta/activa/situacion2/plan/emergencias/proteccion/civil/apagon'),
    S('clm_calor', CLM, 'Altas temperaturas', 'https://112.castillalamancha.es/proteccion-civil/consejos/altas-temperaturas'),
    S('clm_forestal', CLM, 'Incendios forestales', 'https://112.castillalamancha.es/proteccion-civil/consejos/incendios-forestales'),
    S('clm_terremotos', CLM, 'Terremotos', 'https://112.castillalamancha.es/proteccion-civil/consejos/terremotos'),
    S('madrid_gas', 'Comunidad de Madrid', 'El gas, siempre con seguridad', 'https://www.comunidad.madrid/energia/gas-siempre-seguridad'),
    S('madrid_co', 'Comunidad de Madrid – ASEM 112', 'Instala detectores de humo en tu hogar', 'https://www.comunidad.madrid/seguridad-emergencias-asem-112/instala-detectores-humo-tu-hogar'),
    S('madrid_incendio', 'Comunidad de Madrid', 'Incendio en la vivienda (PDF)', 'https://www.comunidad.madrid/sites/default/files/incendiovivienda_071124.pdf'),

    // --- Protección Civil del Estado ---
    S('dgpce_inundaciones', DGPCE, 'Guía de información al ciudadano ante el Riesgo de Inundaciones', 'https://www.proteccioncivil.es/documents/20121/0/08-Inundaciones_accesible.pdf/9b11b38f-447a-5eea-38bd-088def20096f'),
    S('dgpce_fma', DGPCE, 'Guía de información al ciudadano ante Fenómenos Meteorológicos Adversos', 'https://www.interior.gob.es/opencms/pdf/archivos-y-documentacion/documentacion-y-publicaciones/publicaciones-descargables/proteccion-civil/Guia_de_informacion_fenomenos-meteorologicos_adversos_126230950.pdf'),
    S('dgpce_infantil_incendio', DGPCE, 'Autoprotección – ¿Qué hacer en caso de incendio? (Web infantil)', 'https://webinfantil.proteccioncivil.es/en/autoproteccion'),
    S('dgpce_infantil_inundaciones', DGPCE, 'Inundaciones (Web infantil)', 'https://webinfantil.proteccioncivil.es/en/inundaciones'),
    S('dgpce_colectiva', DGPCE, 'Recomendaciones para situaciones de emergencia colectiva', 'https://www.proteccioncivil.es/documents/20121/0/Recomendaciones-para-situaciones-de-emergencia-colectiva.pdf/5db920a1-63e3-44ad-6403-18d934a06795'),
    S('dgpce_incendios_news', DGPCE, 'Medidas de prevención y autoprotección ante incendios forestales', 'https://www.proteccioncivil.es/-/interior-destaca-que-detr%C3%A1s-de-la-mayor%C3%ADa-de-los-incendios-investigados-est%C3%A1-la-mano-del-hombre-y-recuerda-que-estos-delitos-no-quedan-impunes'),

    // --- Guías de reanimación 2025 y normativa ---
    S('rcuk_bls', 'Resuscitation Council UK (guías 2025 basadas en el European Resuscitation Council)', 'Adult basic life support guidelines 2025', 'https://www.resus.org.uk/professional-library/2025-resuscitation-guidelines/adult-basic-life-support-guidelines'),
    S('rcuk_fa', 'Resuscitation Council UK (guías 2025 basadas en el European Resuscitation Council)', 'First aid guidelines 2025', 'https://www.resus.org.uk/library/2025-resuscitation-guidelines/first-aid-guidelines'),
    S('canalsalut_dea', 'Canal Salut – Generalitat de Catalunya', 'Desfibril·lador extern automàtic (DEA): característiques i funcionament', 'https://canalsalut.gencat.cat/ca/salut-a-z/d/desfibrillador-extern-automatic-dea/caracteristiques-funcionament/'),
    S('boe_cp195', 'Boletín Oficial del Estado', 'Código Penal (Ley Orgánica 10/1995), artículo 195: omisión del deber de socorro', 'https://www.boe.es/buscar/act.php?id=BOE-A-1995-25444#a195'),
    S('junta_dea', 'Junta de Andalucía – Consejería de Salud', 'Desfibriladores: normativa (PDF)', 'https://www.juntadeandalucia.es/sites/default/files/2025-09/Desfibriladores.pdf'),
    S('madrid_pas', 'Comunidad de Madrid – ASEM 112', 'Hay que seguir la conducta P-A-S: proteger, avisar, socorrer', 'https://www.comunidad.madrid/node/47442'),
    S('junta_112', 'Junta de Andalucía – Emergencias 112', 'Qué hacer en situaciones de emergencia', 'https://www.juntadeandalucia.es/temas/seguridad/emergencias/que-hacer.html'),

    // --- Cruz Roja ---
    S('cr_desastres', CR, 'Preparación ante desastres', 'https://www2.cruzroja.es/en/preparacionantedesastres'),
    S('cr_evacuar', CR, 'Todo lo que debes saber si las autoridades ordenan evacuar tu casa', 'https://www2.cruzroja.es/web/ahora/-/todo-lo-que-debes-saber-si-las-autoridades-ordenan-evacuar-tu-casa'),
    S('cr_inundacion', CR, 'Qué hacer antes, durante y después de una inundación', 'https://www2.cruzroja.es/web/ahora/-/esto-es-lo-que-tienes-que-hacer-antes-y-durante-una-inundacin'),
    S('cr_forestal', CR, 'Consejos para prevenir el riesgo de incendios forestales', 'https://www2.cruzroja.es/web/ahora/-/consejos-para-prevenir-el-riesgo-de-incendios-forestales'),
    S('cr_frio', CR, 'Recomendaciones ante la bajada de las temperaturas', 'https://www2.cruzroja.es/en/-/recomendaciones-de-cruz-roja-ante-la-bajada-de-las-temperatur-1'),
    S('cr_olafrio', CR, 'Ola de frío', 'https://www2.cruzroja.es/en/oladefrio'),
    S('cr_rcp', CR, '¿Hay algún médico en la sala? (RCP)', 'https://www.cruzroja.es/que-hacemos/educacion/y-ahora-que/salud-4.html'),
    S('cr_pas', CR, '¡Ante los pequeños accidentes aprende a prevenir y a actuar! (PDF)', 'https://www.cruzroja.es/prevencion/descargas/hogar/Folletoaccidentes2015_Castellano.pdf'),
    S('cr_cuidate', CR, 'Aprende a actuar en un accidente (PDF)', 'https://www.cruzroja.es/prevencion/descargas/publicaciones/cuidate-por-ejemplo-CUIDATE_PRIM_AUX.pdf'),
    S('cr_mayores', CR, 'Primeros auxilios en personas mayores', 'https://www2.cruzroja.es/en/primeros-auxilios-en-personas-mayores'),
    S('cr_atragantamiento', CR, 'Qué hacer ante un atragantamiento', 'https://www2.cruzroja.es/web/ahora/-/qu-c3-a9-hacer-ante-un-atragantamiento'),
    S('cr_guia', CR, 'Guía de prevención y seguridad – Primeros auxilios', 'https://www.cruzroja.es/guiaprevencionNew/primeros-auxilios.html'),

    // --- Salud pública (agua segura, generadores) ---
    S('epa_agua', 'EPA – Agencia de Protección Ambiental de EE. UU.', 'Desinfección de agua potable en situaciones de emergencia', 'https://espanol.epa.gov/node/677'),
    S('epa_agua_folleto', 'EPA – Agencia de Protección Ambiental de EE. UU.', 'Folleto de agua potable en emergencias (archivo)', 'https://webarchive.library.unt.edu/web/20090508161024/http:/www.epa.gov/hurricanes/pdf/drinking_water_brochure_espanol.pdf'),
    S('cdc_agua', 'CDC – Centros para el Control de Enfermedades de EE. UU.', 'Cómo hacer que el agua sea segura en caso de emergencia', 'https://cdc.gov/water-emergency/es/about/how-to-make-water-safe.html'),
    S('cdc_agua_pdf', 'CDC – Centros para el Control de Enfermedades de EE. UU.', 'Make water safe during an emergency (PDF, español)', 'https://Www.cdc.gov/healthywater/emergency/pdf/make-water-safe-during-emergency-spanish-p.pdf'),
    S('digesa_agua', 'DIGESA – Ministerio de Salud del Perú', 'Agua segura para el consumo humano (PDF)', 'https://www.digesa.minsa.gob.pe/Boletines/AGUA%20SEGURA%20PARA%20EL%20CONSUMO%20HUMANO.pdf'),
    S('alaska_agua', 'State of Alaska – Ready Alaska', 'Agua en emergencias (PDF)', 'https://ready.alaska.gov/Documents/Preparedness/Outreach/Spanish%20WATER.pdf'),
    S('bc_agua', 'HealthLinkBC – Gobierno de Columbia Británica', 'Desinfectar el agua potable (PDF)', 'https://www.healthlinkbc.ca/sites/default/files/documents/healthfiles/hfile49b-s.pdf'),
    S('epa_generador', 'EPA – Agencia de Protección Ambiental de EE. UU.', 'Impacto del monóxido de carbono en la calidad del aire de los interiores', 'https://espanol.epa.gov/node/1163'),
    S('cpsc_generador', 'CPSC – Comisión de Seguridad de Productos de Consumo de EE. UU.', 'Pasos para evitar intoxicación por CO, electrocución e incendios', 'https://www.cpsc.gov/es/Newsroom/News-Releases/2024/CPSC-Urges-Flood-Victims-to-Take-Steps-to-Prevent-CO-Poisoning-Electrocution-Explosion-and-Fires'),
    S('fema_generador', 'FEMA – Agencia Federal de Gestión de Emergencias de EE. UU.', 'Uso seguro de generadores', 'https://www.fema.gov/es/print/pdf/node/631351'),
    S('wadoh_co', 'Departamento de Salud del Estado de Washington', 'Prevenir el envenenamiento por monóxido de carbono', 'https://doh.wa.gov/es/emergencies-be-prepared-be-safe-severe-weather-and-natural-disasters-power-outages/prevenir-el-envenenamiento-por-monoxido-de-carbono'),

    // --- Proyectos en casa (fuentes educativas: universidades, museos, organismos públicos) ---
    // Pila de patatas
    S('xunta_patata', 'Xunta de Galicia – Consellería de Educación (CPI Ramón Piñeiro)', 'Pila con dos patatas (PDF)', 'https://edu.xunta.gal/centros/cpiramonpineirolancara/system/files/Pila%20con%20dos%20patatas%281%29.pdf'),
    S('carm_pila', 'Región de Murcia – Consejería de Educación', '34 experiencias de ciencia recreativa (pila de limones con monedas)', 'https://www.carm.es/edu/pub/expecienciarecreativa/14_contenido.html'),
    S('ujaen_pila', 'Universidad de Jaén', 'Experimentos de química: ¡Haz tu propia pila! (PDF)', 'https://creapre.ujaen.es/bitstreams/3339b6e8-9872-438c-994c-5016a5cc2017/download'),
    S('illinois_pila', 'University of Illinois Extension – 4-H', 'Batería de cítricos (PDF)', 'https://4h.extension.illinois.edu/media/1761'),
    S('acs_pila', 'American Chemical Society', 'Taller: construye una batería (PDF)', 'https://www.acs.org/content/dam/acsorg/education/outreach/celebrating-chemistry/2024-ccew/build-a-battery-workshop-spanish.pdf'),
    // Brújula casera
    S('noaa_brujula', 'NOAA – National Ocean Service (EE. UU.)', 'Make your own compass', 'https://oceanservice.noaa.gov/education/dyw-make-compass.html'),
    S('maglab_brujula', 'National High Magnetic Field Laboratory (EE. UU.)', 'Make a Compass Activity', 'https://nationalmaglab.org/magnet-academy/try-this-at-home/make-a-compass-activity/'),
    S('nps_brujula', 'National Park Service (EE. UU.)', 'How to Make Your Own Compass', 'https://www.nps.gov/articles/compass.htm'),
    S('ncmuseum_brujula', 'North Carolina Museum of Natural Sciences', 'Science at Home: Making a Compass (PDF)', 'https://naturalsciences.org/calendar/wp-content/uploads/2020/07/ScienceAtHome_Compass.pdf'),
    S('ingenium_brujula', 'Ingenium – Canada Science and Technology Museum', 'Compass', 'https://ingeniumcanada.org/education/try-this-out/compass'),
    S('hawaii_brujula', 'University of Hawaiʻi at Mānoa – Exploring Our Fluid Earth', 'Activity: Floating Magnetic Compass', 'https://www.manoa.hawaii.edu/exploringourfluidearth/physical/navigation-and-transportation/wayfinding-and-navigation/activity-floating-magnetic-compass'),
    // Horno solar
    S('nasa_horno', 'NASA Climate Kids', "Make a solar oven (s'mores)", 'https://climatekids.nasa.gov/smores'),
    S('lhs_horno', 'Lawrence Hall of Science – UC Berkeley', 'Cook with a Solar Oven (PDF)', 'https://lawrencehallofscience.org/wp-content/uploads/2022/06/diy_ss_cook_solar_oven.pdf'),
    S('imperial_horno', 'Imperial College London', 'Solar oven – activity', 'https://imperial.ac.uk/be-inspired/schools-outreach/secondary-schools/stem-in-action/energy-and-sustainability/solar-oven--activity'),
    S('osu_horno', 'Oregon State University Extension', 'Solar ovens lesson (PDF)', 'https://extension.oregonstate.edu/sites/default/files/documents/10551/stemactivity-meterologist-solarovenslesson.pdf'),
    S('nasabest_horno', 'NASA BEST Students (Learner.org)', 'Build a Solar Oven – teacher pages (PDF)', 'https://learner.org/wp-content/uploads/2020/05/two-bit-circus-elementary-school-nasas-best-students-activity-guide-3-5-12-Build-a-Solar-Oven_teacher-pages.pdf'),
    // Filtro de agua (experimento)
    S('epa_filtro', 'EPA – Agencia de Protección Ambiental de EE. UU.', 'Water Filtration activity, grades 4-8 (PDF)', 'https://www.epa.gov/sites/production/files/2016-03/documents/activity_grades_4-8_waterfiltration.pdf'),
    S('utexas_filtro', 'University of Texas at Austin – Environmental Science Institute', 'Clean Water lesson plan (PDF)', 'https://www.esi.utexas.edu/files/042-Lesson-Plan-Clean-Water.pdf'),
    S('teacheng_filtro', 'TeachEngineering – University of Colorado Boulder', 'Water Filtration Project', 'https://www.teachengineering.org/activities/view/water_filtration'),
    S('teacheng_seguro', 'TeachEngineering – University of Colorado Boulder', 'Is It Safe to Drink?', 'https://www.teachengineering.org/activities/view/csm_amazon_lesson5_activity1_tg'),
    S('nps_filtro', 'National Park Service (EE. UU.)', 'Water Bottle Filtration – lesson plan', 'https://www.nps.gov/teachers/classrooms/water-bottle-filtration.htm'),
    S('ucm_pila', 'Universidad Complutense de Madrid – The Oscar Lab', 'Pilas Zinc-Cobre', 'https://www.ucm.es/theoscarlab/pilas-zinc-cobre'),
    S('siemens_pila', 'Siemens Stiftung – Portal de medios CREA', 'Los limones y otras pilas', 'https://crea-portaldemedios.siemens-stiftung.org/vieworig/107106'),
    S('sfu_generador', 'Simon Fraser University – Physics Demos', 'Genecon Hand Crank Generator', 'https://www.sfu.ca/physics/demos/demos-experiments/genecon-generator-burnaby/'),
    S('uw_generador', 'University of Washington – Clean Energy Institute', 'Hand-crank generator', 'https://www.cei.washington.edu/?p=26011'),
    S('waterloo_generador', 'University of Waterloo – Physics & Astronomy', 'Hand-Cranked Generator', 'https://uwaterloo.ca/physics-astronomy/hand-cranked-generator'),
    S('ucsb_generador', 'UC Santa Barbara – Lecture Demonstrations', 'Hand generator and capacitor', 'https://web.physics.ucsb.edu/~lecturedemonstrations/Composer/Pages/72.18.html'),
  ].map((s) => [s.id, s])
);
