let cars = {
    brand: "BMW",
    color: "red",
    year: "2019"
};

document.getElementById("cars").innerHTML = "The car has brand  <span class='green'>" + cars.brand + "</span>  has color <span class='red'>" + cars.color + "</span> was built in <span class='blue'>" + cars.year + "</span>";

let person = new Object();
person.name = "";
person.hairscolor = "";
person.name = "Mark";
person.hairscolor = "brown";
person.fullInformation = function() {
    return person.name + " has hairscolor " + person.hairscolor + ".";
}
console.log(person.fullInformation()); // Mark has hairscolor brown.

let pName = prompt("What your name", "here write your name please");
while (pName == "here write your name please" || pName == null || pName == "null" || pName == "") {
    pName = prompt("What your name", "here write your name please");
}
let pHairsColor = prompt("What your haircolor", "here write your hairscolor please...))");
while (pHairsColor == "here write your hairscolor please...))" || pHairsColor === null || pHairsColor == "null" || pHairsColor == "") {
    pHairsColor = prompt("What your name", "here write your name please");
}
let pCarsBrand = prompt("Write please your favorite brand of the cars", "here please..))");
while (pCarsBrand == "here please..))" || pCarsBrand == null || pCarsBrand == "null" || pCarsBrand == "") {
    pCarsBrand = prompt("Write please your favorite brand of the cars", "here please..))");
}
let pColorOfCars = prompt("Choose your favorite color please", "Example 'red'");
while (pColorOfCars == "Example 'red'" || pColorOfCars == null || pColorOfCars == "null" || pColorOfCars == "") {
    let pColorOfCars = prompt("Choose your favorite color please", "Example 'red'");
}
let pYearBuilt = prompt("when was your car built?", "here please..))");
while (pYearBuilt == "Example 'red'" || pYearBuilt == null || pYearBuilt == "null" || pYearBuilt == "") {
    pYearBuilt = prompt("when was your car built?", "here please..))");
}

function PersonObj(name, hairscolor) {
    this.persName = name;
    this.persHairsColor = hairscolor;

}
PersonObj.prototype = {
    get fullPersonObject() {
        console.log("getPersonObject" + " " + this.persName + " " + this.persHairsColor);
        return this.persName + " " + this.persHairsColor;
    }
};

function CarsObj(brandOfCars, colorOfCars, yearBuilt) {
    this.cBrand = brandOfCars;
    this.cColor = colorOfCars;
    this.cYear = yearBuilt;
}

CarsObj.prototype = {
    get fullInfoCars() {
        console.log("getCarsObject", this.cBrand, " ", this.cColor, " ", this.cYear);
        return this.cBrand + " " + this.cColor + " " + this.cYear;
    }
}

function DriverObj(name, hairscolor, brandOfCars, colorOfCars, yearBuilt) {
    this.dName = name;
    this.dHairscolor = hairscolor;
    this.dBrandOfCars = brandOfCars;
    this.dColorOfCars = colorOfCars;
    this.dYearBuilt = yearBuilt;
}

DriverObj.prototype = {
    get driverFullInfo() {
        console.log("getDriver: " + this.dName + " " + this.dHairscolor + " " + this.dBrandOfCars + " " + this.dColorOfCars + " " + this.dYearBuilt);
        return this.dName + " " + this.dHairscolor + " " + this.dBrandOfCars + " " + this.dColorOfCars + " " + this.dYearBuilt;
    }
}

outputDriver();

function inputPerson() {
    console.log(" input Person : " + pName + " " + pHairsColor);
    let personObj = new PersonObj(pName, pHairsColor);
    console.log("input person name: " + personObj.fullPersonObject);
    document.getElementById("persObj").innerHTML = "Hier sind Ihre persöhnliche Daten "
    document.getElementById("persObjs").innerHTML = personObj.fullPersonObject + "<br>";

}

function inputCars() {
    console.log(" input Cars : " + pCarsBrand + " " + pColorOfCars + " " + pYearBuilt);
    let carsObj = new CarsObj(pCarsBrand, pColorOfCars, pYearBuilt);
    console.log("input cars info: " + carsObj.fullInfoCars);
    document.getElementById("car").innerHTML = "Hier sind Daten von Ihre auto "
    document.getElementById("cars").innerHTML = carsObj.fullInfoCars + "<br>";
}

function inputDriver() {
    console.log("inputDriver");
    let driverObj = new DriverObj(pName, pHairsColor, pCarsBrand, pColorOfCars, pYearBuilt);
    console.log("Get Info Driver: " + driverObj.driverFullInfo);
    document.getElementById("driver").innerHTML = "Hier sind Daten "
    document.getElementById("drivers").innerHTML = driverObj.driverFullInfo + "<br>";
}

function outputDriver() {
    inputPerson();
    inputCars();
    inputDriver();

    person.name = pName;
    person.hairscolor = pHairsColor;
    cars.brand = pCarsBrand;
    cars.color = pColorOfCars;
    cars.year = pYearBuilt;

    console.log("The driver call " + person.name + " has a" + person.hairscolor + "hairs. The driver drives a car " + cars.brand + ". His " + cars.brand + " is " + cars.color + " and was built in " + cars.year);
    document.getElementById("persons").innerHTML = "The driver call " + person.name + " has a " + person.hairscolor + " hairs. The driver drives a car " + cars.brand + ". His " + cars.brand + " is " + cars.color + " and was built in " + cars.year;
    document.getElementById("person").innerHTML = "Hier sind alle Daten  von Object person und von Object car";

}