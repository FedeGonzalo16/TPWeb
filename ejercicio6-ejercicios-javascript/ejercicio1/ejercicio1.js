/* Alternativa 2 utilizando Chat GPT */
// Solicitar al usuario el ingreso del nombre
var nombre = prompt("Ingrese su nombre:");

// Solicitar al usuario la categoría (docente o alumno)
var categoria = prompt("Ingrese su categoría en UADE (docente o alumno):");

// Verificar la categoría ingresada y construir el saludo correspondiente
var saludo;
if (categoria.toLowerCase() === "docente") {
    saludo = "sos docente";
} else if (categoria.toLowerCase() === "alumno") {
    saludo = "sos alumno";
} else {
    saludo = "tenés una categoría no reconocida";
}

// Imprimir el saludo con el nombre ingresado
console.log("Hola " + nombre + ", " + saludo + ".");