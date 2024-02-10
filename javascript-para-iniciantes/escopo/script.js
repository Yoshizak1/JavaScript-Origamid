// Escopo de função(Pai)
function mostrarCarro() {
  var carro = 'Fusca';
  console.log(carro);
}

mostrarCarro(); // Fusca no console
console.log(carro)// Erro, carro is not defined

// 'use strict' -> não permite criar variavel de escopo global (sem let, const ou var).

// Escopo de Bloco
if(true) {
  let mes = 'dezembro';
  console.log(mes);
}

//console.log(mes);

{
  var carro2 = 'Fusca 2';
  const ano = 2018;
}

console.log(carro2); // Carro
//console.log(ano); // erro ano is not defined

for(let i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}


// const e let


//const
const semana = 'sexta';
//semana = 'Quinta' -> não pode atribuir
console.log(semana);

const data = {
  ano: 2018,
  mes: 'Dezembro',
}

data.ano = 2019;
data.dia = 25;