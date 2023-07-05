var pessoa = {
  nome: "João",
  idade: 19,
};

console.log(pessoa);

var quadrado = {
  lado: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
  cinco() {
    return 5;
  },
};

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

console.log(Math.random());
