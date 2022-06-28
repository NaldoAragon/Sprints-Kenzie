function noSpace(x){
    let novaString = ''

    for(i in x){

        if (x[i] !== ' '){
            novaString += x[i]
        }
    } return novaString

}


console.log(noSpace('o i hasfça assf'));

// cada string tem uma posição [i]
// o [i] que for um space - eu retiro
// o [i] que for letra eu mantenho