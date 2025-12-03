// Validadores puros para poder probarlos sin tocar el DOM.
export const validators = {
    /**
     * Comprueba que el nombre solo use letras y espacios.
     * @param {string} name Texto que sale del input.
     * @returns {boolean} True si cumple la expresion regular.
     */
    isValidName: (name) => {
        const regex = /^[a-zA-Z\s]+$/;
        return regex.test(name);
    },

    /**
     * Verifica que los dos jugadores no sean la misma persona.
     * @param {string} name1 Nombre que juega con blancas.
     * @param {string} name2 Nombre que juega con negras.
     * @returns {boolean} True si los nombres cambian al menos un caracter.
     */
    areNamesDifferent: (name1, name2) => {
        return name1.trim().toLowerCase() !== name2.trim().toLowerCase();
    },

    /**
     * Comprueba que la fecha existe y no es futura.
     * @param {string} dateString Valor que recibimos del input type="date".
     * @returns {boolean} True si la fecha es hoy o anterior.
     */
    isDateValid: (dateString) => {
        if (!dateString) return false;
        const inputDate = new Date(dateString);
        const today = new Date();
        // Quito horas para comparar solo las fechas y no la hora actual.
        today.setHours(0, 0, 0, 0);
        return inputDate <= today;
    }
};
