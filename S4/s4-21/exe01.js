let i = 1
let passos = 10

function comeco(passos){
    while (passos >= i){
        console.log(`Visitei a ${i}ª casa`)
        i++
        if (passos === 1){
            console.log('Você está no início!');
        }
    }
}
comeco(passos)