let arrayDemonstracao = [4,3,9,7,2,1]

function squareOrSquareRoot(array) {

  let novoArray = []

  for(i in array){

    if( Number.isInteger(Math.sqrt(array[i])) == true ){

      novoArray.push(Math.sqrt(array[i]))
    }
    else{
      novoArray.push(array[i]*array[i])
    }
  }
    return novoArray
}
console.log(squareOrSquareRoot(arrayDemonstracao))

// console.log(Math.sqrt(11))

