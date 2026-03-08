//Ejercicio 3: Producción de una fábrica
// Constantes
const piezasPorHora = 250;
const horasTrabajo = 8;
const piezasPorCaja = 12;

// Variables
let totalPiezas = piezasPorHora * horasTrabajo;
let cajasLlenas = Math.floor(totalPiezas / piezasPorCaja);
let piezasSueltas = totalPiezas % piezasPorCaja;

// Resultados
console.log("Total de piezas:", totalPiezas);
console.log("Cajas llenas:", cajasLlenas);
console.log("Piezas sobrantes:", piezasSueltas);