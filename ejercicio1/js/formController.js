import { validators } from './validators.js';
import { ui } from './ui.js';

/**
 * Gestiona el ciclo de vida del formulario de partidas, inicializando eventos
 * y delegando las validaciones en módulos especializados.
 */
export const formController = {
    /**
     * Registra listeners de validación en vivo y controla el envío del formulario.
     */
    init: () => {
        const form = document.getElementById('form-partida');
        const blancasInput = document.getElementById('blancas');
        const negrasInput = document.getElementById('negras');
        const fechaInput = document.getElementById('fecha');
        const resultadoInput = document.getElementById('resultado');

        // Validación en tiempo real para ofrecer feedback inmediato
        blancasInput.addEventListener('input', () => formController.validateBlancas());
        negrasInput.addEventListener('input', () => formController.validateNegras());
        fechaInput.addEventListener('input', () => formController.validateFecha());
        resultadoInput.addEventListener('input', () => formController.validateResultado());

        // Validación previa al envío para evitar submits con datos incorrectos
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            formController.handleSubmit();
        });
    },

    /**
     * Valida el jugador de blancas comprobando formato y que no coincida con negras.
     * @returns {boolean} `true` si supera todas las reglas de negocio.
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

        // Si ambos campos tienen texto, comprobamos que no representen al mismo jugador
        if (isValid && negrasInput.value && !validators.areNamesDifferent(name, negrasInput.value)) {
            ui.showError('err-blancas', 'Los jugadores no pueden ser iguales.');
            isValid = false;
        } else if (isValid) {
            // Evitamos limpiar el error del otro campo para no interferir con su flujo de validación.
        }

        return isValid;
    },

    /**
     * Valida el jugador de negras replicando la lógica del campo de blancas.
     * @returns {boolean} `true` si el valor es aceptable.
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
     * Comprueba que la fecha no sea futura antes de permitir el registro.
     * @returns {boolean} `true` cuando la fecha es válida.
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
     * Verifica que exista una selección de resultado.
     * @returns {boolean} `true` si se ha indicado un resultado.
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
     * Ejecuta todas las validaciones en cadena y muestra el feedback final.
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
