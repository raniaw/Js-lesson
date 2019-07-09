var h1 = document.getElementsByTagName("h1")[0];
h1.style.color = colorCreateDark();

var colors = ["red", "blue", "orange"];
var colors2 = ["green", "yellow", "purple"];
var allcolors = colors.concat(colors2);


document.getElementById("colors").innerHTML = "Colors = [" + colors + "];";
document.getElementById("colors2").innerHTML = "Colors2 = [" + colors2 + "];";
document.getElementById("concat").innerHTML = "All Colors joind together: " + allcolors;

document.getElementById("slice").innerHTML = allcolors.slice(1, 3);
console.log(allcolors);

document.getElementById("slice2").innerHTML = allcolors.slice(3, 5);
console.log("Slice: " + allcolors.slice(3, 5)); //Slice: green,yellow
console.log(": " + allcolors); //: red,blue,orange,green,yellow,purple
//insert between "orange" and "green"
allcolors.splice(3, 0, "darkred", "darkgreen");
console.log("all:" + allcolors); //all:red,blue,orange,darkred,darkgreen,green,yellow,purple
document.getElementById("splice").innerHTML = allcolors;
console.log(allcolors);

var newColors = ["white", "black"];
// delete "blue" insert  "bluered" and "grey"
allcolors.splice(1, 1, "bluered", "grey");
console.log("Allcolors:" + allcolors);
console.log(newColors.concat(allcolors));

var first = allcolors.find(function(value) {
    return value == "darkred";
});
console.log("first:" + first);
document.getElementById("find").innerHTML = first;
//make the same function as above
var second = allcolors.find(findColor);

function findColor(value) {
    return value == "green";
}

var persons = [{
        name: "Anna",
        work: "IT-Security"
    },
    {
        name: "Mansour",
        work: "Webdeveloper engineer"
    },
    {
        name: "Rania",
        work: "Webdeveloper engineer"
    },

    {
        name: "Diana",
        work: "translator"
    },
    {
        name: "Erik",
        work: "media telecommumation designer"
    },

]
console.log("Persons;");
console.log(persons);

var person = persons.find(function(employee) {
    return employee.work == "translator";
});
console.log("The person " + person.name + " is work as " + person.work);
var workPers = document.getElementById("findEmpl");
workPers.style.color = colorCreateDark();
workPers.innerHTML = "The person " + person.name + " is work as " + person.work;


var personWeb = persons.reverse().find(function(employee) {
    return employee.work == "Webdeveloper engineer";
});
var personWebIndex = persons.reverse().findIndex(function(employee) {
    return employee.work == "Webdeveloper engineer";
});
console.log(personWebIndex);
console.log("The person with index:" + personWebIndex + " " + personWeb.name + " is work as " + personWeb.work);
var webDev = document.getElementById("findWeb");
webDev.style.color = colorCreateDark();
webDev.style.fontWeight = "bolder";
webDev.innerHTML = "The person " + personWeb.name + " is work as " + personWeb.work;

//filter all persons, they work as "Webdeveloper engineer"
var personsWeb = persons.sort().reverse().filter(function(employee) {
    return employee.work == "Webdeveloper engineer";
});
console.log(personsWeb);

var allWebDev = document.getElementById("dev");
for (var i = 0; i < personsWeb.length; i++) {
    var item = personsWeb[i];
    console.log(item.name);
    var elLi = document.createElement("li");
    elLi.style.color = colorCreateDark();
    elLi.style.fontFamily = 'Great Vibes';
    elLi.style.fontSize = "1.8em";
    elLi.value = item.name;
    elLi.innerHTML = item.name + " work as " + item.work;
    allWebDev.appendChild(elLi);
}
//Reduce function mit "+"
var numbers = [175, 50, 25, 45, 36, 67];
var numbSum = numbers.reduce(function(value, num) {
    return value + num;
})

var sum = document.getElementById("sum");
sum.style.color = colorCreateDark();
sum.innerHTML = "the summe is " + numbSum;

//Reduce function mit "-"

var numbMin = numbers.reduce(function(value, num) {
    return value - num;
})
var min = document.getElementById("min");
min.style.color = colorCreateDark();
min.innerHTML = "the subtract  is " + numbMin;
//ReduceRight function mit "-" begin of right 67-36-45-50-175

var numbRghtMin = numbers.reduceRight(function(value, num) {
    return value - num;
})

