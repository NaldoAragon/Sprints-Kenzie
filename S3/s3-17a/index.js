// let usuarioAutenticado = true

//     if (usuarioAutenticado = true){
//         console.log('Seja Bem-vindo')
//     }

// ----------------------

// let usuario = 'Ana'
// let autenticado = true

//     if (usuario && autenticado){
//         console.log(`Olá ${usuario}, você está autenticado.`);
//     }
 
    let produto = 'maçã'
    let quantidadeDoProduto = 1
    let quantidadeDoProdutoParaPromocao = 5 - quantidadeDoProduto
    let mensagem

    if (produto = 'maçã' && quantidadeDoProduto >= 5){
        mensagem = 'Você recebeu uma promoção, o valor do produto será R$ 5.00'
    } else {
        mensagem = `Se você adicionar mais ${quantidadeDoProdutoParaPromocao} maçãs, o valor sairá por R$ 5.00.`
    }
    console.log(mensagem);