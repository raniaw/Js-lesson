var pErrN = document.getElementById("pErrN");
var pErrP = document.getElementById("pErrP");
var pErrL = document.getElementById("pErrL");
var pSucL = document.getElementById("pSucL");

var inpName = document.getElementById("name");
var inpPassw = document.getElementById("passw");
var btnLog = document.getElementById("log");
var btnReg = document.getElementById("reg");

var storage = localStorage;

btnReg.addEventListener("click", saveData);

btnLog.addEventListener("click", getData);

function saveData() {
    if (inpName.value == null || inpName.value == "") {
        pInputCheck(pErrN, inpName);
    } else {
        pErrN.innerHTML = "";
        storage.setItem('username', inpName.value);
    }
    if (inpPassw.value == null || inpPassw.value == "") {
        pInputCheck(pErrP, inpPassw);
    } else {
        pErrP.innerHTML = "";
        storage.setItem('password', inpPassw.value);
    }
    pSucL.innerHTML = "";


    if ((storage.getItem("username") != "" && storage.getItem("username") != null) && (storage.getItem("password") != "" && storage.getItem("password") != null)) {
        if (name == arrObjName()) {
            pErrN.innerHTML = "username is already taken";
            pErrP.innerHTML = "";
            inpName.value = "";
            inpPassw.value = "";
            inpName.focus();
        } else {
            createUser(storage.getItem("username"), storage.getItem("password"));

            pErrP.innerHTML = "";
            pErrN.innerHTML = "";
            inpName.value = "";
            inpPassw.value = "";
            inpName.focus();
            storage.setItem("username", "");
            storage.setItem("password", "");
        }
    }
    //run();
}

var arrObj = JSON.parse(storage.getItem("json"));
console.log(arrObj);
arrObjName();

function arrObjName() {
    arrObj.forEach(item => {
        console.log(item.username);
        return item.username;
    });
}

function getData() {
    if (inpName.value == null || inpName.value == "") {
        pInputCheck(pErrN, inpName);
        pSucL.innerHTML = "";
    } else {
        storage.setItem('username', inpName.value);
        pErrN.innerHTML = "";
    }
    if (inpPassw.value == null || inpPassw.value == "") {
        pInputCheck(pErrP, inpPassw);
        pSucL.innerHTML = "";
    } else {
        storage.setItem('password', inpPassw.value);
        pErrP.innerHTML = "";

    }

    console.log(storage);

    run();
    // pSucL.innerHTML = "they are successfully logged in";
    pErrP.innerHTML = "";
    pErrN.innerHTML = "";
    inpName.value = "";
    inpPassw.value = "";
    inpName.focus();
    storage.setItem("username", "");
    storage.setItem("password", "");
}

function getInp(name, passw) {
    console.log("getInp");
    this.name = name;
    this.passw = passw;
    console.log(name, ", ", passw)
}

var userArr = new Array();

function createUser(name, password) {

    console.log("name: " + name);
    if (name == arrObjName()) {
        pErrN.innerHTML = "username is already taken";
        pErrP.innerHTML = "";
        inpName.value = "";
        inpPassw.value = "";
        inpName.focus();
    } else {

        var userNow = new Object();
        userNow.username = name;
        userNow.password = password;
        console.log(userNow);
        userArr.push(userNow);
        console.log(JSON.stringify(userArr));
        storage.setItem("json", JSON.stringify(userArr));
    }
}

function pInputCheck(value, input) {
    value.style.color = "red";
    value.innerHTML = "Please, check yours Input";
    input.focus();
}

//UserLoginStorage


function userLoginStorage(givenUsername, givenPassword) {

    console.log(arrObj.length, "; ", arrObj[0].username);
    return new Promise(function(resolve, reject) {

        for (i = 0; i < arrObj.length; i++) {

            if (arrObj[i].username == givenUsername && arrObj[i].password == givenPassword) {
                console.log(" Succesfull. User logged. Users name is:  " + arrObj[i].username);
                resolve(`User did with username ${givenUsername} find`);

            } else {
                pErrL.innerHTML = "please check your name and password";
                pErrL.style.color = "red";
                inpName.focus();
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


    //if (storage.username == arrObj)

    // const promiseLogin = userLogin('admin', 'qwerty12345')
    const promiseLogin = userLoginStorage(storage.username, storage.password)
        .then(function() {

            pSucL.innerHTML = "they are successfully logged in";
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


function userLogin(givenUsername, givenPassword) {

    return new Promise(function(resolve, reject) {

        for (i = 0; i < users.length; i++) {

            if (users[i].username == givenUsername && users[i].password == givenPassword) {
                console.log(" Succesfull. User logged. Users name is:  " + users[i].username);
                resolve(`User with username ${givenUsername} found`);

            } else {
                pSucL.innerHTML = "";
                pErrL.innerHTML = "please check your name and password";
                pErrL.style.color = "red";
                pSucL.innerHTML = "";
            }
        }

        reject(`User was not found`);
    });
}

//JSON Users
var users = [{
        'username': 'admin',
        'password': 'qwerty12345'
    },
    {
        'username': 'user',
        'password': 'user1_pass'
    }
]