const frutas = ["Maçã", "Laranja", "Abacaxi"];

tamanho = frutas.length;

console.log(tamanho);
console.log(frutas);

frutas.splice(1, 0, "Uva");

console.log(frutas);
console.log(frutas[0]);

busca = frutas.indexOf("Maçã");

console.log(busca);

//Três formas de percorrer todos os elementos do Array

for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}

let i = 0;
while (i<frutas.length){
    console.log(frutas[i]);
    i++;
}

frutas.forEach(frutas => {
    console.log(frutas); //não pega elementos indefinidos
})

let number = new Array (1,2,3,4,5,6,7);
console.log(number);

number = number.map(number => number * 2);
console.log(number);

//Método que percorre todos os Arrays e efetua a soma de todos
console.log(number.reduce((soma, number) => soma + number));

const preco = [10.99,20.99,38.99];

preco.map(preco => preco * 1.1).forEach(preco => console.log(preco))