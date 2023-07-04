var possuiGraduacao = false;
var possuiDoutorado = true;

if(possuiGraduacao) {
  console.log('É verdadeiro!');
} else if(possuiDoutorado) {
  console.log('possui Doutorado');
} else {
  console.log('Não possui nada');
}

var nome = 'André';

if(nome) {
  console.log(nome);
} else {
  console.log('Nome não existe')
}

if(!possuiGraduacao) {
  console.log(possuiGraduacao);
  console.log('Não possui graduação');
}

var x = 'Gato';
console.log(x === 'Gato');

// Condicional

var condicional = (5 - 10) && (5 + 5);

if(condicional) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

var condicional2 = (5 - 5) || (5 + 5) || (10 - 2);

console.log(condicional2);

//switch

var corFavorita = 'Azul';

switch(corFavorita) {
  case 'Azul':
    console.log('Olhe para o céu');
    break;
  case 'Amarelo':
    console.log('Olhe para o sol');
    break;
  case 'Verde':
    console.log('Olhe para a floresta');
    break;
  default:
    console.log('Feche os olhos.');
}