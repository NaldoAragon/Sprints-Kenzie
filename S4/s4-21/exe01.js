let passos = 10

function comeco(passos){

    let i = 1

    while (passos >= i){

        console.log(`Visitei a ${i}ª casa`)
        
        i++

        if (passos === 1){
            console.log('Você está no início!');
        }
    }
}
console.log(comeco(passos))