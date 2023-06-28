// Solicitar al usuario el ingreso de tres números
var numero1 = parseInt(prompt("Ingrese el primer número:"));
var numero2 = parseInt(prompt("Ingrese el segundo número:"));
var numero3 = parseInt(prompt("Ingrese el tercer número:"));

// Verificar las condiciones y realizar la operación correspondiente
var total, operacion;

if (numero1 < numero2 && numero1 > numero3) {
    total = numero1 * numero2 * numero3;
    operacion = "multiplicación";
} else {
    total = numero1 + numero2 + numero3;
    operacion = "sumatoria";
}

// Imprimir el total y la operación realizada
console.log("El resultado de la " + operacion + " es: " + total + ".");