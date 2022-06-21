function tocaBanjo (nome){
    if (nome[0] == 'r' || nome[0] == 'R'){
        return `${nome} plays banjo.`
    } else{
        return `${nome} does not plays banjo.`
    }
}
console.log(tocaBanjo ('Amanda'));
console.log(tocaBanjo ('Ronaldo'));
