var body = document.getElementsByTagName("body")[0];
var btnPrev = document.getElementById("prev");
var btnNext = document.getElementById("next");
var fPers = document.getElementById("fPers");
var fAddress = document.getElementById("fAddress");
var fProfil = document.getElementById("fProfil");
var pFName = document.getElementById("pFName");
var pLName = document.getElementById("pLName");
var pBrtDate = document.getElementById("pBrtDate");
var pNationality = document.getElementById("pNationality");


var person = new Object();
//console.log(btnPrev);

//btnCalc.addEventListener("click", calculate);
console.log(fPers);

fPers.addEventListener("submit", collectDataPers);

function collectDataPers(e) {
    e.preventDefault();
    var inpFName = document.getElementById("fName");
    var inpLName = document.getElementById("lName");
    var inpBrtDate = document.getElementById("brtDate");
    var inpNational = document.getElementById("nationality");

    if (inpFName.value == null || inpFName.value == "") {
        pInputCheck(pFName, inpFName);
    } else {

        pFName.innerHTML = "";
    }
    if (inpLName.value == null || inpLName.value == "") {
        pInputCheck(pLName, inpLName);
    } else {

        pLName.innerHTML = "";
    }
    if (inpBrtDate.value == null || inpBrtDate.value == "") {
        pInputCheck(pBrtDate, inpBrtDate);
    } else {

        pBrtDate.innerHTML = "";
    }
    if (inpNational.value == null || inpNational.value == "") {
        pInputCheck(pNationality, inpNational);
    } else {

        pNationality.innerHTML = "";
    }

    localStorage.setItem("First name", inpFName.value);
    localStorage.setItem("Last name", inpLName.value);
    localStorage.setItem("Birth Date", inpBrtDate.value);
    localStorage.setItem("Nationality", inpNational.value);
    // person.fname = inpFName.value;
    // person.lname = inpLName.value;
    // person.brtDate = inpBrtDate.value;
    // person.nationality = inpNational.value;
    //console.log(person);
}

// btnPrev.addEventListener("click", function() {
//     window.history.back();
//     console.log("btnPrev");
// });


function pInputCheck(value, input) {
    value.style.color = "red";
    value.innerHTML = "Please, check yours Input";
    input.focus();
}


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