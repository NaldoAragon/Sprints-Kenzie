
function getCount(str){
    
  let contador = 0 

  for(i in str){

      let letra = str[i].toLowerCase()

          if(letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){

              contador++
          }
  } return contador
}
getCount()