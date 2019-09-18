var pErrN = document.getElementById("pErrN");
var pErrP = document.getElementById("pErrP");
var pErrL = document.getElementById("pErrL");

var inpName = document.getElementById("name");
var inpPassw = document.getElementById("passw");
var btnLog = document.getElementById("log");

var storage = localStorage;


btnLog.addEventListener("click", getData);

function getData() {
    if (inpName.value == null || inpName.value == "") {
        pInputCheck(pErrN, inpName);
    } else {
        pErrN.innerHTML = "";

    }
    if (inpPassw.value == null || inpPassw.value == "") {
        pInputCheck(pErrP, inpPassw);
    } else {
        pErrP.innerHTML = "";

    }
    storage.setItem('username', inpName.value);
    storage.setItem('password', inpPassw.value);
    console.log(storage);
    run();
}

function getInp(name, passw) {
    console.log("getInp");
    this.name = name;
    this.passw = passw;
    console.log(name, ", ", passw)
}

var users = [{
        'username': 'admin',
        'password': 'qwerty12345'
    },
    {
        'username': 'user',
        'password': 'user1_pass'
    }
]

function pInputCheck(value, input) {
    value.style.color = "red";
    value.innerHTML = "Please, check yours Input";
    input.focus();
}

function userLogin(givenUsername, givenPassword) {
    return new Promise(function(resolve, reject) {
        for (i = 0; i < users.length; i++) {

            if (users[i].username == givenUsername && users[i].password == givenPassword) {
                console.log(" Succesfull. User logged. Users name is:  " + users[i].username);
                resolve(`User with username ${givenUsername} found`);

            } else {
                pErrL.innerHTML = "please check your name and password";
                pErrL.style.color = "red";
            }
        }
        reject(`User was not found`);
    });
}





//  the same without callback
function checkUser() {
    //return a promise with resolve and reject function
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log("Checking user...");
            resolve("success check the user");
        }, 3000);
    });
}

function downloadFile() {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log("Downloading file...");
            resolve("success downloadig the file");
        }, 2000);
    });
}


function redirectHome() {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log("Redirection to home..");
            resolve("success closing session");
        }, 1000);
    });
}

function run() {

    // const promiseLogin = userLogin('admin', 'qwerty12345')
    const promiseLogin = userLogin(storage.username, storage.password)
        .then(function() {
            return pErrL.innerHTML = "";
        })
        .then(
            function(value) {
                console.log(value);
                return downloadFile();
            })
        .then(
            function(value) {
                console.log(value);
                return redirectHome();
            }
        )
}

//run();



















// function closeSesion() {
//     return new Promise((resolve, reject) => {
//         setTimeout(function() {
//             console.log("Closing session...");
//             resolve("success closing session");
//         }, 1000);
//     });
// }

// const promise = checkUser()
//     .then(
//         function(value) {
//             console.log(value);
//             return downloadFile();
//         })
//     .then(
//         function(value) {
//             console.log(value);
//             return closeSesion();
//         }
//     )