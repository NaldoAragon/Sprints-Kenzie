function nextId(ids){
    let i = 0

    for( i = 0 ; i < ids.length ; i++){

        if(ids.includes(i) === false){

            return i
        }
    }
    return i;
}