// nach dem anklicken auf Button wird eine Funktion ausführen, um zu untermenü anzuzeigen
document.getElementById("myBtn").onclick = function() { toggleShow() };
//
/**
 * Function, um einen Class einzufügen und zu löschen
 * hintergrunde werden nachdem anklicken bei button und bei der menü ändern
 **/

function toggleShow() {
    var x = document.getElementById("myDropdown").classList.toggle("show");
    console.log(x);
    if (x == false) {
        var y = document.getElementById("myBtn");
        y.style.backgroundColor = colorCreateDark();
    } else {
        var z = document.getElementsByClassName("dropdown-content");
        z[0].style.backgroundColor = colorCreatePastel();
    }
}
/**
 * Funktion für die zufällige dunkle Farbeerstellung 
 */
function colorCreateDark() {
    var color;
    var max = 256;
    var min = 40;
    var colRed = Math.floor(Math.random() * max) - min;
    if (colRed < 0) {
        colRed = 0;
    }
    var colBlue = Math.floor(Math.random() * max) - min;
    if (colBlue < 0) {
        colBlue = 0;
    }
    var colGreen = Math.floor(Math.random() * max) - min;
    if (colGreen < 0) {
        colGreen = 0;
    }
    color = "rgb(" + colRed + "," + colGreen + "," + colBlue + ")";
    console.log(color);
    return color;
}
/**
 * Funktion für die zufällige helle(Pastel) Farbeerstellung
 */
function colorCreatePastel() {
    var color;
    var max = 256;
    var min = 120;
    var colRed = Math.floor(Math.random() * max) + min;
    if (colRed > 255) {
        colRed = 255;
    }
    var colBlue = Math.floor(Math.random() * max) + min;
    if (colBlue > 255) {
        colBlue = 255;
    }
    var colGreen = Math.floor(Math.random() * max) + min;
    if (colGreen > 255) {
        colGreen = 255;
    }
    color = "rgb(" + colRed + "," + colGreen + "," + colBlue + ")";
    console.log(color);
    return color;
}