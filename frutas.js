//Lista ordenada de valores

const frutas = ["Maça", "Banana", "Uva", "Manga"];
//indice          0        1        2       3

//console.log(frutas);
console.log(frutas[2])

frutas[0] = "Abacaxi";
console.log(frutas);

frutas[2] = "Pera";
frutas[3] = "Melancia"
console.log(frutas);
console.log(frutas.length);
frutas.push("figo");

const removido = frutas.pop();
console.log(frutas);
console.log(removido);
console.log(frutas);

console.log(frutas.indexOf("cacau"));