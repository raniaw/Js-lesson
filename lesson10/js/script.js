let x = new Array();
let z = new Array();
let l = new Array();

let drinkList = ["cola", "beer", "tea", "coffee"];

console.log("Drinkliste: " + drinkList);
document.getElementById("list").innerHTML = "<b>Drinkliste: </b> <u>" + drinkList + "</u><br><br>";

function delDrink(drink) {
    let i = -1;

    while (i < drinkList.length - 1) {
        i++;
        console.log("i: " + i);
        if (drinkList[i] == drink) {
            console.log("\'" + drinkList[i] + "\' wurde von der Liste gelöscht ");
            document.getElementById("liste").innerHTML = "<b>\'" + drinkList[i] + "\'</b> wurde von der Liste gelöscht <br><br><b>Bleibt nur: </b>";

            continue;
        }

        x.push(drinkList[drinkList.length - i]);
        // document.getElementById("rest").innerHTML = x + "<br>"; //coffee,tea,beer
        console.log(x);

    }
    x.reverse(); //beer, tea, coffee
    l.push(x);
    document.getElementById("rest").innerHTML = l + "<br>";
    return l;
}

//
/**
 * Diese Funktion prüft, ob elementein Array ist
 * @param {*} myArray 
 */
function isArray(myArray) {
    return myArray.constructor.toString().indexOf("Array") > -1;
}

console.log(isArray(z)); //true
console.log(isArray(l)); //true

function delListe(value, index) {
    l = delDrink(value);
    console.log("Console -> delListe(): " + l);
    return l;
}

delListe("cola"); //Ausgabe -> "beer", "tea", "coffee"
z.push(x);
console.log("X-Liste: " + x); //"beer", "tea", "coffee"
console.log("Z-length:" + z.length); //1
console.log((x.indexOf("cola"))); // return -1, weil liste keine "cola" beinhaltet hat

function addDrink(drink, index) {
    let c = 0;
    console.log("X-length:" + x.length); //3
    while (c < x.length) {
        console.log(c);
        console.log("addDrink liste: " + x[c]);
        if (c == index) {
            console.log("drinkliste: " + x[c]);
            document.getElementById("index").innerHTML = "<b>\'" + x[c] + "\'</b> hat noch index " + index + " <br>";
            x.splice(c, 0, drink);
            console.log("drinkliste:  " + x);
            document.getElementById("addListe").innerHTML = "<b>\'" + x[c] + "\'</b> wurde in der Liste hinzugefügt, hat jetzt index " + index + " <br>";
            console.log("DrinkListe:  " + x[c]);
        }
        c++;
    }
    document.getElementById("ganzeListe").innerHTML = "Die Liste jetzt sieht so <b>\'" + x + "\'</b> aus<br>";
    return x;
}
//
/**
 * Funktion addiert neue Drink in der Liste auf bestiimte PLatz(index)
 */

function addListe() {
    z = (addDrink("water", 2));
    console.log("neue Liste-> z : " + z);
}

addListe();

console.log("Liste: " + l);
console.log("\'x addliste():\'" + l);
console.log("liste -> l: " + l);

/**
 * 
 * let drinklist=["water","tea","coffee","cola","beer"];
function addDrink(drink,place){
   let c=-1;
   while(c<drinklist.length-1){
       c++;
       if(c==place){            
           drinklist.splice(c, 0, drink);
     }
   }
   console.log(drinklist.join());
}
 */

const onePerson = {
    firstName: "Elena",
    getFirstName: getFirstNameGlobal
}

const twoPerson = {
    firstName: "Maja",
    getFirstName: getFirstNameGlobal
}

function getFirstNameGlobal() {
    return this.firstName;
}

document.getElementById("one").innerHTML = onePerson.getFirstName();
document.getElementById("two").innerHTML = twoPerson.getFirstName();

const threePerson = createPerson("Mascha", "Semjonova", 23);

function createPerson(firstName, lastName, age) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age
    };
}
document.getElementById("three").innerHTML = threePerson.firstName + " " + threePerson.lastName + " is " + threePerson.age + " years old";

const forPerson = printNames("Mischa", "Semjonov");
console.log("ForPerson: " + forPerson); //undefined


function printNames() {
    Array.prototype.forEach.apply(arguments, [function(argument) {
        console.log(argument);
        var names = [];
        names.push(argument);
        document.getElementById("for").innerHTML = names;
        return names;
    }]);
}
printNames("murka");

function printName(value) {
    var value = value;
    console.log(value);
    const names1 = [];
    for (var i = 0; i < value.length; i++) {
        names1.push(value[i]);
    }
    return names1;
}
//document.getElementById("for").innerHTML = printName(forPerson);