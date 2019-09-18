var body = document.getElementsByTagName("body")[0];

var dCard = document.querySelector(".card");
console.log(dCard);

var frmPers = document.getElementById("personId");
var h3Title = document.getElementById("title");
var lbl1 = document.getElementById("lbl1");
var lbl2 = document.getElementById("lbl2");
var lbl3 = document.getElementById("lbl3");
var lbl4 = document.getElementById("lbl4");
var inp1 = document.getElementById("inp1");
var inp2 = document.getElementById("inp2");
var inp3 = document.getElementById("inp3");
var select = document.getElementById("nat");
var pErr1 = document.getElementById("pErr1");
var pErr2 = document.getElementById("pErr2");
var pErr3 = document.getElementById("pErr3");
var pErr4 = document.getElementById("pErr4");
var btnNextAdd = document.getElementById("btnNextAddr");


var frmAddress = document.createElement("form");
frmAddress.className = "m-5";
frmAddress.setAttribute("id", "addressId")
var h3AddrTitle = document.createElement("h3");
h3AddrTitle.className = "text-center text-secondary";
h3AddrTitle.textContent = "Address Info";
var dAdd = document.createElement("div");
var dAddInp = document.createElement("div");
var dNum = document.createElement("div");
var dNumInp = document.createElement("div");
var dZip = document.createElement("div");
var dZipInp = document.createElement("div");
var lblAddress = document.createElement("label");
var lblNumber = document.createElement("label");
var lblZip = document.createElement("label");

dAdd.className = "form-group m-3 row";
dAddInp.className = "col-sm-10 col-12";
dNum.className = "form-group m-3 row";
dNumInp.className = "col-sm-10";
dZip.className = "form-group m-3 row";
dZipInp.className = "col-sm-10";
lblAddress.setAttribute("class", "col-sm-2 col-form-label");
lblNumber.setAttribute("class", "col-sm-2 col-form-label");
lblZip.setAttribute("class", "col-sm-2 col-form-label");
lblAddress.innerHTML = "Address street:";
lblNumber.innerHTML = "House Number:";
lblZip.innerHTML = "Zip Code:"


var inpAddress = document.createElement("input");
inpAddress.setAttribute("class", "form-control");
var inpNumber = document.createElement("input");
inpNumber.setAttribute("class", "form-control");
var inpZip = document.createElement("input");
inpZip.setAttribute("class", "form-control");
inpZip.setAttribute("type", "number");
inpAddress.setAttribute("placeholder", "street name");
var btnPrevPers = document.createElement("input");
var btnNextProfile = document.createElement("input");
var pAddress = document.createElement("p");
var pNumber = document.createElement("p");
var pZipCode = document.createElement("p");
var btnNextProfile = document.createElement("input");
btnNextProfile.setAttribute("id", "btnNextProfile");;
btnNextProfile.setAttribute("value", "Next");
btnNextProfile.setAttribute("type", "submit");
btnNextProfile.className = "btn next col-5 btn-outline-info mx-3";
var btnPrev = document.createElement("input");
btnPrev.setAttribute("id", "btnPrev");
btnPrev.setAttribute("value", "Previous");
btnPrev.setAttribute("type", "submit");
btnPrev.className = "btn col-5 previous btn-outline-info mx-3";


dAddInp.appendChild(inpAddress);
dAddInp.appendChild(pAddress);
dAdd.appendChild(lblAddress);
dAdd.appendChild(dAddInp);

dNumInp.appendChild(inpNumber);
dNumInp.appendChild(pNumber);
dNum.appendChild(lblNumber);
dNum.appendChild(dNumInp);

dZipInp.appendChild(inpZip);
dZipInp.appendChild(pZipCode);
dZip.appendChild(lblZip);
dZip.appendChild(dZipInp);

frmAddress.appendChild(h3AddrTitle);
frmAddress.appendChild(dAdd);
frmAddress.appendChild(dNum);
frmAddress.appendChild(dZip);
frmAddress.appendChild(btnPrev);
frmAddress.appendChild(btnNextProfile);

var frmProfile = document.createElement("form");
frmProfile.setAttribute("id", "profileId");
frmProfile.className = "m-5"
var h3ProfTitle = document.createElement("h3");
h3ProfTitle.className = "text-center text-secondary";
h3ProfTitle.textContent = "Profile Info";

