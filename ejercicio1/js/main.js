import { formController } from './formController.js';

// Punto de entrada: esperamos al DOM listo antes de inicializar los controladores.
document.addEventListener('DOMContentLoaded', () => {
    formController.init();
});
