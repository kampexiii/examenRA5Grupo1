import { partidas } from '../data.js';

/**
 * Actualiza el resumen de partidas en pantalla
 * Muestra el total de partidas y la última partida registrada
 */
export function actualizarResumen() {
  const totalPartidasEl = window['total-partidas'];
  const ultimaPartidaEl = window['ultima-partida'];

  // Actualizar total de partidas
  totalPartidasEl.textContent = `Partidas registradas: ${partidas.length}`;

  // Actualizar última partida
  if (partidas.length > 0) {
    const ultima = partidas[partidas.length - 1];
    ultimaPartidaEl.textContent = `Última partida: ${ultima.blancas} vs ${ultima.negras} — ${ultima.resultado} (${ultima.fecha})`;
  } else {
    ultimaPartidaEl.textContent = '';
  }
}
