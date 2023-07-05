//var ultimoItem = videoGames.pop();

for (var numero = 0; numero < 10; numero++) {
  console.log(numero);
}

var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

var videoGames = ['Switch', 'PS4', 'Xbox', '3DS'];

for(var item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]);
  if(videoGames[item] === 'PS4') {
    break;
  }
}

var frutas = ['banana', 'pera', 'maça', 'abacaxi'];

videoGames.forEach(function(fruta, index, array) {
  console.log(fruta, index, array);
})

var numero = 0;
var maximo = 50;
for(;numero < maximo;) {
  console.log(numero);
  numero++;
}

