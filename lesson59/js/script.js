var body = document.getElementsByTagName("body")[0];
var btnSubmit = document.getElementById("submit");
var dElement = document.getElementById("myDiv");
var ulList = document.createElement("ul");
var inpSearch = document.getElementById("filter");
let allLiItems = document.getElementsByTagName("li");

body.appendChild(ulList);
//var frm = document.getElementsByTagName("form")[0];
var frm = document.querySelector("form");
var frm1 = document.getElementById("formItems");
var inpName = document.querySelector("#name");

inpName.addEventListener("click", inputClick);
inpName.addEventListener("keydown", inputKeyDown);
inpName.addEventListener("keyup", inputKeyUp);
inpName.addEventListener("mousemove", inputMouseMove);

function inputClick(e) {
    let myEventClassname = e.target.className;
    console.log(myEventClassname);
    let myEventValue = e.target.value;
    console.log(myEventValue);
    let myEventPosX = e.clientX;
    console.log(myEventPosX);
}

function inputKeyDown(e) {
    let myEventKeyDown = e.keyCode;
    console.log("e.keyCode: " + myEventKeyDown);
    let myEventKeyDownCode = e.code;
    console.log("e.code: " + myEventKeyDownCode);
    let myEventKeyDownAlt = e.altKey; // for alt-Taste -> boolean
    console.log("e.altKey: " + myEventKeyDownAlt);

}

function inputKeyUp(e) {
    let myEventKeyUpTime = e.timeStamp;
    let myEventKeyUpValue = e.target.value;
    console.log("e.target.value: " + myEventKeyUpValue);
    console.log("e.timeStamp: " + myEventKeyUpTime);
    dElement.innerHTML = "<h3>" + myEventKeyUpValue + "</h3>";
}

function inputMouseMove(e) {
    let myEventMouseMovelayerX = e.layerX;
    console.log("e.layerX: " + myEventMouseMovelayerX);
    let myEventMouseMoveOffsetX = e.offsetX;
    console.log("e.offsetX: " + myEventMouseMoveOffsetX);
    inpName.style.background = colorCreatePastel();
    inpName.style.color = colorCreateDark();
    //  body.style.background = "rgb(" + e.offsetX + "," + e.offsetY + ", 180";
    body.style.background = `rgb(" ${e.offsetX} ,${e.offsetY}, 180)`;
    body.style.color = colorCreatePastel();
}

frm.addEventListener("submit", inputSubmit);

function inputSubmit(e) {
    e.preventDefault();
    let inpSubm = e.type;
    console.log("e.type: " + inpSubm);
    dElement.innerHTML = "<h3>" + inpSubm.value + "</h3>";

}

frm1.addEventListener("submit", addItems);

function addItems(e) {
    e.preventDefault();
    let newItem = document.getElementById("item");
    let elLi = document.createElement("li");
    elLi.setAttribute("class", "list-group-item");
    elLi.style.color = colorCreateDark();
    let txt = document.createTextNode(newItem.value);
    var btnDel = document.createElement("button");
    btnDel.innerHTML = "X";
    btnDel.setAttribute("class", "btn btn-sm btn-danger float-right delete");
    elLi.appendChild(txt);
    elLi.appendChild(btnDel);
    ulList.appendChild(elLi);
    newItem.value = "";
    newItem.focus();

}
ulList.addEventListener("click", removeItem);

// function removeItem(e) {
//     let eDel = e.target;
//     if (eDel.className == "list-group-item") {
//         console.log(eDel);
//         ulList.removeChild(eDel);
//     }
//     //ulList.removeChild(eDel.className("list-group-item"));
// }
function removeItem(e) {
    let eDel = e.target;

    if (eDel.className == "btn btn-sm btn-danger float-right delete") {

        //if (eDel.classList.contains("delete")) {
        console.log(eDel.parentElement);
        ulList.removeChild(eDel.parentElement);
        console.log(eDel.classList);
    }

    //ulList.removeChild(eDel.className("list-group-item"));
}

inpSearch.addEventListener("keyup", filterItem);

function filterItem(e) {
    let eTxtS = e.target.value.toLowerCase();
    console.log(eTxtS);
    // console.log(allLiItems);
    for (let i = 0; i < allLiItems.length; i++) {
        let txt = allLiItems[i].firstChild.textContent.toLowerCase();
        console.log("for " + allLiItems[i].textContent);

        if (txt.indexOf(eTxtS) != -1) {
            console.log("ergebnis: " + allLiItems[i].textContent);
            allLiItems[i].style.display = "block"
        } else {
            allLiItems[i].style.display = "none";
        }
    }
}

/**
 * Funktion für die zufällige dunkle Farbeerstellung
 */


function colorCreateDark() {
    var color;
    var max = 160;
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
    var min = 180;

    var colRed = Math.floor(Math.random() * (max - min)) + min;
    var colBlue = Math.floor(Math.random() * (max - min)) + min;
    var colGreen = Math.floor(Math.random() * (max - min)) + min;

    color = "rgb(" + colRed + "," + colGreen + "," + colBlue + ")";
    console.log(color);
    return color;
}