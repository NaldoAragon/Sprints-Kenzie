let arrayModelo = ["tail", "body", "head"]

function fixTheMeerkat(arr) {

        let auxiliar = arr[0]
        arr[0] = arr[2]
        arr[2] = auxiliar

        return arr
}

fixTheMeerkat(arrayModelo)