let listaDeTarefas = {

    tarefas:[],

    adicionarTarefas(tarefa){
        this.tarefas.push(tarefa)
    }
}
listaDeTarefas.adicionarTarefas('arrumar casa')

console.log(listaDeTarefas);









// let eu = {

//     nome: 'Ronaldo',
//     sobrenome: 'Aragon de Assis Brabo',
//     sobrenomeNasci: 'de Assis Júnior',
//     dog: 'bentuxo',
//     exmarido: 'Bruno',
//     pais: ['Ronaldo', 'Helena'],
//     boysConcorrentes: ['stan', 'cris'],
//     amigos:['elias','marcos'],
//     profissao:'adv',
//     novaProfissao:'desenvolvedor'
// }

// for(key in eu){

//     console.log(key);
//     console.log(eu[key]);
// }
