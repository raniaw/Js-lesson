var body = document.getElementsByTagName("body")[0];
var dExs = document.createElement("div");
var dBody = document.createElement("div");
var dLoc = document.createElement("div");

var btnLoc = document.createElement("button");
var btnRel = document.createElement("button");
var btnBack = document.createElement("button");
var btnForw = document.createElement("button");

var btnCheckInt = document.createElement("button");

var pExs = document.createElement("p");
var pTxt = document.createElement("p");
var pTxt1 = document.createElement("p");
var pTxt2 = document.createElement("p");
var pFirst = document.createElement("p");
var pSecond = document.createElement("p");
var pBrowser = document.createElement("p");

var a = document.createElement("a");
var ulDocum = document.createElement("ul");
var ulBody = document.createElement("ul");



btnLoc.setAttribute("value", "location");
btnLoc.innerHTML = "location";
btnLoc.setAttribute("id", "loc");

btnRel.setAttribute("value", "reload");
btnRel.innerHTML = "reload";
btnRel.setAttribute("id", "rel");
btnBack.setAttribute("value", "back");
btnBack.innerHTML = "back";

btnForw.innerHTML = "forward";
btnForw.setAttribute("id", "forw");
a.setAttribute("href", "https://www.google.de");
a.innerHTML = "Google";

btnCheckInt.innerHTML = "check Internet"

var attDocum = document.createAttribute("id"); // Neue attribute "id" erstellen
attDocum.value = "docum";

var attClText = document.createAttribute("class"); // Neue attribute "id" erstellen
attClText.value = "text";

ulBody.style.listStyleType = "none";
ulDocum.setAttributeNode(attDocum);
ulDocum.style.listStyleType = "none";

pTxt.setAttribute("class", "text");
pTxt1.setAttribute("class", "text");

dExs.appendChild(pExs);
dExs.appendChild(pFirst);
dExs.appendChild(pSecond);
dExs.appendChild(pTxt);
dExs.appendChild(pTxt1);
dExs.appendChild(a);

dLoc.appendChild(ulDocum);

dLoc.appendChild(btnLoc);
dLoc.appendChild(btnRel);
dLoc.appendChild(btnBack);
dLoc.appendChild(btnForw);


dBody.appendChild(pBrowser);
dBody.appendChild(btnCheckInt);
dBody.appendChild(ulBody);

body.appendChild(dExs);
body.appendChild(dLoc);
body.appendChild(dBody);

var matches = document.getElementsByClassName("text");

for (i = 0; i < matches.length; i++) {
    matches[i].style.fontFamily = "Great Vibes";
    matches[i].style.fontSize = "1.5em";

}
let letzte = matches[matches.length - 1];
letzte.style.backgroundColor = colorCreatePastel();
let vorLetzte = document.createElement("p");

btnLoc.addEventListener("click", function() {
    vorLetzte.innerHTML = window.location.hostname;
    dExs.insertBefore(vorLetzte, letzte);

});

btnRel.addEventListener("click", function() {
    window.location.reload();
});
btnBack.addEventListener("click", function() {
    //window.history.back();
    //drei seiten zurück
    window.history.go(-3);
});
btnForw.addEventListener("click", function() {
    window.history.forward();
});

pFirst.innerHTML = "firstElement";
pSecond.innerHTML = "secondElement";
pTxt.innerHTML = " Paragraph";
pTxt1.innerHTML = " Paragraph";
pTxt2.innerHTML = " Paragraph";






var str = "browser";
str += "<div>Browser CodeName: " + navigator.appCodeName + "</div>";
str += "<div>Browser Name: " + navigator.appName + "</div>";
str += "<div>Browser Version: " + navigator.appVersion + "</div>";
str += "<div>Cookies Enabled: " + navigator.cookieEnabled + "</div>";
str += "<div>Browser Language: " + navigator.language + "</div>";
str += "<div>Platform: " + navigator.platform + "</div>";
str += "<div>User-agent header: " + navigator.userAgent + "</div>";
//str += "<div>GeoLocation current position: " + navigator.geolocation.getCurrentPosition(success, error, options) + "</div>";

pBrowser.innerHTML = str;


btnCheckInt.addEventListener("click", function() {
    checkInternet();
});


function checkInternet() {

    if (navigator.onLine) {
        alert("you are online :)");
    } else {
        alert("you are offline :( ");
    }
}

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

// function success(pos) {
//     var crd = pos.coords;

//     console.log('Your current position is:');
//     console.log(`Latitude : ${crd.latitude}`);
//     console.log(`Longitude: ${crd.longitude}`);
//     console.log(`More or less ${crd.accuracy} meters.`);
// }

// function error(err) {
//     console.warn(`ERROR(${err.code}): ${err.message}`);
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