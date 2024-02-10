const honda = new Carro('Honda', 3000);
const fiat = new Carro('Fiat', 4000);

function Carro2(marca, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoIncial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
}

const mazda = new Carro2('Mazda', 5000);