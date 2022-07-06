function checkExam(array1, array2) {

    let pontuacao = 0

    for(i in array1){

        if(array2[i] == ''){

            pontuacao += 0
        }
        else if(array1[i] != array2[i]){

            pontuacao -= 1
        }
        else if(array1[i] == array2[i]){

            pontuacao += 4
        }
    }
    if(pontuacao > 0){

        return pontuacao
    }
    return 0
}
console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]))