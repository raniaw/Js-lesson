// function sayHi() {
//     let name = prompt("Hello what is your name?");
//     alert('hi ' + name + "!!!!!!");
// }

let body = document.getElementsByTagName("body")[0];

function chBGColor() {
    // let body=document.querySelector("body");
    // let body=document.querySelectorAll("body")[0];
    body.style.background = colorCreate();
}

function chBg(color) {
    body.style.backgroundColor = color;
}
///////////////////////////////////////////
function chImg() {
    let img = document.getElementById("logoImg");
    let random = Math.floor(Math.random() * 1000) + 1;
    let newSrc = "https://picsum.photos/id/" + random + "/300/300";
    img.setAttribute("src", newSrc);
}

function startAuto() {
    let start = setInterval(chImg, 1000);
} ////////////////////////////////////////
function chImg2() {
    let img = document.getElementById("logoImg");
    let firstImg = "https://picsum.photos/id/993/300/300";
    let secondImg = "https://picsum.photos/id/293/300/300";
    if (img.getAttribute("src") == firstImg) {
        img.setAttribute("src", secondImg);
    } else {
        img.setAttribute("src", firstImg);
    }
} //////////////////////////////////////////////

let colors = ["red", "orange", "blue", "green", "yellow", "pink"];
body = document.querySelector('body');
let c = Math.floor(Math.random() * colors.length);;
console.log("c: " + c);

function changeColor() {
    if (c == colors.length) {
        c = Math.floor(Math.random() * colors.length);
        console.log("c: " + c);
    }
    if (c < colors.length) {
        body.style.background = colorDarkCreate();
        c++;
        console.log(">c: " + c);
    }
    let buttonText = document.getElementById("colors");
    c = 0;
}

function changeColor2() {
    if (c == colors.length) {
        c = Math.floor(Math.random() * colors.length);
        console.log("c: " + c);
    }
    if (c < colors.length) {
        body.style.background = colorRedBlueCreate();
        c++;
        console.log(">c: " + c);
    }

    let buttonText = document.getElementById("colors");
    c = 0;
}

function changeColor3() {
    if (c == colors.length) {
        c = Math.floor(Math.random() * colors.length);
        console.log("c: " + c);
    }
    if (c < colors.length) {
        body.style.background = colorRedGreenCreate();
        c++;
        console.log(">c: " + c);
    }

    let buttonText = document.getElementById("colors");
    c = 0;
}

function changeColor4() {
    if (c == colors.length) {
        c = Math.floor(Math.random() * colors.length);
        console.log("c: " + c);
    }
    if (c < colors.length) {
        body.style.background = colorBlueGreenCreate();
        c++;
        console.log(">c: " + c);
    }
    // for(c=0;c<colors.length;c++){
    //     if(c==colors.length){
    //         c=0;
    //     }
    //     body.style.background=colors[c];    
    // }}

    /////////////////////////////////////
    let buttonText = document.getElementById("colors");
    c = 0;
}

function changeColor1() {
    if (c == colors.length) {
        c = 0;
    }
    if (c < colors.length) {
        body.style.background = colors[c];
        buttonText.innerText = colors[c];
        buttonText.style.color = colors[c];
        c++;
    }
}

//////////////////////////////////////
function showValu() {
    let input = document.getElementById("name");
    alert("you change the text " + input.value);
};

/////////////////////////
let p = document.getElementById("paragraph");

function over() {
    p.textContent = "Stope hovering over me !!!";
}

function out() {
    p.textContent = "Thank you for leaving me alone";
    p.style.color = "green";
    p.style.fontWeight = "bold";
}

function colorCreate() {
    var color;
    var colRed = Math.floor(Math.random() * 256);
    var colBlue = Math.floor(Math.random() * 256);
    var colGreen = Math.floor(Math.random() * 256);
    color = "rgb(" + colRed + "," + colGreen + "," + colBlue + ")";
    return color;
}

function colorDarkCreate() {
    var color;
    var colRed = Math.floor(Math.random() * 100);
    var colBlue = Math.floor(Math.random() * 100);
    var colGreen = Math.floor(Math.random() * 100);
    color = "rgb(" + colRed + "," + colGreen + "," + colBlue + ")";
    return color;
}

function colorRedBlueCreate() {
    var color;
    var colRed = Math.floor(Math.random() * 256);
    var colGreen = Math.floor(Math.random() * 0);
    var colBlue = Math.floor(Math.random() * 256);
    color = "rgb(" + colRed + "," + colGreen + "," + colBlue + ")";
    console.log("red blue" + color);
    return color;
}

function colorRedGreenCreate() {
    var color;
    var colRed = Math.floor(Math.random() * 256);
    var colGreen = Math.floor(Math.random() * 256);
    var colBlue = Math.floor(Math.random() * 0);
    color = "rgb(" + colRed + "," + colGreen + "," + colBlue + ")";
    console.log("red blue" + color);
    return color;
}

function colorBlueGreenCreate() {
    var color;
    var colRed = Math.floor(Math.random() * 0);
    var colGreen = Math.floor(Math.random() * 256);
    var colBlue = Math.floor(Math.random() * 256);
    color = "rgb(" + colRed + "," + colGreen + "," + colBlue + ")";
    console.log("red blue" + color);
    return color;
}

function changeBtnStyle() {
    var a = document.getElementsByTagName("BUTTON")[9];
    var x = a.attributes.item(1).name;
    var y = a.attributes.item(1).value;
    document.getElementById("btnChange").innerHTML = y;
    // if (y == "example") {
    if (x == "class") {
        //alert("Style of Button is changed");
        a.setAttribute("class", "example2");
        a.style.backgroundColor = colorCreate();
        a.style.borderRadius = brdRadius() + "%";
        document.getElementById("btnChange").innerHTML = "Button has new class \'" + a.attributes.item(1).value + "\' now";
        // alert(a.attributes.item(1).name);
    }
}

function brdRadius() {
    var grRndmin = Math.ceil(1);
    //console.log(grRndmin);
    var grRndmax = Math.floor(50);
    var grRnd = Math.floor(Math.random() * grRndmax) + grRndmin;
    //console.log(grRnd);
    return grRnd;
}

function classDelete() {
    document.getElementById("div1").classList.remove("newStyle");
}

function classChange() {
    document.getElementById("div1").classList.toggle("newClass");
}