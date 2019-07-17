var body = document.getElementsByTagName("body")[0];

var pInfo = document.createElement("p");
var pInfo2 = document.createElement("p");
var carObj = document.createElement("p");
var pEmpl = document.createElement("p");
var pGet = document.createElement("p");
var pSet = document.createElement("p");
var pPSG = document.createElement("p");
var pCats = document.createElement("p");
var pDogs = document.createElement("p");
var pAnRunShw = document.createElement("p");
var pAnFlShw = document.createElement("p");
var pAnCrab = document.createElement("p");


body.appendChild(pInfo);
body.appendChild(pInfo2);
body.appendChild(carObj);
body.appendChild(pEmpl);
body.appendChild(pGet);
body.appendChild(pSet);
body.appendChild(pPSG);
body.appendChild(pCats);
body.appendChild(pDogs);
body.appendChild(pAnRunShw);
body.appendChild(pAnFlShw);
body.appendChild(pAnCrab);

/**
 * Object person
 */
var person = {
    fname: "Mascha",
    lname: "Maschina",
    age: 5,
    hairColor: "blond",
    personInfo: function() {
        return "Firstname: " + this.fname + "<br>Lastname: " + this.lname + "<br> Age: " + this.age;

    }
}


/**
 * Function Person
 * @param {*} fname 
 * @param {*} lname 
 * @param {*} age 
 * @param {*} colHair 
 */


function Person(fname, lname, age, colHair) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.hairColor = colHair;
    this.personInfo = () => {
        return "Firstname: " + this.fname + "<br>Lastname: " + this.lname + "<br> Age: " + this.age;


    }
}

let personM = new Person("Mascha", "Maschina", 5, "blond");
let person2 = new Person("Mischa", "Medved", 60, "baraun");

pInfo.innerHTML = person.personInfo();
pInfo2.innerHTML = person2.personInfo();

/**
 * Object Auto
 */
var auto = new Object();
auto.type = "Fiat";
auto.model = "500";
auto.color = "weiß";
auto.year = 2019;

carObj.innerHTML = "Auto: " + auto.type + "<br> Model: " + auto.model + "<br> ist " + auto.color + ". Baujahr: " + auto.year;

/**
 * Function Employee
 * @param {*} name 
 * @param {*} salary 
 * @param {*} job 
 */

function Employee(name, salary, job) {
    this.name = name;
    this.salary = salary;
    this.job = job;
    this.emplInfo = () => {
        return "Employee: " + this.name + " " + "<br> Salary: " + this.salary + "<br> Job: " + this.job;
    }
}

var emplPers1 = new Employee("Marc", 2569420, "Developer");

pEmpl.innerHTML = emplPers1.emplInfo();



/**
 * Object Object PersonGetL
 */
var personGetL = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
        return this.language;
    }
}

/**
 * Object Object PersonSetL
 */
var personSetL = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(lang) {
        this.language = lang;
    }
};
/**
 * Object Object PersonGetSetL
 */
var personGetSetL = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
        return this.language;
    },
    set lang(lang) {
        this.language = lang;
    }
};
/**
 * Class LangSetGet
 */
class LangGetSet {
    set setLang(language) {;
        this.lang = language;
    }
    get getLang() {
        return this.lang;
    }

}

var langSG1 = new LangGetSet();
langSG1.setLang = "DE";
console.log(langSG1.getLang);
pGet.innerHTML = "Früher hat er in " + langSG1.getLang + " gewohnt";
langSG1.setLang = "Japan";
pSet.innerHTML = "Jetzt er wohnnt er in " + langSG1.getLang;

function Student(name, age, city, university, language, usd, changeRate) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.university = university;
    this.language = language;
    this.bankAccount = usd;
    this.changeMoney = function() {
            return this.bankAccount * changeRate;
        },
        this.studentInfo = function() {
            return this.name + " " + this.age + " live in " + this.city + " and study in " +
                this.university + " and speak " + this.language + " and have " + this.changeMoney() + " Euro";
        };
}
let student1 = new Student("Lara", "23", "Hamburg", "Uni Hamburg", "German", 1000, 0.8);
let student2 = new Student("Leo", "22", "Berlin", "Uni Berlin", "English", 5500, 1.2);
console.log(student1.studentInfo());
console.log(student2.studentInfo());


