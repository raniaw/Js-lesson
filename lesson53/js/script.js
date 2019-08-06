var body = document.getElementsByTagName("body")[0];
var dExs = document.createElement("div");
var dPerson = document.createElement("div");
var pExs = document.createElement("p");
var pFirst = document.createElement("p");
var pSecond = document.createElement("p");
var ulPerson = document.createElement("ul");

var attDExs = dExs.attributes;
var attExs = document.createAttribute("id"); // Neue attribute "id" erstellen
attExs.value = "exs"; // Value für Id attribute setzen

var attPers = document.createAttribute("id"); // Neue attribute "id" erstellen
attPers.value = "pers";

ulPerson.setAttributeNode(attPers);
ulPerson.style.listStyleType = "none";


dExs.appendChild(pExs);
dExs.appendChild(pFirst);
dExs.appendChild(pSecond);
dPerson.appendChild(ulPerson);

body.appendChild(dExs);
body.appendChild(dPerson);

pFirst.innerHTML = "firstElement";
pSecond.innerHTML = "secondElement"

var rootElement = document.documentElement;
console.log(rootElement);
var firstTier = rootElement.childNodes;

// firstTier ist die NodeList von direkten Kindern des Wurzel-Elementes
for (var i = 0; i < firstTier.length; i++) {
    // hier irgendwas mit den direkten Kindern des Wurzel-Elementes mit Hilfe
    // von firstTier[i] erledigen
    pExs.innerHTML = firstTier[i];
}










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