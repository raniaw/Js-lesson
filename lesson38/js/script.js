function compToFirstChild(x, y) {
    var fChild1 = document.getElementById(x).firstElementChild;
    console.log("item1:" + fChild1);
    var fChild2 = document.getElementById(y).firstElementChild;
    console.log("item2:" + fChild2);
    var z = fChild1.isEqualNode(fChild2);
    console.log("z: " + z);
    document.getElementById("fChild").innerHTML = z;
}

// function compToFirstChild(x, y) {
//     var fChild1 = document.getElementById(x).firstElementChild.innerHTML;
//     console.log("item1:" + fChild1);
//     var fChild2 = document.getElementById(y).firstElementChild.innerHTML;
//     console.log("item2:" + fChild2);
//     var z = (fChild1 === fChild2);
//     console.log("z: " + z);
//     document.getElementById("fChild").innerHTML = z;
// }

// function compToLastChild(x, y) {
//     var fChild1 = document.getElementById(x).lastElementChild.innerHTML;
//     console.log("item1:" + fChild1);
//     var fChild2 = document.getElementById(y).lastElementChild.innerHTML;
//     console.log("item2:" + fChild2);
//     var z = (fChild1 === fChild2);
//     console.log("z: " + z);
//     document.getElementById("fChild").innerHTML = z;
// }
function compToLastChild(x, y) {
    var lChild1 = document.getElementById(x).lastElementChild;
    console.log("item1:" + lChild1);
    var lChild2 = document.getElementById(y).lastElementChild;
    console.log("item2:" + lChild2);
    var a = lChild1.isEqualNode(lChild2);
    console.log("a: " + a);
    document.getElementById("lChild").innerHTML = a;
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
    var colRed = Math.floor(Math.random() * max) - min;
    if (colRed < 0) {
        colRed = 0;
    }
    var colBlue = Math.floor(Math.random() * max) - min;
    if (colBlue < 0) {
        colBlue = 0;
    }
    var colGreen = Math.floor(Math.random() * max) - min;
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
    var colRed = Math.floor(Math.random() * max) + min;
    if (colRed > 255) {
        colRed = 255;
    }
    var colBlue = Math.floor(Math.random() * max) + min;
    if (colBlue > 255) {
        colBlue = 255;
    }
    var colGreen = Math.floor(Math.random() * max) + min;
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