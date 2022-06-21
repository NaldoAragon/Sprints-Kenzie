
function convertToCelsius(valorTemp, tempAtual){
    
    if (tempAtual == 'Fahrenheit') {
        return ((valorTemp - 32) * (5/9)).toFixed(2)
    }
    else if (tempAtual == 'Kelvin') {
        return (valorTemp - 273.15).toFixed(2)
    }
    else if (tempAtual == 'Celsius') {
        return 'Digite um tipo diferente do atual para ser convertido.'
    }
  }

function convertToFahrenheit(valorTemp, tempAtual){
    
    if (tempAtual == 'Celsius') {
        return (valorTemp * 9/5) + 32
    }
    else if (tempAtual == 'Kelvin') {
        return (valorTemp - 273.15) * (9/5) + 32
    }
    else if (tempAtual == 'Fahrenheit') {
        return 'Digite um tipo diferente do atual para ser convertido.'
    }
  }

function convertToKelvin(valorTemp, tempAtual){
    
    if (tempAtual == 'Fahrenheit') {
        return ((valorTemp - 32) * 5/9 + 273.15).toFixed(2)
    }
    else if (tempAtual == 'Celsius') {
        return (valorTemp + 273.15).toFixed(2)
    } 
    else if (tempAtual == 'Kelvin') {
        return 'Digite um tipo diferente do atual para ser convertido.'
    }
  }
  
  console.log(convertToCelsius (64.4, 'Fahrenheit'))
  console.log(convertToKelvin (18, 'Celsius'))
  console.log(convertToFahrenheit (291.15, 'Kelvin'))


