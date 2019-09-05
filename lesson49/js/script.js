var body = document.getElementsByTagName("body")[0];

var h2F = document.createElement("h2");
var h2Filt = document.createElement("h2");
var h2Map = document.createElement("h2");
var h2Sort = document.createElement("h2");
var h2Reduce = document.createElement("h2");

var ulArr1 = document.createElement("ul");
var ulArr2 = document.createElement("ul");
var ulRetail = document.createElement("ul");
var ulEightiesComp = document.createElement("ul");
var ulNameMap = document.createElement("ul");
var ulYearsComp = document.createElement("ul");
var ulSqrt = document.createElement("ul");
var ulSortStartComp = document.createElement("ul");

var pCarDrive = document.createElement("p");
var pCarDriveSort = document.createElement("p");
var pSumAges = document.createElement("p");
var pTotalsYearsComp = document.createElement("p");

h2F.style.color = colorCreateDark();
h2F.style.fontWeight = "bold";
h2Filt.style.color = colorCreateDark();
h2Filt.style.fontWeight = "bold";
h2Map.style.color = colorCreateDark();
h2Map.style.fontWeight = "bold";
h2Sort.style.color = colorCreateDark();
h2Sort.style.fontWeight = "bold";
h2Reduce.style.color = colorCreateDark();
h2Reduce.style.fontWeight = "bold";
pCarDrive.style.color = colorCreateDark();
pCarDrive.style.fontWeight = "bold";
pCarDriveSort.style.color = colorCreateDark();
pCarDriveSort.style.fontWeight = "bold";
ulRetail.style.color = colorCreateDark();
ulRetail.style.fontWeight = "bold";
ulEightiesComp.style.color = colorCreateDark();
ulEightiesComp.style.fontWeight = "bold";
ulNameMap.style.color = colorCreateDark();
ulNameMap.style.fontWeight = "bold";
ulYearsComp.style.color = colorCreateDark();
ulYearsComp.style.fontWeight = "bold";
ulSqrt.style.color = colorCreateDark();
ulSqrt.style.fontWeight = "bold";
ulSortStartComp.style.color = colorCreateDark();
ulSortStartComp.style.fontWeight = "bold";
pSumAges.style.color = colorCreateDark();
pSumAges.style.fontWeight = "bold";
pTotalsYearsComp.style.color = colorCreateDark();
pTotalsYearsComp.style.fontWeight = "bold";

body.appendChild(h2F);
body.appendChild(ulArr1);
body.appendChild(h2Filt);
body.appendChild(ulArr2);
body.appendChild(pCarDrive);
body.appendChild(pCarDriveSort);
body.appendChild(ulRetail);
body.appendChild(ulEightiesComp);
body.appendChild(h2Map);
body.appendChild(ulNameMap);
body.appendChild(ulYearsComp);
body.appendChild(ulSqrt);
body.appendChild(h2Sort);
body.appendChild(ulSortStartComp);
body.appendChild(h2Reduce);
body.appendChild(pSumAges);
body.appendChild(pTotalsYearsComp);

h2F.innerHTML = "Array.forEach()";
h2Filt.innerHTML = "Array.filter()";
h2Map.innerHTML = "Array.map()";
h2Sort.innerHTML = "Array.sort()";
h2Reduce.innerHTML = "Array.reduce()";

const companies = [{
        name: "Company One",
        category: "Finance",
        start: 1981,
        end: 2004
    },
    {
        name: "Company Two",
        category: "Retail",
        start: 1992,
        end: 2008
    },
    {
        name: "Company Three",
        category: "Auto",
        start: 1999,
        end: 2007
    },
    {
        name: "Company Four",
        category: "Retail",
        start: 1989,
        end: 2010
    },
    {
        name: "Company Five",
        category: "Technology",
        start: 2009,
        end: 2014
    },
    {
        name: "Company Six",
        category: "Finance",
        start: 1987,
        end: 2010
    },
    {
        name: "Company Seven",
        category: "Auto",
        start: 1986,
        end: 1996
    },
    {
        name: "Company Eight",
        category: "Technology",
        start: 2011,
        end: 2016
    },
    {
        name: "Company Nine",
        category: "Retail",
        start: 1981,
        end: 1989
    }
];

const ages = [33, 12, 20, 2, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 4, 1, 64, 32];
/**
 * Ausgabe Namens des Companies
 */

// for (let i = 0; i < companies.length; i++) {
//     let li = document.createElement("li");
//     var txtLi = document.createTextNode(companies[i].name);
//     li.style.fontSize = "1.2em";
//     li.style.color = colorCreateDark();
//     li.appendChild(txtLi);
//     ulArr1.appendChild(li)
// }

/// gleiche  wie oben
companies.forEach((company) => {
    let li = document.createElement("li");
    var txtLi = document.createTextNode(company.name);
    li.style.fontSize = "1.2em";
    li.style.color = colorCreateDark();
    li.appendChild(txtLi);
    ulArr1.appendChild(li);
});

