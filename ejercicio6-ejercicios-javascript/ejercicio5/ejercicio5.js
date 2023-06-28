// Crear un array para almacenar los números ingresados
var numeros = [];

// Solicitar al usuario el ingreso de 10 números
for (var i = 0; i < 10; i++) {
    var numero = parseFloat(prompt("Ingrese el número " + (i + 1) + ":"));
    numeros.push(numero);
}

// Imprimir los números en pantalla mediante párrafos
for (var i = 0; i < numeros.length; i++) {
    document.write("<p>" + numeros[i] + "</p>");
}