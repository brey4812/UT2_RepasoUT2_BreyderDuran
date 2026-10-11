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



/**
 * @function calcularAreaTriangulo
 * @param {number} base - La base del triángulo (debe ser un número positivo).
 * @param {number} altura - La altura del triángulo (debe ser un número positivo).
 * @returns {number} Área calculada del triángulo.
 * @throws {TypeError} Si la base o la altura no son números válidos o positivos.
 * @example
 * // Retorna 50
 * calcularAreaTriangulo(10, 10);
 * @see {@link https://es.wikipedia.org/wiki/Tri%C3%A1ngulo#%C3%81rea}
 */
function calcularAreaTriangulo(base, altura) {
    if (typeof base !== 'number' || base <= 0 || typeof altura !== 'number' || altura <= 0) {
        throw new TypeError('Base o altura inválidas');
    }
    return 0.5 * base * altura;
}