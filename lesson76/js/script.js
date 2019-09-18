import Person, { printName as pName, printAge as pAge } from './person.js'; // default function in user.js shrebt man ohne geschweifelt klammen
import objDeveloper, * as d from './developer.js';
var body = document.getElementsByTagName("body")[0];
let person = new Person("Mascha", 5);

// *** to import all from person.js ***
//import * as p from './person.js';
//let pers = new p.default("Mascha", 5);

var pPerson = document.getElementById("pPerson");
pPerson.innerHTML = pName(person) + " " + pAge(person);

// für '   ***     import * as p from './person.js';    ***   '
//pPerson.innerHTML = p.printName(pers) + " " + p.printAge(pers);
pPerson.style.color = colorCreateDark();
pPerson.style.fontFamily = "Great Vibes";
pPerson.style.fontSize = "30px";


// für classs Developer
//let dev = new Developer("Rania", "doesn't matter", "fullstack-web developer");

let pDev = document.getElementById("pDev");
pDev.innerText = d.printName("Rania") + " " + d.printAge("does'nt matter") + ".. " + d.printJob("fullstack Web-Developer");
pDev.style.color = colorCreateDark();
pDev.style.fontFamily = "Jura";
pDev.style.fontSize = "30px";

































/**
 * Funktion für die zufällige dunkle Farbeerstellung
 */


function colorCreateDark() {
    var color;
    var max = 160;
    var min = 0;

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
    var max = 256;
    var min = 180;

    var colRed = Math.floor(Math.random() * (max - min)) + min;
    var colBlue = Math.floor(Math.random() * (max - min)) + min;
    var colGreen = Math.floor(Math.random() * (max - min)) + min;

    color = "rgb(" + colRed + "," + colGreen + "," + colBlue + ")";

    return color;
}








// *** with jQuery ***


//


// mit function arrow '=>' läuft nicht 

// $(document).ready(function() {
//     $("#frm").on("click", function(e) {
//         e.preventDefault();
//         var name = $("#name").val();
//         if (name == "" || name == null) {
//             $("#pErr").css("color", "red")
//             $("#pErr").text("yours input is empty")
//         } else {
//             $("#pErr").text("");
//             let nameUp = name.toUpperCase();
//             var day = new Date().getDay();
//             var rest = 6 - day;
//             console.log(day, " ", rest)
//             var text = "";
//             switch (day) {
//                 case 0:
//                     text = "Hello <span>" + nameUp + "</span>. Today is Sunday, is the Weekend";
//                     $("#name").val("");
//                     break;
//                 case 1:
//                     text = "Hello  <span>" + nameUp + "</span>. Today is Monday. Only " + rest + " days left until Weekend!";
//                     $("#name").val("");
//                     break;
//                 case 2:
//                     text = "Hello  <span>" + nameUp + "</span>. Today is Tuesday . Only " + rest + " days left until Weekend!";
//                     $("#name").val("");
//                     break;
//                 case 3:
//                     text = "Hello  <span>" + nameUp + "</span>. Today is Wednesday . Only " + rest + " days left until Weekend!";
//                     $("#name").val("");
//                     break;
//                 case 4:
//                     text = "Hello <span>" + nameUp + "</span>. Today is Thursday . Only " + rest + " days left until Weekend!";
//                     $("#name").val("");
//                     break;
//                 case 5:
//                     text = "Hello  <span>" + nameUp + "</span>. Today is Friday . Only " + rest + " days left until Weekend!";
//                     $("#name").val("");
//                     break;
//                 case 6:
//                     text = "Hello <span>" + nameUp + "</span>. Today is Saturday, is the Weekend";
//                     $("#name").val("");
//                     break;
//             }

//             $(".greating").html(text);
//         }
//     });

// });