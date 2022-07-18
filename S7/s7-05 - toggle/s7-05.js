tagButton = document.querySelector('.dark-mode')

// let estiloDark = 'dark-mode'

tagButton.addEventListener('click', function(){

    // button.classList.toggle(classStyle)

    tagButton.classList.contains('dark-mode') ?
    tagButton.classList.remove('dark-mode') :
    tagButton.classList.add('dark-mode')
})

// falta terminar o código