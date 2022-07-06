

function countSheep(num){

    let contandoOvelhas = ''

    for(i = 1 ; i <= num ; i++){

        contandoOvelhas += `${i} sheep...`

    }
    return contandoOvelhas
}

  console.log(countSheep(11));