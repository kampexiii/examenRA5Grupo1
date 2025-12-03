import { nameRegex, resultRegex, simpleDateRegex } from './regex.js';

/**
 * Conjunto de validadores que utilizan expresiones regulares.
 */
export const validators = {
    /**
     * Comprueba que un nombre solo contenga letras y espacios.
     */
    isValidName: (name) => {
        return nameRegex.test(name);
    },
    /**
     * Evalúa si dos nombres son diferentes (insensible a mayúsculas).
     */
    areNamesDifferent: (name1, name2) => {
        return name1.trim().toLowerCase() !== name2.trim().toLowerCase();
    },
    /**
     * Determina si la fecha es válida (formato y no futura).
     */
    isDateValid: (dateString) => {
        if (!simpleDateRegex.test(dateString)) return false;
        
        // Parseamos manualmente para mantener la zona horaria local
        const [year, month, day] = dateString.split('-').map(Number);
        const inputDate = new Date(year, month - 1, day);
        
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        return inputDate <= today;
    }
};
