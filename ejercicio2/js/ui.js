/**
 * @file ui.js
 * @description Módulo encargado de la Interfaz de Usuario (UI).
 * Aquí ponemos las funciones que modifican el HTML para mostrar datos al usuario.
 */

// Importamos el array de partidas desde data.js.
// OJO: Usamos './data.js' porque está en la misma carpeta.
import { partidas } from './data.js';

/**
 * Actualiza el resumen de partidas en pantalla.
 * Se llama cada vez que añadimos una partida o reseteamos.
 * Muestra el total de partidas y la última partida registrada.
 */
export function actualizarResumen() {
  // Pillamos los elementos del DOM por su ID.
  // Usamos window['id'] que es un truco rápido, pero document.getElementById sería más formal.
  const totalPartidasEl = window['total-partidas'];
  const ultimaPartidaEl = window['ultima-partida'];

  // Actualizamos el texto del contador
  totalPartidasEl.textContent = `Partidas registradas: ${partidas.length}`;

  // Si hay partidas, mostramos la última. Si no, limpiamos el texto.
  if (partidas.length > 0) {
    // Accedemos a la última posición del array: length - 1
    const ultima = partidas[partidas.length - 1];
    
    // Usamos Template Strings (las comillas invertidas `) para formatear bonito
    ultimaPartidaEl.textContent = `Última partida: ${ultima.blancas} vs ${ultima.negras} — ${ultima.resultado} (${ultima.fecha})`;
  } else {
    // Si no hay partidas (array vacío), borramos lo que hubiera
    ultimaPartidaEl.textContent = '';
  }
}
