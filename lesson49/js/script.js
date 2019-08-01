var body = document.getElementsByTagName("body")[0];
var ulArr1 = document.createElement("ul");
var ulArr2 = document.createElement("ul");
var pTxt3 = document.createElement("p");
var pTxt4 = document.createElement("p");
var pTxt5 = document.createElement("p");
var pPatt1 = document.createElement("p");
var pPatt2 = document.createElement("p");
var pPatt3 = document.createElement("p");
var pPatt4 = document.createElement("p");
var pPatt5 = document.createElement("p");
var pRes1 = document.createElement("p");
var pRes2 = document.createElement("p");
var pRes3 = document.createElement("p");
var pRes4 = document.createElement("p");
var pRes5 = document.createElement("p");


pTxt3.style.color = colorCreateDark();
pTxt3.style.fontWeight = "bold";
pTxt4.style.color = colorCreateDark();
pTxt4.style.fontWeight = "bold";
pTxt5.style.color = colorCreateDark();
pTxt5.style.fontWeight = "bold";

pPatt1.style.color = colorCreateDark();
pPatt1.style.fontWeight = "bold";
pPatt2.style.color = colorCreateDark();
pPatt2.style.fontWeight = "bold";
pPatt3.style.color = colorCreateDark();
pPatt3.style.fontWeight = "bold";
pPatt4.style.color = colorCreateDark();
pPatt4.style.fontWeight = "bold";
pPatt5.style.color = colorCreateDark();
pPatt5.style.fontWeight = "bold";

pRes1.style.color = colorCreateDark();
pRes1.style.fontWeight = "bold";
pRes1.style.fontFamily = 'Great Vibes';
pRes1.style.fontSize = "1.5em";
pRes2.style.color = colorCreateDark();
pRes2.style.fontWeight = "bold";
pRes2.style.fontFamily = 'Great Vibes';
pRes2.style.fontSize = "1.5em";
pRes3.style.color = colorCreateDark();
pRes3.style.fontWeight = "bold";
pRes3.style.fontFamily = 'Great Vibes';
pRes3.style.fontSize = "1.5em";
pRes4.style.color = colorCreateDark();
pRes4.style.fontWeight = "bold";
pRes4.style.fontFamily = 'Great Vibes';
pRes4.style.fontSize = "1.5em";

pRes5.style.color = colorCreateDark();
pRes5.style.fontWeight = "bold";
pRes5.style.fontFamily = 'Great Vibes';
pRes5.style.fontSize = "1.5em";


body.appendChild(ulArr1);
body.appendChild(pPatt1);
body.appendChild(pRes1);
body.appendChild(ulArr2);
body.appendChild(pPatt2);
body.appendChild(pRes2);
body.appendChild(pTxt3);
body.appendChild(pPatt3);
body.appendChild(pRes3);
body.appendChild(pTxt4);
body.appendChild(pPatt4);
body.appendChild(pRes4);
body.appendChild(pTxt5);
body.appendChild(pPatt5);
body.appendChild(pRes5);



const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
/**
 * Ausgabe NAmens des Companies
 */
// for (let i = 0; i < companies.length; i++) {
//     let li = document.createElement("li");
//     var txtLi = document.createTextNode(companies[i].name);
//     li.style.fontSize = "1.8em";
//     li.style.color = colorCreateDark();
//     li.appendChild(txtLi);
//     ulArr1.appendChild(li)
// }
/// gleiche  wie oben
companies.forEach((company) => {
    let li = document.createElement("li");
    var txtLi = document.createTextNode(company.name);
    li.style.fontSize = "1.5em";
    li.style.color = colorCreateDark();
    li.appendChild(txtLi);
    ulArr1.appendChild(li);
});


/**
 * Ausgabe ages
 */

var carDrive = [];
// for (let i = 0; i < ages.length; i++) {
//     let li = document.createElement("li");
//     if (ages[i] >= 21) {
//         var txtLi = document.createTextNode(ages[i]);
//         li.style.fontSize = "1.5em";
//         li.style.color = colorCreateDark();
//         li.appendChild(txtLi);
//         ulArr2.appendChild(li);
//         carDrive.push(ages[i]);
//     }
// }
/// gleiche  wie oben
ages.forEach((age) => {
    let li = document.createElement("li");
    if (age >= 21) {
        var txtLi = document.createTextNode(age);
        li.style.fontSize = "1.5em";
        li.style.color = colorCreateDark();
        li.appendChild(txtLi);
        ulArr2.appendChild(li);
        carDrive.push(age);
    }

});
console.log(carDrive);




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