//Estruturas condicionais com operador lógico ou (||)

/*Para que a pessoa possa viajar sozinha ela deve 
=> ter a idade maior ou igual a 18
    ou
 => Estar acopanhada do responsável*/

const idade = 17
const acompanhadoDeResponsavel = true
const temCNH = false

if(idade >= 18 || acompanhadoDeResponsavel){
    console.log("AUTORIZADO a viajar")
}else{
    console.log("NÃO está autorizado a viajar")
}

//Uso do operador lógico &&
if(idade >= 18 && temCNH){
    console.log("PODE dirigir")
}else{
    console.log("NÃO pode dirigir")
}


