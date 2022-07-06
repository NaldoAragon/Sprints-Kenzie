let passos = 10

function recomeco(passos){
    
    let i = 1

    while (passos > i){

        console.log(`Voltando da casa ${passos} para o início.`)

        passos--

        if (passos === 1){

            console.log('Você está no início!')
        }
    }
}
console.log(recomeco(passos))

