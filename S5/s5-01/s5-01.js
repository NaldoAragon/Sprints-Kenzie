// let lista = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
//     for (i in lista){
//         for(j in lista[i]){
//             console.log(lista[i][j]);
//         }
//     }
    let frutas = [
        ['laranja', 'banana'],
        ['limão', 'tangerina']
    ]

    frutas[0][1] = 'abacaxi'
    console.table(frutas)

    for(i in frutas){
        for(j in frutas[i]){
            if([i][j] == 'tangerina'){
                [i][j] = 'Tangerina'
            }
        }
    } console.table(frutas)