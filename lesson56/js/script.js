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
        }
    } else {
        pPhone.innerHTML = "Write please only number";
        pPhone.style.color = "red";
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
            }
        } else {
            pZip.innerHTML = "Letter and  special charcter are not allow ";
            pZip.style.color = "red";
        }

    } else {
        pZip.innerHTML = "Letter, special charcter and number '0' are not allow ";
        pZip.style.color = "red";
    }
}

function sexValid() {
    txtSex = sex.value;
    if (txtSex.match("^[A-Za-z]")) {
        if (txtSex.match("^[(W|w)omen|M|man)]")) {
            pSex.innerHTML = "";
        } else {
            pSex.innerHTML = "write your please your sex women or man";
            pSex.style.color = "red";
            pSex.focus();
        }

    } else {
        pSex.innerHTML = "Number, special charcter are not allow ";
        pSex.style.color = "red";
        pSex.focus();
    }

}


// function patt1() {
//     var str = "Visit DCIiiii";
//     var patt = /DCI/i;
//     var result = str.match(patt);
//     pTxt1.innerHTML = "Text: " + str;
//     pPatt1.innerHTML = "pattern: " + patt;
//     pRes1.innerHTML = "Result: " + result;
// }

// patt1();

// function patt2() {
//     var str = "Hallo Mark";
//     var patt = /a/i;
//     var result = str.match(patt);
//     pTxt2.innerHTML = "Text: " + str;
//     pPatt2.innerHTML = "pattern: " + patt;
//     pRes2.innerHTML = "Result -> first: " + result;
// }
// patt2();

// function patt3() {
//     var str = "LLLooolli Visit 2010007000$ Schooolllllsss";
//     var patt = /[0-9]+/i;
//     var patt1 = /\d+/i;
//     var result = str.match(patt);
//     pTxt3.innerHTML = "Text: " + str;
//     pPatt3.innerHTML = "pattern: " + patt + "<br> and the same " + patt1 + "<br>'\d\' is -> digit;  \' + \' -> more characters";
//     pRes3.innerHTML = "Result: " + result;
// }
// patt3();

// function patt4() {
//     var str = "LLLooolli Visit 2010007000$ 447646464€ Schooolllllsss";
//     var patt = /[0-9]+(\$|\€)/g;
//     var txtPatt1 = /\d+(\$|\€)/g;
//     var result = str.match(patt);
//     pTxt4.innerHTML = "Text: " + str;
//     pPatt4.innerHTML = "pattern: " + patt + "<br> and the same " + txtPatt1 + "<br>'\d\' is -> digit";
//     pRes4.innerHTML = "Result: " + result;
// }
// patt4();

// function patt5() {
//     var str = "I like dci very much, dci, dci, dci"
//     var patt = /dci/g;
//     var result = str.match(patt);
//     console.log(result);
//     pTxt5.innerHTML = "Text: " + str;
//     pPatt5.innerHTML = "pattern: " + patt + "<br> ";
//     pRes5.innerHTML = "Result: " + result;

// }
// patt5();

// function patt6() {
//     var str = "I like DCi very much, Dci, dCi, dcI, DCI, dCI"
//     var patt = /dci/gi;
//     var result = str.match(patt);
//     console.log(result);
//     pTxt6.innerHTML = "Text: " + str;
//     pPatt6.innerHTML = "pattern: " + patt + "<br> ";
//     pRes6.innerHTML = "Result: " + result;

// }
// patt6();

// function patt7() {
//     var str = "test_a test_b test_c test_d test_m"
//         //var patt = /test_[acm]/g; //global
//         //var patt = /test_[a-c]/g; //global
//     var patt = /test_[^a-c]/g; //global
//     var result = str.match(patt);
//     console.log(result);
//     pTxt7.innerHTML = "Text: " + str;
//     pPatt7.innerHTML = "pattern: " + patt + "<br> ";
//     pRes7.innerHTML = "Result: " + result;

// }
// patt7();

// function patt8() {
//     var str = "test_a test_b test_c test_d test_m"
//         //var patt = /test_[acm]/g; //global
//     var patt = /test_[a-c]/g; //global
//     var result = str.match(patt);
//     console.log(result);
//     pTxt8.innerHTML = "Text: " + str;
//     pPatt8.innerHTML = "pattern: " + patt + "<br> ";
//     pRes8.innerHTML = "Result: " + result;

// }
// patt8();

