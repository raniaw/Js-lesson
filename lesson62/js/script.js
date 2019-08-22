var body = document.getElementsByTagName("body")[0];
var h2 = document.createElement("h2");
var drDiv = document.getElementById("drag");
var destDivCl = document.querySelectorAll(".destination");
var pDropStart = document.createElement("p");
var pDropEnd = document.createElement("p");
var pDropOver = document.createElement("p");
// var pInc2 = document.createElement("p");
// var pInc3 = document.createElement("p");
// var pInc4 = document.createElement("p");
// var pInc5 = document.createElement("p");
// var pInc6 = document.createElement("p");
// var pInc7 = document.createElement("p");
// var pInc8 = document.createElement("p");
// var pInc9 = document.createElement("p");

body.appendChild(h2);
body.appendChild(pDropStart);
body.appendChild(pDropOver);
body.appendChild(pDropEnd);

// body.appendChild(pInc2);
// body.appendChild(pInc3);
// body.appendChild(pInc4);
// body.appendChild(pInc5);
// body.appendChild(pInc6);
// body.appendChild(pInc7);
// body.appendChild(pInc8);
// body.appendChild(pInc9);


function startDrop() {
    var st;
    pDropStart.innerHTML = "drop start"
}

function stopDrop() {
    var end;
    pDropEnd.innerHTML = "drop end"
}



//destDiv.addEventListener("drop", destDrop);
//destDiv.addEventListener("drop", destDrop);

function destDrop() {
    destDiv.append(drDiv);
}



destDivCl.forEach((div) => {
    div.addEventListener("dragover", overDrag);
    div.addEventListener("dragenter", enterDrag);
    div.addEventListener("dragleave", leaveDrag);
    div.addEventListener("drop", drop);
});
//gleiche wie oben
// for (let div of destDivCl) {
//     div.addEventListener("dragover", overDrag);
//     div.addEventListener("dragenter", enterDrag);
//     div.addEventListener("dragleave", leaveDrag);
//     div.addEventListener("drop", drop);
// }

//gleiche wie oben
// for (let i = 0; i < destDivCl.length; i++) {
//     console.log(destDivCl[i]);
//     destDivCl[i].addEventListener("dragover", overDrag);
//     destDivCl[i].addEventListener("dragenter", enterDrag);
//     destDivCl[i].addEventListener("dragleave", leaveDrag);
//     destDivCl[i].addEventListener("drop", drop);
// }

function overDrag(e) {
    var end;
    console.log("drop over");
    e.preventDefault();
    pDropOver.innerHTML = "drop over";
}

function enterDrag(e) {
    console.log("enter");
    e.preventDefault();
}

function leaveDrag() {
    console.log("leave");
}

function drop() {
    console.log("drop");
    this.append(drDiv);
}


/**
 * Funktion für die zufällige dunkle Farbeerstellung
 */


function colorCreateDark() {
    var color;
    var max = 160;
    var min = 0;

    var colRed = Math.floor(Math.random() * (max - min)) + min;
    var colBlue = Math.floor(Math.random() * (max - min)) + min;
    var colGreen = Math.floor(Math.random() * (max - min)) + min;

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
    var min = 180;

    var colRed = Math.floor(Math.random() * (max - min)) + min;
    var colBlue = Math.floor(Math.random() * (max - min)) + min;
    var colGreen = Math.floor(Math.random() * (max - min)) + min;

    color = "rgb(" + colRed + "," + colGreen + "," + colBlue + ")";
    console.log(color);
    return color;
}