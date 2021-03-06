var body = document.getElementsByTagName("body")[0];

var drDiv = document.getElementById("drag");
var destDiv = document.querySelectorAll(".destination");
var pDropStart = document.createElement("p");
var pDropEnd = document.createElement("p");
var pDropOver = document.createElement("p");
var imgDrag = document.getElementById("imgDrag")


body.appendChild(pDropStart);
body.appendChild(pDropOver);
body.appendChild(pDropEnd);


function drag(e) {
    e.dataTransfer.setData("bild", e.target.id);
}

function drop(e) {

    var data = e.dataTransfer.getData("bild");
    e.target.appendChild(document.getElementById(data));

    e.target.className = "destination";
    e.preventDefault();
}

function leaveDrag(e) {
    console.log("leave");
    e.preventDefault();
    e.target.classList.remove("hovering");
}

function enterDrag(e) {
    console.log("enter");
    e.preventDefault();

    e.target.className += " hovering";

}

function overDrag(e) {

    console.log("drop over");
    e.preventDefault();


}


/**
 * Funktion für die zufällige dunkle Farbeerstellung
 */

function colorCreateDark() {
    var color;
    var min = Math.ceil(0);
    var max = Math.floor(160);

    var colRed = Math.floor(Math.random() * (max - min)) + min;
    var colBlue = Math.floor(Math.random() * (max - min)) + min;
    var colGreen = Math.floor(Math.random() * (max - min)) + min;

    color = "rgb(" + colRed + "," + colGreen + "," + colBlue + ")";

    return color;
}
/**
 * Funktion für die zufällige helle-(Pastel)Farbeerstellung
 */

function colorCreatePastel() {
    var color;
    var min = Math.ceil(180);
    var max = Math.floor(256);

    var colRed = Math.floor(Math.random() * (max - min)) + min;
    var colBlue = Math.floor(Math.random() * (max - min)) + min;
    var colGreen = Math.floor(Math.random() * (max - min)) + min;

    color = "rgb(" + colRed + "," + colGreen + "," + colBlue + ")";

    return color;
}