import { validators } from './validators.js';
import { ui } from './ui.js';

/**
 * Controlador principal del formulario.
 * Se encarga de unir la vista (UI) con la lógica (validadores) y manejar los eventos.
 */
export const formController = {
    /**
     * Inicializa todo: pilla los elementos del DOM y les pone los "escuchadores" (listeners).
     * Se llama cuando la página ya ha cargado.
     * @param {Function} onSuccessCallback - Función a ejecutar si la validación es correcta al enviar.
     */
    init: (onSuccessCallback) => {
        // Referencias a los elementos del formulario
        const form = document.getElementById('form-partida');
        const blancasInput = document.getElementById('blancas');
        const negrasInput = document.getElementById('negras');
        const fechaInput = document.getElementById('fecha');
        const resultadoInput = document.getElementById('resultado');

        // Eventos 'input': validamos mientras el usuario escribe para dar feedback rápido
        blancasInput.addEventListener('input', () => formController.validateBlancas());
        negrasInput.addEventListener('input', () => formController.validateNegras());
        fechaInput.addEventListener('input', () => formController.validateFecha());
        resultadoInput.addEventListener('input', () => formController.validateResultado());

        // Evento 'submit': validamos todo junto antes de enviar
        form.addEventListener('submit', (event) => {
            // Prevenimos el envío por defecto para que no recargue la página si hay errores
            event.preventDefault();
            formController.handleSubmit(onSuccessCallback);
        });
    },

    /**
     * Valida el campo del jugador de blancas.
     * Comprueba formato y que no sea igual al de negras.
     * 
     * @returns {boolean} True si todo está correcto.
     */
    validateBlancas: () => {
        const blancasInput = document.getElementById('blancas');
        const negrasInput = document.getElementById('negras');
        const name = blancasInput.value;
        let isValid = true;

        // 1. Validamos formato (solo letras)
        if (!validators.isValidName(name)) {
            ui.showError('err-blancas', 'El nombre debe contener solo letras y espacios.');
            isValid = false;
        } else {
            ui.clearError('err-blancas');
        }

        // 2. Validamos lógica de negocio (no jugar contra uno mismo)
        // Solo si el formato es válido y el otro campo tiene algo escrito
        if (isValid && negrasInput.value && !validators.areNamesDifferent(name, negrasInput.value)) {
            ui.showError('err-blancas', 'Los jugadores no pueden ser iguales.');
            isValid = false;
        }

        return isValid;
    },

    /**
     * Valida el campo del jugador de negras.
     * Es casi igual que el de blancas.
     * 
     * @returns {boolean} True si es válido.
     */
    validateNegras: () => {
        const blancasInput = document.getElementById('blancas');
        const negrasInput = document.getElementById('negras');
        const name = negrasInput.value;
        let isValid = true;

        // 1. Formato
        if (!validators.isValidName(name)) {
            ui.showError('err-negras', 'El nombre debe contener solo letras y espacios.');
            isValid = false;
        } else {
            ui.clearError('err-negras');
        }

        // 2. Lógica de negocio (igualdad)
        if (isValid && blancasInput.value && !validators.areNamesDifferent(blancasInput.value, name)) {
            ui.showError('err-negras', 'Los jugadores no pueden ser iguales.');
            isValid = false;
        }

        return isValid;
    },

    /**
     * Valida que la fecha sea correcta (no futura).
     * 
     * @returns {boolean} True si la fecha vale.
     */
    validateFecha: () => {
        const fechaInput = document.getElementById('fecha');
        const date = fechaInput.value;
        let isValid = true;

        if (!validators.isDateValid(date)) {
            ui.showError('err-fecha', 'La fecha no puede ser futura.');
            isValid = false;
        } else {
            ui.clearError('err-fecha');
        }
        return isValid;
    },

    /**
     * Valida que se haya elegido un resultado.
     * 
     * @returns {boolean} True si hay algo seleccionado.
     */
    validateResultado: () => {
        const resultadoInput = document.getElementById('resultado');
        let isValid = true;
        
        if (!resultadoInput.value) {
            ui.showError('err-resultado', 'Debe seleccionar un resultado.');
            isValid = false;
        } else {
            ui.clearError('err-resultado');
        }
        return isValid;
    },

    /**
     * Función que se ejecuta al intentar enviar el formulario.
     * Llama a todas las validaciones y si todas pasan, ejecuta el callback de éxito.
     * @param {Function} onSuccessCallback - Función a ejecutar si todo es válido.
     */
    handleSubmit: (onSuccessCallback) => {
        // Limpiamos mensaje de éxito anterior por si acaso
        ui.clearSuccess();
        
        // Ejecutamos todas las validaciones para que salgan todos los errores a la vez si los hay
        const isBlancasValid = formController.validateBlancas();
        const isNegrasValid = formController.validateNegras();
        const isFechaValid = formController.validateFecha();
        const isResultadoValid = formController.validateResultado();

        // Si todo es true (AND lógico), entonces el formulario es válido
        if (isBlancasValid && isNegrasValid && isFechaValid && isResultadoValid) {
            // Si todo es válido, ejecutamos el callback pasando los datos
            if (onSuccessCallback) {
                const datos = {
                    blancas: document.getElementById('blancas').value.trim(),
                    negras: document.getElementById('negras').value.trim(),
                    resultado: document.getElementById('resultado').value,
                    fecha: document.getElementById('fecha').value
                };
                onSuccessCallback(datos);
            }
        }
    }
};
