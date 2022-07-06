const queroSomar = [1, '4', 9, 18, '50'] // resultado esperado = 32

function soma(arr){

    let contagemSoma = 0

    for(i in arr){
        
        contagemSoma += parseInt(arr[i])
    }
    return contagemSoma

}
console.log(soma(queroSomar));