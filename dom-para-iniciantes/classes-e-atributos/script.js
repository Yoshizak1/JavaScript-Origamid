const menu = document.querySelector('.menu');

menu.classList.add('ativo');
menu.classList.remove('azul');
menu.classList.toggle('verde');


if(menu.classList.contains('azul')) {
  menu.classList.add('possui-azul');
} else {
  menu.classList.add('nao-possui-azul');
}


const animais = document.querySelector('.animais');

console.log(animais.attributes[0]);


const img = document.querySelector('img');
const altImg = img.getAttribute('alt');
img.setAttribute('alt', 'raposa');

const possuiAlt = img.hasAttribute('alt');
console.log(possuiAlt)

console.log(img.getAttribute('src'));