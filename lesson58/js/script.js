var body = document.getElementsByTagName("body")[0];
var btnAddList = document.getElementById("addList");
var dList = document.createElement("div");
var frm = document.getElementById("frm");

var tbody = document.getElementById("product-list");

var txtProd = ["Product Name", "Product Description", "Product Code", "Delete"];
var objProduct = {
    productName: "",
    productDescription: "",
    productCode: ""
        // ,
        // get getProdName() {
        //     return this.productName;
        // },
        // set setProdName(name) {
        //     this.productName = name;
        // },
        // get getProdDescription() {
        //     return this.productDescription;
        // },
        // set setProdDescription(description) {
        //     this.productDescription = description;
        // },
        // get getProdCode() {
        //     return this.productCode;
        // },
        // set setProdCode(code) {
        //     this.productCode = code;
        // }
}

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
// 
// 
// console.log(frm);
// var text = "";
// 
// for (let i = 0; i < frm.length; i++) {
// text = frm.elements[i].value;
// console.log(text);
// 
// var txtPrDaten = document.createTextNode(text);
// console.log(txtPrDaten);
// 
//  if(prDatenArrDescr[])
// var tdPrDaten = document.createElement("td");
// tdPrDaten.style.border = "1px solid red";
//tdPrDaten.style.width = "50px";
// console.log(tdPrDaten);
// tdPrDaten.appendChild(txtPrDaten);
// trPrDaten.appendChild(tdPrDaten);
//tr.appendChild(tdPrDaten);
// 
// var btnDel = document.createElement("button");
// btnDel.innerHTML = "X";
// btnDel.setAttribute("class", "btn btn-sm btn-danger float-right delete");
// tbody.appendChild(trPrDaten);
// }


// var table = document.createElement("table");
// var thead = document.createElement("thead");
// var tbody = document.createElement("tbody");
// var tr = document.createElement("tr");
// var th = document.createElement("th");
// th.setAttribute("scope", "col");
//var txtProd = ;
//var txtProd = Object.keys(objProduct);

// console.log(Object.keys(objProduct).length);
// for (let i = 0; i < txtProd.length; i++) {
//     //  if (i == 3) { break; }
//     var tdPr = document.createElement("td");
//     var text = document.createTextNode(txtProd[i]);
//     tdPr.appendChild(text);
//     th.appendChild(tdPr);
// }
// txtProd.forEach((txt) => {
//     var tdPr = document.createElement("td");
//     var text = document.createTextNode(txt);
//     tdPr.appendChild(text);
//     th.appendChild(tdPr);
// });
// thead.appendChild(th);
// table.setAttribute("class", "table table-striped table-hover table-bordered mt-5");
// table.appendChild(thead);
// table.appendChild(tbody);
// dList.appendChild(table);
// body.appendChild(dList);