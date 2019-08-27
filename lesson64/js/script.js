var body = document.getElementsByTagName("body")[0];
var btnCalc = document.getElementById("calc");
var fLoan = document.getElementById("loan");
var pAmount = document.getElementById("pAmount");
var pInterest = document.getElementById("pInterest");
var pYears = document.getElementById("pYears");
var tbody = document.getElementById("rate-list");

interestLoan = new Object();

//btnCalc.addEventListener("click", calculate);
fLoan.addEventListener("submit", calculate);

function calculate(e) {
    e.preventDefault();
    var amount = document.getElementById("amount");
    var inpInterest = document.getElementById("interest");
    var years = document.getElementById("years");


    if (isNaN(amount.value) || amount.value == null || amount.value == "") {
        pInputCheck(pAmount, amount);
    } else {
        kapital = parseFloat(amount.value);
        interestLoan.kapital = "$" + kapital;
        console.log(interestLoan.kapital);
        pAmount.innerHTML = "";
    }

    if (isNaN(inpInterest.value) || inpInterest.value == null || inpInterest.value == "") {
        pInputCheck(pInterest, inpInterest);
    } else {

        interest = parseFloat(inpInterest.value) / 100 / 12;
        interestLoan.interest = "%" + parseFloat(inpInterest.value);
        console.log("interest: " + interest);
        pInterest.innerHTML = "";
    }

    if (isNaN(years.value) || years.value == "" || years.value == null) {
        pInputCheck(pYears, years);

    } else {
        payments = parseFloat(years.value) * 12;
        interestLoan.years = years.value;
        console.log("payments:" + payments);
        pYears.innerHTML = "";
    }

    // compute the monthly payment figure
    var x = Math.pow(1 + interest, payments); //Math.pow computes powers
    console.log("x: " + x);
    monthly = (kapital * x * interest) / (x - 1);
    interestLoan.monthly = "$" + monthly.toFixed(2);
    console.log("monthly: " + interestLoan.monthly); // zwei zahlen nach komma

    let totalPayment = interestLoan.monthly + payments;
    console.log("totalPayment: " + totalPayment);
    let totalInterest = totalPayment - kapital;
    console.log("totalInterest: " + totalInterest);

    var tr = document.createElement("tr");

    if (Object.keys(interestLoan).length == 4) {
        console.log(interestLoan);
        for (let date in interestLoan) {
            var txtInterestDaten = document.createTextNode(interestLoan[date]);
            var td = document.createElement("td");
            td.setAttribute("class", "text-center");
            var btnDel = document.createElement("button");
            btnDel.innerHTML = "X";
            btnDel.setAttribute("class", "btn btn-sm btn-danger float-right delete");
            td.appendChild(txtInterestDaten);
            tr.appendChild(td);
        }

        btnDel.addEventListener("click", removeItem);
        td.appendChild(btnDel);
        tr.appendChild(td);
        tbody.appendChild(tr);
        interestLoan = {};
    } else {
        interestLoan = {};
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
        eDel.parentElement.parentElement.remove();
        //btnDel.removeChild(eDel.parentElement);
        console.log(eDel.classList);
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