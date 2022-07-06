document.createElement('p')

const tag = document.createElement('p')

console.log(tag)

tag.innerText = "Olá, eu sou uma tag criada pelo JS"

document.querySelector('body').appendChild(tag)

const tagInput = document.createElement('input')

tagInput.placeholder = "Digite seu texto aqui"

const form = document.querySelector('form')

form.appendChild(tagInput)

document.createElement('article')

const article = document.createElement('article')

document.querySelector('body').appendChild(article)

document.createElement('h1')

const h1 = document.createElement('h1')

h1.innerText = 'Título do Post'

document.querySelector('article').appendChild(h1)

document.createElement('p')

const p = document.createElement('p')

p.innerText = 'Descrição do Post'

document.querySelector('article').appendChild('p')

document.createElement('a')

const a = document.createElement('a')

a.innerText = 'Ver post completo'

document.querySelector('article').appendChild('a')