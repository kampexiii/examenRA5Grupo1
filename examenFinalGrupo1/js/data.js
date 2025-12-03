// Array para almacenar las partidas
export let partidas = [];

/**
 * Añade una nueva partida al array
 * @param {Object} partida - Objeto con blancas, negras, resultado y fecha
 * @param {string} partida.blancas - Nombre del jugador con piezas blancas
 * @param {string} partida.negras - Nombre del jugador con piezas negras
 * @param {string} partida.resultado - Resultado de la partida
 * @param {string} partida.fecha - Fecha de la partida
 */
export function añadirPartida(partida) {
  partidas.push(partida);
}

/**
 * Vacía el array de partidas
 */
export function vaciarPartidas() {
  partidas.length = 0;
}
