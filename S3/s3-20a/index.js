// let minimo = 1212
// let kilow100 = minimo / 7
// let kilow1 = kilow100 / 100
// let consumoKilo = parseFloat(prompt('Insira o consumo em Kilowats'))
// let totalConta = consumoKilo * kilow1
// alert(`O total da conta é: ${totalConta.toFixed(2)}`)
// let totalContaDesconto = totalConta * 90 / 100
// alert(`Se pagar antes, ganha 10% de desconto e paga apenas: ${totalContaDesconto.toFixed(2)}`)

// let produto = parseFloat(prompt('Insira o valor do produto'))
// let produtoDesconto10 = produto * 90 /100
// alert(`O produto com 10% de desconto fica em: ${produtoDesconto10.toFixed(2)}`)

// let a = prompt("Insira um nome para a")
// let b = prompt("Insira um nome para b")
// let aux
// aux = a 
// a = b
// b = aux
// alert(`Os nomes originais de a e b: ${b}, ${a}. Após a troca são: ${a}, ${b}`)
        
// Criar um aplicativo que leia a quantidade de fitas que uma locadora de vídeo possui e o valor que ela cobra por cada aluguel, mostrando as informações pedidas a seguir:

// Sabendo que um terço das fitas são alugadas por mês, exiba o faturamento anual da locadora;

// Quando o cliente atrasa a entrega, é cobrada uma multa de 10% sobre o valor do aluguel.

// Sabendo que um décimo das fitas alugadas no mês são devolvidas com atraso, calcule o valor ganho com multas por mês;

// Sabendo ainda que 2% das fitas se estragam ao longo do ano, e um décimo do total é comprado para reposição, exiba a quantidade de fitas que a locadora terá no final do ano.

// let qtasFitas = parseInt(prompt('Insira a quantidade de Fitas'))
// let aluguelFitas = parseFloat(prompt('Insira o valor de aluguel de cada fita'))
// alert(`A locadora possui ${qtasFitas} fitas. Cada uma é alugada por R$${aluguelFitas.toFixed(2)}.`)
// let faturamentoMensal = qtasFitas * aluguelFitas / 3
// let faturamentoAnual = faturamentoMensal * 12
// alert(`O faturamento mensal da locaroda é de R$${faturamentoMensal.toFixed(2)}, e o faturamento anual da locadora é de R$${faturamentoAnual.toFixed(2)}.`)
// let atraso10 = aluguelFitas * 110 / 100
// let faturamentoMensalComMulta = faturamentoMensal / 10 * 110 / 100
// let faturamentoAnualComMulta = faturamentoMensalComMulta * 12
// alert(`O pagamento do aluguel da fita juntamente com o atraso fica em R$${atraso10.toFixed(2)}. O faturamento de juros anual da locadora é de R$${faturamentoAnualComMulta.toFixed(2)}.`)
// let qtasFitasContinuamPorAno = qtasFitas * 98 /100
// let qtasFitasReposicao = qtasFitasContinuamPorAno * 110 / 100
// alert(`A quantidade de fitam que não se deterioram por ano é de ${qtasFitasContinuamPorAno}. E a quantidade total de fitas incluindo as novas é de ${qtasFitasReposicao}.`)

// Por exemplo, o número da conta é 235.

// Somar o número da conta com o seu inverso: 235 + 532 = 767;

// Multiplicar cada dígito pela sua ordem posicional (da esquerda para a direita) e somar estes resultados: 7*1 + 6*2 + 7*3 = 40;
// O último dígito desse resultado é o dígito verificador da conta: último dígito de 40 é 0.

let digito1 = parseInt(prompt('Insira o 1º digito da conta'))
let digito2 = parseInt(prompt('Insira o 2º digito da conta'))
let digito3 = parseInt(prompt('Insira o 3º digito da conta'))

let somaDigitos1 = digito1 + digito3
let somaDigitos2 = digito2 + digito2
let somaDigitos3 = digito3 + digito1

let multi1 = somaDigitos1 * 1
let multi2 = somaDigitos2 * 2
let multi3 = somaDigitos3 * 3
let somaMulti = multi1 + multi2 + multi3

let ultimoDigito = 
