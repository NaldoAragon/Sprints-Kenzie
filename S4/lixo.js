let arrayNumeros = [22, 24, 2, -4, -90, -50, 100, -10]

function qualMaiorNumero(lista){

    let maiorNumero = 0

    for(i in lista){

        if (lista[i] > maiorNumero){
            maiorNumero = lista[i]
        }
    } 
    console.log(maiorNumero);
}

qualMaiorNumero(arrayNumeros)

// function numeroNegativo (array){
    
//     let numerosNegativos = 0
//     for (i in array){
        
//         if(array[i] < 0){

//             numerosNegativos = numerosNegativos + array[i]
            
//         }
//     } console.log(numerosNegativos);
// }
// numeroNegativo(['oi', 2, -4, -90, -50, 1, -10])

// function queroTexto(texto){

//     return texto
// }
// queroTexto('Eu sou o texto requerido')


// function somarNumeros(n1, n2, n3, n4=0){
//     return n1 + n2 + n3 + n4
//     // console.log(somatotal)
// }

// let result1 = somarNumeros(2, 3, 4)
// let result2 = somarNumeros(5,7,9)
// let resultFam = somarNumeros(37, 28, 62, 64)

// // console.log(result1);
// // console.log(result2); 
// alert(`A soma da idade da família é ${resultFam}`)

// function digaOla(){
//     return 'Olá!'
// }
// alert(digaOla())

// let listaDeNomes = []

// listaDeNomes.push(['naldinho', 'Ronaldo', 'naldoca', 'naldo', 'ronaldinho'])

// console.log(listaDeNomes);

//     function ordemNomes(listaNomes){

//         for(i=0; i < listaNomes.length; i++){
            
//             if (listaNomes[i] == 'Ronaldo')

//             return listaNomes[i]
//         }
//     }
// let nomeEncontrado = ordemNomes(listaDeNomes);
// console.log(nomeEncontrado);


// function numeroNegativo (array){
    
//     for (i in array){
        
//         if(array[i] < 0){
//             console.log(`Aqui estão só os números negativos ${array[i]}`);
//         }
//     }
// }
// numeroNegativo([10, 2, -4, -90, -50, 1, -10])


// function parimp (n){

//     if (n%2 == 0) {
//         return 'par'
//     }
//     else {
//         return 'impar'
//     }
// }
// parimp(50)

// function soma(n1, n2){

//     return n1 + n2
// }
// soma(37, 41)


// let array = [10, 2, -4, -90, -50, 1, -10]

//     // for(i = 0; i < array.length; i++){

//         for(i in array){

//         console.log(`A posição ${i}, tem valor ${array[i]}`);
//     }


// function numeroNegativo(num){

//     console.log(num);

//     for(i=0 ; i  < numeroNegativo.length ; i++)

// }

// numeroNegativo([10, 2, -4, -90, -50, 1, -10])



// let nome = prompt('Digite seu nome')

// // console.table(nome)

// let sobrenome = prompt('Digite seu sobrenome')
// // console.table (sobrenome)

// console.table(nome + ' ' + sobrenome)



// let cont = 0


    // let marido = 'Chris'
    // let novaFamilia = ['eu', marido, 'filho1', 'filho2']
    // amor = 'Deus'
    // novaFamilia[1] = 'Deus'
    // array = ['eu', amor, 'bento', 4, [novaFamilia]]

// let mercado = []
// mercado.push('chocolate')
// mercado.push('carneMoida')
// mercado.push('feijao')
// mercado.push('arroz')
// mercado.push('salada')

// console.table(mercado);

// console.table(array);
    // for(cont = 0; cont < array.length; cont++){

    // console.table('Quem vai conviver comigo ' + array[cont]);
    // }
    // console.log(typeof(array[3]));
