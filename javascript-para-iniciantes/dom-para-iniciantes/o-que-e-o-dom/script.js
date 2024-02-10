console.log(href);

if(href === '') {
  console.log('É igual');
}

const h1Selecionado = document.querySelector('h1');
const h1Classes = h1Selecionado.classList;

function callBackh1() {
  console.log('Clicou em' h1Selecionado.innerText);
}

h1Selecionado.addEventListener('click', callBackh1);