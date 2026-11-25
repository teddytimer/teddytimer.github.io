# Emergencia 72h — Guía de emergencias

App de emergencia y supervivencia **100 % sin internet**, en español e inglés, para todos los públicos.
Hecha con **Expo (React Native + TypeScript)** y **Expo Router**. Un solo código para iPhone y Android.

> Nombre en la tienda: **Emergencia 72h: Supervivencia** (EN: Emergency 72h: Survival Guide). Debajo del icono se ve **Emergencia** (EN: Emergency), configurado en `locales/`. Identificador: `com.emergencia72h.app` (no se puede cambiar después del primer build).

## Probarla en tu iPhone (sin Mac)
1. Instala Node.js (versión LTS) en el ordenador.
2. En esta carpeta: `npm install`
3. `npx expo start`
4. Instala **Expo Go** en el iPhone y escanea el QR con la cámara.

Todo lo que usa la app (cámara para el flash, SVG, guardado local) viene incluido en Expo Go.

**Cuidado al probar el 112:** en el móvil real la llamada es de verdad. Pulsa el botón rojo para ver la confirmación y después **Cancelar**.

## Publicar en App Store y Google Play
Con EAS (compila en la nube, no hace falta Xcode):
```
npx eas-cli@latest login
npx eas-cli@latest build:configure
npx eas-cli@latest build --platform ios       # y/o android
npx eas-cli@latest submit --platform ios
```
Para las fichas de las tiendas:
- **Privacidad:** la app no recoge datos. Todo se guarda solo en el móvil.
- **Permiso de cámara:** solo para el flash (linterna y SOS). El texto del permiso ya está en `app.json` y en `locales/`.
- **Categoría sugerida:** Utilidades o Referencia. Evita "Medicina": la app da información general, no diagnóstico.

## Estructura
La app tiene dos zonas, cada una con su color:
- **EMERGENCIA** (rojo): lo urgente. Pestañas *Emergencia* y *Auxilios*, más linterna, SOS y Mi ficha.
- **EN CASA** (verde azulado): con calma. Pestañas *Preparar* (kit, ficha, fuentes, ajustes) y *Proyectos* (experimentos).

```
src/
  app/                 Pantallas (cada archivo es una ruta)
    (tabs)/            Emergencia · Auxilios · Preparar · Proyectos
    guia/[id].tsx      Guías de emergencia, supervivencia y primeros auxilios (SIN anuncios)
    proyecto/[id].tsx  Proyectos en casa (zona EN CASA)
    kit.tsx            Checklist del kit + calculadora de agua
    linterna.tsx sos.tsx ficha.tsx ficha-editar.tsx ajustes.tsx fuentes.tsx aviso.tsx
  content/             TODO el contenido, bilingüe, con su fuente
    sources.ts         Lista de fuentes (organismo, título, URL)
    risks.ts           Apagón, inundación, calor, incendio, terremoto, frío, tormenta, gas
    survival.ts        Agua segura, energía, luz y calor, comida, confinarse/evacuar, informarse
    firstaid.ts        PAS, RCP, hemorragias, heridas, quemaduras, atragantamiento…
    projects.ts        Pila de patatas, motor que da luz, brújula, horno solar, filtro de agua
    kit.ts             Elementos del kit
  figures/             Ilustraciones dibujadas en SVG (sin internet, sin fotos con copyright)
  ads/                 Anuncios: banner, vídeos, consentimiento (todo APAGADO en la v1)
  components/          Botón 112, logotipo, vista de guía, linterna
  state/               Ajustes y guardado local
```

## Ilustraciones
- Son dibujos vectoriales propios (`src/figures`). Se ven igual en cualquier pantalla y no necesitan internet.
- Para añadir una: crea el dibujo en `emergency.tsx` o `projects.tsx`, regístralo en `figures/index.tsx` (con su texto alternativo) y ponlo en una sección con `sec('…', '…', [pasos], 'nombreFigura')`.

