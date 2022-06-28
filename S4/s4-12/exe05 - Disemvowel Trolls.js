function disemvowel(str){

  let stringNova = ''

  for(i in str){

      let letraMinuscula = str[i].toLowerCase()

      if (letraMinuscula !== 'a' && letraMinuscula !== 'e' && letraMinuscula !== 'i' && letraMinuscula !== 'o' && letraMinuscula !== 'u'){
          
          stringNova += str[i]
      }
  } return stringNova

} 
disemvowel()