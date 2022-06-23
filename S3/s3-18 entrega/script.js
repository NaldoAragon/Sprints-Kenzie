let precoMacarrao = parseFloat(prompt("Digite o valor do Macarrão"))
let quantidadeMacarrao = parseInt(prompt("Quantas Unidades ?"))

totalMacarrao = precoMacarrao * quantidadeMacarrao

let precoRefrigerante = parseFloat(prompt("Digite o valor do Refrigerante"))
let quantidadeRefrigerante = parseInt(prompt("Quantas Unidades ?"))

totalRefrigerante = precoRefrigerante * quantidadeRefrigerante

let precoErvilha = parseFloat(prompt("Digite o valor do Ervilha"))
let quantidadeErvilha = parseInt(prompt("Quantas Unidades ?"))

totalErvilha = precoErvilha * quantidadeErvilha

let precoArroz = parseFloat(prompt("Digite o valor do Arroz"))
let quantidadeArroz = parseInt(prompt("Quantas Unidades ?"))

totalArroz = precoArroz * quantidadeArroz

let precoFeijao = parseFloat(prompt("Digite o valor do Feijão"))
let quantidadeFeijao = parseInt(prompt("Quantas Unidades ?"))

totalFeijao = precoFeijao * quantidadeFeijao

let precoVinho = parseFloat(prompt("Digite o valor do Vinho"))
let quantidadeVinho = parseInt(prompt("Quantas Unidades ?"))

totalVinho = precoVinho * quantidadeVinho

totalCompra = totalArroz + totalErvilha + totalFeijao + totalMacarrao + totalRefrigerante + totalVinho

let totalCompraPelaMetade = totalCompra / 2
let totalVinhoPelaMetade = totalVinho / 2

let euPago
let amigoPaga
let parImpar
let ganheiPerdi
let vouPagarNaoVouPagar

alert(`Valor total a ser pago: R$${totalCompra.toFixed(2)}.`)

    if(totalCompra % 2 == 0){
        euPago = (totalCompraPelaMetade - totalVinhoPelaMetade);
        amigoPaga = (totalCompraPelaMetade + totalVinhoPelaMetade);
        parImpar = 'número par'
        ganheiPerdi = 'ganhei'
        vouPagarNaoVouPagar = 'não vou pagar o vinho'

    }else{
        euPago = totalCompraPelaMetade;
        amigoPaga = totalCompraPelaMetade;
        parImpar = 'número ímpar'
        ganheiPerdi = 'perdi'
        vouPagarNaoVouPagar = 'vou ter que pagar a metade do vinho'
    }

    alert(`O valor total das compras foi de R$${totalCompra.toFixed(2)}, que é um ${parImpar}.`)

    alert(`Por ser um ${parImpar}, eu ${ganheiPerdi} a aposta.`)

    alert(`O valor do vinho ficou em R$${totalVinho.toFixed(2)}. E como eu ${ganheiPerdi} a aposta, ${vouPagarNaoVouPagar}.`)

   alert(`Sendo assim, meu amigo vai pagar ao todo R$${amigoPaga.toFixed(2)} e eu vou pagar R$${euPago.toFixed(2)}. Totalizando R$${totalCompra.toFixed(2)} que foi o valor da nossa compra.`)
