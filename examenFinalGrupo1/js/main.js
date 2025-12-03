import { formController } from './formController.js';
import { añadirPartida, vaciarPartidas } from './data.js';
import { ui } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
    
    // Inicializar el controlador del formulario
    // Pasamos una función callback que se ejecutará cuando el formulario sea válido y se envíe
    formController.init((datosPartida) => {
        // 1. Añadir partida a los datos
        añadirPartida(datosPartida);

        // 2. Actualizar la interfaz (resumen)
        ui.actualizarResumen();

        // 3. Mostrar mensaje de éxito
        ui.showSuccess('Partida registrada correctamente.');

        // 4. Limpiar el formulario
        document.getElementById('form-partida').reset();

        // 5. Quitar mensaje de éxito tras unos segundos
        setTimeout(() => {
            ui.clearSuccess();
        }, 3000);
    });

    // Inicializar el resumen (por si hubiera datos precargados, aunque empieza vacío)
    ui.actualizarResumen();

    // Manejar el botón Reset
    const btnReset = document.getElementById('btn-reset');
    if (btnReset) {
        btnReset.onclick = () => {
            const confirmacion = confirm('¿Estás seguro de que deseas vaciar el registro de partidas?');
            if (confirmacion) {
                vaciarPartidas();
                ui.actualizarResumen();
                ui.showSuccess('Registro vaciado correctamente.');
                
                // Cambiar color temporalmente a azul como pedía el ejercicio 2 (opcional, pero consistente)
                const okMsg = document.getElementById('ok');
                if(okMsg) okMsg.style.color = 'blue';

                setTimeout(() => {
                    ui.clearSuccess();
                }, 3000);
            }
        };
    }
});
