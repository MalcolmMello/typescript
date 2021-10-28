function showAge(idade: string | number) {
    if(typeof idade === 'string') {
        console.log(idade.toUpperCase())
    } else {
        console.log( idade )
    }
}

showAge(90)
showAge('90')

