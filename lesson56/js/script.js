var body = document.getElementsByTagName("body")[0];
//iunput
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var email = document.getElementById("email");
var age = document.getElementById("age");
var phone = document.getElementById("phone");
var zip = document.getElementById("zip");
var sex = document.getElementById("sex");
var btnValid = document.getElementById("valid");
//paragraph for exception-output
var pFname = document.getElementById("pFname");
var pLname = document.getElementById("pLname");
var pEmail = document.getElementById("pEmail");
var pAge = document.getElementById("pAge");
var pPhone = document.getElementById("pPhone");
var pZip = document.getElementById("pZip");
var pSex = document.getElementById("pSex");

btnValid.addEventListener("click", function() {
    fName();
    lName();
    eMail();
    ageValid();
    phoneValid();
    zipValid();
    sexValid();
})


function fName() {
    var txtFn = fname.value;
    if (txtFn.length > 2) {
        if (txtFn.match("^[A-Z]")) {
            //    console.log(txtFn);
            pFname.innerHTML = "";

        } else {
            pFname.innerHTML = "first letter should be capital letter";
            pFname.style.color = "red";
            fname.value = "";
            fname.focus();
        }
    } else {
        pFname.innerHTML = "Write more letter please";
        pFname.style.color = "red";
        fname.value = "";
        fname.focus();
    }
}

function lName() {
    var txtLn = lname.value;
    if (txtLn.length > 2) {
        if (txtLn.match("^[A-Z]")) {
            //      console.log(txtLn);
            pLname.innerHTML = "";

        } else {
            pLname.innerHTML = "first letter should be capital letter";
            pLname.style.color = "red";
            lname.value = "";
            lname.focus();
        }
    } else {
        pLname.innerHTML = "Write more letter please";
        pLname.style.color = "red";
        lname.value = "";
        lname.focus();
    }
}

function eMail() {
    var txtEmail = email.value;
    //console.log(txtEmail);
    var pattern = /^[\w-.]+@[\w-]+\.[a-z]{2,3}$/i;
    if (txtEmail.match(pattern)) {
        // console.log(txtEmail);
        pEmail.innerHTML = "";
    } else {
        pEmail.innerHTML = "Your Mail is not valid";
        pEmail.style.color = "red";
        email.value = "";
        email.focus();
    }
}

function ageValid() {
    var txtAge = age.value;
    //console.log(txtAge);
    if (txtAge.match("^[0-9]")) {
        if (txtAge >= 14 && txtAge <= 99) {
            //      console.log("match:" + txtAge);
            pAge.innerHTML = "";
        } else {
            pAge.innerHTML = "Your should be between 14 and 99 old years, letter and special character are not allow";
            pAge.style.color = "red";
            age.value = "";
            age.focus();
        }

    } else {
        pAge.innerHTML = "Write please number, letter and special character are not allow";
        pAge.style.color = "red";
        age.value = "";
        age.focus();
    }
}


function phoneValid() {
    var txtPhone = phone.value;
    //console.log(txtPhone);
    if (txtPhone.match("^[0-9]")) {
        if (txtPhone.length == 10) {
            pPhone.innerHTML = "";
        } else {
            pPhone.innerHTML = "Must be 10 character long";
            pPhone.style.color = "red";
            phone.focus();
        }
    } else {
        pPhone.innerHTML = "Write please only number";
        pPhone.style.color = "red";
        phone.focus();
    }
}

function zipValid() {
    var txtZip = zip.value;
    if (txtZip.match("^[1-9]")) {
        if (txtZip.match("[0-9]$")) {
            if (txtZip.length == 5) {
                pZip.innerHTML = "";
            } else {
                pZip.innerHTML = "Must be 5 character long ";
                pZip.style.color = "red";
                zip.focus();
            }
        } else {
            pZip.innerHTML = "Letter and  special charcter are not allow ";
            pZip.style.color = "red";
            zip.focus();
        }

    } else {
        pZip.innerHTML = "Letter, special charcter and number '0' are not allow ";
        pZip.style.color = "red";
        zip.focus();
    }
}

function sexValid() {
    txtSex = sex.value;
    if (txtSex.match("^[A-Za-z]")) {
        if (txtSex.match("^[(W|w)omen|M|male)]")) {
            pSex.innerHTML = "";
        } else {
            pSex.innerHTML = "write your please your sex women or man";
            pSex.style.color = "red";
            sex.focus();
        }

    } else {
        pSex.innerHTML = "Number, special charcter are not allow ";
        pSex.style.color = "red";
        sex.focus();
    }
}