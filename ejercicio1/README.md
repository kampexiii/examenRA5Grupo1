# Guia rapida de buenas practicas

Hola profe, dejo por aqui lo que estoy aplicando para mantener el proyecto ordenado:

## Estructura del proyecto
- `js/` guarda la logica separada por responsabilidad: validadores, ui y controlador.
- `style.css` solo se encarga del estilo; no meto reglas inline en el HTML.
- `index.html` carga los modulos con `type="module"` para poder usar imports sencillos.

## Buenas practicas que sigo
1. **Responsabilidad unica**: cada archivo hace una cosa concreta (validar, pintar, coordinar).
2. **Nombres claros**: uso identificadores que cuentan para que sirve cada variable.
3. **Feedback rapido**: valido en tiempo real y al enviar para que el usuario no se quede sin pistas.
4. **DOM limpio**: centralizo la escritura de mensajes en `ui.js` para evitarnos duplicar codigo.
5. **Codigo explicativo**: añado comentarios cortos cuando la intencion no es obvia.
6. **Funciones puras**: los validadores no tocan el DOM, asi es facil prueba.

## Flujo de la app
1. `main.js` espera a `DOMContentLoaded` y arranca el `formController`.
2. `formController` engancha los eventos y usa `validators` + `ui` para dar feedback.
3. `validators` comprueba nombres, fecha y resultado.
4. `ui` escribe los mensajes o los borra segun corresponda.

## Pruebas unitarias
Las pruebas viven en `tests/validators.test.js` y se lanzan con el comando:

```bash
npm test
```

Uso el runner nativo de Node (`node:test`) porque viene con la instalacion y no hace falta instalar nada mas.

## Siguientes pasos posibles
- Meter `eslint` con reglas basicas para cazar despistes.
- Guardar las partidas validas en `localStorage` o en una API si la tuviera.
- Añadir tests para `formController` usando un DOM simulado (por ejemplo JSDOM).
