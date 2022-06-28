let listNumber = [10,11,20,21,30,25,31,71,99]
let even = []
let odd = []


function evenAndOdd(arr){

    for(i in arr){
        if(arr[i] % 2 == 0){
            even.push(arr[i])
        }
        else{
        odd.push(arr[i])}
    }
    if (even.length > odd.length){
        return countMyArray(even)
    }
    return countMyArray(even)
}

function countMyArray(valueCount){
    if(valueCount == even){
        return `The list is even and its lenght is ${even.length}`
    }
    
        return `The list is odd and its lenght is ${odd.length}`
    
}
console.log(evenAndOdd())
