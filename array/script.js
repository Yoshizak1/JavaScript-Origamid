//const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}],
function andar(nome) {console.log(nome) }];

const carros = new Array('Ford', 'Fiat', 'Honda');

carros[2] = 'Ferrari';
carros[3] = 'Kia';
carros[20] = 'Kia';

console.log(carros.length);

const li = document.querySelectorAll('li');

const arrayLi = Array.from(li)

const obj = {
    0: 'João',
    1: 'Pedro',
    2: 'Teste',
    length: 3,
}

console.log(li)
console.log(arrayLi)

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];

console.log(frutas[0].length)

const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
instrumentos.sort();

console.log(instrumentos);