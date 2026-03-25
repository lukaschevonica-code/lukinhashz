//conversor de temperatura
const cidade = "Curitiba";
let tempCelsius = 18.5;

const tempfahrenheit = tempCelsius * (9/5) + 32;
const tempkelvin = tempCelsius + 237. 15;

console.log(`A tempera de ${cidade} está ${tempCelsius} Cº`);
console.log(`Fahrenheit: ${tempfahrenheit.toFixed(1)} fº`)
console.log(`Kelvin: ${tempkelvin.toFixed(1)} Kº`)

