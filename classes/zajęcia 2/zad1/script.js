console.log("hello world")
let liczba = 5
let liczba2 = 15
let wynik = liczba + liczba2
for(let i = 0; i<5; i++){
    console.log(i)
}
console.log(wynik)
function suma(a,b){
    return a + b
}

function loaded(){
    let testDiv2 = document.getElementById("testDiv2")
    console.log(testDiv2)
    testDiv2.innerText = "czesc2"
    testDiv2.classList.add("tlo")
    testDiv2.classList.remove("tlo")
    //testDiv2.style["backgroundColor"] = "aquamarine"
    testDiv2.style.backgroundColor = "aquamarine"
}