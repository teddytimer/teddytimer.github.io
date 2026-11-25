# Formularios de las tiendas y notas para la revisión

La web va en tu repositorio `teddytimer.github.io`, en una carpeta nueva `emergencia72h`, igual que TeddyCloset (ver LEEME.md).

## Enlaces

- Web: `https://teddytimer.github.io/emergencia72h/`
- Política de privacidad: `https://teddytimer.github.io/emergencia72h/privacidad.html`
- Privacy policy (EN): `https://teddytimer.github.io/emergencia72h/en/privacy.html`
- Soporte: `https://teddytimer.github.io/emergencia72h/soporte.html`
- Correo de soporte: teddytimer.app@gmail.com
- Identificador (Bundle ID y paquete de Android): `com.emergencia72h.app`
- SKU para App Store Connect: `emergencia72h`
- Copyright: `2026 Sara Fernández Becerra`

## Categoría (sugerencia)

- App Store: principal **Utilidades**, secundaria **Referencia**.
- Google Play: **Libros y obras de consulta** o **Herramientas**.
- Evita la categoría Medicina: la app es información general, no una herramienta clínica.

## App Store Connect: privacidad de la app

- ¿Recopilas datos de esta app? **No, no recopilamos datos.**
- Resultado en la ficha: «Datos no recopilados».
- El manifiesto de privacidad ya va en el proyecto (sin rastreo, sin datos recopilados).
- Cifrado de exportación: ya declarado en app.json (`ITSAppUsesNonExemptEncryption: false`), no te lo volverá a preguntar.

## App Store Connect: clasificación por edades

- Responde con sinceridad al cuestionario.
- La app contiene **información médica o de tratamiento** (primeros auxilios generales): márcalo en esa pregunta.
- No hay violencia, contenido sexual, compras ni contenido generado por usuarios.

## Google Play Console: seguridad de los datos

- ¿Tu app recoge o comparte alguno de los tipos de datos de usuario requeridos? **No.**
- Los datos de «Mi ficha» y del kit se guardan solo en el dispositivo y nunca se envían: Google no lo cuenta como recogida.
- Permisos: **CAMERA** (solo para encender el flash). El micrófono está bloqueado.
- Anuncios: **No, mi app no contiene anuncios** (v1).
- Público objetivo: elige 13+ o 18+ para evitar los requisitos de apps para niños. Si eliges menores de 13, Google exige cumplir la política de Familias.
- Si Play Console te muestra el formulario de apps de salud en «Contenido de la app», descríbela como información general de primeros auxilios; no es un dispositivo médico.

## Notas para el revisor de Apple (pegar en «Notas de revisión»)

```
Emergency 72h is an offline emergency guide. No account or login is needed.

- Medical content (guideline 1.4.1): all first-aid content is general information based on official sources (Spanish Red Cross, 112 services, 2025 European resuscitation guidelines via Resuscitation Council UK, public health agencies). Every guide lists its sources at the end with links, and Prepare tab > Official sources lists all of them. The first-launch notice and Prepare tab > Important notice remind users that the app does not replace emergency services and to check with a healthcare professional before making medical decisions.

- Call 112 button: iOS dials emergency numbers immediately without a system prompt, so the app shows its own confirmation ("Call 112 now?") before opening tel:112. To test it, tap the red "Call 112" bar and then "Cancel". Please do not confirm the call.

- Camera permission: used only to turn on the flash for the torch and the SOS signal. The app takes no photos or videos and has no microphone access.

- Data: nothing is collected or sent. "My card" (medical details and contacts) is stored only on the device and can be deleted in Settings > Delete all my data.

- The app is independent and not affiliated with any of the organisations cited.
```

## Notas para Google Play (si piden instrucciones de acceso)

```
No login required. The red "Call 112" bar asks for confirmation before opening the phone dialer; please tap "Cancel" when testing. Camera permission is used only for the flash (torch and SOS).
```

## Si el nombre ya está cogido

App Store Connect avisa al crear la app si otra app ya usa ese nombre exacto. Alternativas que caben en 30 caracteres:
- `Emergencia 72h: Kit y Apagón`
- `Emergencia 72h: Primeros Aux.`

## Capturas de pantalla

- La app es solo para iPhone (`supportsTablet: false`), así que Apple no pide capturas de iPad.

- Hazlas desde el simulador de iOS y el emulador de Android con la app compilada (no desde la versión web).
- Sugeridas: inicio Emergencia, una guía con ilustración (RCP), linterna/SOS, kit, proyecto de la pila de patatas.
- No hagas capturas que muestren datos reales de «Mi ficha».
