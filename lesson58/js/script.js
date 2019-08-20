var body = document.getElementsByTagName("body")[0];
var btnAddList = document.getElementById("addList");
var dList = document.createElement("div");
var attr = dList.attributes;
console.log(attr);
var objProduct = {
    productName: "",
    productDescription: "",
    productCode: "",
    get getProdName() {
        return this.productName;
    },
    set setProdName(name) {
        this.productName = name;
    },
    get getProdDescription() {
        return this.productDescription;
    },
    set setProdDescription(description) {
        this.productDescription = description;
    },
    get getProdCode() {
        return this.productCode;
    },
    set setProdCode(code) {
        this.productCode = code;
    }
}
var table = document.createElement("table");
var th = document.createElement("th");
th.setAttribute("id", "myTh");
var txtProd = Object.keys(objProduct);
console.log(Object.keys(objProduct).length);
for (let i = 0; i < txtProd.length; i++) {
    if (i == 3) { break; }
    var tdPr = document.createElement("td");
    var text = document.createTextNode(txtProd[i]);
    tdPr.appendChild(text);
    th.appendChild(tdPr);
}
// txtProd.forEach((txt) => {
//     var tdPr = document.createElement("td");
//     var text = document.createTextNode(txt);
//     tdPr.appendChild(text);
//     th.appendChild(tdPr);
// });

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
//var prDaten=new Array();
var prDaten = new Object();


function addLst() {
    inpPrName = document.getElementById("prName");
    console.log(inpPrName);
    inpPrDescription = document.getElementById("prDescription");
    console.log(inpPrDescription);
    inpPrCode = document.getElementById("prCode");
    console.log(inpPrCode);

    if (inpPrName.value == null || inpPrName.value == "") {
        //if (isLeer(inpPrName)) {
        pName.innerHTML = "false input for 'Product Name'";
        pName.style.color = "red";
        pName.style.fontSize = "12px";
        inpPrName.value = "";
        inpPrName.focus();
    } else {
        pName.innerHTML = "";
        // prDaten.push(inpPrName);
        prDaten.productName = inpPrName.value;
        console.log(prDaten);

    }
    if (inpPrDescription.value == null || inpPrDescription.value == "") {
        //if (isLeer(inpPrDescription)) {
        pDescription.innerHTML = "false input for 'Product Description'";
        pDescription.style.color = "red";
        pDescription.style.fontSize = "12px";
        inpPrDescription.value = "";
        inpPrDescription.focus();
    } else {
        pDescription.innerHTML = "";
        // prDaten.push(inpPrDescription);
        prDaten.productDescription = inpPrDescription.value;
    }

    if (inpPrCode.value == null || inpPrCode.value == "") {
        // if (isLeer(inpPrCode)) {
        pCode.innerHTML = "false input for 'Product Code'";
        pCode.style.color = "red";
        pCode.style.fontSize = "12px";
        inpPrCode.value = "";
        inpPrCode.focus();

    } else {
        pCode.innerHTML = "";
        //prDaten.push(inpPrCode);
        prDaten.productCode = inpPrCode.value;
    }
    //prDaten.push("x");
    var trPrDaten = document.createElement("tr");
    //trPrDaten.style.width = "600px";
    var prDatenArrDescr = Object.keys(prDaten);
    console.log("prDatenArr:");
    console.log(prDatenArrDescr);

    for (let date in prDaten) {
        console.log(date + " -> " + prDaten[date]); // this loop through all properties including the prototype

        var txtPrDaten = document.createTextNode(prDaten[date]);
        var tdPrDaten = document.createElement("td");
        tdPrDaten.style.border = "1px solid red";
        //tdPrDaten.style.width = "50px";
        console.log(tdPrDaten);
        tdPrDaten.appendChild(txtPrDaten);
        trPrDaten.appendChild(tdPrDaten);
        // prDaten = [];
        table.appendChild(trPrDaten);

        var btnDel = document.createElement("button");
        btnDel.innerHTML = "X";
        btnDel.setAttribute("class", "btn btn-sm btn-danger float-right delete");


    }

}

function isLeer(value) {
    console.log(value);
    if (value = "" || value == null) {
        console.log(value);
        return true;

    } else {
        console.log(value);
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