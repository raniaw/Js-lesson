var body = document.getElementsByTagName("body")[0];
var pBook = document.createElement("p");
var pJson = document.createElement("p");

pBook.style.color = colorCreateDark();
pBook.style.fontWeight = "bolder";
pJson.style.color = colorCreateDark();
pJson.style.fontWeight = "bold";
body.appendChild(pBook);
body.appendChild(pJson);

let book = {
    name: "JS for dummis",
    author: "J. Dummis",
    year: "0000",
    // bookInfo:() => { // dosn't work
    bookInfo: function() {
        console.log("the Book name is: " + this.name + "\nAutor: " + this.author + "\nwrote in " + this.year);
        return "the Book name is " + this.name + "<br>Autor: " + this.author + "<br>wrote in " + this.year;
    }
}

//var txtBook = JSON.parse(book);

for (let i in book) {
    console.log(book[i])
}


var obj = {
    "hello": "world",
    "Test": ["hello"]
};

pBook.innerHTML = "";
pBook.innerHTML = book.bookInfo();
pJson.innerHTML = JSON.stringify(obj, null, 4);









/**
 * Funktion für die zufällige dunkle Farbeerstellung
 */


function colorCreateDark() {
    var color;
    var max = 106;
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
    var min = 200;
    var colRed = Math.floor(Math.random() * (max - min)) + min;
    var colBlue = Math.floor(Math.random() * (max - min)) + min;
    var colGreen = Math.floor(Math.random() * (max - min)) + min;

    color = "rgb(" + colRed + "," + colGreen + "," + colBlue + ")";
    console.log(color);
    return color;
}