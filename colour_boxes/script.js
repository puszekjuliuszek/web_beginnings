function clicked(){
    console.log("kliknieto");
    let container = document.getElementById("container");
    let newSquare = document.createElement("button");
    newSquare.classList.add("square");
    newSquare.onmouseover = function(){mouseOverF(newSquare)};
    newSquare.onmouseout = function(){mouseOutF(newSquare)};
    newSquare.onclick = function(){clicked2(newSquare)};
    container.appendChild(newSquare);
}

function mouseOverF(newSquare){
    newSquare.style.backgroundColor = "red";
}

function mouseOutF(newSquare){
    newSquare.style.backgroundColor = "black";
}

function mouseOverF2(newSquare){
    let col = newSquare.style.backgroundColor;
    newSquare.style.backgroundColor = "yellow";
}
function clicked2(newSquare){
    newSquare.onmouseover = function(){mouseOverF2(newSquare)};
    let liczba1 = 50;
    let liczba2 = 250;
    let licznik = setInterval(() => {
        newSquare.style.borderRadius = liczba1 + "px";
        newSquare.style.backgroundColor = "rgb(0,0," + liczba2 + ")";
        liczba1 -=0.2;
        liczba2 -= 1;
        if(liczba1 < 0){
            clearInterval(licznik)
        }
    },1)
    newSquare.onmouseover = function(){mouseOverF(newSquare)};
}