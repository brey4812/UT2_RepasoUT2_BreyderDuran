
const PEON=1, CABALLO=3, ALFIL=3, TORRE=5, DAMA=9;

let puntoBlancas = 0;
let puntoNegros = 0;
let jugada = 10;

puntoNegros += PEON;
puntoBlancas += CABALLO;
puntoNegros +=TORRE;
puntoBlancas += DAMA;
let ventaja = "";

if (puntoNegros > puntoBlancas){
    ventaja = `${puntoNegros-puntoBlancas} pts (para negro ♚)`;
}else if (puntoBlancas > puntoNegros){
    ventaja = `${puntoBlancas-puntoNegros} pts (para blanco ♔)`;
}else {
    ventaja = `empatados`;
}


let turno= jugada%2 === 0 ? "Mueven Blancas ♔" : "Mueven Negras ♚";

console.log(`Puntuacion Blancas: ${puntoBlancas} | Puntuacion Negras: ${puntoNegros}`);
console.log(`Ventaja Material: ${ventaja}`)
console.log(`Estado del turo: ${jugada} (${turno})`);

console.log(`Tipo de dato de jugada: ${typeof jugada}`);