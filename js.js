
const age = 27

const shoes = {
    sizes: [44, 38, 39, 35, 40],
    brand: "nike",
    since: 1995

}
const users = [{
    name: 'Lyan',
    gender: "male",
    age: 17,
    shoes: 38

},
{
    name: 'brtio',
    gender: "female",
    age: 22,
    shoes: 40
},
{
    name: 'batata',
    gender: "male",
    age: 70,
    shoes: 39

},
{
    name: 'arroz',
    gender: "luz",
    age: 13,
    shoes: 40
}
]
const brands = ["mike", "ardidas", "redley"]

console.log(users.length)
// .toString ->> vou transformar aquele objeto/item de array
// percorrer pelos itens do array pelo . ->> console.log(NomeDaConst.ItemQueEuQUero)
console.log(shoes.sizes[0])
console.table(brands)

const ageFilter = users.filter(user => user.age === 13)
const genderFilter = users.filter(user => user.gender === "male")
// encontrar um objeto num array
//filter vai procurar e mandar todos os objetos com auele nome
//find vai mandar o primeiro objeto com aquele nomeu

console.table(users)
console.table(ageFilter)
console.table(genderFilter)


const shortName= "Lyan Brito de Jesus"
const ArrayName =  shortName.split(" ")
// split quebra o string em objetos
// aqui eu to transformando o nome em varios array, e utilizando do espacço (" ") como divisor das palavras ->> fazendo com que eu consiga utilizando Index

const firstName = ArrayName[0]
// aqui eu declarei que o firstName é o primeiro indice
const lastName = ArrayName[ArrayName.length-1]
// aqui eu declarei que o lastName é o ultimo indice ->> como o indice começa com 0, colocando -1 ele "da "da a volta" e chega n ultimo

console.log(firstName, lastName)

// map

const numbers = [1, 2, 3, 4, 5]
const doubleNumbers = numbers.map((num) => {
    return num * 2
    
})
// ele vai multiplicar todos os itens do array por 2
console.log(doubleNumbers)

const tripleNumbers = numbers.map(num => 
    { return num * 3 } 
)
console.log(tripleNumbers)
// arrow fncion () => {} mesma coisa q o funcion (){}
