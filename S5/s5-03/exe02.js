function updateLight(current) {

    let rightLight
  
    if(current == 'green'){
        rightLight = 'yellow'
    }
    else if(current == 'yellow'){
        rightLight = 'red'
    }
    else{
        rightLight = 'green'
    }
    return rightLight
  }