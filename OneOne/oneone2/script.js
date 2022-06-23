let reservatorio = (prompt('Insira o nível de reservatório'))
// let reservatorio = 500

    if(reservatorio > 1000){
        console.log(alert("Reservatório está com defeito. Realizar manutenção!"));
    }
    else if (reservatorio <= 1000 && reservatorio >= 200){
        console.log(alert("Nível do reservatório estável."));
    }
    else {
        console.log(alert("Abastecer o reservatório."))
    }
