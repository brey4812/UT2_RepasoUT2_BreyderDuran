/**
 * @fileoverview Desafío 2: Reglas avanzadas de ajedrez (enroque, movimiento de piezas) y cálculo geométrico.
 * @author Breyder Duran
 */

/** @type {boolean} Indica si el rey se ha movido previamente */
let ReyMovido = false;
/** @type {boolean} Indica si la torre se ha movida previamente */
let torreMovida = false;
/** @type {boolean} Indica si el rey está actualmente en jaque */
let enJaque = false;

// Comentario del compañero: Valida si se cumplen todas las condiciones necesarias para permitir el enroque.
// Comentario del autor/a: Correcto, si alguna condición falla, el enroque se considera ilegal en esa posición.
if (!ReyMovido && !torreMovida && !enJaque) {
    console.log("El enroque es un movimiento legal");
} else {
    console.log("El enroque no es legal en esta posicion");
}

/** @type {string} Nombre de la pieza a evaluar */
let pieza = "torre";

// Comentario del compañero: Evalúa mediante un switch la forma de mover de distintas piezas de ajedrez.
// Comentario del autor/a: Correcto, muestra en consola la descripción del movimiento según la pieza.
switch (pieza) {
    case "torre":
        console.log("La torre se mueve en líneas rectas");
        break;
    case "caballo":
        console.log("El caballo se mueve en L");
        break;
    case "peon":
        console.log("El peón avanza una casilla hacia adelante");
        break;
    default:
        console.log("Casilla vacía o pieza no válida");
        break;
}

/** @type {number} Fila actual donde se ubica el peón */
let fila = 8;

/** @type {string} Resultado de la promoción del peón dependiendo de la fila elegida */
let figura = (fila === 8 || fila === 1) ? 'Dama ♛' : 'Peón ♙';
console.log(`El peon en la fila: ${fila} ahora es: ${figura}`);
