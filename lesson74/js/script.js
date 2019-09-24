var body = document.getElementsByTagName("body")[0];

var dCard = document.querySelector(".card");
console.log(dCard);

//form Personal Info
var frmPers = document.getElementById("personId");
var h3Title = document.getElementById("title");
var lbl1 = document.getElementById("lbl1");
var lbl2 = document.getElementById("lbl2");
var lbl3 = document.getElementById("lbl3");
var lbl4 = document.getElementById("lbl4");
var inpFName = document.getElementById("inpFName");
var inpLName = document.getElementById("inpLName");
var inpBrtDate = document.getElementById("inpBrtDate");
var inpNationality = document.getElementById("inpNat");
var pErrFName = document.getElementById("pErrFName");
var pErrLName = document.getElementById("pErrLName");
var pErrBDate = document.getElementById("pErrBDate");
var pErrNat = document.getElementById("pErr4");
var btnNextAdd = document.getElementById("btnNextAddr");

// form Address Info
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

var pErrAddr = document.createElement("p");
var pErrNum = document.createElement("p");
var pErrZip = document.createElement("p");

var btnPrevPers = document.createElement("input");
var btnNextProfile = document.createElement("input");

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
dAddInp.appendChild(pErrAddr);
dAdd.appendChild(lblAddress);
dAdd.appendChild(dAddInp);

dNumInp.appendChild(inpNumber);
dNumInp.appendChild(pErrNum);
dNum.appendChild(lblNumber);
dNum.appendChild(dNumInp);

dZipInp.appendChild(inpZip);
dZipInp.appendChild(pErrZip);
dZip.appendChild(lblZip);
dZip.appendChild(dZipInp);

frmAddress.appendChild(h3AddrTitle);
frmAddress.appendChild(dAdd);
frmAddress.appendChild(dNum);
frmAddress.appendChild(dZip);
frmAddress.appendChild(btnPrev);
frmAddress.appendChild(btnNextProfile);

//form Profile info
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
var pErrUser = document.createElement("p");
var pErrPassw = document.createElement("p");
var pErrPasswR = document.createElement("p");
var pErrFile = document.createElement("p");
var btnPrevAdd = document.createElement("input");

inpFile.setAttribute("type", "file");
inpFile.setAttribute("id", "file");
inpFile.setAttribute("multiple", "");
inpFile.setAttribute("data-min-file-count", "1");
inpFile.setAttribute("accept", "image/*");
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
dUserInp.appendChild(pErrUser);
dUser.appendChild(lblUser);
dUser.appendChild(dUserInp);

dPasswInp.appendChild(inpPassw);
dPasswInp.appendChild(pErrPassw);
dPassw.appendChild(lblPass);
dPassw.appendChild(dPasswInp);

dPasswRInp.appendChild(inpPasswR);
dPasswRInp.appendChild(pErrPasswR);
dPasswR.appendChild(lblPassR);
dPasswR.appendChild(dPasswRInp);

dFileInp.appendChild(inpFile);
dFileInp.appendChild(pErrFile);
dFile.appendChild(lblPhoto);
dFile.appendChild(dFileInp);

frmProfile.appendChild(h3ProfTitle);
frmProfile.appendChild(dUser);
frmProfile.appendChild(dPassw);
frmProfile.appendChild(dPasswR);
frmProfile.appendChild(dFile);
frmProfile.appendChild(btnPrevAdd);
frmProfile.appendChild(btnNextFinish);

//form Finish
var frmFinish = document.createElement("form");
frmFinish.setAttribute("id", "finishId");
frmFinish.className = "m-5";
var h3FinishTitle = document.createElement("h3");
h3FinishTitle.className = "-textcenter text-secondary";
h3FinishTitle.textContent = "Finish";

var table = document.createElement("table");
table.className = "table table-striped m-5";
var thead = document.createElement("thead");
var tbody = document.createElement("tbody");
var trTh = document.createElement("tr");
var txt = document.createTextNode("Data");
txt.className = "text-center text-secondary p-5";

trTh.appendChild(txt);
thead.appendChild(trTh);
table.appendChild(thead);
table.appendChild(tbody);

