const img = document.querySelector('img');

function callback(event) {
  console.log('clicou');
}

//img.addEventListener('click', callback);

const animaisLista = document.querySelector('.animais-lista');

function callbackLista(event) {
  console.log(event.currentTarget);
}

animaisLista.addEventListener('click', callbackLista);

console.log(animaisLista);

const linkExterno = document.querySelector('a[href^="http"]');

function handleExterno(event) {
  event.preventDefault;
}

linkExterno.addEventListener('click',handleExterno)

const h1 = document.querySelector('h1');

function handleEvent(event) {
  console.log(event.type, event);
}

function handleKeyboard(event) {
  if(event.key === 'f') {
    document.body.classList.toggle('fullscreen')
  }
  console.log(event.key)
}

h1.addEventListener('keydown', handleEvent);

const img = document.querySelectorAll('img');

function handleImg(event) {
  console.log(event.target.getAttribute('src'));
}

img.forEach((img) => {
  img.addEventListener('click', handleImg);
});