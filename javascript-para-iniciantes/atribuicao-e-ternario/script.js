// atribuição
var numero = 20;

numero = numero + 10;
console.log(numero);

//ou 

var numero2 = 30;
numero += 20; // numero2 = numero2 + 20
console.log(numero2)

//ternario

var idade = 20;
var podeBeber;
var naoPossuiDiabetes = true;
podeBeber = (idade >= 18 && naoPossuiDiabetes) ? 'Pode beber' : 'Não pode beber';

console.log(podeBeber);

// if abreviado 

var possuiFaculdade = true;
if(possuiFaculdade)
console.log('Sim possui')
else
console.log('não possui')