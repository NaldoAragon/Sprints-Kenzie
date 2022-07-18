let produto = {
    nome: 'Notebook',
    valor: 3000.00,
    liquidacao: true,
    distribuidor: 'lojadakenzie.com.br'
  }

let element = document.getElementsByClassName("container")[0];

let elementInformado = document.getElementsByClassName("infomacao")[0];

element.addEventListener("click", function (e) {
    
    let elementoCapture = e.target.className;
}

