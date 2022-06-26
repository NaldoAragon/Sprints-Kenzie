function recebendoNotas (n1, n2, n3, n4){

    if (typeof(n1) === 'number' && typeof(n2) === 'number' && typeof(n3) === 'number' && typeof(n4) === 'number'){

        return n1 + n2+ n3 + n4
    }
    else {
        return 'A função só pode receber números'
    }
}
console.log(recebendoNotas(8, 9, '10', 6));

// function qualTipoDoValor(valor){

//     return typeof(valor)
// }
// qualTipoDoValor()


// function somarDoisValores (a , b){
//     return a + b
// }
// console.log(somarDoisValores(15, 876))

// ---------------------------------------------

// function teste (a,b){
//     console.log(typeof(a))
//     console.log(typeof(b));
// } 
// let result = teste ('eu',2)
// // console.log(result);

// // -----------------------------------

// function somarNotas (nota1, nota2, nota3, nota4){
//    if (typeof(nota1) === 'number' && typeof(nota2) === 'number' && typeof(nota3) === 'number' && typeof(nota4) === 'number'){
//     return nota1 + nota2 + nota3 + nota4
//     } else{
//     return 'O campo só pode receber números'
//     }
// }
// console.log(somarNotas(8, 6, '9', 3));
// console.log(somarNotas(8, 6, 9, 3));

