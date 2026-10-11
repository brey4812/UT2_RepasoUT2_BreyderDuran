let columna = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

for (let fila = 0; fila < 8; fila++) {
    for (let colIndex = 0; colIndex < 8; colIndex++) {
        let col = columna[colIndex];
        let casilla = `${col}${fila}`;

        let esClara = (fila + colIndex) % 2 === 0;
        let color = esClara ? 'blanco' : 'negro';

        console.log(`casilla: ${casilla} color: ${color}`);
    }
}

let jugadas = ["e4", "e5", "(apertura abierta)", "Nf3", "Nc6", "Qxf7#", "h3"];

for (jugada of jugadas) {
    if (jugada.startsWith('(')){
        continue;
    }
    if (jugada.includes('#')){
        console.log(`jaquemate: ${jugada}`);
        break;
    }

    console.log(`jugada procesada: ${jugada}`);
}