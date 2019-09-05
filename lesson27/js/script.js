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