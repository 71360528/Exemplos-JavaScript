const paragrafos = document.querySelectorAll(".paragrafo")

console.table(paragrafos)  

for(let i = 0; i < paragrafos.length; i++){

    paragrafos [i].style.color = "blue"
    paragrafos [i].style.fontSize = "32px"
    paragrafos [i].style.fontWeigth = "800"
}