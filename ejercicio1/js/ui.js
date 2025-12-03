// Utilidades de UI para centralizar mensajes y poder cambiarlos rapido.
export const ui = {
    /**
     * Muestra un error concreto bajo el input indicado.
     * @param {string} elementId Span objetivo donde pintamos el texto.
     * @param {string} message Mensaje que se ve en pantalla.
     */
    showError: (elementId, message) => {
        const errorElement = document.getElementById(elementId);
        if (errorElement) {
            errorElement.textContent = message;
        }
    },

    /**
     * Elimina el texto de error cuando deja de ser necesario.
     * @param {string} elementId Span objetivo.
     */
    clearError: (elementId) => {
        const errorElement = document.getElementById(elementId);
        if (errorElement) {
            errorElement.textContent = '';
        }
    },

    /**
     * Enseña un mensaje de exito general en el bloque principal.
     * @param {string} message Texto confirmando la partida.
     */
    showSuccess: (message) => {
        const successElement = document.getElementById('ok');
        if (successElement) {
            successElement.textContent = message;
            successElement.style.color = 'green'; // Optional: make it look like success
        }
    },

    /**
     * Limpia el mensaje de exito para dejar la pantalla limpia.
     */
    clearSuccess: () => {
        const successElement = document.getElementById('ok');
        if (successElement) {
            successElement.textContent = '';
        }
    }
};
