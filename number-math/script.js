// isNaN
console.log(Number.isNaN('ds'));
// isInteger
console.log(Number.isInteger(10.4343434));

//parseFloat e parseInt
console.log(parseFloat('3224523421'));
console.log(parseFloat('100 reais'));
console.log(parseInt('100.27'));

//toFixed
const preco1 = 2.99;
console.log(preco1.toFixed());   

//toString
const preco = 2.99;
preco.toString(10);

//toLocaleString(lang, options)

const valor = 48.49;
valor = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
console.log(valor);

//Math

console.log(Math.PI);