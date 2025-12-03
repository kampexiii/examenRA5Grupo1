import { partidas } from './data.js';

export const ui = {
    // --- Funciones de Ejercicio 1 (Errores y Mensajes) ---
    showError: (elementId, message) => {
        const errorElement = document.getElementById(elementId);
        if (errorElement) {
            errorElement.textContent = message;
        }
    },
    clearError: (elementId) => {
        const errorElement = document.getElementById(elementId);
        if (errorElement) {
            errorElement.textContent = '';
        }
    },
    showSuccess: (message) => {
        const successElement = document.getElementById('ok');
        if (successElement) {
            successElement.textContent = message;
            successElement.style.color = 'green';
        }
    },
    clearSuccess: () => {
        const successElement = document.getElementById('ok');
        if (successElement) {
            successElement.textContent = '';
        }
    },

    // --- Funciones de Ejercicio 2 (Resumen) ---
    actualizarResumen: () => {
        const totalPartidasEl = document.getElementById('total-partidas');
        const ultimaPartidaEl = document.getElementById('ultima-partida');

        if (totalPartidasEl) {
            totalPartidasEl.textContent = `Partidas registradas: ${partidas.length}`;
        }

        if (ultimaPartidaEl) {
            if (partidas.length > 0) {
                const ultima = partidas[partidas.length - 1];
                ultimaPartidaEl.textContent = `Última partida: ${ultima.blancas} vs ${ultima.negras} — ${ultima.resultado} (${ultima.fecha})`;
            } else {
                ultimaPartidaEl.textContent = '';
            }
        }
    }
};
