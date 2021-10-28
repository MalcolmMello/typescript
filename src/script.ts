function showAge(idade: string | number) {
    if(typeof idade === 'string') {
        console.log("My age is: "+idade)
    } else {
        console.log( idade )
    }
}

showAge(90)
showAge('90')

