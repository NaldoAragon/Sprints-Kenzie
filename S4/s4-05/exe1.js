function soma(nota1, nota2, nota3, nota4){
    return nota1 + nota2 + nota3 + nota4
  }

function media(value){
    return value / 4
  }

function resultado(nota1, nota2, nota3, nota4){ 
    return media(soma(nota1, nota2, nota3, nota4))
  }

  console.log('Média do aluno Carlos: ' + resultado(8, 9, 7, 9))
  console.log('Média da aluna Maria: ' + resultado(5, 6, 7, 9))

// // ---------------------------------------
