// comentar no console
console.log("Batata Frita")
// informar no console
console.info('oioioioioio')
// alertar no console
console.warn('oioioioioio')

console.error('Erorr')
// mostrar um erro no console

// var e let são variaveis, e mudam
// const tambem é uma variavel, porém é constante
var a = 3
let b = 5
const c = 6

const name = "Maria"
console.log(name)

const age = 35
console.log(typeof age)

const isApproved = false
console.log(isApproved)

let lastName = null
console.log(lastName)
let adress
console.log(adress)

const lenguages = ['Javascript', 'Phyton']
console.log(lenguages)
const user = { name: 'Maria', email: 'maria@maria.com' }
console.log(user)

// typeof vai trazer pra mim o tipo da variavel, não ela

// tipos // 
// string- nome 
// number- numero 
// boolean- 
// null- nulo
// undefined- vai chegar e n ta declarada ainda 
// array-lista de um monte de coisa 
// objetpo- chave e valores {name:'Maria'}

// //metodos de strinig
const fullName = 'Ola Mundo oi'

//length numera o total de caracteres do coiso, ''não conta a partir do indice''
// length - numera a quantidade // indice - começa a contar a partir do 0 (uma lista que tem 10 variaveis, o length vai contar 10, e o index vai contar 9)
console.log(fullName.length)

//split- serapar o texto a partir de um caractere (ou palavra) escolhido (' ')
const separatorName = fullName.split(' ')
console.log(separatorName)

//trabalhando com array, que pode ser reconhecida como lista de 0 a ...

// indexOf - conta quantos caracteres vai ate a palavra/letra escolhoida ('ola')
// slice - escolher um aparte especifica colocando de tanto a tanto tu quer cortar - colocar um indice a mais pra fariar corretamente
console.log(fullName.indexOf('Mundo'))
console.log(fullName.toUpperCase())
console.log(fullName.toLowerCase())
console.log(fullName.slice(4, 9))

const list = ['a', 'b', 'c', 'd']
console.log(list.length)
console.log(list[4])

//adicionando um item ao array
// metodo antigo
list[4] = 'e'
console.log(list)
// com metodo atual
console.log(list.push('g'))
console.table(list)

//list.length = calor de itens contando com o 0 = peimeiro indice
//[list.length -1]= retorna o uultimo item do array, 
console.log(list[list.length - 1])

//retirar o ultimo valor do array
list.pop()
console.log(list)
// remove o primeirp item do array
list.shift()
console.log(list)
// substitui o primeiro item do array
list.unshift('bola')
console.log(list)
// corta o array de tal a tal
console.log(list.splice(2, 5))

// criando um objeto
// declara a váriavel , em cgaves coloca o nome dos objetos e o valor deles

const product = {
    name: 'banana',
    price: 15.99,
    inStock: true,
    sizes: ['P', 'M', 'G']

}
// percorre pelo . para puxar o objeto da variavel
console.log(product.name)
// adicionando um novo objeto na constante
product.color = ['azul', 'preto']
console.log(product)

// destruturação 
// aqui, eu "quebrei" o product pra que ele mostre apenas price e sizes, então ele vai entender que product, a partir daqui, é igual a esses 2 objetos que eu escolhi
const { price, sizes } = product
console.log(product)


// json

const cat = {
    name: 'Mosca',
    age: 2,
    race: 'Bingus',

}
console.table(cat)

// quando um console esta em JSON, os valores ficam destacados e coloridos, faciitando a vizualização e outros bang
// naturalmente, o console.log ja vem em JSON, porém, para transforma-lo em string usamos JSON.stringfy(constante-que-queremos-mudar)
const catString = JSON.stringify(cat)
console.log(catString)

// para transformar um string em JSON, só troca o "sufixo" (o q vem depois do . NÃO SE CHAMA SUFIXO, to usando esse nome pq n lembro o nome desse bang)
const catToJson = JSON.parse(catString)
console.log(catToJson)