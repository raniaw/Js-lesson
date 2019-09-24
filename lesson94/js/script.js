var inpVal1 = document.getElementById("inpVal1");
var inpVal2 = document.getElementById("inpVal2");

var inpSel1 = document.getElementById("inpSel1");
var inpSel2 = document.getElementById("inpSel2");

btnConvert = document.getElementById("btnConvert");


btnConvert.addEventListener("click", getCurrency);

function getCurrency(e) {
    e.preventDefault();
    dataCurrency(inpSel1.value, inpSel2.value);
}

function dataCurrency(curr1, curr2) {
    fetch("https://api.cryptonator.com/api/ticker/" + curr1 + "-" + curr2)
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            console.log(data);
            if (data.success == true) {
                console.log(data.ticker.price);
                convertCurrency(inpVal1.value, data.ticker.price);
            } else {
                console.log(inpVal1.value);
                inpVal2.value = parseFloat(inpVal1.value).toFixed(2);
            }
        })
}

function convertCurrency(currency, price) {
    inpVal2.value = parseFloat(currency * price).toFixed(2);
    console.log(inpVal2.value);
}