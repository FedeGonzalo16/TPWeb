// Variable para contar la cantidad de veces que se obtuvo el número 4
var cantidadCuatro = 0;

// Bucle para arrojar el dado hasta obtener un 6
while (true) {
    var dado = Math.floor(Math.random() * 6) + 1;

    // Imprimir el número en una lista
    document.write("<li>" + dado + "</li>");

    if (dado === 6) {
        break;
    } else if (dado === 4) {
        cantidadCuatro++;
    }
}

// Informar la cantidad de veces que se obtuvo el número 4
document.write("<p>Cantidad de veces que se obtuvo el número 4: " + cantidadCuatro + "</p>");