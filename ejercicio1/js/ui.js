/**
 * Encapsula la manipulación del DOM para mostrar y limpiar mensajes de interfaz.
 */
export const ui = {
    /**
     * Pinta un mensaje de error en el contenedor indicado.
     * @param {string} elementId - Identificador del elemento de error en el DOM.
     * @param {string} message - Mensaje descriptivo a mostrar.
     */
    showError: (elementId, message) => {
        const errorElement = document.getElementById(elementId);
        if (errorElement) {
            errorElement.textContent = message;
        }
    },
    /**
     * Limpia el mensaje de error de un contenedor dado.
     * @param {string} elementId - Identificador del elemento de error en el DOM.
     */
    clearError: (elementId) => {
        const errorElement = document.getElementById(elementId);
        if (errorElement) {
            errorElement.textContent = '';
        }
    },
    /**
     * Muestra el mensaje de éxito principal en pantalla.
     * @param {string} message - Texto a mostrar como confirmación.
     */
    showSuccess: (message) => {
        const successElement = document.getElementById('ok');
        if (successElement) {
            successElement.textContent = message;
            successElement.style.color = 'green'; // Opcional: realza visualmente el estado de éxito
        }
    },
    /**
     * Elimina cualquier mensaje de éxito activo en la interfaz.
     */
    clearSuccess: () => {
        const successElement = document.getElementById('ok');
        if (successElement) {
            successElement.textContent = '';
        }
    }
};
