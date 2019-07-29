let img = document.getElementById("myImg");
let btnToogleClass = document.getElementById("btnToogleClass");
let btnColor = document.getElementById("btnColor");
let btnBorder = document.getElementById("btnBorder");
var divColorChange = document.getElementById("colorChange");
var divButtonChange = document.getElementById("borderChange");
var divToggleClass = document.getElementById("divToggleClass");
var divBtn = document.getElementById("divBtn");
var iCnt = document.getElementsByClassName("fa-thumbs-up");
var butChangeStyle = document.querySelectorAll("button")[1];
var btns = divBtn.getElementsByClassName("btn");
console.log(btns);
console.log(btns.length);

function btnClassRepl() {
    for (var i = 0; i < btns.length; i++) {
        console.log("for schleife: " + btns.length);
        btns[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            console.log("1:" + current[0].className);
            //console.log(this.className);;
            current[0].className = current[0].className.replace(" active", "");
            // console.log("2:" + current.className);
            this.className += " active"
                // console.log(this.className);;
        });
    }
}
btnClassRepl();

console.log(divToggleClass);

divButtonChange.style.width = "100px";
divButtonChange.style.height = "100px";
divButtonChange.style.border = "20px solid transparent";

btnToggleClass.style.backgroundColor = colorCreateDark();
btnToggleClass.style.color = colorCreatePastel();
btnToggleClass.classList.add("btnAlt");

btnColor.addEventListener("click", changeColorDiv);
btnBorder.addEventListener("click", changeBorderDiv);

btnToggleClass.addEventListener("click", () => {
    console.log("change");

    console.log(butChangeStyle.className);
    divToggleClass.style.background = colorCreateDark();
    //console.log(btnToogleClass.classList.value);

    if (divToggleClass.classList == "altClass") {
        divToggleClass.classList.remove("altClass");
        divToggleClass.classList.add("newClass");

        divToggleClass.innerHTML = "newClass";
        divToggleClass.style.color = colorCreatePastel();

        butChangeStyle.classList.remove("btnNew");
        butChangeStyle.classList.add("btnAlt");
        btnToggleClass.style.color = colorCreatePastel();
        butChangeStyle.style.backgroundColor = colorCreateDark();
    } else {
        divToggleClass.classList.remove("newClass");
        divToggleClass.classList.add("altClass");
        divToggleClass.innerHTML = "altClass";
        divToggleClass.style.color = colorCreatePastel();

        butChangeStyle.classList.remove("btnAlt");
        butChangeStyle.classList.add("btnNew");
        btnToggleClass.style.color = colorCreatePastel();
        butChangeStyle.style.backgroundColor = colorCreateDark();

    }
});
iCnt[0].style.fontSize = "48px";
iCnt[0].addEventListener("", () => {
    console.log("icnt");
})
iCnt[0].addEventListener("click", () => {
    iCnt[0].classList.toggle("fa-thumbs-down");
})
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active1");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

function changeBorderDiv() {
    divButtonChange.style.borderRadius = "50px";
    divButtonChange.style.borderImage = "url('img/arrowPkl.png')";
    divButtonChange.style.borderImageSlice = "1% 100%";
    divButtonChange.style.borderImageRepeat = "round";
}

function changeColorDiv() {
    divColorChange.style.backgroundColor = colorCreate();
    divColorChange.style.borderSize = "10px";
    divColorChange.style.borderStyle = "solid";
    divColorChange.style.borderColor = colorCreate();

    console.log("divColorChange.style.borderSize: " + divColorChange.style.borderSize);
    console.log("divColorChange.style.borderColor: " + divColorChange.style.borderColor);
    console.log("divColorChange.style.background: " + divColorChange.style.backgroundColor);
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

function colorCreateDark() {
    var color;
    var max = 256;
    var min = 60;
    var colRed = Math.floor(Math.random() * (max - min)) + min;
    if (colRed < 0) {
        colRed = 0;
    }
    var colBlue = Math.floor(Math.random() * (max - min)) + min;
    if (colBlue < 0) {
        colBlue = 0;
    }
    var colGreen = Math.floor(Math.random() * (max - min)) + min;
    if (colGreen < 0) {
        colGreen = 0;
    }
    color = "rgb(" + colRed + "," + colGreen + "," + colBlue + ")";
    console.log(color);
    return color;
}

/**
 * Funktion für die zufällige helle-(Pastel)Farbeerstellung
 */

function colorCreatePastel() {
    var color;
    var max = 256;
    var min = 120;
    var colRed = Math.floor(Math.random() * (max - min)) + min;
    if (colRed > 255) {
        colRed = 255;
    }
    var colBlue = Math.floor(Math.random() * (max - min)) + min;
    if (colBlue > 255) {
        colBlue = 255;
    }
    var colGreen = Math.floor(Math.random() * (max - min)) + min;
    if (colGreen > 255) {
        colGreen = 255;
    }
    color = "rgb(" + colRed + "," + colGreen + "," + colBlue + ")";
    console.log(color);
    return color;
}

/**
 * Funktion für die zufällige Farbeerstellung
 */

function colorCreate() {
    var color;
    var colRed = Math.floor(Math.random() * 256);
    var colBlue = Math.floor(Math.random() * 256);
    var colGreen = Math.floor(Math.random() * 256);
    color = "rgb(" + colRed + "," + colGreen + "," + colBlue + ")";
    return color;
}