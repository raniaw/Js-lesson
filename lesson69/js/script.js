var body = document.getElementsByTagName("body")[0];
var btnAddColor = document.getElementById("btnAddColor");
var pAmount = document.getElementById("pAmount");
var dCol = document.getElementById("dCol");
var inpColor = document.getElementById("inpColor");

btnAddColor.addEventListener("click", addDivColor);

function addDivColor(e) {
    e.preventDefault();

    if (isNaN(inpColor.value) || inpColor.value == null || inpColor.value == "") {
        pInputCheck(pAmount, inpColor);
    } else {
        let amount = parseInt(inpColor.value);
        console.log(amount);
        pAmount.innerHTML = "";
        for (let i = 1; i <= amount; i++) {

            var dCols = document.createElement("div");
            dCols.style.width = "120px";
            dCols.style.height = "100px";
            dCols.style.margin = "10px";
            dCols.className = "align-self-centers ";
            dCols.style.textAlign = "center";
            dCols.textContent = colorCreateHexColor();
            dCols.style.backgroundColor = colorCreateHexColor();
            dCols.style.cssFloat = "left";
            dCols.style.borderRadius = "10px";
            var btnDel = document.createElement("button");
            btnDel.innerHTML = "X";
            btnDel.setAttribute("class", "btn btn-sm btn-danger float-right delete");
            dCols.appendChild(btnDel);
            dCol.appendChild(dCols);
            btnDel.addEventListener("click", removeItem);
        }
    }
}


function pInputCheck(value, input) {
    value.style.color = "red";
    value.innerHTML = "Please, check yours Input";
    input.focus();
}

function removeItem(e) {
    let eDel = e.target;
    if (eDel.className == "btn btn-sm btn-danger float-right delete") {

        //if (eDel.classList.contains("delete")) {
        console.log(eDel.parentElement);
        eDel.parentElement.remove();
        //btnDel.removeChild(eDel.parentElement);
        console.log(eDel.classList);
    }

}

/**
 * Funktion für die zufällige hexedezimalige Farbeerstellung
 */


function colorCreateHexColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    console.log("color: " + color);
    return color;

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