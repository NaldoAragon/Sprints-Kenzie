function qualTipoDeElemento(lista){

  for (i in lista){
    
    if (typeof(lista[i]) == 'number'){
      console.log(`O elemento ${lista[i]} é um 'number'.`)
    }
    else{console.log(`O elemento ${lista[i]} NÃO é um 'number'.`)}
  }
}
qualTipoDeElemento([1.5,"String",true,10])


// let tiposDiversos =[1.5,"String",true,10]

// n = 0

// function qualTipoDeElemento(lista, posicao) {
     
//   while (tiposDiversos[n] == typeof(number)){
//     console.log(tiposDiversos[n]);
//     n++
//   }
//     }
//   qualTipoDeElemento(tiposDiversos[n], 1)

