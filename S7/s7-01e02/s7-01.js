// capturando o paragrafo no html
const paragrafo = document.getElementById('meuParagrafo');

// capturando o botão no html
const botao = document.getElementById('meuBotao');

// capturando o segundo botão no html
const outroBotao = document.getElementById('meuOutroBotao');

botao.addEventListener('click', function(event){
    paragrafo.classList.remove('escondido');
    alert('clicou no button!');
    event.preventDefault();
    event.stopPropagation();
});

outroBotao.addEventListener('click', function(event){
    paragrafo.classList.add('escondido');
});

const body = document.querySelector('body')

body.addEventListener('click', function(event){

    // event.preventDefault();
    alert('clicou no body!');
    console.log('evento: ', event);
    console.log('current target: ', event.currentTarget);
    console.log('target: ', event.target);
    }
)
