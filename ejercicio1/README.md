# Documentación de Ejercicio 1

## Estructura
- `js/main.js`: punto de entrada que inicializa el controlador cuando el DOM está listo.
- `js/formController.js`: orquesta la captura de eventos y la validación de cada campo del formulario.
- `js/ui.js`: utilidades de interfaz que encapsulan el manejo de mensajes de error y éxito.
- `js/validators.js`: reglas de negocio puras y reutilizables para validar nombres, fechas y resultados.

## Flujo de validación
1. `main.js` espera el evento `DOMContentLoaded` e invoca `formController.init()`.
2. `formController` registra validaciones en tiempo real y al enviar el formulario.
3. Cada verificación delega en `validators` para mantener las reglas centralizadas.
4. Las notificaciones al usuario se delegan en `ui`, evitando mezclar lógica de negocio con manipulación del DOM.

## Pruebas unitarias
Se han dejado pruebas con `console.assert` comentadas al final de `js/validators.js`. Para ejecutarlas:
1. Descomenta el bloque indicado.
2. Ejecuta `node --experimental-modules js/validators.js` (o configura `"type": "module"` en `package.json`).
3. Vuelve a comentar el bloque tras la verificación para no ejecutar pruebas en producción.
