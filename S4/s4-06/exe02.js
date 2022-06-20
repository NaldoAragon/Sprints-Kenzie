function six_toast (quantTorradas){
    if (quantTorradas > 6){
        return quantTorradas - 6
    } else if (quantTorradas < 6){
        return 6 - quantTorradas
    }
}
console.log(six_toast (10));