var body = document.getElementsByTagName("body")[0];
var hTitle = document.createElement("h2");
var dImg = document.createElement("div");
var dImgSl = document.createElement("div");
var img = document.createElement("img");
var imgSl = document.createElement("img");
var br = document.createElement("br");
var btnLeft = document.createElement("button");
var btnRight = document.createElement("button");

hTitle.style.color = colorCreateDark();
hTitle.innerHTML = "JS Image - Slider";

var color = colorCreateDark();
var bgColor = colorCreatePastel();
//img.setAttribute('class','einblenden');

imgSl.style.borderRadius = "30px";
imgSl.style.padding = "10px";
imgSl.style.border = "2px solid";
imgSl.style.borderColor = color;

btnLeft.style.color = color;
btnLeft.style.backgroundColor = bgColor;
btnLeft.style.fontWeight = "bold";
btnLeft.style.borderRadius = "20px";
btnLeft.style.padding = "10px";
btnLeft.style.margin = "10px";

btnRight.style.color = color;
btnRight.style.backgroundColor = bgColor;
btnRight.style.fontWeight = "bold";
btnRight.style.borderRadius = "20px";
btnRight.style.padding = "10px";
btnRight.style.margin = "10px";

var txtPrv = document.createTextNode('previous');
btnLeft.appendChild(txtPrv);
btnLeft.style.width = "100px";

var txtNxt = document.createTextNode('next');
btnRight.appendChild(txtNxt);
btnRight.style.width = "100px";

btnLeft.setAttribute('id', 'btnPrv');
btnRight.setAttribute('id', 'btnNxt');

//img.setAttribute('class', 'einblenden');

dImg.appendChild(img);
dImg.appendChild(br);
dImg.appendChild(btnLeft);
dImg.appendChild(btnRight);
dImgSl.appendChild(imgSl);
body.appendChild(hTitle);
body.appendChild(dImg);
body.appendChild(dImgSl);

var imgs = [{
        img: "img1",
        src: "https://picsum.photos/id/13/400/400"
    },
    {
        img: "img2",
        src: "https://picsum.photos/id/259/400/400"
    },
    {
        img: "img3",
        src: "https://picsum.photos/id/559/400/400"
    }

]

var imgSls = [{
        src: "https://picsum.photos/id/180/400/400"
    },
    {
        src: "https://picsum.photos/id/11/400/400"
    },
    {
        src: "https://picsum.photos/id/211/400/400"
    }

]

var time = 5000;
var i = 0;
var y = 0;

img.src = imgs[i].src;
imgSl.src = imgSls[y].src;


function imgPrv() {

    //img.src = imgs[i].src;
    //    img.removeAttribute('class', 'einblenden');
    removeClass(imgs);

    i--;
    if (i < 0) {
        i = 2;
    }
    addClass(imgs);
    img.src = imgs[i].src;
    console.log(i);

    //  img.setAttribute('class', 'einblenden');

}

function imgNxt() {
    removeClass();
    i++;
    if (i >= imgs.length) {
        i = 0;
    }
    addClass();
    console.log(i);
    img.src = imgs[i].src;

}

function changeImg() {
    if (y < imgSls.length) {

        imgSl.src = imgSls[y].src;
        y++;

    } else {
        y = 0;
    }
}

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
setInterval(changeImg, time);
document.getElementById('btnPrv').addEventListener("click", imgPrv);
document.getElementById('btnNxt').addEventListener("click", imgNxt);


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