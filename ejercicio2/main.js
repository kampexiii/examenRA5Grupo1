import { añadirPartida, vaciarPartidas } from './data.js';
import { actualizarResumen } from './ui.js';

// Elementos
const form = window['form-partida'];
const blancasInput = window['blancas'];
const negrasInput = window['negras'];
const resultadoSelect = window['resultado'];
const fechaInput = window['fecha'];
const okMessage = window['ok'];
const btnReset = window['btn-reset'];

// Manejador del formulario
form.onsubmit = function(e) {
  e.preventDefault();

  // Obtener valores del formulario
  const blancas = blancasInput.value.trim();
  const negras = negrasInput.value.trim();
  const resultado = resultadoSelect.value;
  const fecha = fechaInput.value;

  // Validar que todos los campos estén completos
  if (!blancas || !negras || !resultado || !fecha) {
    return;
  }

  // Crear objeto partida
  const partida = {
    blancas: blancas,
    negras: negras,
    resultado: resultado,
    fecha: fecha
  };

  // Añadir partida al array
  añadirPartida(partida);

  // Actualizar resumen
  actualizarResumen();

  // Mostrar mensaje de éxito
  okMessage.textContent = 'Partida registrada correctamente.';
  okMessage.style.color = 'green';

  // Limpiar formulario
  form.reset();

  // Limpiar mensaje después de 3 segundos
  setTimeout(() => {
    okMessage.textContent = '';
  }, 3000);
};

// Manejador del botón Reset
btnReset.onclick = function() {
  // Pedir confirmación
  const confirmacion = confirm('¿Estás seguro de que deseas vaciar el registro de partidas?');

  if (confirmacion) {
    // Vaciar el array
    vaciarPartidas();

    // Actualizar resumen
    actualizarResumen();

    // Mostrar mensaje
    okMessage.textContent = 'Registro vaciado correctamente.';
    okMessage.style.color = 'blue';

    // Limpiar mensaje después de 3 segundos
    setTimeout(() => {
      okMessage.textContent = '';
    }, 3000);
  }
  // Si cancela, no hacer nada
};

// Inicializar resumen al cargar la página
actualizarResumen();