var dOutImg = document.createElement("div");
dOutImg.setAttribute("id", "outImg");
var btnPrevProfile = document.createElement("input");
btnPrevProfile.setAttribute("id", "btnPrevProfile");
btnPrevProfile.setAttribute("value", "Previous");
btnPrevProfile.setAttribute("type", "submit");
btnPrevProfile.className = "btn previous col-5 btn-outline-info mx-5";

frmFinish.appendChild(h3FinishTitle);
frmFinish.appendChild(table);
frmFinish.appendChild(btnPrevProfile);

dCard.appendChild(frmAddress);
dCard.appendChild(frmProfile);
dCard.appendChild(frmFinish);

var fName, lName, brtDate, nationality, address, number, zip, user, passw, passwR, photo, storage;

storage = localStorage;


function previousDiv(e) {
    var parentID = e.target.parentElement.id;
    console.log(parentID);
    switch (parentID) {
        case 'addressId':
            e.target.parentElement.style.display = "none";
            frmAddress.display = "none";
            frmPers.display = "block";
            frmFinish.display = "none";
            frmProfile.display = "none";
            break;

        case 'profileId':
            e.target.parentElement.style.display = "none";
            frmProfile.display = "none";
            frmAddress.display = "block";
            frmFinish.display = "none";
            frmPers.display = "none";

            break;

        case 'finishId':
            e.target.parentElement.style.display = "none";
            frmFinish.display = "none";
            frmAddress.display = "none";
            frmPers.display = "none";
            frmProfile.display = "block";
            break;
    }
}

function nextDiv(e) {
    e.preventDefault();
    //  var checkFName = document.getElementsByName("fname")[0].checkValidity();
    //var checkLName = document.getElementsByName("lname")[0].checkValidity();
    //var checkPassw = document.getElementsByName("passw")[0].checkValidity() === document.getElementsByName("passwR")[0].checkValidity();
    //console.log(checkFName);

    var parentID = e.target.parentElement.id;
    console.log(parentID);
    switch (parentID) {
        case 'personId':
            // if(checkFName && checkLName){}
            e.target.parentElement.style.display = "none";
            persInfo(e);
            frmPers.display = "none";
            frmFinish.display = "none";
            frmProfile.display = "none";
            frmAddress.display = "block";

            break;

        case 'addressId':
            collectDataAddress();
            e.target.parentElement.style.display = "none";
            frmAddress.display = "none";
            frmFinish.display = "none";
            frmProfile.display = "block";
            frmPers.display = "none";
            break;

        case 'profileId':
            collectDataProfil();
            //createFinish();
            e.target.parentElement.style.display = "none";
            frmProfile.display = "none";
            frmFinish.display = "block";
            frmPers.display = "none";
            frmAddress.display = "none";
            break;

        default:
            break;

    }
}


let btns = document.querySelectorAll("input[type='submit']");

btns.forEach(item => {
    if (item.classList.contains("next")) {
        item.addEventListener("click", nextDiv);
        // console.log(item);
    } else if (item.classList.contains("previous")) {
        item.addEventListener("click", previousDiv);
        //    console.log(item);
    }
})

//Input check
function pInputCheck(value, input) {
    value.style.color = "red";
    value.innerHTML = "Please, check yours Input";
    input.focus();
}

//collect Person data
function persInfo(e) {
    e.preventDefault();
    if (inpFName.value == "null" || inpFName.value == "") {
        pInputCheck(pErrFName, inpFName);
    } else {
        storage.setItem("First name", inpFName.value);
        pErrFName.innerHTML = "";
    }
    if (inpLName.value == "null" || inpLName.value == "") {
        pInputCheck(pErrLName, inpLName);
    } else {
        storage.setItem("Last name", inpLName.value);
        pErrLName.innerHTML = "";
    }
    if (inpBrtDate.value == "null" || inpBrtDate.value == "") {
        pInputCheck(pErrBDate, inpBrtDate);
    } else {
        storage.setItem("Birth Date", inpBrtDate.value);
        pErrBDate.innerHTML = "";
    }
    if (inpNationality.value == "null" || inpNationality.value == "") {
        pInputCheck(pErrNat, inpNationality);
    } else {
        storage.setItem("Nationality", inpNationality.value);
        pErrNat.innerHTML = "";
    }
    storage.setItem("First name", inpFName.value);
    storage.setItem("Last name", inpLName.value);
    storage.setItem("Birth Date", inpBrtDate.value);
    storage.setItem("Nationality", inpNationality.value);
}


