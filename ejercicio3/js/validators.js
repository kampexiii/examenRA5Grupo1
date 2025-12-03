/**
 * Módulo de validaciones.
 * Aquí importamos las regex y creamos las funciones que validan los datos del formulario.
 * Intentamos mantener la lógica separada para que sea más limpio.
 */
import { nameRegex, resultRegex, simpleDateRegex } from './regex.js';

/**
 * Valida si un nombre es correcto usando la regex definida.
 * 
 * @param {string} name - El nombre a validar.
 * @returns {boolean} - True si el nombre es válido (solo letras y espacios), false si no.
 */
export function validateName(name) {
    // Usamos el método .test() de la regex para comprobar si cumple el patrón
    return nameRegex.test(name);
}

/**
 * Comprueba que los dos nombres (jugador blanco y negro) no sean iguales.
 * También comprueba que no estén vacíos.
 * 
 * @param {string} name1 - Nombre del primer jugador.
 * @param {string} name2 - Nombre del segundo jugador.
 * @returns {boolean} - True si son diferentes y válidos, false si son iguales o vacíos.
 */
export function validateDifferentNames(name1, name2) {
    // Normalizamos a minúsculas y quitamos espacios para comparar bien
    const n1 = name1.trim().toLowerCase();
    const n2 = name2.trim().toLowerCase();

    // Verificamos que no estén vacíos y que sean distintos
    return n1 !== "" && n2 !== "" && n1 !== n2;
}

/**
 * Valida el resultado de la partida.
 * 
 * @param {string} result - El resultado introducido (ej: "1-0").
 * @returns {boolean} - True si el formato es correcto según las reglas de ajedrez.
 */
export function validateResult(result) {
    return resultRegex.test(result);
}

/**
 * Valida la fecha de la partida.
 * Comprueba el formato y además que la fecha no sea futura (no podemos jugar mañana hoy).
 * 
 * @param {string} date - La fecha en formato string.
 * @returns {boolean} - True si la fecha es válida y no es futura.
 */
export function validateSimpleDate(date) {
    // Primero miramos si el formato "visual" es correcto con la regex
    if(!simpleDateRegex.test(date)) return false;

    // Sacamos la fecha de hoy en formato ISO (YYYY-MM-DD) para comparar strings directamente
    const hoy = new Date().toISOString().slice(0, 10);
    
    // Si la fecha introducida es mayor que hoy, devolvemos false (no vale)
    return date <= hoy;
}