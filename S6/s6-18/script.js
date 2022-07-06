let listFrutas = []

let ul = document.getElementsByClassName('list-itens')[0];

function createElementeItens(){

    for(let i = 0; i < listFrutas.length; i++){

    let element = document.createElement(i)

  element.innerText = `${i} - Banana Prata`//use o template string para acessar o elemento da lista

  ul.appendChild(element) // insira a li dentro da lista
}
}
  
createElementeItens()

console.log(listFrutas);