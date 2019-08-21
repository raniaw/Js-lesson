var body = document.getElementsByTagName("body")[0];
var h2 = document.createElement("h2");
var p = document.createElement("p");
var pInc = document.createElement("p");
var pInc1 = document.createElement("p");
var pInc2 = document.createElement("p");
var pInc3 = document.createElement("p");
var pInc4 = document.createElement("p");
var pInc5 = document.createElement("p");
var pInc6 = document.createElement("p");

body.appendChild(h2);
body.appendChild(p);
body.appendChild(pInc);
body.appendChild(pInc1);
body.appendChild(pInc2);
body.appendChild(pInc3);
body.appendChild(pInc4);
body.appendChild(pInc5);
body.appendChild(pInc6);

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

function makeCounter4() {
    function inc() {
        return inc.currentValue++;
    }
    inc.currentValue = 1;
    return inc;
}


function makeMult() {
    var currentValue = 2;
    return function() {
        return currentValue *= 2;
    }

}

function makeMult2() {
    function inc() {
        return inc.currentValue *= 2;
    }
    inc.currentValue = NaN; // or 'inc.currentValue;' wait for input 
    console.log("func: " + inc.currentValue);
    return inc;

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
pInc4.innerHTML = "function ->  makeCounter3(): " + resInc3();

var resInc4 = makeCounter4();
console.log(resInc4()); //1
console.log(resInc4()); //2
pInc4.innerHTML = "function ->  makeCounter4(): " + resInc4(); //3

var resMult1 = makeMult();
console.log(resMult1()); //4
console.log(resMult1()); //8
console.log(resMult1()); //16
pInc5.innerHTML = "function -> makeMult1(): " + resMult1(); //32

var resMult2 = makeMult2();
resMult2.currentValue = 3;
console.log(resMult2()); //6
console.log(resMult2()); //12
console.log(resMult2()); //24
pInc6.innerHTML = "function -> makeMult2(): " + resMult2(); //48


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