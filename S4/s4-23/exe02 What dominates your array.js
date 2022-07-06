function dominator(arr){

    const verificados = []

    for(i = 0 ; i < arr.length ; i++){

        if(verificados.includes(arr[i]) === true){

            continue
        }

        let contador = 0

        for(j = 0 ; j < arr.length ; j++){
            
            if(arr[i] === arr[j]){

                contador++
            }
        }

        if(contador > arr.length / 2){

            return arr[i]
        }
        verificados.push(arr[i])
    }

    return -1
}