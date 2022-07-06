let stingPraModificar = '107843568'

function fakeBin(str){

    let binarioCerto = ''

    for(i in str){

        if(str[i] === '0') {

            binarioCerto += str[i]
        }
        else if(str[i] < '5'){

            binarioCerto += '0'
        }
        else{
            binarioCerto += '1'
        }
    } 
    return binarioCerto
}
// fakeBin(num)
console.log(fakeBin(stingPraModificar));

// 45385593 107843568
// 01011110 1001100111
// 01011110 001100111