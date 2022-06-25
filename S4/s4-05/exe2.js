

function convertTemperature (valorTemp, tempAtual, tempDesejada)

    temp = tempDesejada //parei aki

    if (tempDesejada == 'Celsius'){
        // function convertToCelsius(valorTemp, tempAtual, tempDesejada){
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
    if (tempDesejada == 'Fahrenheit'){
        // function convertToFahrenheit(valorTemp, tempAtual, tempDesejada){
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
    if (tempDesejada == 'Kelvin'){
        // function convertToKelvin(valorTemp, tempAtual, tempDesejada){
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
  
convertTemperature(18, 'Celsius', 'Kelvin')
convertTemperature(291.15, 'Kelvin', 'Fahrenheit')
convertTemperature(64.4, 'Fahrenheit', 'Celsius')

//   convertToKelvin (18, 'Celsius')
//   convertToFahrenheit (291.15, 'Kelvin')
//   convertToCelsius (64.4, 'Fahrenheit')