function collectDataAddress() {


    if (inpAddress.value == null || inpAddress.value == "") {
        pInputCheck(pErrAddr, inpAddress);
    } else {
        pErrAddr.innerHTML = "";
    }
    if (inpNumber.value == null || inpNumber.value == "") {
        pInputCheck(pErrNum, inpNumber);
    } else {
        pErrNum.innerHTML = "";
    }
    if (inpZip.value == null || inpZip.value == "") {
        pInputCheck(pErrZip, inpZip);
    } else {
        pErrZip.innerHTML = "";
    }

    storage.setItem("Address", inpAddress.value);
    storage.setItem("House Number", inpNumber.value);
    storage.setItem("Zip Code", inpZip.value);

}


function collectDataProfil() {

    if (inpUser.value == null || inpUser.value == "") {
        pInputCheck(pErrUser, inpUser);
    } else {
        pErrUser.innerHTML = "";
    }
    if (inpPassw.value == null || inpPassw.value == "") {
        pInputCheck(pErrPassw, inpPassw);
    } else {
        pErrPassw.innerHTML = "";
        if (inpPassw.value !== inpPasswR.value) {
            pErrPasswR.style.color = "red";
            pErrPasswR.innerHTML = "Please, check yours Input. Your Pass don't the same";
            inpPasswR.focus();
        } else {
            pErrPasswR.innerHTML = "";
            inpFile.focus();
        }
    }
    console.log(inpUser.value);
    console.log(inpPassw.value);

    if (inpFile.value == null || inpFile.value == "No file selected" || inpFile.value == "") {
        pInputCheck(pErrFile, inpFile);
    } else {
        pErrFile.innerHTML = "";
    }

    console.log(inpFile.value);

    inpFile.addEventListener("change", dateiauswahl, false);

    console.log(dOutImg);

    // let nameImg = inpFile.value;
    let data = new Object();
    data.imagePath = inpFile.files[0].name;
    let nameImg = data.imagePath;
    if (nameImg.match(/fakepath/)) {
        nameImg = nameImg.replace(/C:\\fakepath\\/i, 'C:/home/rania/Pictures/');
    }
    let img = new Image;
    console.log("img: ", img);
    // img.setAttribute("src",
    let int = inpFile.addEventListener("change", dateiauswahl, true);
    console.log("int: " + int);
    // function(event) {

    //     fReader.readAsDataURL(document.getElementById("file").files[0]);
    //     fReader.onloadend = function(event) {
    //         console.log(inpFile.files[0]);
    //         // var img = document.getElementById("yourImgTag");
    //         console.log("event: " + event.target.result);
    //         return event.target.result;
    //     }
    // })
    // )
    console.log("data: " + data.imagePath);
    console.log("nameImg: " + nameImg);
    console.log(img);
    // inpFile.addEventListener('change', dateiauswahl, false);
    storage.setItem("User Name", inpUser.value);
    storage.setItem("Password", inpPassw.value);
    storage.setItem("Photo", int);
    createFinish();

    // let name = dateiName();
    // console.log("name: " + name);

}

function dateiName(file) {
    var input = document.getElementById("file");
    var fReader = new FileReader();
    fReader.onloadend = function(event) {
        fReader.onload = imageIsLoaded;
        fReader.readAsDataURL(input.files[0]);
        //fReader.readAsDataURL(img.files[0]);
        return function() {
            var imgP = document.createElement("img");
            imgP.setAttribute("id", "imgP");
            imgP.src = file;
            dOutImg.insertBefore(imgP, null);

            console.log("datei name: " + imgP.src);
        }
    }
}

function dateiauswahl(evt) {
    var dateien = evt.target.files; // FileList object
    // Auslesen der gespeicherten Dateien durch Schleife
    for (var i = 0, f; f = dateien[i]; i++) {
        console.log("dateiauswahl");
        // nur Bild-Dateien
        if (!f.type.match('image.*')) {
            continue;
        }
        var reader = new FileReader();
        reader.onload = (function(file) {
            return function(e) {
                console.log("return: ", e.target.result);
                // erzeuge Thumbnails.
                frmFinish.style.display = "block";
                var imgShow = document.createElement('img');
                imgShow.className = 'showImg';
                imgShow.src = e.target.result;
                imgShow.title = file.name;
                dOutImg.insertBefore(imgShow, null);
                console.log(dOutImg);
                console.log("imgshow: " + imgShow.src);
            };
        })(f);
        // Bilder als Data URL auslesen.
        reader.readAsDataURL(f);
    }
}
// Auf neue Auswahl reagieren und gegebenenfalls Funktion dateiauswahl neu ausführen.



