function snapCrackle (maxValue){

    for (c = 1; c < maxValue; c++){

        if (c % 2 != 0 && c % 3 != 0 && c % 5 != 0){

            console.log('SnapCracklePrime')
        }

        else if (c % 2 == 1 && c % 5 == 0) {

            console.log('SnapCrackle')
        }

        else if (c % 2 == 1){

            console.log('Snap')
        }
                
        else if (c % 5 == 0){

            console.log('Crackle')
        }

        else {

            console.log(c);
        } } }

    snapCrackle (100)

