function DNAStrand(dna){

    let novoDNA = ''

    for(i in dna){

        if(dna[i] == 'A'){

            novoDNA += 'T'
        }
        else if(dna[i] == 'T'){

            novoDNA += 'A'
        }
        else if(dna[i] == 'C'){

            novoDNA += 'G'
        }
        else if(dna[i] == 'G'){

            novoDNA += 'C'
        }
    }
    return novoDNA
}
console.log(DNAStrand("AAAA"))
//,"TTTT","String AAAA is"
  //"ATTGC"),"TAACG","String ATTGC is"