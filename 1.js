//Ejercicio 1: Calculadora de gastos de viaje
// Constantes
const transporte = 120000;
const alojamiento = 200000;
const alimentacion = 150000;
const personas = 4;
const aportePersona = 130000;

// Variables
let totalGastos = transporte + alojamiento + alimentacion;
let gastoPorPersona = totalGastos / personas;
let totalAportado = aportePersona * personas;
let sobrante = totalAportado - totalGastos;

// Resultados
console.log("Total de gastos:", totalGastos);
console.log("Gasto por persona:", gastoPorPersona);
console.log("Total aportado:", totalAportado);
console.log("Sobrante:", sobrante);