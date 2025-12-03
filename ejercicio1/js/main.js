// Punto de entrada sencillo: cuando la pagina esta lista arranco el controlador del formulario.
import { formController } from './formController.js';

document.addEventListener('DOMContentLoaded', () => {
    // Uso DOMContentLoaded para asegurar que los elementos existen antes de buscarlos.
    formController.init();
});
