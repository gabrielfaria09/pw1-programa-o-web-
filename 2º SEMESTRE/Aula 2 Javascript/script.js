/*Fórmula de Bhaskara*/

const a = +prompt('Digite o valor de A')
const b = +prompt('Digite o valor de B')
const c = +prompt('Digite o valor de C');

const delta = b**2 - 4*a *c;

const raiz1 = (-b + Math.sqrt(delta))/(2*a);
const raiz2 = (-b - Math.sqrt(delta))/(2*a);

document.write('Raiz +: ' + raiz1);
document.write('Raiz -: ' + raiz2);

/* Operadores relacionais*/

// == Comparação, atribuição
// === Atribuição do tipo da variável
// =! Diferença
// =!! Diferença entre tipo de variável

/* Operadores lógicos*/

// && - E
// || - OU
// ! - NÃO