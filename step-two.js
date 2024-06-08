// depois de declarar a função, dar um nome pra ela e colocar os parenteses(pra colocar paramentros) {colocar novas funções, o corpo dele}
function Soma(numOne, numTwo) {
    return numOne + numTwo
}
function Divisão(numOne, numTwo) {
    return numOne / numTwo

}

console.log('o valor da soma é:', Soma(10, 15))
console.log('o valor da divisão é:', Divisão(10, 15))

// se o nome tiver length maior do que 3, ele retorna "nome valido", senão, retorna "nome invalido"
function getFirstValidInitial(name) {
    if (name.length > 10) {
        return "nome nordestino"
    }
    else if (name.length > 3) {
        return "nome valido"

    }
    else {
        return "nome invalido"
    }
}
// else if -> coloco outra condição de validação dentro do if inicial, ou seja, quando eu colocar o senão, eu coloco a nova condição e continuo
console.log(getFirstValidInitial('Ln'))


// switch case - outro metodo pra fazer validaçãod de nomes, dados, etc
function ValidaNome(name) {
    switch (name) {
        case "jao": return 12121212
        case "maria": return 13131313
        case "roberio": return 14141414
        default: return "sem cadastro"

    }
}
console.log(ValidaNome("jao"))
console.log(ValidaNome("roberio"))
console.log(ValidaNome("jooao"))

// com a `` vc pode colocar tanto string quanto variaveis num return ou etc
// nesse caso eu to colocando o sr antes do nome, ent eu vou colocar um texto junto de uma variavel

function AddSr(name) {

    return `Sr. ${name}`
}

// aqui eu estou dizendo que, se for string, retorne com sr antes, se não, retorne uma frase para inserir um nome válido
console.log(AddSr('lyan'))

function AddSr(name) {
    if (typeof (name) === 'string') {
        return `Sr. ${name}`
    } else {
        return "digite um nome valido"
    }
}
// não entendi algo, ele reconhece qualquer coisa dentro das aspas como string, n sei como isso funcionaria na pratica mas n deve ser nada de mais
console.log(AddSr('lyan'))

// ternário
// mais para casos de soluções rapidas, validação

function Aprovacao(nota) {
    return ((typeof (nota) === 'number') && (nota > 7 ? "Aprovado" : "Reprovado"))
    // aqui, eu queria verificar se ele é do tipo number primeiro, pra depois fazer a verificação de maior ou menor, pra dai mostrar o resultado
}
// && é usado como validação única- se for mostra, se não n mostra
console.log(Aprovacao('sete'))
console.log(Aprovacao(9))
console.log(Aprovacao(4))


// desafio= fazer uma validação com 3 criterios, se a nota for > 7 foi aprovado, se for entre 4 e 6 recuperação, se for menor de 4 é reprovado
function ValidScore(nota) {
    if (nota >= 7) {
        return "aprovado"
    } else if (nota > 4) {
        return "recuperação"
    } else {
        return "reprovado"
    }
}
console.log(ValidScore(7))
console.log(ValidScore(6))
console.log(ValidScore(4))

// desafio: pegar o primeiro e o ultimo nome das pessoas em uma lista
const fullName = ('Lyan Brito de Jesus')
const arrayName = fullName.split(" ")

console.log(arrayName)

const firstName = arrayName [0]

const lastName = arrayName[arrayName.length -1]

console.log(firstName, lastName)

