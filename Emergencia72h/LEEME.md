# Emergencia 72h: qué hay en esta carpeta

| Carpeta | Qué es |
|---|---|
| `app/` | Código completo de la app (Expo + React Native + TypeScript). Sin `node_modules`. |
| `web/emergencia72h/` | Web de la app: inicio, privacidad y soporte en español, y `en/` en inglés. |
| `tienda/` | Textos para App Store y Google Play, respuestas de los formularios y notas para la revisión. |
| `icono-emergencia72h.png` | Icono de la app, 1024 × 1024 px. |

## Datos de la app

- Nombre en la tienda: **Emergencia 72h: Supervivencia** (inglés: Emergency 72h: Survival Guide).
- Nombre debajo del icono: **Emergencia** (inglés: Emergency).
- Identificador: `com.emergencia72h.app`, el mismo estilo que `com.teddytimer.app` y `com.teddycloset.app`. No se puede cambiar después del primer build.
- Solo iPhone (sin iPad) y Android.
- Correo de soporte: teddytimer.app@gmail.com.

## 1. Probarla en el iPhone con Expo Go

Igual que hiciste con TeddyCloset:

1. Descomprime el zip donde tengas tus otras apps.
2. Entra en la carpeta `app`, haz clic en la barra de dirección, escribe `cmd` y pulsa Enter.
3. Escribe `npm install` y espera a que termine.
4. Escribe `npx expo start`.
5. Escanea el QR con la cámara del iPhone y se abrirá en Expo Go.

**Muy importante con el 112:** en el móvil la llamada es real. Pulsa el botón rojo solo para ver la ventana de confirmación y después pulsa **Cancelar**. Nunca pulses «Sí, llamar al 112» para probar.

Qué comprobar:
- Linterna y señal SOS (te pedirá permiso de cámara la primera vez).
- La ventana de confirmación del 112 (y **Cancelar**).
- Modo ahorro de batería y cambio de idioma en Ajustes.
- Mi ficha: escribe datos de prueba, cierra la app y comprueba que siguen ahí.
- Que todas las guías se lean bien con el modo avión activado.

En Expo Go no verás el icono ni el nombre «Emergencia»: eso solo aparece en la app de verdad (TestFlight).

## 2. Publicarla

Los mismos pasos que con TeddyTimer y TeddyCloset, desde la carpeta `app`:

```
npx eas-cli@latest build --platform ios
npx eas-cli@latest submit --platform ios
```

- Pruébala en **TestFlight** antes de enviarla a revisión. Ahí ya verás el icono y el nombre «Emergencia».
- Rellena la ficha con los textos de `tienda/`.

## 3. Subir la web (GitHub Pages)

La web va dentro de tu repositorio `teddytimer.github.io`, en su propia carpeta, como TeddyCloset:

1. En GitHub, ve a la **página principal** del repositorio `teddytimer.github.io` (no dentro de `teddycloset`).
2. Pulsa «Add file» y luego «Upload files».
3. Arrastra la **carpeta** `emergencia72h` entera (la que está dentro de `web/`).
4. Pulsa «Commit changes».
5. En 1–2 minutos, comprueba:
   - https://teddytimer.github.io/emergencia72h/
   - https://teddytimer.github.io/emergencia72h/privacidad.html
   - Que https://teddytimer.github.io/ sigue mostrando TeddyTimer.

No subas los archivos sueltos a la raíz: sustituirían los de TeddyTimer.

## 4. Mantener el contenido al día

- Las fuentes están en `app/src/content/sources.ts`; la fecha de revisión es `REVIEWED`.
- Los consejos están en `app/src/content/`.
- Revisa las fuentes al menos una vez al año y cuando salgan guías nuevas de reanimación (las actuales son de 2025).

## 5. Anuncios (apagados)

- La v1 sale **sin anuncios**: `ADS_MODE = 'off'` en `app/src/ads/config.ts`.
- Con ese modo no sale ningún banner ni vídeo, tampoco el vídeo voluntario.
- Los pasos para activarlos están en `app/README.md`, sección «Anuncios».
- Si los activas, actualiza antes la política de privacidad y el formulario de datos de las tiendas.
