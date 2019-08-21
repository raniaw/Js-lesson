var body = document.getElementsByTagName("body")[0];
var h2 = document.createElement("h2");
var p = document.createElement("p");
var pInc = document.createElement("p");
var pInc1 = document.createElement("p");
var pInc2 = document.createElement("p");
var pInc3 = document.createElement("p");
var pInc4 = document.createElement("p");

body.appendChild(h2);
body.appendChild(p);
body.appendChild(pInc);
body.appendChild(pInc1);
body.appendChild(pInc2);
body.appendChild(pInc3);
body.appendChild(pInc4);

function num10() {
    return 10;
}

var res = num10();
p.innerHTML = "function ->  num10(): " + res;

var n = 0;

function makeCounter(n) {
    var n = 10;

    function inc() {
        return n += 1;
    }
    return inc();
}

function makeCounter1(n) {

    function inc() {
        return n += 1;
    }
    return inc();
}

function makeCounter2(n) {

    function inc(m) {
        return n += m;
    }
    return inc;
}


function makeCounter3() {
    var currentValue = 1;

    return function() {
        return currentValue++;
    }

}

function makeMult() {
    var currentValue = 2;

    return function() {
        return currentValue *= 2;
    }

}

var resInc = makeCounter(n);
pInc.innerHTML = "function ->  makeCounter(n): " + resInc;

var resInc1 = makeCounter1(n);
pInc1.innerHTML = "n = 0 und function ->  makeCounter1(n): " + resInc1;

var resInc2 = makeCounter2(5)(3);
pInc2.innerHTML = "function ->  makeCounter2(5)(3): " + resInc2;

var resInc3 = makeCounter3();
console.log(resInc3()); //1
console.log(resInc3()); //2
pInc3.innerHTML = "function ->  makeCounter3(): " + resInc3();

var res4 = makeMult();
console.log(res4()); //4
console.log(res4()); //8
console.log(res4()); //16
pInc4.innerHTML = "function -> makeMult(): " + res4(); //32

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