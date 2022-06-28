let aluno = [
    [8, 9, 7, 6],
    [5, 4, 8, 9],
    [9, 9, 9, 9],
    [2, 4, 5, 6]
]
    for(i in aluno){
        console.log(`----- Aluno ${[i]} -----`)
        // console.log(aluno[i][1]);
        
        for(j in aluno[i]){
        
            if(aluno[i][j]<6){
                console.log(aluno[i][j]);
            }
        }
    }


// let alunos = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]
//     for (i in lista){
//         for(j in lista[i]){
//             console.log(lista[i][j]);
//         }
//     }
