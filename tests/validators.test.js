// Pruebas unitarias sencillas para los validadores.
// Estan pensadas para que el profe las pueda ejecutar con `npm test` sin tocar nada.

import test from 'node:test';
import assert from 'node:assert/strict';

import { validators } from '../ejercicio1/js/validators.js';

test('isValidName acepta nombres con espacios', () => {
    // Este caso cubre nombres compuestos tipicos.
    assert.equal(validators.isValidName('Juan Lopez'), true);
});

test('isValidName falla cuando hay numeros', () => {
    // Prevengo cosas raras como "Jugador1".
    assert.equal(validators.isValidName('Jugador123'), false);
});

test('areNamesDifferent detecta nombres iguales en distinta mayuscula', () => {
    // Aqui compruebo que la comparacion ignora mayusculas/minusculas y espacios.
    assert.equal(validators.areNamesDifferent('Ana', ' ana '), false);
});

test('areNamesDifferent devuelve true cuando no coinciden', () => {
    // Si los nombres son distintos debe dejar continuar la partida.
    assert.equal(validators.areNamesDifferent('Ana', 'Luis'), true);
});

test('isDateValid permite fechas pasadas', () => {
    // Uso una fecha muy antigua para evitar lios con la zona horaria local.
    const formatted = '2000-01-01';
    assert.equal(validators.isDateValid(formatted), true);
});

test('isDateValid bloquea fechas futuras', () => {
    // Sumo un dia para asegurar que el validador lo detecta como futuro.
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const formatted = tomorrow.toISOString().split('T')[0];
    assert.equal(validators.isDateValid(formatted), false);
});
