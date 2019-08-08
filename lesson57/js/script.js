var body = document.getElementsByTagName("body")[0];

console.log(document.title);
document.title = "welcome";
console.log(document.doctype);
console.log(document.all);
console.log(document.title);
console.log(document.body);
console.log(document.all[20]);
console.log(document.all[10].textContent = "Title changed. Here is 'JS DOM'");
console.log(document.forms[0]);
console.log(document.images);
//console.log(document.images[0].src = "https://www.wildpark-schwarze-berge.de/wp-content/uploads/Wildes-Eichhoernchen-im-Wildpark-Schwarze-Berge-15.jpg");
//console.log(document.images[0].src = "https://www.logsdirect.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/i/mike-hetherington-red-squirrel.jpg");
console.log(document.links);

let items = document.getElementsByClassName("list-group-item");
for (let i = 0; i < items.length; i++) {
    items[i].style.color = "yellowgreen";
}
items[2].innerHTML = "<h2>new text <br>header-content</h2>"
items[2].style.color = colorCreateDark();
items[3].textContent = "New text content ";


let header = document.querySelector("#main-header");
header.style.borderBottom = "solid 7px " + colorCreatePastel();

let input = document.querySelector("input");
input.placeholder = "Welcome";
input.style.backgroundColor = colorCreatePastel();
input.style.color = colorCreateDark();

// let btn = document.querySelectorAll("input");
// btn[1].style.backgroundColor = colorCreateDark();
// btn[1].style.color = colorCreatePastel();
let btn = document.querySelector("input[type='submit']");
btn.style.backgroundColor = colorCreateDark();
btn.style.color = colorCreatePastel();

let lastItem = document.querySelector(".list-group-item:last-child");

lastItem.style.fontFamily = "Great Vibes";
lastItem.style.fontSize = "2em";

let secondItem = document.querySelector(".list-group-item:nth-child(2)");
secondItem.style.fontFamily = "Syncopate";
secondItem.style.fontSize = "1.7em";

let titles = document.querySelectorAll(".title");
titles[1].textContent = "new Text";


let pastel = colorCreatePastel();
// let odd = document.querySelectorAll(".list-group-item:nth-child(odd)");
let odd = document.querySelectorAll("li:nth-child(odd)");
for (let i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = pastel;
}

let dark = colorCreateDark();
// let even = document.querySelectorAll(".list-group-item:nth-child(even)");
let even = document.querySelectorAll("li:nth-child(even)");
for (let i = 0; i < even.length; i++) {
    even[i].style.color = dark;
}

let itemList = document.querySelector("#items");
itemList.parentNode.style.backgroundColor = colorCreatePastel();

console.log(itemList.parentNode);
console.log(itemList.parentNode.parentNode);
console.log(itemList.parentNode.parentNode.parentNode);
console.log(itemList.parentNode.parentNode.parentNode.parentNode);

//itemList.parentNode.parentNode.remove();

itemList.parentNode.parentNode.style.borderBottom = "4px solid " + colorCreatePastel();

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

    return color;
}