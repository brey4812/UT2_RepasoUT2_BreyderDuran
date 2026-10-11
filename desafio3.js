/**
 * @fileoverview Desafío 3: Generación del tablero de ajedrez y procesamiento de notación de jugadas.
 * @author Breyder Duran
 */

/** @type {Array<string>} Lista de las letras correspondientes a las columnas del tablero */
let columna = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

// Comentario del compañero: Bucles anidados para recorrer todas las filas y columnas del tablero imprimiendo el color de cada casilla.
// Comentario del autor/a: correcto, determina la alternancia de color (blanco o negro) basándose en la paridad de la suma de sus índices.
for (let fila = 0; fila < 8; fila++) {
    for (let colIndex = 0; colIndex < 8; colIndex++) {
        let col = columna[colIndex];
        let casilla = `${col}${fila}`;

        let esClara = (fila + colIndex) % 2 === 0;
        let color = esClara ? 'blanco' : 'negro';

        console.log(`casilla: ${casilla} color: ${color}`);
    }
}

/** @type {Array<string>} Secuencia de jugadas registradas en notación algebraica */
let jugadas = ["e4", "e5", "(apertura abierta)", "Nf3", "Nc6", "Qxf7#", "h3"];

// Comentario del compañero: Recorre la lista de jugadas omitiendo comentarios entre paréntesis y deteniendo el bucle al detectar un jaque mate (`#`).
// Comentario del autor/a: Correcto, utiliza `continue` para saltar las notas descriptivas y `break` cuando la partida finaliza por mate.
for (let jugada of jugadas) {
    if (jugada.startsWith('(')) {
        continue;
    }
    if (jugada.includes('#')) {
        console.log(`jaquemate: ${jugada}`);
        break;
    }

    console.log(`jugada procesada: ${jugada}`);
}