var dUser = document.createElement("div");
var dUserInp = document.createElement("div");
var dPassw = document.createElement("div");
var dPasswInp = document.createElement("div");
var dPasswR = document.createElement("div");
var dPasswRInp = document.createElement("div");
var dFile = document.createElement("div");
var dFileInp = document.createElement("div");
dUser.className = "form-group m-3 row";
dUserInp.className = "col-sm-10 col-12";
dPassw.className = "form-group m-3 row";
dPasswInp.className = "col-sm-10";
dPasswR.className = "form-group m-3 row";
dPasswRInp.className = "col-sm-10";
dFile.className = "form-group m-3 row";
dFileInp.className = "col-sm-10";
var lblUser = document.createElement("label");
var lblPass = document.createElement("label");
var lblPassR = document.createElement("label");
var lblPhoto = document.createElement("label");
lblUser.setAttribute("class", "col-sm-2 col-form-label");
lblPass.setAttribute("class", "col-sm-2 col-form-label");
lblPassR.setAttribute("class", "col-sm-2 col-form-label");
lblPhoto.setAttribute("class", "col-sm-2 col-form-label");
lblUser.innerHTML = "User Name:";
lblPass.innerHTML = "Password:";
lblPassR.innerHTML = "Password repeat:"
lblPhoto.innerHTMl = "Photo";
var inpUser = document.createElement("input");
inpUser.setAttribute("class", "form-control");
var inpPassw = document.createElement("input");
inpPassw.setAttribute("class", "form-control");
inpPassw.setAttribute("required", "");
var inpPasswR = document.createElement("input");
inpPasswR.setAttribute("class", "form-control");
inpPasswR.setAttribute("required", "");
var inpFile = document.createElement("input");
var pUser = document.createElement("p");
var pPassw = document.createElement("p");
var pPasswR = document.createElement("p");
var pFile = document.createElement("p");
var btnPrevAdd = document.createElement("input");
inpFile.setAttribute("type", "file")
btnPrevAdd.setAttribute("id", "btnPrevAdd");
btnPrevAdd.setAttribute("value", "Previous");
btnPrevAdd.setAttribute("type", "submit");
btnPrevAdd.className = "btn previous col-5 btn-outline-info mx-3";
var btnNextFinish = document.createElement("input");
btnNextFinish.setAttribute("id", "btnNextFinish");
btnNextFinish.setAttribute("value", "Next");
btnNextFinish.setAttribute("type", "submit");
btnNextFinish.className = "btn next col-5 btn-outline-info mx-3";

dUserInp.appendChild(inpUser);
dUserInp.appendChild(pUser);
dUser.appendChild(lblUser);
dUser.appendChild(dUserInp);

dPasswInp.appendChild(inpPassw);
dPasswInp.appendChild(pPassw);
dPassw.appendChild(lblPass);
dPassw.appendChild(dPasswInp);

dPasswRInp.appendChild(inpPasswR);
dPasswRInp.appendChild(pPasswR);
dPasswR.appendChild(lblPassR);
dPasswR.appendChild(dPasswRInp);

dFileInp.appendChild(inpFile);
dFileInp.appendChild(pFile);
dFile.appendChild(lblPhoto);
dFile.appendChild(dFileInp);

frmProfile.appendChild(h3ProfTitle);
frmProfile.appendChild(dUser);
frmProfile.appendChild(dPassw);
frmProfile.appendChild(dPasswR);
frmProfile.appendChild(dFile);


frmProfile.appendChild(btnPrevAdd);
frmProfile.appendChild(btnNextFinish);


var frmFinish = document.createElement("form");
frmFinish.setAttribute("id", "finishId");
var table = document.createElement("table");
table.className = "table table-striped mt-5";
var thead = document.createElement("thead");
var tbody = document.createElement("tbody");
var trTh = document.createElement("tr");
var txt = document.createTextNode("Data");
trTh.appendChild(txt);
thead.appendChild(trTh);
table.appendChild(thead);
table.appendChild(tbody);
var dOutImg = document.createElement("div");
var btnPrevProfile = document.createElement("input");
btnPrevProfile.setAttribute("id", "btnPrevProfile");
btnPrevProfile.setAttribute("value", "Previous");
btnPrevProfile.setAttribute("type", "submit");
btnPrevProfile.className = "btn previous col-5 btn-outline-info mx-5";