var rghtMin = document.getElementById("rghtMin");
rghtMin.style.color = colorCreateDark();
rghtMin.innerHTML = "the subtract  is " + numbRghtMin;

var cities = [{
        city: "berlin",
        population: 711
    },
    {
        city: "hamburg",
        population: 456
    }
]

//     
/**   0 
 * " var .... },0) " ->  total = 0   is because we have the object         
 **
 *           
 ***
 * 
 * var sumPop = cities.reduce(function(total, num) {
 *   return total + num.population;
 *   }, 0);
 * 
 **/

//the same  how as above without "0"
var sumPop = cities.reduce(function(total, num) {
    return total.population + num.population;
});
console.log(sumPop);

var sPop = document.getElementById("sumPop");
sPop.style.color = colorCreateDark();
sPop.innerHTML = "the sum of Population is " + sumPop;

///

/**
 * 
 * Diana 2 time, Erik 2 time, Rosa one time, Rustam 1 time
 * 
 */
var names = ["Diana", "Erik", "Rosa", "Erik", "Diana", "Rustam"];
// 
var pNames = document.getElementById("pNames");
pNames.innerHTML = names;

var countName = names.reduce(function(allName, name) {
    if (name in allName) {
        allName[name]++;
        console.log(name + " " + allName[name]);
        // var counted = document.getElementById("cntName");
        // counted.style.color = colorCreateDark();
        // counted.innerHTML = name + " " + allName[name];
    } else {
        allName[name] = 1;
        console.log(name + " " + allName[name]);
    }
    // var counted = document.getElementById("cntName");
    // counted.style.color = colorCreateDark();
    // counted.innerHTML = name + " " + allName[name];
    // allNames();

    return allName;
}, {});
console.log(countName);
var counted = document.getElementById("cntName");
counted.style.color = colorCreateDark();
counted.innerHTML = "Diana: " + countName.Diana;

allNames(countName);

function allNames(countN) {
    // var ulNames = document.getElementById("names");
    for (var i = 0; i < countN.length; i++) {
        var item = countN[i];
        console.log("item" + item);
        // let elLi = document.createElement("li");
        // elLi.style.color = colorCreateDark();
        // elLi.style.fontFamily = 'Great Vibes';
        // elLi.style.fontSize = "1.8em";
        // elLi.value = item.allNames[name];
        // elLi.innerHTML = item.allNames[name] + " is " + item.name;
        // ulNames.appendChild(elLi);
    }
}


/**
 * map in array
 */

var mNumber = [4, 9, 16, 25];
var mapsNumber = mNumber.map(Math.sqrt);
console.log(mapsNumber);
var mNumb = document.getElementById("pMap");
mNumb.style.color = colorCreateDark();
mNumb.innerHTML = mapsNumber;

/**
 * arrow function 
 */

let callMe = () => { console.log("callMe - arrow Function!"); }
callMe();
// if only one parameter
let multOne = number => number * 2;

// if more parameters
let multTwo = (number) => {
    return number * 2;
}

var aNumb = mNumber.map(multTwo);
var arrNumb = document.getElementById("arrM");
arrNumb.style.color = colorCreateDark();
arrNumb.innerHTML = aNumb;







/**
 * Funktion für die zufällige dunkle Farbeerstellung 
 */
function colorCreateDark() {
    var color;
    var max = 256;
    var min = 60;
    var colRed = Math.floor(Math.random() * max) - min;
    if (colRed < 0) {
        colRed = 0;
    }
    var colBlue = Math.floor(Math.random() * max) - min;
    if (colBlue < 0) {
        colBlue = 0;
    }
    var colGreen = Math.floor(Math.random() * max) - min;
    if (colGreen < 0) {
        colGreen = 0;
    }
    color = "rgb(" + colRed + "," + colGreen + "," + colBlue + ")";
    console.log(color);
    return color;
}
/**
 * Funktion für die zufällige helle(Pastel) Farbeerstellung
 */
function colorCreatePastel() {
    var color;
    var max = 256;
    var min = 120;
    var colRed = Math.floor(Math.random() * max) + min;
    if (colRed > 255) {
        colRed = 255;
    }
    var colBlue = Math.floor(Math.random() * max) + min;
    if (colBlue > 255) {
        colBlue = 255;
    }
    var colGreen = Math.floor(Math.random() * max) + min;
    if (colGreen > 255) {
        colGreen = 255;
    }
    color = "rgb(" + colRed + "," + colGreen + "," + colBlue + ")";
    console.log(color);
    return color;
}