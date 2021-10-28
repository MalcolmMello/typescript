function resumo(usuario: {nome: string, idade: number}) {
    return `Olá ${usuario.nome}, tudo bem? Você tem ${usuario.idade} anos`
}

let u = {
    nome: 'Malcolm',
    idade: 90
};

console.log(resumo(u))