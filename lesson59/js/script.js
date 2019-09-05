var body = document.getElementsByTagName("body")[0];
var btnSubmit = document.getElementById("submit");
var dElement = document.getElementById("myDiv");
var ulList = document.createElement("ul");
var inpSearch = document.getElementById("filter");
let allLiItems = document.getElementsByTagName("li");
var btn = document.getElementById("btn");
var dElement1 = document.getElementById("myDiv1");
var frm = document.querySelector("form");
var inpName = document.getElementById("name");
var inpName1 = document.getElementById("fName");
var h3 = document.createElement("h3");
var h4 = document.createElement("h4");
var frm1 = document.getElementById("formItems");
var h2 = document.querySelector("h2");

body.appendChild(h3);
body.appendChild(ulList);

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
    h4.innerHTML = myEventKeyUpValue;
    dElement.appendChild(h4);
}

function inputMouseMove(e) {
    let myEventMouseMovelayerX = e.layerX;
    console.log("e.layerX: " + myEventMouseMovelayerX);
    let myEventMouseMoveOffsetX = e.offsetX;
    console.log("e.offsetX: " + myEventMouseMoveOffsetX);
    inpName.style.background = colorCreatePastel();
    inpName.style.color = colorCreateDark();
    //  body.style.background = "rgb(" + e.offsetX + "," + e.offsetY + ", 180";
    //body.style.background = `rgb(" ${e.offsetX} ,${e.offsetY}, 180)`;
    body.style.background = colorCreatePastel();
    body.style.color = colorCreateDark();
}

frm.addEventListener("submit", inputSubmit);

function inputSubmit(e) {
    e.preventDefault();
    let inpSubm = e.type;
    console.log("e.type: " + inpSubm);
    h4.innerHTML = inpSubm.value;
    dElement.appendChild(h4);

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
btn.addEventListener("click", btnClick);
var dNeue = document.createElement("div");

function btnClick(e) {
    console.log(e);
    let myEventTarget = e.target.value;
    console.log(myEventTarget);
    let myEventValue = e.target.tagName;
    console.log(myEventValue);
    //dNeue.className = "alert alert-success";
    dNeue.setAttribute("class", "alert alert-success");
    var txtD = document.createTextNode("neue div, nach 2 sek verschwinde ich");
    dNeue.appendChild(txtD);
    //dNeue.textContent="neue div, nach 2 sek verschwinde ich";
    body.insertBefore(dNeue, h2);
    setTimeout(hideOut, 2000);
}


function hideOut() {
    dNeue.remove();
    //body.removeChild(dNeue);
    dElement.style.display = "none";
    dElement1.style.display = "none";
}

dElement1.addEventListener("click", divClick);

function divClick(e) {
    let eCkl = e.target;
    console.log(eCkl);

}

inpName1.addEventListener("keyup", inputKeyup);

function inputKeyup(e) {
    let eValue = e.target.value;
    h3.innerHTML = eValue;
    dElement1.appendChild(h3);

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