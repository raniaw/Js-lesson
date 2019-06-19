let lbr = "<br>";;
let cars = ["bmw", "volvo", "merceses"];
let students = new Array("student1", "student2", "student3", "student4", "student5");
let txtArr = "";
let indArr = [];
let hr = "<hr>";

let colors = new Array("red", "white", "blue", "green", "yellow");
let i = 0;
var x = new Array();

while (i <= 20) {

    let x = document.createElement("DIV");
    bgcolor = colorCreate();
    color = colorCreate();
    var t = document.createTextNode("bgcolor: " + bgcolor + " " + "color:" + color + " ");
    var groesse = groesseRnd();
    var boxRadius = brdRadius();

    x[i].setAttribute("style", "margin: 5px; height: " + groesse + "px; width: " + groesse + "px; background-color:" + bgcolor + "; color:" + color + "; border-radius :" + boxRadius + "%;");
    x[i].appendChild(t);
    document.body.appendChild(x[i]);
    i++;
}
/**
 * div Ausgabe
 */
x.forEach(divAusgabe);


/** ********  Funktion divAusgabe *********
 * 
 * 
 * @param {*} value 
 * @param {*} index 
 * @param {*} array 
 */
function divAusgabe(value, index, array) {
    let c = 0;
    // for (let i = 0; i <= 6; i++) {

    // while (c < i) {
    document.getElementById("divs").innerHTML = value;
    value = document.getElementById("divs").innerHTML;
    // document.querySelector("#divs").style.
    //     c++;
    // }
    // // document.write("<br>");
    // }

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
 * Este Arrayasusgabe kommt nach den <p>
 */
// console.log(cars);
// document.write(lbr + hr);
// document.write("Erste Array: " + lbr + "Cars: " + cars + lbr);
/**
 * Zweite Arrayausgabe kommt nach dem <p>
 */
// document.write(lbr + hr + lbr + "Zweite Array: ");
// for (var i = 0; i < cars.length; i++) {
//     document.write(lbr + cars[i]);
// }
/**
 * Dritte Array ausgabe kommt oben inder Webseite wo <p id="cars">-platziert
 */
// document.write(lbr + hr);
// document.write(lbr + "Dritte und vierte Arrays kommen oben in \<\"p\">" + lbr);
// cars.forEach(myArrAusgabe);
// document.getElementById("cars").innerHTML = txtArr;
// document.getElementById("cars").style = "background:" + colorCreate() + "; color:" + colorCreate();
// // document.getElementById("cars").style = ;
// document.write(hr);
// txtArr = "";
// students.forEach(myArrAusgabeUl);
// document.getElementById("students").innerHTML = txtArr;
// document.getElementById("students").style = "background:" + colorCreate() + "; color:" + colorCreate();
// txtArr = "";
/**
 * Vierte Arrayausgabe student-list kommt oben inder Webseite wo <p id="student">-platziert
 */
// document.write(lbr + "Vierte Array" + lbr);
// document.write("Students: " + lbr + students + lbr);
// document.write(lbr + hr);w