var carDrive = [];
/**
 * die Daten von 'ages' wurden in 'carDrive hinzugefügt
 */
// carDrive = ages.filter(age =>  age < 21);

/**
 * Ausgabe ages und 
 * Daten zu  carDrive einfügen
 */

// for (let i = 0; i < ages.length; i++) {
//     let li = document.createElement("li");
//     if (ages[i] >= 5) {
//         var txtLi = document.createTextNode(ages[i]);
//         li.style.fontSize = "1.5em";
//         li.style.color = colorCreateDark();
//         li.appendChild(txtLi);
//         ulArr2.appendChild(li);
//         carDrive.push(ages[i]);
//     }
// }

/// gleiche  wie oben
// ages.forEach((age) => {
//     let li = document.createElement("li");
//     if (age >= 5) {
//         var txtLi = document.createTextNode(age);
//         li.style.fontSize = "1.5em";
//         li.style.color = colorCreateDark();
//         li.appendChild(txtLi);
//         ulArr2.appendChild(li);
//         carDrive.push(age);
//     }
// });

/// gleiche  wie oben
carDrive = ages.filter((age) => {
    let li = document.createElement("li");
    if (age >= 5) {
        var txtLi = document.createTextNode(age);
        li.style.fontSize = "1em";
        li.style.color = colorCreateDark();
        li.appendChild(txtLi);
        li.style.fontFamily = 'Syncopate';
        li.style.fontWeight = 'bold';
        ulArr2.appendChild(li);
        carDrive.push(age);
        return true;
    }
});

console.log(carDrive);
pCarDrive.innerHTML = "Car drive unsort =[" + carDrive + "]";

/**
 * Die Daten von 'carDrive' werden zuerst
 * for der Ausgabe  sortiert
 */
carDrive.sort((a, b) => {
    return a - b;
});
pCarDriveSort.innerHTML = "Car drive sortiert   -> mit  carDrive.sort() : " + carDrive + "";

var retailComp = [];
retailComp = companies.filter((company) => {
    let li = document.createElement("li");
    if (company.category == 'Retail') {
        var txtLi = document.createTextNode(company.name + " is " + company.category);
        li.style.fontSize = "1.5em";
        li.style.color = colorCreateDark();
        li.style.fontFamily = 'Great Vibes';
        li.appendChild(txtLi);
        ulRetail.appendChild(li);
    }
});

var eightiescomp = [];
eightiescomp = companies.filter((company) => {
    let li = document.createElement("li");
    if (company.start >= 1980 && company.end < 1990) {
        var txtLi = document.createTextNode(company.name + " started: " + company.start + " and ended: " + company.end);
        li.style.fontSize = "1.5em";
        li.style.color = colorCreateDark();
        li.style.fontFamily = 'Great Vibes';
        li.appendChild(txtLi);
        ulEightiesComp.appendChild(li);
    }
});

var nameComp = [];
nameComp = companies.map((company) => {
    let li = document.createElement("li");
    var txtLi = document.createTextNode(company.name);
    li.style.fontSize = "1em";
    li.style.color = colorCreateDark();
    li.appendChild(txtLi);
    li.style.fontFamily = 'Syncopate';
    li.style.fontWeight = 'bold';
    ulNameMap.appendChild(li);
});

var yearsComp = [];
yearsComp = companies.map((company) => {
    let li = document.createElement("li");
    var txtLi = document.createTextNode(company.name + " is " + [company.end - company.start] + " years old");
    li.style.fontSize = "1.5em";
    li.style.color = colorCreateDark();
    li.style.fontFamily = 'Great Vibes';
    li.appendChild(txtLi);
    ulYearsComp.appendChild(li);

});

var agesSqrt = [];
agesSqrt = ages.map((age) => {
    let li = document.createElement("li");
    var txtLi = document.createTextNode("Sqrt from " + age + " is: " + Math.sqrt(age));
    li.style.fontSize = "1em";
    li.style.color = colorCreateDark();
    li.appendChild(txtLi);
    ulSqrt.appendChild(li);
});

var sortNameComp = [];
sortNameComp = companies.sort((comp1, comp2) => (comp1.start > comp2.start ? 1 : -1));
console.log(sortNameComp);
sortNameComp.map((company) => {
    let li = document.createElement("li");
    var txtLi = document.createTextNode(company.name + " is  started " + company.start);
    li.style.color = colorCreateDark();
    li.style.fontFamily = 'Great Vibes';
    li.style.fontSize = "1.5em";
    li.appendChild(txtLi);
    ulSortStartComp.appendChild(li);
});

let ageSum = 0;
for (let i = 0; i < ages.length; i++) {
    ageSum = ageSum + ages[i];
    console.log("Summe: " + ageSum);
}

let ageSum2 = ages.reduce((total, age) => {
    return total + age;
})
console.log(ageSum2)
pSumAges.innerHTML = "Sum from ages: " + ageSum2;

let totalYearsComp = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(totalYearsComp);
pTotalsYearsComp.innerHTML = "Total Years from all companies: " + totalYearsComp + " years";




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