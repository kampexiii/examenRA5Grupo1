/**
 * @file data.js
 * @description Módulo encargado de la gestión de los datos de la aplicación.
 * Aquí es donde almacenamos el estado de las partidas.
 * @author Alumno DAW
 */

// Array para almacenar las partidas.
// Lo exportamos para que otros módulos (como ui.js) puedan leerlo.
// Usamos 'let' aunque sea un array porque si quisiéramos reasignarlo en el futuro podríamos,
// aunque para arrays constantes 'const' suele ser mejor práctica si solo hacemos push.
// Pero bueno, aquí lo dejamos así para tener flexibilidad.
export let partidas = [];

/**
 * Añade una nueva partida al array de partidas.
 * Recibe un objeto con los datos y lo mete al final del array.
 * 
 * @param {Object} partida - Objeto con los datos de la partida
 * @param {string} partida.blancas - Nombre del jugador con piezas blancas
 * @param {string} partida.negras - Nombre del jugador con piezas negras
 * @param {string} partida.resultado - Resultado de la partida (1-0, 0-1, 1/2-1/2)
 * @param {string} partida.fecha - Fecha en la que se jugó
 */
export function añadirPartida(partida) {
  // Usamos el método push para añadir el elemento al final del array
  partidas.push(partida);
  // console.log('Partida añadida:', partida); // Para depurar si hace falta
}

/**
 * Vacía el array de partidas.
 * Útil para el botón de reset.
 */
export function vaciarPartidas() {
  // Una forma rápida de vaciar un array en JS es poner su longitud a 0.
  // Esto es mejor que asignar [] porque mantenemos la referencia original.
  partidas.length = 0;
}
