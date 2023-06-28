// Solicitar al usuario el ingreso del valor hora, las horas trabajadas por día y la antigüedad
var valorHora = parseFloat(prompt("Ingrese el valor hora:"));
var horasTrabajadasPorDia = parseInt(prompt("Ingrese la cantidad de horas trabajadas por día:"));
var antiguedad = parseInt(prompt("Ingrese la antigüedad en años:"));

// Calcular el sueldo bruto mensual
var sueldoBrutoMensual = valorHora * horasTrabajadasPorDia * 20; // 20 días hábiles por mes

// Calcular el sueldo neto considerando el descuento por aportes
var sueldoNeto;

if (antiguedad >= 5 && antiguedad <= 10) {
    sueldoNeto = sueldoBrutoMensual - (sueldoBrutoMensual * 0.2) + 1000;
} else if (antiguedad > 10) {
    sueldoNeto = sueldoBrutoMensual - (sueldoBrutoMensual * 0.2) + 1500;
} else {
    sueldoNeto = sueldoBrutoMensual - (sueldoBrutoMensual * 0.2);
}

// Imprimir el sueldo bruto mensual y el sueldo neto
console.log("Sueldo bruto mensual: $" + sueldoBrutoMensual.toFixed(2));
console.log("Sueldo neto: $" + sueldoNeto.toFixed(2));