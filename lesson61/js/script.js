var body = document.getElementsByTagName("body")[0];
var h2 = document.createElement("h2");
var p = document.createElement("p");
var pInc = document.createElement("p");
var pInc1 = document.createElement("p");
var pInc2 = document.createElement("p");
var pInc3 = document.createElement("p");
var pInc4 = document.createElement("p");
var pInc5 = document.createElement("p");
var pInc6 = document.createElement("p");
var pInc7 = document.createElement("p");
var pInc8 = document.createElement("p");
var pInc9 = document.createElement("p");

body.appendChild(h2);
body.appendChild(p);
body.appendChild(pInc);
body.appendChild(pInc1);
body.appendChild(pInc2);
body.appendChild(pInc3);
body.appendChild(pInc4);
body.appendChild(pInc5);
body.appendChild(pInc6);
body.appendChild(pInc7);
body.appendChild(pInc8);
body.appendChild(pInc9);

function countDown(n) {
    while (n >= 0) {
        console.log(n);
        n--;
    }
}

countDown(10);

function countDownRec(n) {
    if (n >= 0) {
        console.log("Rekursive: " + n);
        return countDownRec(n - 1);
    }
}

countDownRec(5);

var sum = 0;

function countSumRec(n) {

    if (n > 0) {
        sum += n;
        console.log("sum: " + sum);
        return countSumRec(n - 1);
    }
    return sum;
}

pInc.innerHTML = "Recursive summe (100): " + countSumRec(100);

var fact = 1;

function factorial(n) {
    if (n >= 1) {
        fact *= n;
        console.log("fact: " + fact);
        return factorial(n - 1);
    }
    return fact;
}

pInc2.innerHTML = "factorial(5): " + factorial(5);

var fib = 1;

function fibonacci(n) {
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return fib;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

pInc3.innerHTML = "Fibonacci(0): " + fibonacci(0);
pInc4.innerHTML = "Fibonacci(1): " + fibonacci(1);
pInc5.innerHTML = "Fibonacci(2): " + fibonacci(2);
pInc6.innerHTML = "Fibonacci(7): " + fibonacci(7);
pInc7.innerHTML = "Fibonacci(13): " + fibonacci(13);
pInc8.innerHTML = "Fibonacci(24): " + fibonacci(24);
pInc9.innerHTML = "Fibonacci(45): " + fibonacci(45);

var NMAX = 45;
console.time('fibonacci');
console.log(fibonacci(NMAX));
console.timeEnd('fibonacci');




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