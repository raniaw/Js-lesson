var body = document.getElementsByTagName("body")[0];
var pCallB = document.createElement("p");
var pX = document.createElement("p");
var pY = document.createElement("p");
var pServResp = document.createElement("p");


pCallB.style.color = colorCreateDark();
pCallB.style.fontWeight = "bold";
pX.style.color = colorCreateDark();
pX.style.fontWeight = "bold";
pY.style.color = colorCreateDark();
pY.style.fontWeight = "bold";
pY.style.fontFamily = 'Great Vibes';
pY.style.fontSize = "1.8em";
pY.style.fontStretch = 'expanded';
pServResp.style.color = colorCreateDark();


body.appendChild(pCallB);
body.appendChild(pX);
body.appendChild(pY);
body.appendChild(pServResp);



function doSomeThings(callback) {
    callback();
}

function hallo() {
    pCallB.innerHTML = "Hallo";
}

doSomeThings(hallo);


let x = function() {
    pX.innerHTML = "Ich werden aus einer Funktion heraus aufgerufen";
    console.log("Ich werden aus einer Funktion heraus aufgerufen");
}

let y = function(callback) {
    pY.innerHTML = "mach mal wieder was";
    console.log("mach mal wieder was");
    callback();
}

y(x);

function serverRequest(query, callback) {
    setTimeout(function() {
        let response = query + " 20 is available";
        callback(response);
    }, 5000)
}

function getResult(result) {
    pServResp.innerHTML = "The Response from the Server: " + result;

}
serverRequest("available cars in Hamburg", getResult);


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