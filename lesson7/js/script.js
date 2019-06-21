let lbr = "<br>";;
let cars = ["bmw", "volvo", "merceses"];
let students = new Array("student1", "student2", "student3", "student4", "student5");
let txtArr = "";
let indArr = [];
let hr = "<hr>";

let colors = new Array("red", "white", "blue", "green", "yellow");
let i = 0;
let x = new Array();

while (i <= 20) {

    x[i] = document.createElement("DIV");
    bgcolor = colorCreate();
    color = colorCreate();
    var t = document.createTextNode("bgcolor: " + bgcolor + " " + "color:" + color + " ");
    var groesse = groesseRnd();
    var boxRadius = brdRadius();
    x[i].setAttribute("id", "DIV" + i);
    x[i].setAttribute("style", "position:relative; left:0; top:0; float:left; display:flex; align-content:space-beetwen; wrap:wrap; margin: 15px; height: " + groesse + "px; width: " + groesse + "px; background:" + bgcolor + "; color:" + color + "; border-radius :" + boxRadius + "%;");
    x[i].appendChild(t);

    document.body.appendChild(x[i]);
    console.log("X1: div" + i + " style: font-color: " + x[i].style.color);

    i++;
}
console.log("X: " + x);
/**
 * div Ausgabe auf console
 */
x.forEach(divAusgabe);
console.log(divAusgabe2);
bgcolor = colorCreate();
color = colorCreate();
var t = document.createTextNode("bgcolor1: " + bgcolor + " " + "color:" + color + " ");
var groesse = groesseRnd();
var boxRadius = brdRadius();
console.log("bgcolor1: " + bgcolor, " ", bgcolor, " ");
console.log(document.getElementById("divs").style);
document.querySelector("#divs").style = "margin: 5px; height: " + groesse + "px; width: " + groesse + "px; background-color:" + bgcolor + "; color:" + color + "; border-radius :" + boxRadius + "%;";
console.log("#div: " + document.querySelector("#divs").style.color);

var divs = document.querySelectorAll('#divs');

[].forEach.call(divs, function(div) {
    // do whatever
    div.style = "float:left; margin: 5px; height: " + groesse + "px; width: " + groesse + "px; background-color:" + bgcolor + "; color:" + color + "; border-radius :" + boxRadius + "%;";
});

/** ********  Funktion divAusgabe *********
 * 
 * 
 * @param {*} value 
 * @param {*} index 
 * @param {*} array 
 */
function divAusgabe(value, index, array) {
    console.log("divausgabe1: " + document.getElementById("divs").style);
}

function divAusgabe2(value, index, array) {
    let c = 0;
    for (let i = 0; i <= 6; i++) {

        while (c < i) {
            bgcolor = colorCreate();
            color = colorCreate();
            var t = document.createTextNode("bgcolor1: " + bgcolor + " " + "color:" + color + " ");
            var groesse = groesseRnd();
            var boxRadius = brdRadius();
            console.log("bgcolor1: " + bgcolor, " ", bgcolor, " ");
            x[c].setAttribute("style", "margin: 5px; height: " + groesse + "px; width: " + groesse + "px; background-color:" + bgcolor + "; color:" + color + "; border-radius :" + boxRadius + "%;");
            //document.getElementById("divs").style = x[c].style;
            console.log(document.getElementById("divs").style);
            document.querySelector("#divs").style = x[c].style;
            console.log("#div-console-divAusgabe2: " + x[c] + document.querySelector("#divs").style.color);
            c++;
        }
        // // document.write("<br>");
    }

}
/**
 * 
 * @param {*} value 
 * @param {*} index 
 * @param {*} array 
 */
function myArrAusgabe(value, index, array) {
    txtArr = txtArr + index + " " + value + "<br>";


}
/**
 * 
 * @param {*} value 
 * @param {*} index 
 * @param {*} array 
 */
function myArrAusgabeUl(value, index, array) {

    txtArr = txtArr + sub(index) + ": " + value + "<br>";

}
/**
 * Funktion addiert 1 zu eingegebene Zahl
 * @param {*} count 
 */

function sub(count) {
    var count = count + 1;
    return count;
}
/**
 * Function für zufählige Farberstellung
 */

function colorCreate() {
    var color;
    var colRed = Math.floor(Math.random() * 256);
    var colBlue = Math.floor(Math.random() * 256);
    var colGreen = Math.floor(Math.random() * 256);
    color = "rgb(" + colRed + "," + colBlue + "," + colGreen + ")";
    return color;
}
console.log(colorCreate());
/**
 * Funktion für zufällige Berechnung von groosse Divs
 */
function groesseRnd() {
    var grRndmin = Math.ceil(80);
    var grRndmax = Math.floor(150);
    var grRnd = Math.floor(Math.random() * (grRndmax - grRndmin + 1)) + grRndmin;
    return grRnd;
}
console.log(groesseRnd());

function brdRadius() {
    var grRndmin = Math.ceil(1);
    var grRndmax = Math.floor(50);
    var grRnd = Math.floor(Math.random() * (grRndmax - grRndmin + 1)) + grRndmin;
    return grRnd;
}

/**
 * var element = document.createElement('tagname');    
 * element.className= "classname";
 * element.id= "id";
 */

/**
 * var b = document.querySelector("button"); 
 * b.setAttribute("name", "helloButton");
 * b.setAttribute("disabled", "");
 */
/**
 * let div1 = document.getElementById('div1');
 * let align = div1.getAttribute('align');
 * alert(align); // Shows the value of align for the element with id="div1"
 */