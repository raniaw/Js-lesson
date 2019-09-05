var body = document.getElementsByTagName("body")[0];
var btnAddList = document.getElementById("addList");
var dList = document.createElement("div");
var frm = document.getElementById("frm");
var tbody = document.getElementById("product-list");
var pName = document.getElementById("pName");
var pDescription = document.getElementById("pDescription");
var pCode = document.getElementById("pCode");

btnAddList.addEventListener("click", function() {
    addLst();
});

var prDaten = new Object();

function addLst() {

    inpPrName = document.getElementById("prName");
    inpPrDescription = document.getElementById("prDescription");
    inpPrCode = document.getElementById("prCode");


    if (inpPrName.value == null || inpPrName.value == "") {
        pInputCheck(pName, "Product Name", inpPrName)

    } else {
        pName.innerHTML = "";
        prDaten.productName = inpPrName.value;

    }
    if (inpPrDescription.value == null || inpPrDescription.value == "") {
        pInputCheck(pDescription, "Product Description", inpPrDescription);

    } else {
        pDescription.innerHTML = "";
        prDaten.productDescription = inpPrDescription.value;
    }

    if (inpPrCode.value == null || inpPrCode.value == "") {
        pInputCheck(pCode, "Product Code", inpPrCode)


    } else {
        pCode.innerHTML = "";
        prDaten.productCode = inpPrCode.value;
    }

    var tr = document.createElement("tr");
    var prDatenArrDescr = Object.keys(prDaten);
    console.log("prDatenArr:");
    console.log(prDatenArrDescr);
    console.log(Object.keys(prDaten).length);

    if (Object.keys(prDaten).length == 3) {
        for (let date in prDaten) {
            var txtPrDaten = document.createTextNode(prDaten[date]);
            var td = document.createElement("td");
            td.setAttribute("class", "text-center");
            var btnDel = document.createElement("button");
            btnDel.innerHTML = "X";
            btnDel.setAttribute("class", "btn btn-sm btn-danger float-right delete");
            // var a = document.createElement("a");
            // a.innerHTML = "X";
            // a.setAttribute("class", "btn btn-sm btn-danger float-right delete");
            td.appendChild(txtPrDaten);
            tr.appendChild(td);
        }
        // a.addEventListener("click", removeItem);
        btnDel.addEventListener("click", removeItem);
        //td.appendChild(a);
        td.appendChild(btnDel);
        tr.appendChild(td);
        tbody.appendChild(tr);
        prDaten = {};
    }
}


function removeItem(e) {
    let eDel = e.target;
    if (eDel.className == "btn btn-sm btn-danger float-right delete") {
        //if (eDel.classList.contains("delete")) {
        console.log(eDel.parentElement);
        eDel.parentElement.parentElement.remove();
        //btnDel.removeChild(eDel.parentElement);
        console.log(eDel.classList);
    }
}

function pInputCheck(p, value, input) {
    p.innerHTML = "false input for '" + value + "'";
    p.style.color = "red";
    p.style.fontSize = "12px";
    input.value = "";
    input.focus();
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