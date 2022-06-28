function remainder(n, m){

    if(m == 0 && n == 0){
      return n/m
    }
    else if(m == 0){
      return 'Nan'
    }
    else if(n == 0){
      return 'division by zero (refer to the specifications on how to handle this in your language)'
    }
    else if(m < 0 || n < 0){
      return 0
    }


    else if(n > m){

        let resto = n % m

        return resto
    }
    else if(n < m){
      let aux = n
      n = m
      m = aux

      let resto = n % m
      return resto
    }
  }
console.log(remainder(13, 72))

// Escreva uma função que aceite dois inteiros e retorne o restante da divisão do valor maior pelo valor menor.

// A divisão por zero deve retornar NaN.