dCard.appendChild(frmAddress);
dCard.appendChild(frmProfile);
dCard.appendChild(frmFinish);

var fName, lName, brtDate, nationality, address, number, zip, user, passw, passwR, photo, storage;

function load(e) {
    frmShow(frmPers, e);
    frmHidden(frmAddress, e);
    frmHidden(frmProfile, e);
    frmHidden(frmFinish, e);
}

function loadAddresse(e) {
    frmHidden(frmPers, e);
    frmShow(frmAddress, e);
    frmHidden(frmProfile, e);
    frmHidden(frmFinish, e);
    h3Title.innerHTML = "Address Info";
}

storage = localStorage;
//frmPers.addEventListener("submit", datenSenden);

function datenSenden(e) {
    e.preventDefault();
    //createAddress();
    btnNext.addEventListener("click", function(e) {
        e.preventDefault();
        persInfo();
        console.log(storage.length);

        // if (storage.length == 4) {
        //     createAddress();
        //     let inpCount = document.querySelectorAll("#prev");
        //     console.log(inpCount);
        //     if (inpCount.length === 0) {
        //         frmPers.insertBefore(btnPrev, btnNext);
        //     }
        // }
    })

}
// btnPrev.addEventListener("click", function() {
//     window.onload = load;
// });
//
//btnNextAdd.addEventListener("click", collectDataAddress);

function previousDiv(e) {
    var parentID = e.target.parentElement.id;
    console.log(parentID);
    switch (parentID) {
        case 'addressId':
            e.target.parentElement.style.display = "none";
            frmFinish.display = "none";
            frmProfile.display = "none";
            frmPers.display = "block";
            // document.getElementById("finishId").display = "none";
            // document.getElementById("profileId").display = "none";
            // document.getElementById("personId").display = "block";
            break;
        case 'profileId':
            e.target.parentElement.style.display = "none";
            frmFinish.display = "none";
            frmPers.display = "none";
            frmAddress.display = "block";
            // document.getElementById("addressId").display = "block";
            // document.getElementById("profileId").display = "none";
            // document.getElementById("personId").display = "none";
            break;
        case 'finishId':
            e.target.parentElement.style.display = "none";
            frmFinish.display = "none";
            frmProfile.display = "block";
            frmPers.display = "none";
            // document.getElementById("personId").display = "none";
            // document.getElementById("addressId").display = "none";
            // document.getElementById("profileId").display = "block";
            break;
    }
}

function nextDiv(e) {
    e.preventDefault();
    var checkFName = document.getElementsByName("fname")[0].checkValidity();
    var checkLName = document.getElementsByName("lname")[0].checkValidity();
    //var checkPassw = document.getElementsByName("passw")[0].checkValidity() === document.getElementsByName("passwR")[0].checkValidity();
    console.log(checkFName);

    var parentID = e.target.parentElement.id;
    console.log(parentID);
    switch (parentID) {
        case 'personId':
            // if(checkFName && checkLName){}
            e.target.parentElement.style.display = "none";
            frmFinish.display = "none";
            frmProfile.display = "none";
            frmAddress.display = "block";
            // document.getElementById("addressId").display = "block";
            // document.getElementById("profileId").display = "none";
            // document.getElementById("finishId").display = "none";
            break;

        case 'addressId':
            e.target.parentElement.style.display = "none";
            frmFinish.display = "none";
            frmProfile.display = "block";
            frmPers.display = "none";
            // document.getElementById("personId").display = "none";
            // document.getElementById("profileId").display = "block";
            // document.getElementById("finishId").display = "none";
            break;

        case 'profileId':
            e.target.parentElement.style.display = "none";
            frmFinish.display = "block";
            frmPers.display = "none";
            frmAddress.display = "none";
            // document.getElementById("personId").display = "none";
            // document.getElementById("finishId").display = "block";
            // document.getElementById("addressId").display = "none";

            break;
            // case 'finishDiv':
            //     e.target.parentElement.style.display = "none";
            //     //document.getElementById("finishlDiv").display="block";
            //     //document.getElementById("personalDiv").display="none";
            //     //document.getElementById("addressDiv").display="none";
            //     //document.getElementById("profileDiv").display="none";
            //     break;

        default:
            break;

    }
}