function createFinish() {
    // e.preventDefault();
    console.log("finish");
    title.innerHTML = "Finish";

    dCard.appendChild(table);

    let count = storage.length;
    console.log(count);
    // console.log(localStorage.getItem("address"));
    console.log(storage);
    let caption = ["First name", "Last name", "Birth Date", "Address", "Zip Code", "House Number", "User Name", "Password", "Photo"]
    console.log(caption);
    // console.log(Object.keys(storage));
    caption.forEach(element => {
        console.log(element);
        console.log(storage[element]);
        if (element != "Photo") {

            let trCaption = document.createElement("tr");
            let tdCaption = document.createElement("td");
            let trData = document.createElement("tr");
            let txtCaption = document.createTextNode(element);
            let tdData = document.createElement("td");
            let txtData = document.createTextNode(storage[element]);
            tdCaption.appendChild(txtCaption);
            trCaption.appendChild(tdCaption);
            tdData.appendChild(txtData);
            trData.appendChild(tdData);
            tbody.appendChild(trCaption);
            tbody.appendChild(trData);

        } else {
            // let img = document.createElement("img");
            let img = new Image();

            // var res = storage[element].replace(/\\/g, "/");
            //img.src = res.slice(-5);
            console.log(storage[element].src);
            img.src = storage[element].src;

            console.log(inpFile);
            dOutImg.style.display = "block";
            dOutImg.appendChild(img);
            console.log(dOutImg);
            // inpFile.addEventListener("load", dateiauswahl, false);
            let trCaption = document.createElement("tr");
            let tdCaption = document.createElement("td");
            let trData = document.createElement("tr");
            let txtCaption = document.createTextNode(element);
            let tdData = document.createElement("td");
            tdCaption.appendChild(txtCaption);
            trCaption.appendChild(tdCaption);
            tdData.appendChild(dOutImg);
            trData.appendChild(tdData);
            tbody.appendChild(trCaption);
            tbody.appendChild(trData);

        }


    });
}



// function dateiauswahl(e) {
//     ///
//     e.preventDefault();
//     console.log(e);
//     var dateien = e.target.files; // FileList object
//     console.log("datei:" + dateien);
//     // Auslesen der gespeicherten Dateien durch Schleife
//     //for (var i = 0, f; f = dateien[i]; i++) {
//     for (var i = 0, f; f = dateien[i]; i++) {

//         // nur Bild-Dateien
//         if (!f.type.match('image.*')) {
//             continue;
//         }
//         var reader = new FileReader();
//         reader.onload = (function(file) {
//             return function(e) {
//                 // erzeuge Thumbnails.
//                 var imgShow = document.createElement('img');
//                 imgShow.className = 'showImg';
//                 imgShow.src = e.target.result;
//                 imgShow.title = file.name;
//                 dOutImg.insertBefore(imgShow, null);

//             };
//         })(f);
//         // Bilder als Data URL auslesen.
//         reader.readAsDataURL(f);
//     }
// }


// // form visible
// function frmShow(frm, event) {
//     frm.removeAttribute('hidden');
// }

// // form hidden
// function frmHidden(frm, event) {
//     frm.setAttribute('hidden', '');
//     event.preventDefault();
// }

// function persSite(e) {
//     e.preventDefault();
//     window.history.back();
// }



// function datenSenden(e) {
//     e.preventDefault();
//     //createAddress();
//     btnNext.addEventListener("click", function(e) {
//         e.preventDefault();
//         persInfo();
//         console.log(storage.length);
//     })

// }

// function load(e) {
//     frmShow(frmPers, e);
//     frmHidden(frmAddress, e);
//     frmHidden(frmProfile, e);
//     frmHidden(frmFinish, e);
// }

// function loadAddresse(e) {
//     frmHidden(frmPers, e);
//     frmShow(frmAddress, e);
//     frmHidden(frmProfile, e);
//     frmHidden(frmFinish, e);
//     h3Title.innerHTML = "Address Info";
// }