let array = [1,2,3,4,5]


function decode(arr){

    let arrayDesejado = []

    for(i in arr){

        if(i % 2 === 0){

            arrayDesejado.push(i)
        }
        else{
            arrayDesejado.push(arr[i])
        }
    }
    return arrayDesejado
}
console.log(decode(array))
