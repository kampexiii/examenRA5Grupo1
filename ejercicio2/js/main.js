/**
 * @file main.js
 * @description Punto de entrada principal de la aplicación.
 * Aquí manejamos los eventos del usuario (submit del formulario, click en reset).
 */

// Importamos las funciones que necesitamos de los otros módulos
import { añadirPartida, vaciarPartidas } from './data.js';
import { actualizarResumen } from './ui.js';

// --- Referencias a elementos del DOM ---
// Usamos window['id'] para acceder directamente a los elementos por su ID.
// Es cómodo, pero hay que tener cuidado de que los IDs existan en el HTML.
const form = window['form-partida'];
const blancasInput = window['blancas'];
const negrasInput = window['negras'];
const resultadoSelect = window['resultado'];
const fechaInput = window['fecha'];
const okMessage = window['ok'];
const btnReset = window['btn-reset'];

/**
 * Manejador del evento 'submit' del formulario.
 * Se ejecuta cuando el usuario intenta guardar una partida.
 * 
 * @param {Event} e - El evento del formulario
 */
form.onsubmit = function(e) {
  // IMPORTANTE: Prevenir el comportamiento por defecto para que no se recargue la página
  e.preventDefault();

  // 1. Obtener valores del formulario
  // Usamos .trim() para quitar espacios en blanco al principio y final (buena práctica)
  const blancas = blancasInput.value.trim();
  const negras = negrasInput.value.trim();
  const resultado = resultadoSelect.value;
  const fecha = fechaInput.value;

  // 2. Validar que todos los campos estén completos
  // Si alguno es string vacío o null, salimos de la función.
  // (Aunque el HTML tenga 'required', nunca está de más validar en JS)
  if (!blancas || !negras || !resultado || !fecha) {
    // Podríamos mostrar un error aquí, pero por ahora solo salimos
    return;
  }

  // 3. Crear objeto partida con los datos limpios
  const partida = {
    blancas: blancas,
    negras: negras,
    resultado: resultado,
    fecha: fecha
  };

  // 4. Añadir partida al array (llamamos a la función de data.js)
  añadirPartida(partida);

  // 5. Actualizar la interfaz (llamamos a la función de ui.js)
  actualizarResumen();

  // 6. Feedback al usuario
  okMessage.textContent = 'Partida registrada correctamente.';
  okMessage.style.color = 'green'; // Ponemos el texto en verde

  // 7. Limpiar el formulario para la siguiente partida
  form.reset();

  // 8. Truco: Limpiar el mensaje de éxito después de 3 segundos
  setTimeout(() => {
    okMessage.textContent = '';
  }, 3000);
};

/**
 * Manejador del botón Reset.
 * Borra todas las partidas guardadas.
 */
btnReset.onclick = function() {
  // Pedir confirmación al usuario antes de borrar todo (UX básica)
  const confirmacion = confirm('¿Estás seguro de que deseas vaciar el registro de partidas?');

  if (confirmacion) {
    // Si dice que sí, vaciamos el array
    vaciarPartidas();

    // Y actualizamos la UI para que se vea que está vacío
    actualizarResumen();

    // Mensaje de feedback
    okMessage.textContent = 'Registro vaciado correctamente.';
    okMessage.style.color = 'blue';

    // Borramos el mensaje a los 3 segundos
    setTimeout(() => {
      okMessage.textContent = '';
    }, 3000);
  }
  // Si cancela (confirmacion === false), no hacemos nada
};

// --- Inicialización ---
// Llamamos a actualizarResumen al cargar la página para asegurarnos
// de que el contador empieza bien (en 0).
actualizarResumen();
