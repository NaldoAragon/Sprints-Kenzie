// verificar qtas vezes o n1 aparece
// verificar qtas vezes a repetição de 1 aparece
// fazer contagem de 1
// fazer contagem da repetição de 1

function stantonMeasure(array){

  let frequencia1 = 0
  let numDeRepeticoesDe1 = 0

  for(i in array){
      if(array[i] == 1)
      frequencia1 += 1
  }
  for(i in array){
      if(array[i] == frequencia1){
          numDeRepeticoesDe1 += 1
      }
  } return numDeRepeticoesDe1
}