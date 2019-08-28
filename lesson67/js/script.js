var body = document.getElementsByTagName("body")[0];
var btnCalc = document.getElementById("calc");
var fCalc = document.getElementById("loan");

var inp1 = document.getElementById("inp1");
var inp2 = document.getElementById("inp2");
var inpRes = document.getElementById("inpRes");
// var mult = "*";
// var div = "";
// var rechnBar = 100000;
var pErr = document.getElementById("pErr");
var sel = document.getElementById("inpSelected");
var lab1 = document.querySelectorAll("label")[1];
var lab2 = document.querySelectorAll("label")[2];

//btnCalc.addEventListener("click", calculate);

function add() {

    inp1.addEventListener("keyup", function(e) {
        e.preventDefault();
        let v1 = parseFloat(e.target.value);
        let v2 = parseFloat(inp2.value);
        inpRes.value = v1 + v2;
        console.log(inp1.value + " " + inp2.value + " " + inpRes.value);
    });

    inp2.addEventListener("keyup", function(e) {
        e.preventDefault();
        let v1 = parseFloat(inp1.value);
        let v2 = parseFloat(e.target.value);
        inpRes.value = v1 + v2;
        console.log(inp1.value + " " + inp2.value + " " + inpRes.value);
    });
}

function sub() {
    inp1.addEventListener("keyup", function(e) {
        e.preventDefault();

        let v1 = parseFloat(e.target.value);
        let v2 = parseFloat(inp2.value);
        inpRes.value = v1 - v2;
        console.log(inp1.value + " " + inp2.value + " " + inpRes.value);
    });
    inp2.addEventListener("keyup", function(e) {
        e.preventDefault();
        let v1 = parseFloat(inp1.value);
        let v2 = parseFloat(e.target.value);
        inpRes.value = v1 - v2;
        console.log(inp1.value + " " + inp2.value + " " + inpRes.value);
    });
}

function mult() {
    inp1.addEventListener("keyup", function(e) {
        e.preventDefault();

        let v1 = parseFloat(e.target.value);
        let v2 = parseFloat(inp2.value);
        inpRes.value = v1 * v2;
        console.log(inp1.value + " " + inp2.value + " " + inpRes.value);
    });
    inp2.addEventListener("keyup", function(e) {
        e.preventDefault();
        let v1 = parseFloat(inp1.value);
        let v2 = parseFloat(e.target.value);
        inpRes.value = v1 * v2;
        console.log(inp1.value + " " + inp2.value + " " + inpRes.value);
    });
}

function div() {
    inp1.addEventListener("keyup", function(e) {
        console.log(e.target.value);
        if (inp2.value == 0) {
            console.log("inp1.value")
            pErr.innerHTML = "div 0 is not allowed";
            pErr.style.color = "red";
            inpRes.value = "";
        } else {
            pErr.innerHTML = "";
            e.preventDefault();
            let v1 = parseFloat(e.target.value);
            let v2 = parseFloat(inp2.value);
            inpRes.value = v1 / v2;
            console.log(inp1.value + " " + inp2.value + " " + inpRes.value);
        }
    });
    inp2.addEventListener("keyup", function(e) {
        console.log(e.target.value);
        if (e.target.value == 0) {
            console.log("inp2.value")
            pErr.innerHTML = "div 0 is not allowed";
            pErr.style.color = "red";
            inpRes.value = "";
        } else {
            pErr.innerHTML = "";
            e.preventDefault();
            let v1 = parseFloat(inp1.value);
            let v2 = parseFloat(e.target.value);
            inpRes.value = v1 / v2;
            console.log(inp1.value + " " + inp2.value + " " + inpRes.value);
        }
    });
}

function mod() {
    inp1.addEventListener("keyup", function(e) {
        if (inp2.value != 0) {
            e.preventDefault();
            let v1 = parseFloat(e.target.value);
            let v2 = parseFloat(inp2.value);

            inpRes.value = v1 % v2;
            console.log(inp1.value + " " + inp2.value + " " + inpRes.value);
        } else {
            pErr.innerHTML = "div 0 is not allowed";
            pErr.style.color = "red";
            inpRes.value = "";
        }

    });

    inp2.addEventListener("keyup", function(e) {
        if (e.target.value != 0) {
            e.preventDefault();
            let v1 = parseFloat(inp1.value);
            let v2 = parseFloat(e.target.value);
            inpRes.value = v1 % v2;
            console.log(inp1.value + " " + inp2.value + " " + inpRes.value);
        } else {
            pErr.innerHTML = "div 0 is not allowed";
            pErr.style.color = "red";
            inpRes.value = "";
        }
    });
}

sel.addEventListener('change', getSelection, false);

function getSelection() {
    var i = this.options[this.selectedIndex].value;;
    console.log(i);

    switch (i) {

        case "1":
            //clearInput();
            add();

            break;
        case "2":
            // clearInput();
            sub();
            break;
        case "3":
            //clearInput();
            mult();
            break;
        case "4":
            //clearInput();
            div();
            break;

        case "5":
            //clearInput();
            mod();

            break;
    }
}

function clearInput() {
    inp1.value = "";
    inp2.value = "";
    inpRes.value = "";
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