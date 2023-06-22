//A função deve receber uma nota e retornar:
// => Aprovado se a nota for maior ou igual a 70
// => Recuperação se a nota for maior ou iguais a 50
// => Reprovado se a nota for menor que 50 

const nomeAluno = "Marivaldo"
const notaAluno = 70

function avaliaNota (nota, nome){
    if(nota >= 70){
        return `$ {nome} está APROVADO`
    } if(nota >= 50) {
        return `$ {nome} está de REPURERAÇÃO`
    }else{
        return `$ {nome} está REPROVADO`
    } 
}

//console.log (avaliaNota (notaAluno, nomeAluno))]

//A Função deve receber um Array de nomes e um nome específico e
// verificar se este nome consta no Array

const listaNomes = new Array(
    "joão",
    "Maria",
    "Carlos",
    "Carla",
    "Ricardo"
)

const nomeProcurado = "Carla"
let encontrouNome = " "

    function procuraNome (nomes, nome){

        for(let i = 0; i < nomes.length; i ++ ){
            if(nomes[i] == nome){
                encontrouNome = true
                break
            }else{
                encontrouNome = false
            }
        }
        
        if(encontrouNome == true){
            console.log (`$ {nome} foi encontrado na lista`)
        }else{
            console.log (`$ {nome} NÃO foi encontrado na lista`)
        }
    }

    procuraNome (listaNomes, nomeProcurado)

    