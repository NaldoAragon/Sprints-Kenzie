let higiene = ['sabonete', 'shampoo', 'papelHig', 'detergente']
let alimentação = ['biscoitos', 'água', 'lanches', 'sucos', 'marshmallow' ]
let cuidadosMedicos = ['remedios', 'repelentes', 'gaze', 'esparadrapo', 'alcool', 'soro']
let lazer = ['bola', 'baralho', 'frescobol', 'uno', 'bolaVolei']

let caixaSuprimento = []

        if(higiene.length == 5){
            caixaSuprimento.push(higiene)
        }
        else if(higiene.length > 5){
            console.log('Precisa devolver ítens');
        }
        else {
            console.log('Precisa pegar mais ítens');
        }
        
        if(alimentação.length == 5){
            caixaSuprimento.push(alimentação)
        }
        else if(alimentação.length > 5){
            console.log('Precisa devolver ítens');
        }
        else {
            console.log('Precisa pegar mais ítens');
        }

        if(cuidadosMedicos.length == 5){
            caixaSuprimento.push(cuidadosMedicos)
        }
        else if(cuidadosMedicos.length > 5){
            console.log('Precisa devolver ítens');
        }
        else {
            console.log('Precisa pegar mais ítens');
        }
        if(lazer.length == 5){
            caixaSuprimento.push(lazer)
        } 
        else if(lazer.length > 5){
            console.log('Precisa devolver ítens');
        }
        else {
            console.log('Precisa pegar mais ítens');
        }



        console.log(caixaSuprimento);
