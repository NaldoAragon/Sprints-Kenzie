function numeroPar(num){

    let numero = []

        for(i = 1; i <= num ; i++){

            if(i % 2 == 0){
                numero.push(i)
            }
    }   return numero  
}
    
   console.log(numeroPar(8)); 