var body = document.getElementsByTagName("body")[0];
var btnAddList = document.getElementById("addList");
var dList = document.createElement("div");
var attr = dList.attributes;
console.log(attr);

var table = document.createElement("table");
var th = document.createElement("th");
th.setAttribute("id", "myTh");
var txtProd = ["Product Name", "Product Description", "Product Code"];
txtProd.forEach((txt) => {
    var tdPr = document.createElement("td");
    var text = document.createTextNode(txt);
    tdPr.appendChild(text);
    th.appendChild(tdPr);
});

table.setAttribute("id", "myTable");
table.appendChild(th);


dList.appendChild(table);
body.appendChild(dList);
var pName = document.getElementById("pName");
var pDescription = document.getElementById("pDescription");
var pCode = document.getElementById("pCode");

btnAddList.addEventListener("click", function() {
    addLst();
});

function addLst() {
    inpPrName = document.getElementById("prName").value;
    console.log(inpPrName);
    inpPrDescription = document.getElementById("prDescription").value;
    console.log(inpPrDescription);
    inpPrCode = document.getElementById("prCode").value;
    console.log(inpPrCode);

    if (inpPrName == null || inpPrName == "") {
        //if (isLeer(inpPrName)) {
        pName.innerHTML = "false input for 'Product Name'";
        pName.style.color = "red";
        pName.style.fontSize = "12px";
        inpPrName.value = focus();
    } else {
        pName.innerHTML = "";

    }
    if (inpPrDescription == null || inpPrDescription == "") {

        //if (isLeer(inpPrDescription)) {
        pDescription.innerHTML = "false input for 'Product Description'";
        pDescription.style.color = "red";
        pDescription.style.fontSize = "12px";
        inpPrDescription.value = focus();
    } else {
        pDescription.innerHTML = "";
    }

    if (inpPrCode == null || inpPrCode == "") {
        //    if (isLeer(inpPrCode)) {
        pCode.innerHTML = "false input for 'Product Code'";
        pCode.style.color = "red";
        pCode.style.fontSize = "12px";
        inpPrCode.value = focus();

    } else {
        pCode.innerHTML = "";
    }
}

function isLeer(value) {
    console.log(txtValue);
    if (value = "" || value == null) {
        console.log(true);
        return true;

    } else {
        console.log(false);
        return false;
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