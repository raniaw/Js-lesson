var body = document.getElementsByTagName("body")[0];
var hTitle = document.createElement("h2");
var dImg = document.createElement("div");
var img = document.createElement("img");

var dLeft = document.createElement("div");
var dRight = document.createElement("div");
var sLeft = document.createElement("span");
var sRight = document.createElement("span");

hTitle.style.color = colorCreateDark();
hTitle.innerHTML = "JS Caroussel";

var color = colorCreateDark();
var bgColor = colorCreatePastel();

dImg.style.width = "600px";

dImg.style.position = "relative";
dImg.style.left = "100px;"

dLeft.style.backgroundColor = "grey";
dLeft.style.opacity = "0.7";
dLeft.width = "50px";
dLeft.height = "100%";
dLeft.style.position = "absolute";
dLeft.style.left = "0";
dLeft.style.top = "0";
sLeft.setAttribute("class", "left");

dRight.style.backgroundColor = "grey";
dRight.style.opacity = "0.7";
dRight.width = "50px";
dRight.height = "100%";
dRight.style.position = "absolute";
dRight.style.right = "0";
dRight.style.top = "0";
sRight.setAttribute("class", "right");

dLeft.appendChild(sLeft);
dRight.appendChild(sRight);
dImg.appendChild(img);
dImg.appendChild(dLeft);
dImg.appendChild(dRight);

body.appendChild(hTitle);
body.appendChild(dImg);

var imgs = [{
        img: "img1",
        src: "img/1.jpg"
    },
    {
        img: "img2",
        src: "img/2.jpg"
    },
    {
        img: "img3",
        src: "img/3.jpg"
    },
    {
        img: "img4",
        src: "img/4.jpg"
    },
    {
        img: "img5",
        src: "img/5.jpg"
    },
    {
        img: "img6",
        src: "img/6.jpg"
    }

]

var i = 0;
img.src = imgs[i].src;

function imgPrv() {
    i--;
    if (i < 0) {
        i = 5;
    }
    img.src = imgs[i].src;
}

function imgNxt() {
    i++;
    if (i >= imgs.length) {
        i = 0;
    }
    img.src = imgs[i].src;
}

setInterval(imgNxt, 3000);

dLeft.addEventListener("click", imgPrv);
dRight.addEventListener("click", imgNxt);







function removeClass(imgs) {
    img.src = imgs[i].src;
    img.removeAttribute('class', 'einblenden');
    console.log(img);
}

function addClass(imgs) {
    img.src = imgs[i].src;
    img.setAttribute('class', 'einblenden');
    console.log(img);
}



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