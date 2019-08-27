var body = document.getElementsByTagName("body")[0];
var btnCalc = document.getElementById("calc");
var fCalc = document.getElementById("loan");

var inp1 = document.getElementById("inp1");
var inp2 = document.getElementById("inp2");
var rechnInch = 2.54;
var rechnMeile = 1.60934;
var rechnBar = 100000;

var sel = document.getElementById("inpSelected");
var lab1 = document.querySelectorAll("label")[1];
var lab2 = document.querySelectorAll("label")[2];

//btnCalc.addEventListener("click", calculate);

function calc(rechn) {

    inp1.addEventListener("keyup", function calculate(e) {
        e.preventDefault();
        let myEventKeyUpValue = e.target.value * rechn;
        inp2.value = myEventKeyUpValue;

    });

    inp2.addEventListener("keyup", function(e) {
        e.preventDefault();
        inp1.value = e.target.value / rechn;
    });
}

function calcCelsFahr() {
    inp1.addEventListener("keyup", function calculate(e) {
        e.preventDefault();
        let myEventKeyUpValue = (e.target.value * 9 / 5) + 32; //fahrenheit
        inp2.value = myEventKeyUpValue;

    });

    inp2.addEventListener("keyup", function(e) {
        e.preventDefault();
        inp1.value = (e.target.value - 32) * 5 / 9; //Celcius
    });
}

sel.addEventListener('change', getSelection, false);

function getSelection() {
    var i = this.options[this.selectedIndex].value;;
    console.log(i);

    //gleich wie unten
    // if (i == 1) {
    //     clearInput();
    //     calc(rechnBar);
    //     lab1.innerHTML = "Bar:";
    //     lab2.innerHTML = "Pascal:";
    // }
    // if (i == 2) {
    //     calc(rechnInch);
    //     lab1.innerHTML = "Zoll:";
    //     lab2.innerHTML = "Cm:";
    // }
    // if (i == 3) {
    //     calc(rechnMeile);
    //     lab1.innerHTML = "Meile:";
    //     lab2.innerHTML = "Km:";
    // }
    // if (i == 4) {
    //     clearInput();
    //     calcCelsFahr();
    // lab1.innerHTML = "Celsius:";
    // lab2.innerHTML = "Fahrenheit:";
    // }

    switch (i) {
        case "0":
            clearInput();
            lab1.innerHTML = "";
            lab2.innerHTML = "";
            break;
        case "1":
            clearInput();
            calc(rechnBar);
            lab1.innerHTML = "Bar:";
            lab2.innerHTML = "Pascal:";
            break;
        case "2":
            clearInput();
            calc(rechnInch);
            lab1.innerHTML = "Zoll:";
            lab2.innerHTML = "Cm:";
            break;
        case "3":
            clearInput();
            calc(rechnMeile);
            lab1.innerHTML = "Meile:";
            lab2.innerHTML = "Km:";
            break;
        case "4":
            clearInput();
            calcCelsFahr();
            lab1.innerHTML = "Celsius:";
            lab2.innerHTML = "Fahrenheit:";
            break;
    }
}

function clearInput() {
    inp1.value = "";
    inp2.value = "";
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