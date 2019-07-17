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
    }
    create() {
        var att = document.createAttribute("id"); // Neue attribute "id" erstellen
        att.value = "myDiv"; // Value für Id attribute setzen
        dRect.setAttributeNode(att);
        var newDiv = document.createElement("div");
        dRect.appendChild(newDiv);
        dRect.style.width = screen.width;
        dRect.style.height = screen.availHeight;
        dRect.style.backgroundColor = colorCreatePastel();
        newDiv.style.width = this.width + "px";
        newDiv.style.height = this.height + "px";
        newDiv.style.backgroundColor = this.color;
    }
}

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
    var buttonCr = new Rectangle(width, height, color);
    buttonCr.create();
}
//createButton();

/**
 * Funktion für die zufällige dunkle Farbeerstellung
 */


function colorCreateDark() {
    var color;
    var max = 256;
    var min = 60;
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
 * Funktion für die zufällige helle-(Pastel)Farbeerstellung
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