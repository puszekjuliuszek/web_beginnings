function loaded(){
    console.log("zaczynamy kalkulator")
}

let toCalc = ""

function clicked(n){
    let expression = document.getElementById("expression")
    let output = document.getElementById("output")
    if (output.innerHTML != ""){
        expression.placeholder = ""
    }
    output.innerHTML = ""
    let character = 0
    if (n<10){
        character = n
    }
    if (n == 10){
        character = "/"
    }
    if (n == 11){
        character = "*"
    }
    if (n == 12){
        character = "-"
    }
    if (n == 13){
        character = "+"
    }
    if (n == 14){
        character = "."
    }
    if (expression.placeholder == "Wpisz wyrażenie do obliczenia"){
        expression.placeholder = character
    }
    else{
        expression.placeholder += character
    }
    toCalc+=character
}

function clickedEqual(){
    let result = eval(toCalc)
    let output = document.getElementById("output")
    output.innerHTML = "wynik:  " + result
    toCalc=""

}