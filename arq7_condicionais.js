//Estruturas Condicionais com Operador lógico E (&&)

const nota = 70
const faltas = 2
const quantidadeAulasCurso = 10

/*Para que o aluno seja APROVADO a nota 
deve ser maior que 50 e as faltas menores ou iguais a 25% do total de aulas*/

//Sem o operador E

if(nota >= 50){
    if(faltas <= 0.25 * quantidadeAulasCurso){
        console.log("APROVADO!!")
    }else{
        console.log("REPROVADO por faltas")
    }
}else{
    console.log("REPROVADO por notas")
}

//Com o operador E (&&)

if(nota >= 50 && faltas <= 0.25 * quantidadeAulasCurso){
    console.log("você esta APROVADO")
}else{
    console.log("você eta REPROVADO")
}