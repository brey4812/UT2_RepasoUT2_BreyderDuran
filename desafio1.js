/**
 * @fileoverview Desafío 1: Evaluación del estado del material y ventaja en una partida de ajedrez.
 * @author Breyder Duran
 */

/** @const {number} Valor relativo del Peón */
const PEON = 1;
/** @const {number} Valor relativo del Caballo */
const CABALLO = 3;
/** @const {number} Valor relativo del Alfil */
const ALFIL = 3;
/** @const {number} Valor relativo de la Torre */
const TORRE = 5;
/** @const {number} Valor relativo de la Dama */
const DAMA = 9;

/** @type {number} Puntos acumulados por las piezas blancas */
let puntoBlancas = 0;
/** @type {number} Puntos acumulados por las piezas negras */
let puntoNegros = 0;
/** @type {number} Número actual de la jugada */
let jugada = 10;

// Comentario del compañero: Se simula la captura sumandole el valor de cada pieza a cada bando
// Comentario del autor/a: Correcto, se asignan valores para determinar la diferencia de puntos.
puntoNegros += PEON;
puntoBlancas += CABALLO;
puntoNegros += TORRE;
puntoBlancas += DAMA;

/** @type {string} Mensaje representativo de la ventaja material */
let ventaja = "";

// Comentario del compañero: Estructura condicional para calcular qué jugador tiene ventaja y de cuántos puntos.
// Comentario del autor/a: Correcto, evalúa si ganan negras, blancas o si están empatados y formatea la cadena resultante.
if (puntoNegros > puntoBlancas) {
    ventaja = `${puntoNegros - puntoBlancas} pts (para negro ♚)`;
} else if (puntoBlancas > puntoNegros) {
    ventaja = `${puntoBlancas - puntoNegros} pts (para blanco ♔)`;
} else {
    ventaja = `empatados`;
}

/** @type {string} Determina el turno según si el número de jugada es par o impar */
let turno = jugada % 2 === 0 ? "Mueven Blancas ♔" : "Mueven Negras ♚";

console.log(`Puntuacion Blancas: ${puntoBlancas} | Puntuacion Negras: ${puntoNegros}`);
console.log(`Ventaja Material: ${ventaja}`);
console.log(`Estado del turo: ${jugada} (${turno})`);

console.log(`Tipo de dato de jugada: ${typeof jugada}`);