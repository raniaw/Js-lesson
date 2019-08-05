var body = document.getElementsByTagName("body")[0];
var dCat = document.createElement("div");
var pCat = document.createElement("p");

var attDCat = dCat.attributes;
var attDCat = document.createAttribute("id"); // Neue attribute "id" erstellen
attDCat.value = "cat"; // Value für Id attribute setzen
var attPCat = document.createAttribute("id"); // Neue attribute "id" erstellen
attPCat.value = "cat"; // Value für Id attribute setzen

dCat.appendChild(pCat);
body.appendChild(dCat);

localStorage.setItem("myCat", "Tom");
let catName = localStorage.getItem("myCat");

pCat.style.color = colorCreateDark();
pCat.style.fontSize = "1.3em";
pCat.innerHTML = "Der Kater heißt " + catName;








/**
 * Funktion für die zufällige dunkle Farbeerstellung
 */

function colorCreateDark() {
    var color;
    var max = 106;
    var min = 0;
    var colRed = Math.floor(Math.random() * (max - min)) + min;
    var colBlue = Math.floor(Math.random() * (max - min)) + min;
    var colGreen = Math.floor(Math.random() * (max - min)) + min;

    color = "rgb(" + colRed + "," + colGreen + "," + colBlue + ")";
    // console.log(color);
    return color;
}

/**
 * Funktion für die zufällige helle-(Pastel)Farbeerstellung
 */

function colorCreatePastel() {
    var color;
    var max = 256;
    var min = 200;
    var colRed = Math.floor(Math.random() * (max - min)) + min;
    var colBlue = Math.floor(Math.random() * (max - min)) + min;
    var colGreen = Math.floor(Math.random() * (max - min)) + min;

    color = "rgb(" + colRed + "," + colGreen + "," + colBlue + ")";
    // console.log(color);
    return color;
}