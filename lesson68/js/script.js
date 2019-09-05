var body = document.getElementsByTagName("body")[0];
var section = document.querySelectorAll("section");
var imgS = document.querySelectorAll("img");
var liS = document.querySelectorAll("li");

console.log(section);
console.log(imgS);
console.log(liS);

liS.forEach((item) => {
    item.addEventListener("click", selectChange);
});

function selectChange(e) {
    e.preventDefault();
    let cl = e.target.classList;
    if (e.target.classList.length == 0) {
        removeAllClasses();
        e.target.className = "selected";
        if (e.target.className == "selected") {
            let txt = e.target.textContent;
            let indImg = findInd(liS, txt);
            console.log(" ind Img " + indImg);
            section.forEach((sect) => {
                sect.classList.remove("active");
            });
            section[indImg].className = "active";
            console.log(section[indImg]);
            console.log(section);
        }
    } else {
        e.target.classList.remove("selected");
    }
}

function removeAllClasses() {
    liS.forEach((list, index) => {
        list.classList.remove("selected");
        section[index].classList.remove("active");
    });
}

function findInd(value, txt) {
    let indI;
    value.forEach((item, index) => {
        if (value[index].textContent == txt) {
            indI = index;
            console.log(txt + " " + index);
        } else {
            console.log("nicht gefunden");
        }
    })
    return indI;
}


/**
 * Funktion für die zufällige dunkle Farbeerstellung
 */

function colorCreateDark() {
    var color;
    var min = Math.ceil(0);
    var max = Math.floor(160);

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
    var min = Math.ceil(180);
    var max = Math.floor(256);

    var colRed = Math.floor(Math.random() * (max - min)) + min;
    var colBlue = Math.floor(Math.random() * (max - min)) + min;
    var colGreen = Math.floor(Math.random() * (max - min)) + min;

    color = "rgb(" + colRed + "," + colGreen + "," + colBlue + ")";

    return color;
}