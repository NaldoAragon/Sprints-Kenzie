function largestPairSum (numbers) {

    let maiorSoma = numbers[0] + numbers[1]

    for(i in numbers){

        let num1 = numbers[i]

        for(j in numbers){

            if(i !== j){

                let num2 = numbers[j]

                let soma = num1 + num2

                if(soma > maiorSoma){

                    maiorSoma = soma
                }
            }
        }
    }
    return maiorSoma
  }
largestPairSum()
