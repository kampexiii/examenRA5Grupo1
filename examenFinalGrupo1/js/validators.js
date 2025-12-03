import { nameRegex, resultRegex, simpleDateRegex } from './regex.js';

/**
 * Objeto que contiene todas las funciones de validación pura.
 * Aquí metemos la lógica de negocio para no mezclarla con el DOM.
 * Así es más fácil de testear y reutilizar.
 */
export const validators = {
    /**
     * Comprueba si el nombre es válido (solo letras y espacios).
     * 
     * @param {string} name - El nombre que ha escrito el usuario.
     * @returns {boolean} Devuelve true si cumple la expresión regular.
     */
    isValidName: (name) => {
        return nameRegex.test(name);
    },

    /**
     * Comprueba que los dos jugadores no sean la misma persona.
     * Comparamos los nombres en minúsculas y sin espacios sobrantes para evitar trucos.
     * 
     * @param {string} name1 - Nombre del jugador de blancas.
     * @param {string} name2 - Nombre del jugador de negras.
     * @returns {boolean} True si son diferentes, false si son iguales.
     */
    areNamesDifferent: (name1, name2) => {
        return name1.trim().toLowerCase() !== name2.trim().toLowerCase();
    },

    /**
     * Valida que la fecha no sea futura (puede ser hoy o pasado) y que sea razonable (>= 2000).
     * 
     * @param {string} dateString - La fecha que viene del input type="date" (YYYY-MM-DD).
     * @returns {boolean} True si la fecha es válida (entre 2000 y hoy).
     */
    isDateValid: (dateString) => {
        if (!simpleDateRegex.test(dateString)) return false;
        
        // Desestructuramos la fecha para crear el objeto Date localmente
        // Ojo: en el constructor de Date, los meses van de 0 a 11, por eso restamos 1
        const [year, month, day] = dateString.split('-').map(Number);
        const inputDate = new Date(year, month - 1, day);
        
        // Creamos la fecha de hoy y le quitamos la hora para comparar solo días
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Validar que el año sea razonable (por ejemplo, desde el año 2000)
        if (year < 2000) return false;
        
        // Si la fecha introducida es menor o igual a hoy, es válida
        return inputDate <= today;
    }
};
