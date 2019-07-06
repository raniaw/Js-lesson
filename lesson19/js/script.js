let img = document.getElementById("myImg");
let btn = document.getElementById("myBtn");
let btnColor = document.getElementById("btnColor");
let btnBorder = document.getElementById("btnBorder");
var divColorChange = document.getElementById("colorChange");
var divButtonChange = document.getElementById("borderChange");
divButtonChange.style.width = "100px";
divButtonChange.style.height = "100px";
divButtonChange.style.border = "20px solid transparent";

btn.addEventListener("click", changeImg);
btnColor.addEventListener("click", changeColorDiv);
btnBorder.addEventListener("click", changeBorderDiv);

function changeImg() {
    if (img.getAttribute("src") == "img/java.jpg") {
        img.setAttribute("src", "img/javascript.png");
    } else {
        img.setAttribute("src", "img/java.jpg");
    }
}

function changeBorderDiv() {
    divButtonChange.style.borderRadius = "50px";
    divButtonChange.style.borderImage = "url('img/arrowPkl.png')";
    divButtonChange.style.borderImageSlice = "1% 100%";
    divButtonChange.style.borderImageRepeat = "round";
}

function changeColorDiv() {
    divColorChange.style.backgroundColor = getRandomColor();
    divColorChange.style.borderBottomWidth = "3px";
    divColorChange.style.borderStyle = "solid";
    divColorChange.style.borderColor = getRandomColor();

    console.log("divColorChange.style.borderWidth: " + divColorChange.style.borderBottomWidth);
    console.log("divColorChange.style.borderColor: " + divColorChange.style.borderColor);
    console.log("divColorChange.style.background: " + divColorChange.style.backgroundColor);
}


function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    console.log("color: " + color);
    return color;

}

function brdRadius() {
    let grRndmin = Math.ceil(1);
    let grRndmax = Math.floor(50);
    let grRnd = Math.floor(Math.random() * (grRndmax - grRndmin + 1)) + grRndmin;
    return grRnd;
}

function groesseRnd() {
    let grRndmin = Math.ceil(80);
    let grRndmax = Math.floor(150);
    let grRnd = Math.floor(Math.random() * (grRndmax - grRndmin + 1)) + grRndmin;
    return grRnd;
}