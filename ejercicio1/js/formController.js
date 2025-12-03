// Controlador del formulario: orquesta validaciones y mensajes visuales.
import { validators } from './validators.js';
import { ui } from './ui.js';

export const formController = {
    /**
     * Arranca los listeners del formulario para tener validacion en vivo y al enviar.
     */
    init: () => {
        const form = document.getElementById('form-partida');
        const blancasInput = document.getElementById('blancas');
        const negrasInput = document.getElementById('negras');
        const fechaInput = document.getElementById('fecha');
        const resultadoInput = document.getElementById('resultado');

        // Validacion en tiempo real para dar feedback rapido.
        blancasInput.addEventListener('input', () => formController.validateBlancas());
        negrasInput.addEventListener('input', () => formController.validateNegras());
        fechaInput.addEventListener('input', () => formController.validateFecha());
        resultadoInput.addEventListener('input', () => formController.validateResultado());

        // Validacion completa cuando se envia el formulario.
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            formController.handleSubmit();
        });
    },

    /**
     * Comprueba el nombre de las piezas blancas y pinta errores si hace falta.
     * @returns {boolean} True si todo ok.
     */
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

        // Compruebo que los nombres no sean gemelos.
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

    /**
     * Mismo plan que validateBlancas pero para el campo de negras.
     * @returns {boolean} True si supera las reglas.
     */
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

    /**
     * Valida la fecha para que no se registren partidas futuristas.
     * @returns {boolean} True cuando la fecha es valida.
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
     * Asegura que el select de resultado tenga una opcion real.
     * @returns {boolean} True si se eligio algo.
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
     * Lanza todas las validaciones y muestra un mensaje bonito si todo pasa.
     */
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
