var body = document.getElementsByTagName("body")[0];
var dExs = document.createElement("div");
var dBody = document.createElement("div");
var dDocum = document.createElement("div");
var pExs = document.createElement("p");
var pTxt = document.createElement("p");
var pTxt1 = document.createElement("p");
var pTxt2 = document.createElement("p");
var pTxt3 = document.createElement("p");
var pTxt4 = document.createElement("p");
var pFirst = document.createElement("p");
var pSecond = document.createElement("p");
var ulDocum = document.createElement("ul");
var ulBody = document.createElement("ul");

var attDExs = dExs.attributes;
var attExs = document.createAttribute("id"); // Neue attribute "id" erstellen
attExs.value = "exs"; // Value für Id attribute setzen

var attDocum = document.createAttribute("id"); // Neue attribute "id" erstellen
attDocum.value = "docum";

var attClText = document.createAttribute("class"); // Neue attribute "id" erstellen
attClText.value = "text";

ulBody.style.listStyleType = "none";
ulDocum.setAttributeNode(attDocum);
ulDocum.style.listStyleType = "none";

pTxt.setAttribute("class", "text");
pTxt1.setAttribute("class", "text");
pTxt2.setAttribute("class", "text");
pTxt3.setAttribute("class", "text");
pTxt4.setAttribute("class", "text");

dExs.appendChild(pExs);
dExs.appendChild(pFirst);
dExs.appendChild(pSecond);
dExs.appendChild(pTxt);
dExs.appendChild(pTxt1);
dExs.appendChild(pTxt2);
dExs.appendChild(pTxt3);
dExs.appendChild(pTxt4);
dDocum.appendChild(ulDocum);
dBody.appendChild(ulBody);

body.appendChild(dExs);
body.appendChild(dBody);
body.appendChild(dDocum);


pFirst.innerHTML = "firstElement";
pSecond.innerHTML = "secondElement";
pTxt.innerHTML = " Paragraph";
pTxt1.innerHTML = " Paragraph";
pTxt2.innerHTML = " Paragraph";
pTxt3.innerHTML = " Paragraph";
pTxt4.innerHTML = " Paragraph";

var matches = document.getElementsByClassName("text");

for (i = 0; i < matches.length; i++) {
    matches[i].style.fontFamily = "Great Vibes";
    matches[i].style.fontSize = "1.5em";

}
let letzte = matches[matches.length - 1];
letzte.style.backgroundColor = colorCreatePastel();

let vorLetzte = document.createElement("p");
vorLetzte.innerHTML = "new Paragraph";
//füght vor der letze 'p'  im div 'dExs'
dExs.insertBefore(vorLetzte, letzte);
//hier fügt nach der letzte element 'p' im div 'dExs'
// dExs.insertBefore(vorLetzte, Exs.childNodes[matches[matches.length - 1]]);

var bodyElementCount = document.body.childElementCount;
pExs.innerHTML = "Body hat " + bodyElementCount + " Elementen";

var bodyElement = document.body.children;
console.log(bodyElement);

var firstChild = bodyElement.childNodes;
console.log(firstChild);

// bodyElement ist die NodeList von direkten Kindern des Wurzel-Elementes
for (var i = 0; i < bodyElement.length; i++) {
    // hier irgendwas mit den direkten Kindern des Wurzel-Elementes mit Hilfe
    // von bodyElement[i] erledigen
    let li = document.createElement("li");
    var txtLi = document.createTextNode(bodyElement[i].nodeName + " " + bodyElement[i]);
    li.style.fontSize = "1.2em";
    li.style.color = colorCreateDark();
    li.appendChild(txtLi);
    ulBody.appendChild(li)

}

var rootElement = document.documentElement;
console.log("root");
console.log(rootElement);

var firstTier = rootElement.childNodes;

// firstTier ist die NodeList von direkten Kindern des Wurzel-Elementes
for (var i = 0; i < firstTier.length; i++) {
    // hier irgendwas mit den direkten Kindern des Wurzel-Elementes mit Hilfe
    // von firstTier[i] erledigen
    let li = document.createElement("li");
    var txtLi = document.createTextNode(firstTier[i].nodeName + " " + firstTier[i]);
    li.style.fontSize = "1.2em";
    li.style.color = colorCreateDark();
    li.appendChild(txtLi);
    ulDocum.appendChild(li)

}

let para = document.getElementsByTagName("p");
console.log(para);


for (let i = 0; i < para.length; i++) {
    para[i].style.fontSize = "1.5em";
    para[i].style.fontWeight = "bold";
    para[i].style.color = colorCreateDark();
}
//gleiche wie oben
// for (let i in para) {
//     console.log(i);
//     para[i].style.fontSize = "1.8em";
//     console.log(para[i].style.fontFamily);
//     para[i].style.fontWeight = "bolder";
//     para[i].style.color = colorCreateDark();
// }



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