function somaNotas(n1, n2, n3, n4){

  return n1 + n2 + n3 + n4
}

function qualMedia(nMedia){
  
  return nMedia / 4
}

let notaFinalF = qualMedia(somaNotas(8,8,8,8))

console.log(`Nota final do aluno Carlos é ${notaFinalF}`);

// function soma(nota1, nota2, nota3, nota4){
//     return nota1 + nota2 + nota3 + nota4
//   }

// function media(value){
//     return value / 4
//   }

// function resultado(nota1, nota2, nota3, nota4){ 
//     return media(soma(nota1, nota2, nota3, nota4))
//   }

//   console.log('Média do aluno Carlos: ' + resultado(8, 9, 7, 9))
//   console.log('Média da aluna Maria: ' + resultado(5, 6, 7, 9))

// // ---------------------------------------
