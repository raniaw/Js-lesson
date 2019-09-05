var body = document.getElementsByTagName("body")[0];
var btnPrev = document.getElementById("prev");
var btnNext = document.getElementById("next");
var fAddress = document.getElementById("fAddress");
var pAddress = document.getElementById("pAddress");
var pNumber = document.getElementById("pNumber");
var pZipCode = document.getElementById("pZipCode");

var person = new Object();
//console.log(btnPrev);

//btnCalc.addEventListener("click", calculate);



// btnPrev.addEventListener("click", function() {
//     window.history.back();
//     console.log("btnPrev");
// });
fAddress.addEventListener("submit", collectDataAddress);

function collectDataAddress(e) {
    e.preventDefault();

    var inpAddress = document.getElementById("address");
    var inpNumber = document.getElementById("number");
    var inpZip = document.getElementById("zip");

    if (inpAddress.value == null || inpAddress.value == "") {
        pInputCheck(pAddress, inpAddress);
    } else {
        pAddress.innerHTML = "";
    }
    if (inpNumber.value == null || inpNumber.value == "") {
        pInputCheck(pNumber, inpNumber);
    } else {
        pNumber.innerHTML = "";
    }
    if (inpZip.value == null || inpZip.value == "") {
        pInputCheck(pZipCode, inpZip);
    } else {
        pZipCode.innerHTML = "";
    }

    localStorage.setItem("Address", inpAddress.value);
    localStorage.setItem("House Number", inpNumber.value);
    localStorage.setItem("Zip Code", inpZip.value);
    // person.address = inpAddress.value;
    // person.number = inpNumber.value;
    // person.zip = inpZip.value;
    // console.log(person);
}

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