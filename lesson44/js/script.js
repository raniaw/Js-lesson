var body = document.getElementsByTagName("body")[0];
var pBook = document.createElement("p");
var pJson = document.createElement("p");
var pJsObPers = document.createElement("p");
var ulPerson = document.createElement("ul");

var attPers = document.createAttribute("id"); // Neue attribute "id" erstellen
attPers.value = "pers";
ulPerson.setAttributeNode(attPers);
ulPerson.style.listStyleType = "none";

pBook.style.color = colorCreateDark();
pBook.style.fontWeight = "bolder";
pJson.style.color = colorCreateDark();
pJson.style.fontWeight = "bold";
pJsObPers.style.color = colorCreateDark();
pJsObPers.style.fontWeight = "bold";


body.appendChild(pBook);
body.appendChild(pJson);
body.appendChild(pJsObPers);
body.appendChild(ulPerson);

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


var jsonPerson = '{"name": "Mark","age": 1, "city": "Hamburg", "isMarried": false}'

var objPerson = JSON.parse(jsonPerson);

class Person {
    constructor(text) {
        this.text = text;
    }
    write() {

        let li = document.createElement("li");
        var txtLi = document.createTextNode(this.text);
        li.style.fontSize = "1.8em";
        li.style.color = colorCreateDark();
        li.appendChild(txtLi);
        ulPerson.appendChild(li)

    }
}


for (let i in objPerson) {
    console.log(i + " " + objPerson[i]);
    let li = document.createElement("li");
    var txtLi = document.createTextNode(i + " " + objPerson[i]);
    var attPersLi = document.createAttribute("id"); // Neue attribute "id" erstellen
    attPersLi.value = "persLi";
    li.setAttributeNode(attPersLi);
    li.style.listStyleType = " ";
    li.style.fontFamily = 'Great Vibes';
    li.style.fontSize = "2.5em";
    li.style.color = colorCreateDark();
    document.querySelectorAll('li:before').style = "font-size: 45px; color:red; content:\0273E";
    li.appendChild(txtLi);
    ulPerson.appendChild(li);


}

var property = window.getComputedStyle(
    document.querySelector('#persLi'), ':before'
).getPropertyValue('content');
console.log("property: " + property);


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