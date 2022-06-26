function convertToCelsius(currentValue, currentType, previousType){

    if (previousType == 'Celsius'){

        if (currentType == 'Fahrenheit') {
            return ((currentValue - 32) * (5/9)).toFixed(2)
        }
        else if (currentType == 'Kelvin') {
            return (currentValue - 273.15).toFixed(2)
        }
        else if (currentType == 'Celsius') {
            return 'Digite um tipo diferente do atual para ser convertido.'
        }
}}

function convertToFahrenheit(currentValue, currentType, previousType){

    if (previousType == 'Fahrenheit'){

        if (currentType == 'Celsius') {
            return (currentValue * 9/5) + 32
        }
        else if (currentType == 'Kelvin') {
            return (currentValue - 273.15) * (9/5) + 32
        }
        else if (currentType == 'Fahrenheit') {
            return 'Digite um tipo diferente do atual para ser convertido.'
        }
}}

function convertToKelvin(currentValue, currentType, previousType){

    if (previousType == 'Kelvin'){

        if (currentType == 'Fahrenheit') {
            return ((currentValue - 32) * 5/9 + 273.15).toFixed(2)
        }
        else if (currentType == 'Celsius') {
            return (currentValue + 273.15).toFixed(2)
        } 
        else if (currentType == 'Kelvin') {
            return 'Digite um tipo diferente do atual para ser convertido.'
        }
}}

console.log(convertToCelsius(64.4, 'Fahrenheit', 'Celsius'))
console.log(convertToFahrenheit(291.15, 'Kelvin', 'Fahrenheit'))
console.log(convertToKelvin(18, 'Celsius', 'Kelvin'))

