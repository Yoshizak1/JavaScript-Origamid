//length
const comida = 'Pizza';
const agua = new String('Agua ');
console.log(agua.length);
const frase = 'A melhor comida';
console.log(frase[frase.length]);
console.log(frase.charAt(frase.length));


// Concat
const frase = 'A melhor linguagem é';
const linguagem = 'JavaScript'
const fraseFinal = frase.concat(linguagem, '!!');

//includes 
const fruta = 'Banana';
const listaFrutas =  'Melancia, Banana, Laranja';
console.log(listaFrutas.includes(fruta, 14));

//endsWith(search) e startsWith(search)
console.log(fruta.startsWith('Ba'));
console.log(fruta.endsWith('na'));

//slice
const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'taxa de camisas';

transacao1.slice(0, 3); //Dep
transacao2.slice(0, 3); //Dep
transacao3.slice(0, 3); //Tax

transacao1.slice(12); //cliente
transacao1.slice(-4); // ente
transacao1.slice(3, 6); // ósi

//indexOf(search) e lastIndexOf(search)

const instrumento = 'Guitarra';

instrumento.indexOf('r'); //5
instrumento.lastIndexOf('r'); //6
instrumento.indexOf('ta'); //3

//padStart(n, str) e padEnd(n, str)

const listaPrecos = ['R$99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((preco) => {
  console.log(preco.padStart(10, '.'));
})

listaPrecos[0].padStart(10, '.'); // ...... R$ 99
listaPrecos[0].padEnd(10, '.'); // R$ 99......

