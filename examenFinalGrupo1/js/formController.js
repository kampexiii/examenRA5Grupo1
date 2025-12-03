import { validators } from './validators.js';
import { ui } from './ui.js';

export const formController = {
    /**
     * Inicializa el controlador.
     * @param {Function} onSuccessCallback - Función a ejecutar si la validación es correcta al enviar.
     */
    init: (onSuccessCallback) => {
        const form = document.getElementById('form-partida');
        const blancasInput = document.getElementById('blancas');
        const negrasInput = document.getElementById('negras');
        const fechaInput = document.getElementById('fecha');
        const resultadoInput = document.getElementById('resultado');

        // Validación en tiempo real
        blancasInput.addEventListener('input', () => formController.validateBlancas());
        negrasInput.addEventListener('input', () => formController.validateNegras());
        fechaInput.addEventListener('input', () => formController.validateFecha());
        resultadoInput.addEventListener('input', () => formController.validateResultado());

        // Envío del formulario
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            formController.handleSubmit(onSuccessCallback);
        });
    },

    validateBlancas: () => {
        const blancasInput = document.getElementById('blancas');
        const negrasInput = document.getElementById('negras');
        const name = blancasInput.value;
        let isValid = true;

        if (!validators.isValidName(name)) {
            ui.showError('err-blancas', 'El nombre debe contener solo letras y espacios.');
            isValid = false;
        } else {
            ui.clearError('err-blancas');
        }

        if (isValid && negrasInput.value && !validators.areNamesDifferent(name, negrasInput.value)) {
            ui.showError('err-blancas', 'Los jugadores no pueden ser iguales.');
            isValid = false;
        }

        return isValid;
    },

    validateNegras: () => {
        const blancasInput = document.getElementById('blancas');
        const negrasInput = document.getElementById('negras');
        const name = negrasInput.value;
        let isValid = true;

        if (!validators.isValidName(name)) {
            ui.showError('err-negras', 'El nombre debe contener solo letras y espacios.');
            isValid = false;
        } else {
            ui.clearError('err-negras');
        }

        if (isValid && blancasInput.value && !validators.areNamesDifferent(blancasInput.value, name)) {
            ui.showError('err-negras', 'Los jugadores no pueden ser iguales.');
            isValid = false;
        }

        return isValid;
    },

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

    handleSubmit: (onSuccessCallback) => {
        ui.clearSuccess();
        
        const isBlancasValid = formController.validateBlancas();
        const isNegrasValid = formController.validateNegras();
        const isFechaValid = formController.validateFecha();
        const isResultadoValid = formController.validateResultado();

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
