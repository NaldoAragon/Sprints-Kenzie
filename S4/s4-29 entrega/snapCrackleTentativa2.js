resultado = 0

function snapCrackle (maxValue){

    for (c = 1; c < maxValue; c++){

        if (c % 2 == 1 && c % 5 == 0) {

            resultado = 'SnapCrackle'
        }

        else if (c % 2 == 1){

            resultado = 'Snap'
        }
                
        else if (c % 5 == 0){

            resultado = 'Crackle'
        }

        else if (c % 2 != 0 && c % 3 != 0 && c % 5 != 0){

            resultado = 'SnapCracklePrime'
        }

        else {

            resultado = c
        }
    }
    }

snapCrackle (10)

console.log(resultado);