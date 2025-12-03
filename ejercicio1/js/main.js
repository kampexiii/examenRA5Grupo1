import { formController } from './formController.js';

/**
 * Punto de entrada principal de la aplicación.
 * Esperamos a que el DOM esté completamente cargado (DOMContentLoaded)
 * para asegurarnos de que los elementos HTML existen antes de intentar acceder a ellos.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Iniciamos el controlador del formulario
    formController.init();
});
