var body = document.getElementsByTagName("body")[0];
let pNumber = document.getElementById("number");
let pName = document.getElementById("name");
let btnSave = document.getElementById("save");
let btnDelete = document.getElementById("delete");
var dPerson = document.createElement("div");
var attPerson = dPerson.attributes;
var attPerson = document.createAttribute("id");
attPerson.value = "pers";
var pCars = document.createElement("p")
var pObjPr = document.createElement("p")
var ulPerson = document.createElement("ul");
dPerson.appendChild(ulPerson);
body.appendChild(dPerson);
car = document.getElementById("car");
car.appendChild(pCars);

prod = document.getElementById("product");
prod.appendChild(pObjPr);


btnSave.addEventListener("click", function() {
    localStorage.setItem(pNumber.value, pName.value);
    console.clear();
    showInfo();
});

btnDelete.addEventListener("click", function() {
    localStorage.clear();
    console.clear();
    showInfo();
});

function showInfo() {
    let storage = localStorage;
    for (let i = 0; i < storage.length; i++) {

        console.log(storage.key(i) + " Item " + storage.getItem(storage.key(i)));
        let li = document.createElement("li");
        var txtLi = document.createTextNode(storage.key(i) + " Item " + storage.getItem(storage.key(i)));
        li.style.fontSize = "1.8em";
        li.style.color = colorCreateDark();
        li.appendChild(txtLi);
        // ulPerson.removeChild(li);
        ulPerson.appendChild(li);

    }
}

// console.log(localStorage.getItem(localStorage.key(0)));

// console.log(localStorage.getItem(localStorage.key(1)));

// console.log(localStorage.getItem(localStorage.key(2)));

// console.log(localStorage.getItem(localStorage.key(0)));
// let p = localStorage.getItem(localStorage.key(3));
// console.log(p);

let pCarsInput = document.getElementById("cars");
let cars = [];
carSave.addEventListener("click", function() {
    cars.push(pCarsInput.value);
    console.log(cars);
    localStorage.setItem("cars", cars);
    pCars.innerHTML = localStorage.getItem("cars");

});

window.addEventListener("load", function() {

});

let objProduct = {};
let arrProduct = [];

let prNameInput = document.getElementById("prName");
let prDescInput = document.getElementById("prDescr");
let prCodeInput = document.getElementById("prCode");


prSave.addEventListener("click", function() {
    objProduct.name = prNameInput.value;
    objProduct.descr = prDescInput.value;
    objProduct.code = prCodeInput.value;
    console.log(objProduct);
    let strObjPro = JSON.stringify(objProduct);
    arrProduct.push(strObjPro);
    console.log(arrProduct);
    localStorage.setItem("arrPr", arrProduct);
    console.log(localStorage.key(5).length);
    // for (let i = 0; localStorage.getItem("arrPr").length; i++) {
    // console.log(localStorage.getItem("arrPr"));
    pObjPr.style.whiteSpace = "pre";
    pObjPr.innerHTML = localStorage.getItem("arrPr")[2];
    console.log(localStorage.getItem("arrPr"));
    //pObjPr.innerHTML = JSON.stringify(localStorage.getItem("arrPr"), null, 4);
    // }

});



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
    // console.log(color);
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
    // console.log(color);
    return color;
}