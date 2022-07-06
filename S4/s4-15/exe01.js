const array = [5, 4, 7, 30, 16, 89]
 // resultado esperado = 4, 30, 16
function pares(arr){

    let paresEncontrados = []

    for(i in arr){

        if(arr[i] % 2 == 0){

            paresEncontrados.push(arr[i])
        }
    }
    return paresEncontrados
}

console.log(pares(array))