function areYouPlayingBanjo(name) {

    for(i in name)
    if (name[0] == 'r' || name[0] == 'R'){
        
        return name + ' plays banjo'
     } 
     else{
        return name + ' does not play banjo'
     }
 }
areYouPlayingBanjo()

// function tocaBanjo (nome){
//     if (nome[0] == 'r' || nome[0] == 'R'){
//         return `${nome} plays banjo.`
//     } else{
//         return `${nome} does not plays banjo.`
//     }
// }
// console.log(tocaBanjo ('Amanda'));
// console.log(tocaBanjo ('Ronaldo'));
