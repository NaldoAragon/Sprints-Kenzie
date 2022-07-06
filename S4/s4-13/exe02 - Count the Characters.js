function countChar(string, char){

  contador = 0

  for(i in string){

      if(string[i].toLowerCase() === char || string[i].toUpperCase() === char){

          contador++
      }
  }
  return contador
}

console.log(countChar("FizzbuzZ", "Z"))
