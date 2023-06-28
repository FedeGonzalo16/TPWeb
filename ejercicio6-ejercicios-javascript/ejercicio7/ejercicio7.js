// Variables para almacenar la cantidad de números pares e impares, y sus sumas respectivas
var cantidadPares = 0;
var cantidadImpares = 0;
var sumaPares = 0;
var sumaImpares = 0;

// Solicitar al usuario el ingreso de 10 números
for (var i = 0; i < 10; i++) {
    var numero = parseInt(prompt("Ingrese el número " + (i + 1) + ":"));

    // Verificar si el número es par o impar
    if (numero % 2 === 0) {
        cantidadPares++;
        sumaPares += numero;
    } else {
        cantidadImpares++;
        sumaImpares += numero;
    }
}

// Informar la cantidad y suma de números pares e impares
console.log("Cantidad de números pares ingresados: " + cantidadPares);
console.log("Suma de números pares: " + sumaPares);
console.log("Cantidad de números impares ingresados: " + cantidadImpares);
console.log("Suma de números impares: " + sumaImpares);

// Determinar qué grupo (pares o impares) sumó la mayor cantidad
if (cantidadPares > cantidadImpares) {
    console.log("El grupo de números pares sumó la mayor cantidad.");
} else if (cantidadPares < cantidadImpares) {
    console.log("El grupo de números impares sumó la mayor cantidad.");
} else {
    console.log("Ambos grupos (pares e impares) sumaron la misma cantidad.");
}