## Reglas del contenido
- **Cada consejo lleva su fuente** (`st('id_fuente', 'es', 'en')`). En la app se ve como [1], [2]… y abajo la lista de fuentes.
- No se añade ningún consejo sin fuente oficial.
- `npm run check:sources` comprueba que todas las fuentes citadas existen.
- Al revisar el contenido, actualiza `REVIEWED` en `src/content/sources.ts`.

## Anuncios (programados y APAGADOS)
La versión 1 sale **sin anuncios** y **sin el SDK de anuncios dentro** (`ADS_MODE = 'off'` en `src/ads/config.ts`).
Todo el código está hecho y probado: solo hay que encenderlo.

**Dónde salen** (solo en la zona EN CASA; nunca en la zona EMERGENCIA):
- **Banner**: arriba del todo, fijo, en Preparar, Proyectos, cada proyecto, Kit, Ajustes y Fuentes. Va arriba para que nadie lo toque sin querer al buscar el botón 112. No va en "Editar mi ficha" porque tiene datos médicos.
- **Vídeo a pantalla completa** (se puede cerrar): al salir de un proyecto, como mucho 1 de cada 3 y con 5 minutos de separación.
- **Vídeo voluntario** ("Apoya la app"): botón en Preparar. No desbloquea nada; todo sigue gratis.
- **Nunca** sale ningún anuncio en la sesión si se ha pulsado "Llamar al 112", ni vídeos durante 30 minutos después de abrir una guía, la linterna, el SOS o Mi ficha.
- El aviso de privacidad de Google (obligatorio en la UE) solo aparece la primera vez que se entra en la zona EN CASA, nunca al abrir la app. En Ajustes sale el botón "Privacidad de los anuncios".
- Los límites (cada cuántos proyectos, minutos…) se cambian en `src/ads/config.ts`.

**Ver dónde saldrían, sin anuncios reales** (en Expo Go): pon `ADS_MODE = 'preview'`. Salen anuncios de mentira. En la app publicada ese modo no hace nada.

**Activar anuncios reales (AdMob):**
1. Crea la cuenta de AdMob, registra la app (iOS y Android) y crea 3 bloques: banner adaptable, intersticial y bonificado.
2. Instala la librería: `npx expo install react-native-google-mobile-ads`
3. En `app.json`, añade a `plugins` (con TUS IDs de aplicación de AdMob):
   ```json
   ["react-native-google-mobile-ads", {
     "androidAppId": "ca-app-pub-XXXX~XXXX",
     "iosAppId": "ca-app-pub-XXXX~XXXX",
     "delayAppMeasurementInit": true,
     "userTrackingUsageDescription": "Se usa para mostrarte anuncios más relevantes."
   }]
   ```
4. Pon los IDs de tus 3 bloques en `AD_UNIT_IDS` (`src/ads/config.ts`). En desarrollo se usan solos los de prueba de Google.
5. En `src/ads/live.ts` cambia la última línea por: `export { admobBackend as liveBackend } from './backends/admob';`
6. Pon `ADS_MODE = 'live'` en `src/ads/config.ts`.
7. Los anuncios no funcionan en Expo Go: haz una *development build* (`npx eas-cli build --profile development`).
8. En AdMob, configura el mensaje de consentimiento RGPD (Privacidad y mensajes).
9. Actualiza la privacidad en las tiendas: App Store ("Datos recopilados": identificadores y datos de uso para publicidad; quita `privacyManifests` de `app.json` o ajústalo) y Google Play ("Seguridad de los datos" y "Contiene anuncios").
10. Público: declara la app para **mayores de 13 años / público general**. Si la declaras para niños, Google exige anuncios certificados para familias.

`npm run check:ads` comprueba que ninguna pantalla de emergencia importa nada de anuncios.

## Comprobaciones
```
npm run typecheck
npm run check:ads
npm run check:sources
```
