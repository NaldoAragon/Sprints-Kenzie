function solution(str){

    stringAoContrario = ''

    for(i = str.length-1 ; i >= 0 ; i--){

        stringAoContrario += str[i]
    }
    return stringAoContrario
}

solution('naldoca')