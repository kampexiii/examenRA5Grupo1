/**
 * Conjunto de validadores puros que encapsulan las reglas de negocio del formulario.
 */
export const validators = {
    /**
     * Comprueba que un nombre solo contenga letras y espacios.
     * @param {string} name - Nombre del jugador introducido por el usuario.
     * @returns {boolean} Resultado de la validación sintáctica.
     */
    isValidName: (name) => {
        const regex = /^[a-zA-Z\s]+$/;
        return regex.test(name);
    },
    /**
     * Evalúa si dos nombres representan jugadores distintos en comparación insensible a mayúsculas.
     * @param {string} name1 - Primer nombre de jugador.
     * @param {string} name2 - Segundo nombre de jugador.
     * @returns {boolean} `true` cuando los jugadores son distintos.
     */
    areNamesDifferent: (name1, name2) => {
        return name1.trim().toLowerCase() !== name2.trim().toLowerCase();
    },
    /**
     * Determina si la fecha proporcionada pertenece al pasado o al día actual.
     * @param {string} dateString - Fecha en formato ISO `YYYY-MM-DD` proveniente del input.
     * @returns {boolean} `true` cuando la fecha no supera el día de hoy.
     */
    isDateValid: (dateString) => {
        if (!dateString) return false;
        // Parseamos manualmente para mantener la zona horaria local y evitar desajustes por UTC
        const [year, month, day] = dateString.split('-').map(Number);
        const inputDate = new Date(year, month - 1, day);
        
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
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
