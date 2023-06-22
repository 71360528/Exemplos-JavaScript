//Tipos de Variaveis => Tipagem dinâmica


const idade = 30
const idade2 = 30.5
const idade3 = "30"
const maiorDeIdade = true
const nomes = ["Mariavaldo", "Genivaldo", "Mariano"]

console.log(`o tipo de variável idade é ${typeof (idade)}`)
console.log(`O tipo de variável idade2 é ${typeof(idade2)}`)
console.log(`O tipo de variável idade3 é ${typeof(idade3)}`)
console.log(`O tipo de variável maiorDeIdade é ${typeof(maiorDeIdade)}`)
console.log(`O tipo de variável nomes é ${typeof(nomes)}`)

//Exemplo de tipagem Fraca => pode atribuir outro tipo á variável
console.log(idade3 / 2)


//Diferença entre ponto e vírgula
console.log(4.5)
console.log(4,5)