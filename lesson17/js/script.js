let body = document.querySelector("body");
let h1 = document.querySelector("h1");
body.style.background = "#93ffff";

let isBlue = false;

let tag = document.getElementById("firstId");

let liTags = document.getElementsByClassName("list");

let h1Tag = document.getElementsByTagName("h1");
h1Tag[0].style = "color:red";
h1Tag[0].style.padding = "10%";
h1Tag[1].classList.add("light");

console.log(h1Tag);
let par = document.getElementsByTagName("p");
let par1 = document.getElementsByTagName("p")[0];
var att = document.createAttribute("id");
att.value = "par";
par1.setAttributeNode(att);
console.log("der text vor der Änderung ist:  " + par1.textContent);



//setInterval(changeColor, 5000);

function changeColor() {
    // let time = new TimeRanges();
    if (isBlue == true) {
        body.style.background = colorCreate();
        h1.style.color = colorCreate();
        h1Tag[0].innerHTML = "Hallo";
        console.log(h1Tag);
        tag.style.color = colorCreate();
        liTags[0].style.background = colorCreate();
        liTags[1].style.color = colorCreate();
    } else {
        body.style.background = colorCreate();
        h1.style.color = colorCreate();
        h1Tag[0].innerHTML = "Welt";
        console.log(h1Tag);
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

function myFunction() {

    var btn = document.getElementsByTagName("BUTTON")[0];
    var x = btn.attributes[1].value;
    var y = btn.attributes.getNamedItem("onclick").value;
    document.getElementById("par").innerHTML = "Der text nach dem Anklicken:<br> Der Button hat <br> eine Attributt mit der Name " + x + " und eine Funktion mit der Name:  " + y;
    console.log(btn.attributes);

    var att1 = document.createAttribute("class");
    att1.value = "click";
    par1.setAttributeNode(att1);
    console.log("Der Text nach der Änderung: " + par1.textContent);
}