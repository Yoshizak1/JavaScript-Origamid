// 5 objetos nativos
Object
String
Array
Function
Number

// 5 objetos do browser

window
history
Document
HTMLCollection
NodeList

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox

if(typeof document.webkitVisibilityState !== 'undefined') {
  console.log('Existe');
} else {
  console.log('Não existe');
}