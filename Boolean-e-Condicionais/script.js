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