// function patt9() {
//     var str = "test_0 test_1 test_2 test_3 test_7"
//         //var patt = /test_[023]/g; //global
//     var patt = /test_[0-3]/g; //global
//     var result = str.match(patt);
//     console.log(result);
//     pTxt9.innerHTML = "Text: " + str;
//     pPatt9.innerHTML = "pattern: " + patt + "<br> ";
//     pRes9.innerHTML = "Result: " + result;

// }
// patt9();

// function patt10() {
//     var str = "test_0 test_1 test_2 test_3 test_7"
//         //var patt = /test_[^023]/g; //global
//     var patt = /test_[^0-6]/g; //global
//     var result = str.match(patt);
//     console.log(result);
//     pTxt10.innerHTML = "Text: " + str;
//     pPatt10.innerHTML = "pattern: " + patt + "<br> ";
//     pRes10.innerHTML = "Result: " + result;

// }
// patt10();

// function patt11() {
//     var str = "colour color"
//     var patt = /col(o|ou)r/g; //global
//     var result = str.match(patt);
//     console.log(result);
//     pTxt11.innerHTML = "Text: " + str;
//     pPatt11.innerHTML = "pattern: " + patt + "<br> ";
//     pRes11.innerHTML = "Result: " + result;

// }
// patt11();

// function patt12() {
//     var str = "my name is Rania with i and also Raniya with y"
//     var patt = /Ran(i|iy)a/g; //global
//     var result = str.match(patt);
//     console.log(result);
//     pTxt12.innerHTML = "Text: " + str;
//     pPatt12.innerHTML = "pattern: " + patt + "<br> ";
//     pRes12.innerHTML = "Result: " + result;

// }
// patt12();

// function patt13() {
//     var str = "car car7 cars car?"
//     var patt = /car./g; //global, '.'-everythings
//     var result = str.match(patt);
//     console.log(result);
//     pTxt13.innerHTML = "Text: " + str;
//     pPatt13.innerHTML = "pattern: " + patt + "<br> ";
//     pRes13.innerHTML = "Result: " + result;

// }
// patt13();

// function patt14() {
//     var str = "car456 carRr car. car"
//     var patt = /car../g; //global, '.'-everythings
//     var result = str.match(patt);
//     console.log(result);
//     pTxt14.innerHTML = "Text: \'" + str + "\'";
//     pPatt14.innerHTML = "pattern: " + patt + "<br> ";
//     pRes14.innerHTML = "Result: " + result;

// }
// patt14();

// function patt15() {
//     var str = "google.com facebook.com instagram.com wikipedia.org"
//     var patt = /\w+\.com/g; //global, 'w'-character
//     var result = str.match(patt);
//     console.log(result);
//     pTxt15.innerHTML = "Text: \'" + str + "\'";
//     pPatt15.innerHTML = "pattern: " + patt + "<br> ";
//     pRes15.innerHTML = "Result: " + result;

// }
// patt15();

// function patt16() {
//     var str = "google.com facebook.com instagram.com wikipedia.org"
//     var patt = /\w\.com/g; //global, 'w'-character
//     var result = str.match(patt);
//     console.log(result);
//     pTxt16.innerHTML = "Text: \'" + str + "\'";
//     pPatt16.innerHTML = "pattern: " + patt + "<br> ";
//     pRes16.innerHTML = "Result: " + result;

// }
// patt16();

// function patt17() {
//     var str = "google.com facebook.com instagram.com wikipedia.org"
//     var patt = /\w+\.(com|org)/g; //global, 'w'-character
//     var result = str.match(patt);
//     console.log(result);
//     pTxt17.innerHTML = "Text: \'" + str + "\'";
//     pPatt17.innerHTML = "pattern: " + patt + "<br> ";
//     pRes17.innerHTML = "Result: " + result;

// }
// patt17();

// function patt18() {
//     var str = "google.com google.de google.it google123.com google123$§@$.com"
//     var patt = /\W+\.com/g; //global, 'W'-spezial character like '§$%/'
//     var result = str.match(patt);
//     console.log(result);
//     pTxt18.innerHTML = "Text: \'" + str + "\'";
//     pPatt18.innerHTML = "pattern: " + patt + "<br> ";
//     pRes18.innerHTML = "Result: " + result;

// }
// patt18();
// //
// function patt19() {
//     var str = "n l nn lLl nnn lll"
//     var patt = /l+/g; //global, + -> more zeichen
//     var result = str.match(patt);
//     console.log(result);
//     pTxt19.innerHTML = "Text: \'" + str + "\'";
//     pPatt19.innerHTML = "pattern: " + patt + "<br> ";
//     pRes19.innerHTML = "Result: " + result;

