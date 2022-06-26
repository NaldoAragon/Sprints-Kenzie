function calculateAge (anoNasceu, anoDesejado){

    if (anoDesejado - anoNasceu == 1){
        return 'You are 1 year old.'
    }
    else if (anoNasceu - anoDesejado == 1){
        return 'You will be born in 1 year.'
    }
    else if (anoNasceu < anoDesejado){
        let voceTera = anoDesejado - anoNasceu
        return `You are ${voceTera} years old.`
        }
    else if ( anoNasceu > anoDesejado)  {
        let voceTera = anoNasceu - anoDesejado
        return `You will be born in ${voceTera} years.`
        }
    else if (anoNasceu == anoDesejado){
        return `You were born this very year!`
        }
    }


console.log(calculateAge (1985, 1986))
console.log(calculateAge (2000, 1985))
console.log(calculateAge (1960, 2000))
console.log(calculateAge (1960, 1960))



    