let tagUlFrutas   = document.createElement('ul')
let tagUlBebidas  = document.createElement('ul')
let tagUlHigiene  = document.createElement('ul')

let tagMainFrutas = document.querySelector('.fruits')
let tagMainBebidas= document.querySelector('.drinks')
let tagMainHigiene= document.querySelector('.hygiene')

tagMainFrutas.appendChild(tagUlFrutas)
tagMainBebidas.appendChild(tagUlBebidas)
tagMainHigiene.appendChild(tagUlHigiene)

tagMain.classList.add('product-main')
tagH1.classList.add('product-title')

tagH1.innerText=nome
tagh5.innerText=categoria
tagStrong.innerText=preco
