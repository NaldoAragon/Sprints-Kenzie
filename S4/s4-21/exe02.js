let i = 1
let passos = 5

function recomeco(passos){
    while (passos > i){
        console.log(`Voltando da casa ${passos} para o início.`)
        passos--
        if (passos === 1){
            console.log('Você está no início!');
        }
    }
}
recomeco(passos)

