import { partidas } from './data.js';

/**
 * Objeto UI (User Interface) para manejar todo lo visual.
 * Aquí ponemos las funciones que tocan el DOM para mostrar errores, mensajes de éxito o resúmenes.
 * Separar esto ayuda a tener el código más ordenado.
 */
export const ui = {
    // --- Funciones de Ejercicio 1 (Errores y Mensajes) ---

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
    },

    // --- Funciones de Ejercicio 2 (Resumen) ---

    /**
     * Actualiza el resumen de partidas en pantalla.
     * Se llama cada vez que añadimos una partida o reseteamos.
     * Muestra el total de partidas y la última partida registrada.
     */
    actualizarResumen: () => {
        const totalPartidasEl = document.getElementById('total-partidas');
        const ultimaPartidaEl = document.getElementById('ultima-partida');

        if (totalPartidasEl) {
            totalPartidasEl.textContent = `Partidas registradas: ${partidas.length}`;
        }

        if (ultimaPartidaEl) {
            if (partidas.length > 0) {
                // Accedemos a la última posición del array: length - 1
                const ultima = partidas[partidas.length - 1];
                // Usamos Template Strings para formatear bonito
                ultimaPartidaEl.textContent = `Última partida: ${ultima.blancas} vs ${ultima.negras} — ${ultima.resultado} (${ultima.fecha})`;
            } else {
                // Si no hay partidas (array vacío), borramos lo que hubiera
                ultimaPartidaEl.textContent = '';
            }
        }
    }
};
