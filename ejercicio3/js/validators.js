//Importar las regex de regex.js
import { nameRegex, resultRegex, simpleDateRegex } from './regex.js';

//Función para validar el nombre
export function validateName(name) {
    return nameRegex.test(name);
}

//Funcion validar que los nombres no sean iguales
export function validateDifferentNames(name1, name2) {
    return name1.trim().toLowerCase() !== "" && name2.trim().toLowerCase() !== "" && name1.trim().toLowerCase() !== name2.trim().toLowerCase();
}

//Función para validar el resultado
export function validateResult(result) {
    return resultRegex.test(result);
}

//Función para validar la fecha simple
export function validateSimpleDate(date) {
    if(!simpleDateRegex.test(date)) return false;

    const hoy = new Date().toISOString().slice(0, 10);
    return date <= hoy;
}