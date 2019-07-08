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
document.getElementById("findEmpl").innerHTML = "The person " + person.name + " is work as " + person.work;


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
    elLi.value = item.name;
    elLi.innerHTML = item.name + " work as " + item.work;
    allWebDev.appendChild(elLi);
}






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