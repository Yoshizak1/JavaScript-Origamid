function areaQuadrado(lado) {
  return lado * lado;
}

console.log(areaQuadrado(10));

function pi() {
  return 3.14;
}

var total = 5 * pi();

function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}

console.log(imc(80, 1.8));

function corFavorita(cor) {
  if(cor === 'azul') {
    return 'Eu gosto do céu';
  } else if (cor === 'verde') {
    return 'Eu gosto da grama';
  } else {
    return 'Eu não gosto de cores';
  }
}

addEventListener('click', function() {
  console.log('Oi');
})

function imc2(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc2);
}

function terceiraIdade(idade) {
  console.log(typeof idade);
  if (typeof idade !== 'number') {
    return 'Por favor preencha um número';
  }
  if(idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade(60));

function faltaVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Faltam visitar ${totalPaises - paisesVisitados} países`;
}

function dados() {
  var nome = 'João';
  var idade = 28;
  function outrosDados() {
    var endereco = 'São Paulo';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados());