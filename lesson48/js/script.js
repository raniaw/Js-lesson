var body = document.getElementsByTagName("body")[0];
var pTxt1 = document.createElement("p");
var pTxt2 = document.createElement("p");
var pTxt3 = document.createElement("p");
var pTxt4 = document.createElement("p");
var pTxt5 = document.createElement("p");
var pPatt1 = document.createElement("p");
var pPatt2 = document.createElement("p");
var pPatt3 = document.createElement("p");
var pPatt4 = document.createElement("p");
var pPatt5 = document.createElement("p");
var pRes1 = document.createElement("p");
var pRes2 = document.createElement("p");
var pRes3 = document.createElement("p");
var pRes4 = document.createElement("p");
var pRes5 = document.createElement("p");



pTxt1.style.color = colorCreateDark();
pTxt1.style.fontWeight = "bold";
pTxt2.style.color = colorCreateDark();
pTxt2.style.fontWeight = "bold";
pTxt3.style.color = colorCreateDark();
pTxt3.style.fontWeight = "bold";
pTxt4.style.color = colorCreateDark();
pTxt4.style.fontWeight = "bold";
pTxt5.style.color = colorCreateDark();
pTxt5.style.fontWeight = "bold";

pPatt1.style.color = colorCreateDark();
pPatt1.style.fontWeight = "bold";
pPatt2.style.color = colorCreateDark();
pPatt2.style.fontWeight = "bold";
pPatt3.style.color = colorCreateDark();
pPatt3.style.fontWeight = "bold";
pPatt4.style.color = colorCreateDark();
pPatt4.style.fontWeight = "bold";
pPatt5.style.color = colorCreateDark();
pPatt5.style.fontWeight = "bold";

pRes1.style.color = colorCreateDark();
pRes1.style.fontWeight = "bold";
pRes1.style.fontFamily = 'Great Vibes';
pRes1.style.fontSize = "1.5em";
pRes2.style.color = colorCreateDark();
pRes2.style.fontWeight = "bold";
pRes2.style.fontFamily = 'Great Vibes';
pRes2.style.fontSize = "1.5em";
pRes3.style.color = colorCreateDark();
pRes3.style.fontWeight = "bold";
pRes3.style.fontFamily = 'Great Vibes';
pRes3.style.fontSize = "1.5em";
pRes4.style.color = colorCreateDark();
pRes4.style.fontWeight = "bold";
pRes4.style.fontFamily = 'Great Vibes';
pRes4.style.fontSize = "1.5em";

pRes5.style.color = colorCreateDark();
pRes5.style.fontWeight = "bold";
pRes5.style.fontFamily = 'Great Vibes';
pRes5.style.fontSize = "1.5em";


body.appendChild(pTxt1);
body.appendChild(pPatt1);
body.appendChild(pRes1);
body.appendChild(pTxt2);
body.appendChild(pPatt2);
body.appendChild(pRes2);
body.appendChild(pTxt3);
body.appendChild(pPatt3);
body.appendChild(pRes3);
body.appendChild(pTxt4);
body.appendChild(pPatt4);
body.appendChild(pRes4);
body.appendChild(pTxt5);
body.appendChild(pPatt5);
body.appendChild(pRes5);

function patt1() {
    var str = "Visit DCIiiii";
    var patt = /DCI/i;
    var result = str.match(patt);
    pTxt1.innerHTML = "Text: " + str;
    pPatt1.innerHTML = "pattern: " + patt;
    pRes1.innerHTML = "Result: " + result;
}

patt1();

function patt2() {
    var str = "Hallo Mark";
    var patt = /a/i;
    var result = str.match(patt);
    pTxt2.innerHTML = "Text: " + str;
    pPatt2.innerHTML = "pattern: " + patt;
    pRes2.innerHTML = "Result: " + result;
}
patt2();

function patt3() {
    var str = "LLLooolli Visit 2010007000$ Schooolllllsss";
    var patt = /[0-9]+/i;
    var patt1 = /\d+/i;
    var result = str.match(patt);
    pTxt3.innerHTML = "Text: " + str;
    pPatt3.innerHTML = "pattern: " + patt + "<br> and the same " + patt1 + "<br>'\d\' is -> digit";
    pRes3.innerHTML = "Result: " + result;
}
patt3();

function patt4() {
    var str = "LLLooolli Visit 2010007000$ 447646464€ Schooolllllsss";
    var patt = /[0-9]+(\$|\€)/i;
    var patt1 = /\d+(\$|\€)/i;
    var result = str.match(patt);
    pTxt4.innerHTML = "Text: " + str;
    pPatt4.innerHTML = "pattern: " + patt + "<br> and the same " + patt1 + "<br>'\d\' is -> digit";
    pRes4.innerHTML = "Result: " + result;
}
patt4();
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
    console.log(color);
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
    console.log(color);
    return color;
}