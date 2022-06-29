function quaisNomesEmPosicoesPares(nomes){

    let nomesPares = []

    for(i = 0; i < nomes.length ; i++){

        if(i % 2 == 0){

            nomesPares.push(nomes[i])
        }
    }
    return nomesPares
}
quaisNomesEmPosicoesPares(['maria', 'joao', 'ricardo'])
