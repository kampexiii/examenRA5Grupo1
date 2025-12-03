/**
 * Fichero donde guardamos todas las expresiones regulares que vamos a usar en la validación.
 * Así las tenemos todas ordenaditas en un sitio y si hay que cambiar algo, se cambia aquí.
 */

/**
 * Expresión regular para validar nombres.
 * Solo permitimos letras (mayúsculas y minúsculas) y espacios.
 * Nada de números ni caracteres raros en el nombre.
 * @type {RegExp}
 */
export const nameRegex = /^[a-zA-Z\s]+$/;

/**
 * Expresión regular para validar el resultado de la partida.
 * Los valores permitidos son estrictamente: "1-0", "0-1" o "1/2-1/2".
 * Cualquier otra cosa no vale.
 * @type {RegExp}
 */
export const resultRegex = /^(1-0|0-1|1\/2-1\/2)$/;

/**
 * Expresión regular para validar el formato de la fecha.
 * Tiene que ser YYYY-MM-DD (Año-Mes-Día).
 * @type {RegExp}
 */
export const simpleDateRegex = /^\d{4}-\d{2}-\d{2}$/;
