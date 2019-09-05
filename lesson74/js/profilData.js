var body = document.getElementsByTagName("body")[0];
var btnPrev = document.getElementById("prev");
var btnNext = document.getElementById("next");
var fProfil = document.getElementById("fProfil");
var pUser = document.getElementById("pUser");
var pPassw = document.getElementById("pPassw");
var pPasswR = document.getElementById("pPasswR");
var pFile = document.getElementById("pFile");
var dOutImg = document.getElementById("outImg");


var person = new Object();
//console.log(btnPrev);

//btnCalc.addEventListener("click", calculate);

fProfil.addEventListener("submit", collectDataProfil);

function collectDataProfil(e) {
    e.preventDefault();

    var inpUser = document.getElementById("user");
    var inpPassw = document.getElementById("passw")
    var inpPasswR = document.getElementById("passwR");
    var inpFile = document.getElementById("file");

    if (inpUser.value == null || inpUser.value == "") {
        pInputCheck(pUser, inpUser);
    } else {
        pUser.innerHTML = "";
    }
    if (inpPassw.value == null || inpPassw.value == "") {
        pInputCheck(pPassw, inpPassw);
    } else {
        pPassw.innerHTML = "";
        if (inpPassw.value !== inpPasswR.value) {
            pPasswR.style.color = "red";
            pPasswR.innerHTML = "Please, check yours Input. Your Pass don't the same";
            inpPasswR.focus();
        } else {
            pPasswR.innerHTML = "";
            inpFile.focus();
        }
    }
    console.log(inpUser.value);
    console.log(inpPassw.value);
    console.log("inpfile " + inpFile.value);
    if (inpFile.value == null || inpFile.value == "No file selected" || inpFile.value == "") {
        pInputCheck(pFile, inpFile);
    } else {
        pFile.innerHTML = "";
        // inpFile.addEventListener('change', dateiauswahl, false);
    }
    inpFile.addEventListener('change', dateiauswahl, false);
    localStorage.setItem("User Name", inpUser.value);
    localStorage.setItem("Password", inpPassw.value);
    localStorage.setItem("Photo", inpFile.value);

    // person.user = inpUser.value;
    // person.passw = inpPassw.value;
    // // person.file = inpFile.value;
    // console.log(person);
}

function dateiauswahl(evt) {
    var dateien = evt.target.files; // FileList object
    console.log(dateien);
    // Auslesen der gespeicherten Dateien durch Schleife
    //for (var i = 0, f; f = dateien[i]; i++) {
    for (var i = 0, f; f = dateien[i]; i++) {

        // nur Bild-Dateien
        if (!f.type.match('image.*')) {
            continue;
        }
        var reader = new FileReader();
        reader.onload = (function(file) {
            return function(e) {
                // erzeuge Thumbnails.
                var imgShow = document.createElement('img');
                imgShow.className = 'showImg';
                imgShow.src = e.target.result;
                imgShow.title = file.name;
                dOutImg.insertBefore(imgShow, null);
            };
        })(f);
        // Bilder als Data URL auslesen.
        reader.readAsDataURL(f);
    }
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