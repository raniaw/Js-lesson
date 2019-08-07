var body = document.getElementsByTagName("body")[0];
var dExs = document.createElement("div");

var pPromise = document.createElement("p");
var pPromise2 = document.createElement("p");

pPromise.style.whiteSpace = "pre";
pPromise.setAttribute("class", "prom");
pPromise2.setAttribute("class", "user");

dExs.appendChild(pPromise);
dExs.appendChild(pPromise2);

body.appendChild(dExs);

var isIHappy = true;
var delay = 2000; //ms
//
var willPlayViolin = new Promise(
    function(resolve, reject) {
        if (isIHappy) {


            var violin = {
                instrument: "violin",
                done: "played",
                musik: "Song of Secret Garden"
            }
            resolve(violin);
        } else {
            var reason = new Error("I'm not  happy");
            reject(reason);
        }
    }

);

//call Promise

var playViolin = function() {
    willPlayViolin
        .then(function(fullfild) {
            console.log(fullfild);
            //  pPromise.innerHTML = JSON.stringify(fullfild, null, 4);
            pPromise.innerHTML = "I'm happy, because I " + fullfild.done + " " + fullfild.instrument + " " + fullfild.musik;
            pPromise.removeAttributeNode[0];
            pPromise.setAttribute("class", "prom2");
            pPromise.style.fontFamily = "Great Vibes";
            pPromise.style.fontSize = "2em";
            pPromise.style.color = colorCreateDark();

        })
        .catch(function(error) {
            //
            console.log(error.message);
            pPromise.style.fontFamily = "Notable";
            pPromise.style.fontStretch = "expanded";
            pPromise.style.fontSizeAdjust = "1.5";
            pPromise.innerHTML = error.message;
            pPromise.style.color = colorCreateDark();

        })
}

playViolin();


var willGetDBResponseUser = new Promise(
    function(resolve, reject) {

        if (delay <= 2000) {

            var user = {
                userName: "john_smith_0123",
                fname: "John",
                lname: "Smith"
            }
            setTimeout(function() {
                resolve(user);
            }, 2000);
        } else {
            var reason = new Error("It took too long");
            setTimeout(function() {
                reject(reason);
            }, 3000);
        }
    }

);

var sendRequst = function() {
    willGetDBResponseUser
        .then(function(response) {
            console.log(response);
            //  pPromise.innerHTML = JSON.stringify(fullfild, null, 4);
            pPromise2.innerHTML = "Username is: " + response.userName + ".<br> Name is " + response.fname + "<br> Lastname: " + response.lname;
            pPromise2.removeAttributeNode[0];
            pPromise2.setAttribute("class", "user2");
            pPromise2.style.fontFamily = "Aclonica";
            pPromise2.style.fontSize = "2em";
            pPromise2.style.color = colorCreateDark();

        })
        .catch(function(error) {
            //
            console.log(error.message);
            pPromise2.style.fontFamily = "Notable";
            pPromise2.style.fontStretch = "expanded";
            pPromise2.style.fontSizeAdjust = "1.5";
            pPromise2.innerHTML = error.message;
            pPromise2.style.color = colorCreateDark();

        })
}

sendRequst();



/**
 * Funktion für die zufällige dunkle Farbeerstellung
 */

function colorCreateDark() {
    var color;
    var max = 106;
    var min = 0;
    var colRed = Math.floor(Math.random() * (max - min)) + min;
    var colBlue = Math.floor(Math.random() * (max - min)) + min;
    var colGreen = Math.floor(Math.random() * (max - min)) + min;

    color = "rgb(" + colRed + "," + colGreen + "," + colBlue + ")";
    // console.log(color);
    return color;
}

/**
 * Funktion für die zufällige helle-(Pastel)Farbeerstellung
 */

function colorCreatePastel() {
    var color;
    var max = 256;
    var min = 200;
    var colRed = Math.floor(Math.random() * (max - min)) + min;
    var colBlue = Math.floor(Math.random() * (max - min)) + min;
    var colGreen = Math.floor(Math.random() * (max - min)) + min;

    color = "rgb(" + colRed + "," + colGreen + "," + colBlue + ")";
    // console.log(color);
    return color;
}