// const imgs = document.querySelectorAll('img');


// imgs.forEach(function(item, index, array) {
//   console.log(item, index, array);
// });

const titulos = document.getElementsByClassName('titulo');
const tituloArray = Array.from(titulos);

tituloArray.forEach(function(item) {
  console.log(item);
})

const imgs = document.querySelectorAll('img');


imgs.forEach((item, index) => {
  console.log(item, index);
});

//ou

imgs.forEach(() => console.log(i++));