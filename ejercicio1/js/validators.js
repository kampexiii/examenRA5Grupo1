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
        // Usamos una regex para permitir solo letras (mayúsculas/minúsculas) y espacios.
        // ^ indica principio de línea y $ final, para que valide todo el string.
        const regex = /^[a-zA-Z\s]+$/;
        return regex.test(name);
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
        // trim() quita espacios al principio y final, toLowerCase() lo pone todo en minúsculas
        return name1.trim().toLowerCase() !== name2.trim().toLowerCase();
    },

    /**
     * Valida que la fecha no sea futura (puede ser hoy o pasado).
     * 
     * @param {string} dateString - La fecha que viene del input type="date" (YYYY-MM-DD).
     * @returns {boolean} True si la fecha es válida (hoy o antes).
     */
    isDateValid: (dateString) => {
        if (!dateString) return false; // Si no hay fecha, no es válida
        
        // Desestructuramos la fecha para crear el objeto Date localmente
        // Ojo: en el constructor de Date, los meses van de 0 a 11, por eso restamos 1
        const [year, month, day] = dateString.split('-').map(Number);
        const inputDate = new Date(year, month - 1, day);
        
        // Creamos la fecha de hoy y le quitamos la hora para comparar solo días
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        // Si la fecha introducida es menor o igual a hoy, es válida
        return inputDate <= today;
    }
};

/*
// Pruebas unitarias rápidas (descomentar temporalmente y ejecutar con Node habilitando ES Modules,
// por ejemplo `node --experimental-modules validators.js` o declarando "type": "module" en package.json):
if (import.meta.url === `file://${process.argv[1]}`) {
    console.assert(validators.isValidName('Ana Pérez') === false, 'No permite tildes por diseño.');
    console.assert(validators.isValidName('Ana Perez') === true, 'Acepta letras y espacios.');
    console.assert(validators.areNamesDifferent('Ana', 'ana') === false, 'Compara sin distinguir mayúsculas.');
    console.assert(validators.areNamesDifferent('Ana', 'Luis') === true, 'Detecta jugadores distintos.');

    const today = new Date().toISOString().slice(0, 10);
    console.assert(validators.isDateValid(today) === true, 'Acepta la fecha actual.');
    console.assert(validators.isDateValid('2999-01-01') === false, 'Rechaza fechas futuras.');

    console.log('Todas las pruebas de validators.js han pasado.');
}
*/