// }
// patt19();

// function patt20() {
//     var str = "n l nn lLl nnn lll";
//     var patt = /l+/gi; //global, + -> more zeichen
//     var result = str.match(patt);
//     console.log(result);
//     pTxt20.innerHTML = "Text: \'" + str + "\'";
//     pPatt20.innerHTML = "pattern: " + patt + "<br> ";
//     pRes20.innerHTML = "Result: " + result;

// }
// patt20();

// function patt21() {
//     var str = "3 July, 3rd August"
//     var patt = /3(rd)?/g; //global, + -> more zeichen
//     var result = str.match(patt);
//     console.log(result);
//     pTxt21.innerHTML = "Text: \'" + str + "\'";
//     pPatt21.innerHTML = "pattern: " + patt + "<br> ";
//     pRes21.innerHTML = "Result: " + result;

// }
// patt21();

// function patt22() {
//     var str = "n l nn lLl ll nnn lll";
//     var patt = /l{2,3}/g; //global, + -> more zeichen
//     var result = str.match(patt);
//     console.log(result);
//     pTxt22.innerHTML = "Text: \'" + str + "\'";
//     pPatt22.innerHTML = "pattern: " + patt + "<br> ";
//     pRes22.innerHTML = "Result: " + result;

// }
// patt22();

// function patt23() {
//     var str = "n l nn lLl ll nnn lll llll";
//     var patt = /l{2,4}/g; //global, + -> more zeichen
//     var result = str.match(patt);
//     console.log(result);
//     pTxt23.innerHTML = "Text: \'" + str + "\'";
//     pPatt23.innerHTML = "pattern: " + patt + "<br> ";
//     pRes23.innerHTML = "Result: " + result;

// }
// patt23();

// function patt24() {
//     var str = "n l nn lLl ll nnn lll llll";
//     var patt = /l{2}/g; //global, + -> more zeichen 'llll' -> 'll' + 'll'
//     var result = str.match(patt);
//     console.log(result);
//     pTxt24.innerHTML = "Text: \'" + str + "\'";
//     pPatt24.innerHTML = "pattern: " + patt + "<br> ";
//     pRes24.innerHTML = "Result: " + result;

// }
// patt24();

// function patt25() {
//     var str = "n l nn lLl ll nnn lll llll";
//     var patt = /l{3,}/g; //global, + -> more zeichen 'llll' -> 'll' + 'll'
//     var result = str.match(patt);
//     console.log(result);
//     pTxt25.innerHTML = "Text: \'" + str + "\'";
//     pPatt25.innerHTML = "pattern: " + patt + "<br> ";
//     pRes25.innerHTML = "Result: " + result;

// }
// patt25();

// function patt26() {
//     var str = "google.com google.de google.it google123.com google123$§@$.com"
//     var patt = /^google\.\w+/g; //global, 
//     var result = str.match(patt);
//     console.log(result);
//     pTxt26.innerHTML = "Text: \'" + str + "\'";
//     pPatt26.innerHTML = "pattern: " + patt + "<br> ";
//     pRes26.innerHTML = "Result: " + result;

// }
// patt26();

// function patt27() {
//     var str = "google.com google.de google.it"
//     var patt = /google\.\w+$/g; //global, 
//     var result = str.match(patt);
//     console.log(result);
//     pTxt27.innerHTML = "Text: \'" + str + "\'";
//     pPatt27.innerHTML = "pattern: " + patt + "<br> ";
//     pRes27.innerHTML = "Result: " + result;

// }
// patt27();

// /**
//  * Funktion für die zufällige dunkle Farbeerstellung
//  */

// function colorCreateDark() {
//     var color;
//     var max = 106;
//     var min = 0;
//     var colRed = Math.floor(Math.random() * (max - min)) + min;
//     var colBlue = Math.floor(Math.random() * (max - min)) + min;
//     var colGreen = Math.floor(Math.random() * (max - min)) + min;

//     color = "rgb(" + colRed + "," + colGreen + "," + colBlue + ")";

//     return color;
// }
// /**
//  * Funktion für die zufällige helle-(Pastel)Farbeerstellung
//  */

// function colorCreatePastel() {
//     var color;
//     var max = 256;
//     var min = 200;
//     var colRed = Math.floor(Math.random() * (max - min)) + min;
//     var colBlue = Math.floor(Math.random() * (max - min)) + min;
//     var colGreen = Math.floor(Math.random() * (max - min)) + min;

//     color = "rgb(" + colRed + "," + colGreen + "," + colBlue + ")";

//     return color;
// }