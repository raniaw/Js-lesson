let body = document.querySelector("body");
let h1 = document.querySelector("h1");
body.style.background = "lightgreen";
h1.style = "color:red";
h1.style.padding = "10%";

let isBlue = false;

let tag = document.getElementById("firstId");

let liTags = document.getElementsByClassName("list");

let headíngTag = document.getElementsByTagName("h2");

console.log(headíngTag);

setInterval(changeColor, 5000);

function changeColor() {
    // let time = new TimeRanges();
    if (isBlue == true) {
        body.style.background = colorCreate();
        h1.style.color = colorCreate();
        headíngTag[0].innerHTML = "Hallo";
        console.log(headíngTag);
        tag.style.color = colorCreate();
        liTags[0].style.background = colorCreate();
        liTags[1].style.color = colorCreate();
    } else {
        body.style.background = colorCreate();
        h1.style.color = colorCreate();
        headíngTag[0].innerHTML = "Welt";
        console.log(headíngTag);
        tag.style.color = colorCreate();
        liTags[0].style.background = colorCreate();
        liTags[1].style.color = colorCreate();
    }
    isBlue = !isBlue;

}

function colorCreate() {
    var color;
    var colRed = Math.floor(Math.random() * 256);
    var colBlue = Math.floor(Math.random() * 256);
    var colGreen = Math.floor(Math.random() * 256);
    color = "rgb(" + colRed + "," + colBlue + "," + colGreen + ")";
    return color;
}