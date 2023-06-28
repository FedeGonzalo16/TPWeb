// Función para generar un número aleatorio entre 0 y 10
function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 11);
}

// Bucle para generar números hasta que el usuario cancele
while (true) {
    var respuesta = confirm("¿Desea generar un número al azar entre 0 y 10?");

    if (respuesta) {
        var numeroAleatorio = generarNumeroAleatorio();
        alert("El número generado es: " + numeroAleatorio);
    } else {
        break;
    }
}