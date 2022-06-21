function six_toast (quantTorradas){
    if (quantTorradas > 6){
        return 'Sobraram ' + (quantTorradas - 6) + ' torradas'
    } else if (quantTorradas < 6){
        return 'Faltam ' + (6 - quantTorradas) + ' torradas'
    }
}
console.log(six_toast (10));
console.log(six_toast (3));
