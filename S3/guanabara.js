// function maioridade(idade){
//     if(idade >= 18){
//         return 'Pode entrar!'
//     } else {
//         return 'Proibida entrada'
//     }}

// function soma (n1, n2){
//     return n1 + n2
// }
// let soma2 = soma(5, 6)
// console.log(soma2);

function criAdoAduIdo (idade){
    if (idade < 13){
        console.log('Criança');
    } else if  (idade < 18){
        console.log('Adolescente');
    } else if  (idade < 60){
        console.log('Adulto');
    } else {
        console.log('Idoso');
    }
}
console.log(criAdoAduIdo (61));