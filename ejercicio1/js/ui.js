/**
 * Objeto UI (User Interface) para manejar todo lo visual.
 * Aquí ponemos las funciones que tocan el DOM para mostrar errores o mensajes de éxito.
 * Separar esto ayuda a tener el código más ordenado.
 */
export const ui = {
    /**
     * Muestra un mensaje de error en un elemento específico.
     * 
     * @param {string} elementId - El ID del span o div donde va el error.
     * @param {string} message - El texto del error que queremos que lea el usuario.
     */
    showError: (elementId, message) => {
        const errorElement = document.getElementById(elementId);
        // Comprobamos que el elemento existe antes de intentar cambiarlo para que no pete
        if (errorElement) {
            errorElement.textContent = message;
        }
    },

    /**
     * Borra el mensaje de error (lo deja vacío).
     * Se usa cuando el campo ya es válido.
     * 
     * @param {string} elementId - El ID del elemento a limpiar.
     */
    clearError: (elementId) => {
        const errorElement = document.getElementById(elementId);
        if (errorElement) {
            errorElement.textContent = '';
        }
    },

    /**
     * Muestra el mensaje de éxito global cuando todo ha ido bien.
     * 
     * @param {string} message - El mensaje de "Todo OK".
     */
    showSuccess: (message) => {
        const successElement = document.getElementById('ok');
        if (successElement) {
            successElement.textContent = message;
            successElement.style.color = 'green'; // Le pongo color verde para que se vea positivo
        }
    },

    /**
     * Limpia el mensaje de éxito.
     * Útil si queremos resetear el estado visual.
     */
    clearSuccess: () => {
        const successElement = document.getElementById('ok');
        if (successElement) {
            successElement.textContent = '';
        }
    }
};
