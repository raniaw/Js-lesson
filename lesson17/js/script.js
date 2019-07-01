let body = document.querySelector("body");
let h1 = document.querySelector("h1");
body.style.background = "#93ffff";

let isBlue = false;

let tag = document.getElementById("firstId");

let liTags = document.getElementsByClassName("list");
console.log(liTags);
let h1Tag = document.getElementsByTagName("h1");
h1Tag[0].style = "color:red";
h1Tag[0].style.padding = "5%";
h1Tag[1].classList.add("light");

console.log(h1Tag);
let par = document.getElementsByTagName("p");

let par1 = document.getElementsByTagName("p")[0];
var att = document.createAttribute("id");
att.value = "par";
par1.setAttributeNode(att);
console.log("der text vor der Änderung ist:  " + par1.textContent);

let link = document.querySelector("a");
link.setAttribute("href", "https://de.wikipedia.org/wiki/Wikipedia:Hauptseite");
console.log(link.getAttribute("href"));


function myFunction() {

    var btn = document.getElementsByTagName("BUTTON")[0];
    var x = btn.attributes[1].value;
    var y = btn.attributes.getNamedItem("onclick").value;
    document.getElementById("par").innerHTML = "Der text nach dem Anklicken:<br> Der Button hat <br> eine Attributt mit der Name: " + x + " und eine Funktion mit der Name:  " + y;
    console.log(btn.attributes);

    var att1 = document.createAttribute("class");
    att1.value = "click";
    par1.setAttributeNode(att1);
    par1.style.color = colorCreate();
    console.log("Der Text nach der Änderung: " + par1.textContent);
    var spanText = document.createElement("span");
    var h1neue = document.createElement("h1");
    //;  &#10051 == \u2743 == '0x2743'
    var blume = String.fromCharCode('0x2743');
    console.log("Blume: " + blume);
    //var lbr = "<br>";

    //document.write("<br>");
    var text = "Hi, ich bin neue hier )))";
    text2 = blume.concat(text);
    spanText.style.color = colorCreate();
    console.log(spanText.style.color);
    var neueText = document.createTextNode(text2);
    var span1 = document.createTextNode(blume);

    //console.log(lbr);

    h1neue.appendChild(span1);
    h1neue.appendChild(spanText);
    h1neue.appendChild(neueText);
    //document.body.innerHTML = lbr;
    document.body.appendChild(span1);
    document.body.appendChild(spanText);
    document.body.appendChild(h1neue);
    h1neue.style.color = colorCreate();
    // h1neue.setAttributeNode(att1);

    let link = document.querySelector("img");
    link.setAttribute("src", "img/angular.png");
    let h5Tag = document.getElementsByTagName("h5");
    var att2 = document.createAttribute("id");
    att2.value = "h5";
    console.log("h5Tag: " + h5Tag[1].textContent);

    for (let i = 0; i < h5Tag.length; i++) {
        h5Tag[i].innerHTML = " hier ist neue Text " + i + " in h5-Tag ";
        console.log("h5Tag: " + h5Tag[i].textContent);
        h5Tag[i].setAttribute("id", att2.value);
        h5Tag[i].style.color = colorCreate();
    }

}

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