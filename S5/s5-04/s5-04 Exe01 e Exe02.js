function retornaNumerosNegativos(array){

    let numerosNegativosEncontrados = []
    let somaNumerosNegativos = 0

    for(i in array){
        if(array[i] < 0){
            // numerosNegativosEncontrados += array[i]
            numerosNegativosEncontrados.push(array[i])
        }
    }
    for(i in numerosNegativosEncontrados){
        somaNumerosNegativos += numerosNegativosEncontrados[i]

    }
    console.log(numerosNegativosEncontrados)
    console.log(somaNumerosNegativos);

    return somaNumerosNegativos

}

arrayComNumeros = [1, 0, -2, -50, 100, -15, 20, -30]

retornaNumerosNegativos(arrayComNumeros)