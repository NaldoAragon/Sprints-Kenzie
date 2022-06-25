function eNumeroPrimo(numero){
    if(numero<1){
        return false
    }
    for(let cont=2;cont<numero;cont ++){
        if(numero % cont==0){
        return false
    }
    }
    return true}

    eNumeroPrimo(5)