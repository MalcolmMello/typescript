let names = ['malcolm', 'bonieky']

names.forEach(function(nome) {
    if(typeof nome === 'string') {
        console.log(nome.toUpperCase())
    } else {
        console.log(nome)
    }
})