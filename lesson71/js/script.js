var body = document.getElementsByTagName("body")[0];
var hTitle = document.createElement("h2");

var imgSl = document.querySelectorAll(".sl");
console.log(imgSl);
let dLAr = document.querySelector(".dLt");
let dRAr = document.querySelector(".dRt");
console.log(dLAr);
console.log(dRAr);

var dContainer = document.createElement("div");
var dImg = document.createElement("div");
var img = document.createElement("img");

var dLeft = document.createElement("div");
var dRight = document.createElement("div");
var sLeft = document.createElement("span");
var sRight = document.createElement("span");

hTitle.style.color = colorCreateDark();
hTitle.innerHTML = "JS Carousel";

var color = colorCreateDark();
var bgColor = colorCreatePastel();

dImg.style.width = "600px";

dImg.style.position = "relative";
dImg.style.left = "100px;"

dLeft.className = "lDiv"
dLeft.style.backgroundColor = "grey";
dLeft.style.opacity = "0.7";
dLeft.width = "50px";
dLeft.height = "100%";
dLeft.style.position = "absolute";
dLeft.style.left = "0";
dLeft.style.top = "0";
sLeft.setAttribute("class", "left");

dRight.className = "rDiv";
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
dContainer.appendChild(dImg);

body.appendChild(hTitle);
body.appendChild(dContainer);

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
    dImg.className = "einblenden";
    console.log(img);

    if (i < 0) {
        i = 5;
    }

    img.src = imgs[i].src;
    dImg.classList.remove();
}

function imgNxt() {
    i++;
    dImg.className = "einblenden";

    if (i >= imgs.length) {
        i = 0;
    }

    img.src = imgs[i].src;
    console.log(img);
}

//setInterval(imgNxt, 3000);
//setInterval(moveLeft, 3000);

dLeft.addEventListener("click", imgPrv);
dRight.addEventListener("click", imgNxt);

function removeClass() {
    img.classList.remove("einblenden");
    console.log(img);
}

function addClass() {
    let y;
    y++;
    dImg.classList = "einblenden";
}
displNone(imgSl);
let counter = 0;
imgSl[counter].style.display = "block";

dLAr.addEventListener("click", moveLeft);
dRAr.addEventListener("click", moveRight);

function moveLeft() {
    displNone(imgSl);
    counter--;
    if (counter != 0) {
        if (counter < 0) {
            counter = imgSl.length - 1;
            imgSl[counter].style.display = "block";
            imgSl[counter].style.transition = "all 2s easy-in-out";
        } else {
            imgSl[counter].style.display = "block";
            imgSl[counter].style.transition = "all 2s easy-in-out";
        }
    } else {
        imgSl[counter].style.display = "block";
        imgSl[counter].style.transition = "all 2s easy-in-out";
    }
}

function moveRight() {
    displNone(imgSl);
    counter++;
    if (counter != imgSl.length) {
        if (counter > imgSl.length) {
            imgSl[counter].style.display = "block";
            imgSl[counter].style.transition = "all 2s easy-in-out";
        } else {
            imgSl[counter].style.display = "block";
            imgSl[counter].style.transition = "all 2s easy-in-out";
        }
    } else {
        counter = 0;
        imgSl[counter].style.display = "block";
        imgSl[counter].style.transition = "all 2s easy-in-out";
    }
}

function displNone(value) {
    value.forEach((item) => {
        item.style.display = "none";
    });
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