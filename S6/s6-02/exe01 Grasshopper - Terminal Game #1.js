// function Hero (name) {

//     this.name = name || 'Hero'
//     this.position = '00'
//     this.health = 100
//     this.damage = 5
//     this.experience = 0
// }



//-------------------- ESSE CÓDIGO ABAIXO FUNCIONA, MAS NÃO NO CODEWARS ------------------

function Hero (name) {

    let nomeDoHeroi = {

        name: 'Hero',
        position: '00',
        health: 100,
        damage: 5,
        experience: 0,
    }
    if(name == undefined){

        return nomeDoHeroi
    }
    else{

        nomeDoHeroi.name = name

        return nomeDoHeroi
    }
}
console.log(Hero('naldo'))