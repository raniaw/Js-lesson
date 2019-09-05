var body = document.getElementsByTagName("body")[0];
var dRect = document.createElement("div");
var attr = dRect.attributes;
console.log(attr);


body.appendChild(dRect);

/**
 * class Rectangle 
 * width,
 * height,
 * color for background
 */
class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
        var att = document.createAttribute("id"); // Neue attribute "id" erstellen
        att.value = "myDiv"; // Value für Id attribute setzen
        dRect.setAttributeNode(att);
        this.newDiv = document.createElement("div");

    }
    create() {
        dRect.appendChild(this.newDiv);
        dRect.style.width = screen.width;
        dRect.style.height = screen.availHeight;
        dRect.style.backgroundColor = colorCreatePastel();
        this.newDiv.style.width = this.width + "px";
        this.newDiv.style.height = this.height + "px";
        this.newDiv.style.backgroundColor = this.color;
    }
}

class RoundRect extends Rectangle {
    constructor(width, height, color, bordRad) {
        super(width, height, color);
        this.bordRad = bordRad;
    }
    createRound() {
        this.create();
        this.newDiv.style.borderRadius = this.bordRad + "%";

    }
}

var rRound = new RoundRect("100", "100", colorCreateDark(), "50");
rRound.createRound();

var rRound2 = new RoundRect("200", "30", colorCreateDark(), "10");
rRound2.createRound();

/**
 * var rect1 = new Rectangle();
 * rect1.width = "100px";
 * rect1.height = "100px";
 * rect1.color = colorCreateDark();
 */
//gleiche wie oben
var rect1 = new Rectangle("100", "100", colorCreateDark());
//Rectangle ertellen
rect1.create();
var button1 = new Rectangle("230", "50", colorCreateDark());
button1.create();

function createButton() {

    width = document.getElementById("width").value;
    height = document.getElementById("height").value;
    color = document.getElementById("color").value;
    if (width == null || width == "" || width == "0" || isNaN(width)) {
        var pErr = document.getElementById("errW");
        pErr.innerHTML = "false input for 'Width'";
        pErr.style.color = "red";
        pErr.style.fontSize = "12px";
    } else if (height == null || height == "" || height == "0" || isNaN(height)) {
        var pErr = document.getElementById("errH");
        pErr.innerHTML = "false input for 'Height'";
        pErr.style.color = "red";
        pErr.style.fontSize = "12px";
    } else if (color == null || color == "" || !(isNaN(color))) {
        var pErr = document.getElementById("errC");
        pErr.innerHTML = "false input for 'Color'";
        pErr.style.color = "red";
        pErr.style.fontSize = "12px";

    } else {
        var pErr = document.getElementById("errC").innerHTML = "";
        var pErr = document.getElementById("errW").innerHTML = "";
        var pErr = document.getElementById("errH").innerHTML = "";
        var pErr = document.getElementById("errR").innerHTML = "";
        var buttonCr = new Rectangle(width, height, color);
        buttonCr.create();

    }

}

function createRoundButton() {

    width = document.getElementById("width").value;
    height = document.getElementById("height").value;
    color = document.getElementById("color").value;
    bordRadius = document.getElementById("borderRad").value;
    // errOut(width, "errW", createRound());
    if (width == null || width == "" || width == "0" || isNaN(width)) {
        var pErr = document.getElementById("errW");
        pErr.innerHTML = "false input for 'Width'";
        pErr.style.color = "red";
        pErr.style.fontSize = "12px";
    } else if (height == null || height == "" || height == "0" || isNaN(height)) {
        var pErr = document.getElementById("errH");
        pErr.innerHTML = "false input for 'Height'";
        pErr.style.color = "red";
        pErr.style.fontSize = "12px";
    } else if (color == null || color == "" || !(isNaN(color))) {
        var pErr = document.getElementById("errC");
        pErr.innerHTML = "false input for 'Color'";
        pErr.style.color = "red";
        pErr.style.fontSize = "12px";
    } else if (bordRadius == null || bordRadius == "" || bordRadius == "0" || isNaN(bordRadius)) {
        var pErr = document.getElementById("errR");
        pErr.innerHTML = "false input for 'Radius'";
        pErr.style.color = "red";
        pErr.style.fontSize = "12px";
    } else {
        var pErr = document.getElementById("errC").innerHTML = "";
        var pErr = document.getElementById("errW").innerHTML = "";
        var pErr = document.getElementById("errH").innerHTML = "";
        var pErr = document.getElementById("errR").innerHTML = "";
        var roundButton = new RoundRect(width, height, color, bordRadius);
        roundButton.createRound();

    }
}
//createButton();

function errOut(item, idErr, funct) {
    var idErr = "";
    idErr = idErr;
    if (item == null || item == "" || item == "0") {
        var pErr = document.getElementById(idErr);
        pErr.innerHTML = "Input is null";
        pErr.style.color = "red";
    } else {
        var pErr = document.getElementById(idErr).innerHTML = "";
        var roundButton = new RoundRect(width, height, color, bordRadius);
        roundButton = funct;
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