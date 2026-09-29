let ReyMovido = false, torreMovida = false, enJaque = false;

if (!ReyMovido && !torreMovida && !enJaque) {
    console.log("El enroque es un movimiento legal");
}else {
    console.log("El enroque no es legal en esta posicion");
}

let pieza = "torre";

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

let fila = 8;

let figura = (fila === 8 || fila === 1) ? 'Dama ♛' : 'Peón ♙';
console.log(`El peon en la fila: ${fila} ahora es: ${figura}`);