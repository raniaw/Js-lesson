var body = document.getElementsByTagName("body")[0];

var pInfo = document.createElement("p");
var pInfo2 = document.createElement("p");
body.appendChild(pInfo);
body.appendChild(pInfo2);

var person = {
    fname: "Mascha",
    lname: "Maschina",
    age: 5,
    hairColor: "blond",
    personInfo: function() {
        return "Firstname: " + this.fname + "<br>Lastname: " + this.lname + "<br> Age: " + this.age;

    }
}


let personM = new Person("Mascha", "Maschina", 5, "blond");
let person2 = new Person("Mischa", "Medved", 60, "baraun");

pInfo.innerHTML = person.personInfo();
pInfo2.innerHTML = person2.personInfo();

/**
 * Class Person
 * @param {*} fname 
 * @param {*} lname 
 * @param {*} age 
 * @param {*} colHair 
 */


function Person(fname, lname, age, colHair) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.hairColor = colHair;
    this.personInfo = () => {
        return "Firstname: " + this.fname + "<br>Lastname: " + this.lname + "<br> Age: " + this.age;


    }
}

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