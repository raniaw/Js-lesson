/**
 * IE, Chrome, Safari, Opera 15+: [ALT] + accesskey
 * Opera prior version 15: [SHIFT] [ESC] + accesskey
 * Firefox: [ALT] [SHIFT] + accesskey 
 * 
 */

var gLink = document.getElementById("gLink");
gLink.accessKey = "g";
gLink.style.color = colorCreateDark();
gLink.style.fontFamily = 'Great Vibes';
gLink.style.fontSize = "2em";

var bLink = document.querySelector("button");
var imgS = document.querySelector("img");

bLink.addEventListener("click", () => {
    imgS.style.display = "none";
});

var shwBtn = document.getElementById("show");
shwBtn.addEventListener("click", () => {
    imgS.style.display = "block";
});


var shwBtn = document.querySelectorAll("button")[2];
shwBtn.addEventListener("click", () => {
    if (imgS.style.display == "none") {
        imgS.style.display = "block";

    } else {
        imgS.style.display = "none";
    }
});

var chngBtn = document.getElementById("change");
chngBtn.addEventListener("click", () => {
    if (imgS.getAttribute("src") == "img/java.jpg") {
        imgS.setAttribute("src", "img/javascript.png");
    } else {
        imgS.setAttribute("src", "img/java.jpg");
    }
});
/**
 * the same function as above 
 * 
 * let bLink = document.addEventListener("click", function() {
 * let imgS = document.querySelector("img");
 * imgS.style.display = "none";
 * })
 * 
 */
var body = document.getElementsByTagName("body")[0];
var bgrBtnColor = document.getElementById("bgrBtnColor");
bgrBtnColor.addEventListener("click", () => {
    body.style.background = colorCreatePastel();
});
var wnd = window;
var widthW, heightW;
pSize = document.getElementById("size");
wnd.addEventListener("resize", () => {
    body.style.background = colorCreateDark();
    widthW = wnd.innerWidth;
    heightW = wnd.innerHeight;
    pSize.innerHTML = "Window Width = " + widthW + "<br>Wimdow Height = " + heightW;
    gLink.style.color = colorCreateDark();
    pSize.style.color = colorCreate();
    pSize.style.fontFamily = 'Great Vibes';
    pSize.style.fontSize = "2em";
    console.log("W: " + widthW + "  h: " + heightW);
});


var btnChangeColor = document.getElementsByTagName("BUTTON")[5];
var x = btnChangeColor.attributes.item(0).name;
console.log(x);
var y = btnChangeColor.attributes.item(0).value;
var pChange = document.getElementById("btnChange")
btnChangeColor.addEventListener("click", () => {
    pChange.innerHTML = y;
    if (x == "class") {
        btnChangeColor.style.backgroundColor = colorCreate();
        btnChangeColor.style.borderRadius = brdRadius() + "%";
        btnChangeColor.style.boxShadow = "1px 1px 15px 2px " + colorCreateDark();
        pChange.style.color = colorCreate();
        pChange.innerHTML = "Button has new class \'" + btnChangeColor.attributes.item(0).value + "\' now";
    }
})

function brdRadius() {
    var grRndmin = Math.ceil(1);
    //console.log(grRndmin);
    var grRndmax = Math.floor(50);
    var grRnd = Math.floor(Math.random() * grRnd(max - min)) + grRndmin;
    //console.log(grRnd);
    return grRnd;
}



/**
 * Funktion für die zufällige dunkle Farbeerstellung 
 */
function colorCreateDark() {
    var color;
    var max = 256;
    var min = 60;
    var colRed = Math.floor(Math.random() * (max - min)) - min;
    if (colRed < 0) {
        colRed = 0;
    }
    var colBlue = Math.floor(Math.random() * (max - min)) - min;
    if (colBlue < 0) {
        colBlue = 0;
    }
    var colGreen = Math.floor(Math.random() * (max - min)) - min;
    if (colGreen < 0) {
        colGreen = 0;
    }
    color = "rgb(" + colRed + "," + colGreen + "," + colBlue + ")";
    console.log(color);
    return color;
}
/**
 * Funktion für die zufällige helle(Pastel) Farbeerstellung
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


function colorCreate() {
    var color;
    var colRed = Math.floor(Math.random() * 256);
    var colBlue = Math.floor(Math.random() * 256);
    var colGreen = Math.floor(Math.random() * 256);
    color = "rgb(" + colRed + "," + colGreen + "," + colBlue + ")";
    return color;
}