/**
 * Class PersonSetGet
 */
class PersonSetGet {
    constructor() {}
    set setName(name) {;
        this.name = name;
    }
    get getName() {
        return this.name;
    }
    set setAge(age) {
        this.age = age;
    }
    get getAge() {
        return this.age;
    }
    set setLang(lang) {
        this.lang = lang;
    }
    get getLang() {
        return this.lang;
    }
}

var persSG1 = new PersonSetGet();
persSG1.setName = "Jemand";
persSG1.setAge = 45;
persSG1.setLang = "wonders";
pPSG.innerHTML = persSG1.getName + " ist " + persSG1.getAge + " wohnt " + persSG1.getLang;

/**
 * Class Animal
 * Property
 * name,
 * color
 * 
 */
class Animal {
    constructor(animal) {
        this.animal = animal;
    }
    set setColor(color) {
        this.color = color;
    }
    get getColor() {
        return this.color;
    }
    set setName(name) {
        this.name = name;
    }
    get getName() {
        console.log(this.name);
        return this.name;
    }
}

Animal.prototype.laufen = () => {
    return "laufen";
}
Animal.prototype.schmusen = () => {
    return "schmusen";
}
Animal.prototype.bellen = () => {
    return "bellt";
}
Animal.prototype.schwimmen = () => {
    return "schwimmen";
}
Animal.prototype.fliegen = () => {
    return "fliegen";
}
Animal.prototype.krabbeln = () => {
    return "krabbeln";
}
Animal.prototype.isKrabbeln = () => {
    return true;
}
Animal.prototype.isSchwimmen = () => {
    return true;
}


var aCat = new Animal("Katze");
aCat.setName = "Kathi";
aCat.setColor = "schwarz-weiß";
pCats.innerHTML = "Meine Katze heißt " + aCat.getName +
    ". Die Farbe ihres Fells ist " + aCat.getName + ". Sie liebt " + aCat.schmusen();

var aDog = new Animal("Hund");
aDog.setName = "Charli";
aDog.setColor = "schwarz";
pDogs.innerHTML = "Mein Hund heißt " + aDog.getName +
    ". Er ist " + aDog.getColor + ". Er " + aDog.bellen() + " laut und mag " + aDog.laufen() + ".";

class Bird extends Animal {
    constructor(animal, ) {
        super(animal);
    }
}

Bird.prototype.isFlugfaehig = () => {
    return true;
}

class SeaAnimal extends Animal {
    constructor(animal, ) {
        super(animal);
    }
}
SeaAnimal.prototype.isLeuchten = () => {
    return true;
}
var aPinguin = new Bird("Pinguin");
aPinguin.setName = "Pinguin";
aPinguin.isFlugfaehig = false;
aPinguin.isSchwimmen = true;

animlLaufSchwimFliegKrabb(aPinguin);

var aFlFische = new SeaAnimal("FliegendeFische");
aFlFische.setName = "Exocoetidae - FIsch";
aFlFische.isFlugfaehig = true;
aFlFische.isSchwimmen = true;

animlLaufSchwimFliegKrabb(aFlFische);

var aKrabe = new SeaAnimal("Krabbe");
aKrabe.setName = "Krabe";
aKrabe.isKrabbeln = true;
aKrabe.isSchwimmen = false;

animlLaufSchwimFliegKrabb(aKrabe);


/**
 * Eine finction um zu beschreiben was ist Tier machen kann
 * @param {*} animal 
 */
function animlLaufSchwimFliegKrabb(animal) {

    if ((!animal.isFlugfaehig && animal.isSchwimmen)) {
        pAnRunShw.innerText = `${animal.getName} kann nicht ${animal.fliegen()} Er kann nur ${animal.laufen()} und ${animal.schwimmen()}`;
    }
    if (animal.isFlugfaehig && animal.isSchwimmen) {
        pAnFlShw.innerText = `${animal.getName} kann ${animal.schwimmen()} sowohl auch ${animal.fliegen()}`;
    }
    if (animal.isKrabbeln) {
        // pAnCrab.innerText = animal.getName + " kann " + animal.krabbeln();
        pAnCrab.innerText = `${animal.getName} kann ${animal.krabbeln()}`;
    }

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
 * Funktion für die zufällige helle-(Pastel)Farbeerstellung
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