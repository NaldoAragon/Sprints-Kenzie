function qtosAnosTerei (anoNasceu, anoDesejado){
    if (anoNasceu < anoDesejado){
        let voceTera = anoDesejado - anoNasceu
        return `Você terá ${voceTera} ano(s) de idade.`
        }
    else if ( anoNasceu > anoDesejado)  {
        let voceNascera = anoNasceu - anoDesejado
        return `Você nascerá em ${voceNascera} ano(s).`
        }
    else if (anoNasceu == anoDesejado){
        return `Você nasceu neste mesmo ano!`
        }}

console.log(qtosAnosTerei (1985, 2099))
console.log(qtosAnosTerei (2000, 1985))
console.log(qtosAnosTerei (1960, 2000))



    