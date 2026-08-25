const frutas = ["Maçã", "Laranja", "Abacaxi"];

tamanho = frutas.length;

console.log(tamanho);
console.log(frutas);

frutas.splice(1, 0, "Uva");

console.log(frutas);
console.log(frutas[0]);

busca = frutas.indexOf("Maçã");

console.log(busca);

for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}