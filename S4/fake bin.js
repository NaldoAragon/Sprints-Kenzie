function fakeBin(x){

    let binarioCerto = ''

    for(i in x){

        if(x[i] == 0) {

            binarioCerto += x[i]
        }
        else if(x[i] == 1){
            binarioCerto += x[i]
        }
        else if(x[i] < 5){

            binarioCerto += 0
        }
        else{
            binarioCerto += 1
        }
    } return binarioCerto
}
let num = '107843568'
// fakeBin(num)
console.log(fakeBin(num));

// 45385593 107843568
// 01011110 1001100111
// 01011110 001100111