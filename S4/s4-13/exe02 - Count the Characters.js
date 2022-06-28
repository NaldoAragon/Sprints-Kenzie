function countChar(string, char) {
  
  let contador = 0

  for(i in string){

    if (typeof string[i] == 'string'){

      let letraMinuscula = string[i].toLowerCase()

        if(letraMinuscula == char){

          contador++
        }

    else if(typeof string[i] == 'number'){

      let numero = string[i]

        if(numero == char){

          contador++
        }
    }
  }
    return contador    
  }


  // console.log(letraMinuscula);

// countChar("fizzbuzz","z") => 4
// countChar("Fancy fifth fly aloof","f") => 5