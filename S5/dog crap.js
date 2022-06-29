function crap(arrayJardim, sacolas, capacidadeSacola){

    caquinha = 0
    capacidadeTotal = sacolas * capacidadeSacola

    for(i = 0; i < arrayJardim.length; i++){

        for(j = 0; j < arrayJardim[i].length; j++){

            if(arrayJardim[i][j] === 'D'){

                return 'Dog!!'
            }
            else if(arrayJardim[i][j] === '@'){
                    
                    caquinha++
                }
    }}
        if(capacidadeTotal >= caquinha){

            return 'Clean'
    }
        else {

            return 'Cr@p'
    }
}

console.log(crap([['_','_','@','_'], ['_','D','_','@'], ['@','_','@', '_']], 1, 2));