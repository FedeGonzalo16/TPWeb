// Crear un array para almacenar los números ingresados
var numeros = [];

// Solicitar al usuario el ingreso de 10 números
for (var i = 0; i < 10; i++) {
    var numero = parseFloat(prompt("Ingrese el número " + (i + 1) + ":"));
    numeros.push(numero);
}

// Construir el texto con los números ingresados
var texto = "Los números ingresados son: " + numeros.join(", ");

// Imprimir el texto en un único párrafo
document.write("<p>" + texto + "</p>");