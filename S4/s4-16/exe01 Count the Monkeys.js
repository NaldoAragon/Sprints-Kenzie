function monkeyCount(n) {

    let contagem = []

    for(i = 1 ; i <= n ; i++){

            contagem.push(i)
        }
    return contagem
}
console.log(monkeyCount(10))

//  10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  1 --> [1]