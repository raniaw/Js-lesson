var body = document.getElementsByTagName("body")[0];

var pInfo = document.createElement("p");
var pInfo2 = document.createElement("p");
var carObj = document.createElement("p");
var pEmpl = document.createElement("p");
var pGet = document.createElement("p");
var pSet = document.createElement("p");
var pPSG = document.createElement("p");
var pCats = document.createElement("p");
var pDogs = document.createElement("p");
var pAnRunShw = document.createElement("p");
var pAnFlShw = document.createElement("p");
var pAnCrab = document.createElement("p");
var pAnLight = document.createElement("p");


body.appendChild(pInfo);
body.appendChild(pInfo2);
body.appendChild(carObj);
body.appendChild(pEmpl);
body.appendChild(pGet);
body.appendChild(pSet);
body.appendChild(pPSG);
body.appendChild(pCats);
body.appendChild(pDogs);
body.appendChild(pAnRunShw);
body.appendChild(pAnFlShw);
body.appendChild(pAnCrab);
body.appendChild(pAnLight);

/**
 * Class User
 */
class User {
    constructor(username, ip) {
        this.username = username;
        this.ip = ip;
        this.date = new Date().getTime();
    }
    sayHello() {
        if (this.isRejected()) {
            alert(`You are a bad guy, ${this.username}. See you!`);
        } else {
            alert(`Welcome back ${this.username}!`);
        }
        // if (rejected == false) {
        // alert
        //} else {alert} 
    }
    isRejected() {
        if (this.ip == "127.2.2.2") {
            return true;
        } else {
            return false;
        }
    }
    getActivityTime() {
        var d = new Date();
        var current = d.getTime();
        var diffTime = (current - this.date) / 1000;

        console.log(`your create yours account since ${diffTime} seconds`);

    }
}
const u = new User("dci_user", "127.1.1.1");
class Admin extends User {
    constructor(username, ip, category) {
        super(username, ip);
        this.category = category;
    }
    getCategory() {
        document.write(`The admin ${this.username} moderates the category ${this.category}`);
    }
    blockUser(x) {
        //
        alert(`The user ${x} is blocked`);
    }
}
const a = new Admin("romal", "127.3.4.5", "Sportcars")
class Owner extends Admin {
    constructor(username, ip, category, ownerSince) {
        super(username, ip, category);
        this.ownerSince = ownerSince;
    }
    getOwnerName() {
        document.write(`This web page was crated by ${this.username}`);
    }
}
const o = new Owner("BillGates", "9.9.9.9", "All", 20);





/**
 * Funktion für die zufällige dunkle Farbeerstellung
 */


function colorCreateDark() {
    var color;
    var max = 256;
    var min = 60;
    var colRed = Math.floor(Math.random() * (max - min)) + min;
    if (colRed < 0) {
        colRed = 0;
    }
    var colBlue = Math.floor(Math.random() * (max - min)) + min;
    if (colBlue < 0) {
        colBlue = 0;
    }
    var colGreen = Math.floor(Math.random() * (max - min)) + min;
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
    var colRed = Math.floor(Math.random() * (max - min)) + min;
    if (colRed > 255) {
        colRed = 255;
    }
    var colBlue = Math.floor(Math.random() * (max - min)) + min;
    if (colBlue > 255) {
        colBlue = 255;
    }
    var colGreen = Math.floor(Math.random() * (max - min)) + min;
    if (colGreen > 255) {
        colGreen = 255;
    }
    color = "rgb(" + colRed + "," + colGreen + "," + colBlue + ")";
    console.log(color);
    return color;
}