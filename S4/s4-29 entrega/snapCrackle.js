function ehPrimo(num){

    if(num === 2){

        return true
    }
    if (num === 1){
        
        return false
    }

    for(let c = 2; c < num; c++){

       if(num % c === 0){

        return false

       }
    } 
    return true
}

function snapCrackle(maxValue){
    
    let numeros 

    for (let c = 1; c <= maxValue; c++){

    let resultado = ''

        if (c % 2 === 0 && c % 5 !== 0 && c !== 2){

            numeros.push(c)
        }

        if (c % 2 !== 0){

            resultado += 'Snap'
        }
                
        if (c % 5 === 0){

            resultado += 'Crackle'
        }

        if (ehPrimo(c)){

            resultado += 'Prime'
        }

        if (resultado.length > 0){
            numeros.push(resultado)
        }
        } return numeros
        }

snapCrackle(100)



