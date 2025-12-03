import { validators } from './validators.js';
import { ui } from './ui.js';

export const formController = {
    init: () => {
        const form = document.getElementById('form-partida');
        const blancasInput = document.getElementById('blancas');
        const negrasInput = document.getElementById('negras');
        const fechaInput = document.getElementById('fecha');
        const resultadoInput = document.getElementById('resultado');

        // Real-time validation
        blancasInput.addEventListener('input', () => formController.validateBlancas());
        negrasInput.addEventListener('input', () => formController.validateNegras());
        fechaInput.addEventListener('input', () => formController.validateFecha());
        resultadoInput.addEventListener('input', () => formController.validateResultado());

        // Submit validation
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            formController.handleSubmit();
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

        // Check equality if both have values
        if (isValid && negrasInput.value && !validators.areNamesDifferent(name, negrasInput.value)) {
             ui.showError('err-blancas', 'Los jugadores no pueden ser iguales.');
             isValid = false;
        } else if (isValid) {
             // If this is valid, we should also clear the error on the other field if it was about equality
             // But to keep it simple, we just clear this one's error if it was set.
             // Ideally we re-validate the other field too, but let's stick to this field's error.
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

    handleSubmit: () => {
        ui.clearSuccess();
        
        const isBlancasValid = formController.validateBlancas();
        const isNegrasValid = formController.validateNegras();
        const isFechaValid = formController.validateFecha();
        const isResultadoValid = formController.validateResultado();

        if (isBlancasValid && isNegrasValid && isFechaValid && isResultadoValid) {
            ui.showSuccess('Partida registrada correctamente.');
        }
    }
};
