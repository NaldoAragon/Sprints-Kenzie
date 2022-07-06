function boredom(staff){

    const setores = {

        'accounts':1, 
        'finance':2, 
        'canteen':10, 
        'regulation':3, 
        'trading':6, 
        'change':6, 
        'IS':8, 
        'retail':5, 
        'cleaning':4, 
        'pissing about':25
    }

    var pontuacao = 0

        for(i in staff){

            pontuacao += setores[staff[i]]
      }

    if(pontuacao <= 80) 
        return 'kill me now'

    else if(pontuacao < 100) 
        return 'i can handle this'

    else 
        return 'party time!!'
}


//--------solução que eu fiz abaixo funcionando -----

let funcionarios = {
    
    tim: 'pissing about', 
    jim: 'accounts', 
    randy: 'pissing about', 
    sandy: 'accounts', 
    andy: 'accounts', 
    katie: 'IS',
    laura: 'pissing about', 
    saajid: 'IS', 
    alex: 'accounts', 
    john: 'pissing about',
    mr: 'finance'

}

function boredom(staff){

    let pontuacao = 0

    for(i in staff){

        if(staff[i] == 'accounts'){
            pontuacao += 1
        }
        else if(staff[i] == 'finance'){
            pontuacao += 2
        }
        else if(staff[i] == 'canteen'){
            pontuacao += 10
        }
        else if(staff[i] == 'regulation'){
            pontuacao += 3
        }
        else if(staff[i] == 'trading'){
            pontuacao += 6
        }
        else if(staff[i] == 'change'){
            pontuacao += 6
        }
        else if(staff[i] == 'IS'){
            pontuacao += 8
        }
        else if(staff[i] == 'retail'){
            pontuacao += 5
        }
        else if(staff[i] == 'cleaning'){
            pontuacao += 4
        }
        else if(staff[i] == 'pissing about'){
            pontuacao += 25
        }
    }
    if(pontuacao <= 80){
        return 'kill me now'
    }
    else if(pontuacao > 80 && pontuacao < 100){
        return 'i can handle this'
    }
    else{
        return 'party time!!'
    }
}
console.log(boredom(funcionarios))



  
