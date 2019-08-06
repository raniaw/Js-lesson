var body = document.getElementsByTagName("body")[0];
var dCat = document.createElement("div");
var dPerson = document.createElement("div");
var pCat = document.createElement("p");
var pObjMascha = document.createElement("p");
var pMascha = document.createElement("p");
var ulPerson = document.createElement("ul");

var attDCat = dCat.attributes;
var attDCat = document.createAttribute("id"); // Neue attribute "id" erstellen
attDCat.value = "cat"; // Value für Id attribute setzen
var attPCat = document.createAttribute("id");
attPCat.value = "cat";
var attPobjMascha = document.createAttribute("id");
attPobjMascha.value = "objMascha"; // 
var attPMascha = document.createAttribute("id");
var attPers = document.createAttribute("id"); // Neue attribute "id" erstellen
attPers.value = "pers";
attPMascha.value = "Mascha"; // 
ulPerson.setAttributeNode(attPers);
ulPerson.style.listStyleType = "none";


dCat.appendChild(pCat);
dPerson.appendChild(pObjMascha);
dPerson.appendChild(pMascha);
dPerson.appendChild(ulPerson);

body.appendChild(dCat);
body.appendChild(dPerson);

localStorage.setItem("myCat", "Tom");
let catName = localStorage.getItem("myCat");

pCat.style.color = colorCreateDark();
pCat.style.fontSize = "1.2em";
pCat.innerHTML = "Der Kater heißt " + catName;

let objPers = {
    name: "Mascha",
    age: 5,
    job: "lady cracher",
    city: "Wald"
}

localStorage.setItem("personInfo", JSON.stringify(objPers));
let persInfo = localStorage.getItem("personInfo");

pMascha.style.color = colorCreateDark();
pMascha.style.fontSize = "1.2em";
pObjMascha.style.whiteSpace = "pre";
pObjMascha.innerHTML = JSON.stringify(objPers, null, 4);

pMascha.innerHTML = JSON.parse(persInfo).name;
console.log(localStorage.getItem(localStorage.key(0)));

// for (let i = 0; persInfo.length; i++) {

//     let li = document.createElement("li");
//     var txtLi = document.createTextNode(persInfo.name);
//     li.style.fontSize = "1.8em";
//     li.style.color = colorCreateDark();
//     li.appendChild(txtLi);
//     ulPerson.appendChild(li)
// }













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