let btns = document.querySelectorAll("input[type='submit']");

btns.forEach(item => {
    if (item.classList.contains("next")) {
        item.addEventListener("click", nextDiv);
        console.log(item);
    } else if (item.classList.contains("previous")) {
        item.addEventListener("click", previousDiv);
        console.log(item);
    }
})

//Input check
function pInputCheck(value, input) {
    value.style.color = "red";
    value.innerHTML = "Please, check yours Input";
    input.focus();
}

//collect Person data
function persInfo() {
    if (inp1.value == "null" || inp1.value == "") {
        pInputCheck(pErr1, inp1);
    } else {
        storage.setItem("First name", inp1.value);
        pErr1.innerHTML = "";
    }
    if (inp2.value == "null" || inp2.value == "") {
        pInputCheck(pErr2, inp2);
    } else {
        storage.setItem("Last name", inp2.value);
        pErr2.innerHTML = "";
    }
    if (inp3.value == "null" || inp3.value == "") {
        pInputCheck(pErr3, inp3);
    } else {
        storage.setItem("Birth Date", inp3.value);
        pErr3.innerHTML = "";
    }
    if (inp4.value == "null" || inp4.value == "") {
        pInputCheck(pErr4, inp4);
    } else {
        storage.setItem("Nationality", select.value);
        pErr4.innerHTML = "";
    }

}

// form visible
function frmShow(frm, event) {
    frm.removeAttribute('hidden');
}

// form hidden
function frmHidden(frm, event) {
    frm.setAttribute('hidden', '');
    event.preventDefault();
}

// function persSite(e) {
//     e.preventDefault();
//     window.history.back();
// }

function createAddress() {
    ///document.open();
    // document.write("<h1>Hello World</h1>");



    h3Title.innerHTML = "Address Info";
    lbl1.innerHTML = "Address street:";
    inp1.value = "";
    inp1.placeholder = "address street";
    lbl2.innerHTML = "Number:";
    inp2.value = "";
    inp2.placeholder = "Number";
    lbl3.innerHTML = "Zip Code";
    inp3.setAttribute("type", "number");
    inp3.value = "";
    inp3.placeholder = "";
    lbl4.style.display = "none";
    inp4.style.display = "none";
    pErr4.style.display = "none";

    //btnNextAdd = btnNext;
    ;
    // btnNext.style.display = "none";
    // document.close();
}


function createBtn() {
    frmPers.insertBefore(btnPrev, btnNext);

}

function createProfile() {
    //  e.preventDefault();
    title.innerHTML = "Profil Info";
    lbl1.innerHTML = "User Name:";
    inp1.value = "";
    inp1.placeholder = "username";
    lbl2.innerHTML = "Password:";
    inp2.value = "";
    inp2.setAttribute("type", "password");
    lbl3.innerHTML = "Password repeat:";
    inp3.value = "";
    inp3.setAttribute("type", "password");
    inp4.style.display = "block";
    inp4.setAttribute("type", "file");
    console.log(btnNext);
    frm.insertAfter(btnNextAdd, btnPrev)

}

function collectDataAddress(e) {
    e.preventDefault();

    if (inp1.value == null || inp1.value == "") {
        pInputCheck(pErr1, inp1);
    } else {
        pErr1.innerHTML = "";
    }
    if (inp2.value == null || inp2.value == "") {
        pInputCheck(pErr2, inp2);
    } else {
        pErr2.innerHTML = "";
    }
    if (inp3.value == null || inp3.value == "") {
        pInputCheck(pErr3, inp3);
    } else {
        pErr3.innerHTML = "";
    }

    localStorage.setItem("Address", inp1.value);
    localStorage.setItem("House Number", inp2.value);
    localStorage.setItem("Zip Code", inp3.value);

}

function createFinish() {
    title.innerHTML = "Finish";
    inp1.style.display = "none";
    inp2.style.display = "none";
    inp3.style.display = "none";
    inp4.style.display = "none";

    pErr1.style.display = "none";
    pErr2.style.display = "none";
    pErr3.style.display = "none";
    pErr4.style.display = "none";
    card.appendChild(table);
}






//winterkopf