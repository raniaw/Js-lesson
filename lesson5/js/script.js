let lbr = "<br>";;
let cars = ["bmw", "volvo", "merceses"];
let students = new Array("student1", "student2", "student3", "student4", "student5");
let txtArr = "";
let hr = "<hr>";
/**
 * Este Arrayasusgabe kommt nach den <p>
 */
console.log(cars);
document.write(lbr + hr);
document.write("Erste Array: " + lbr + "Cars: " + cars + lbr);
/**
 * Zweite Arrayausgabe kommt nach dem <p>
 */
document.write(lbr + hr + lbr + "Zweite Array: ");
for (var i = 0; i < cars.length; i++) {
    document.write(lbr + cars[i]);
}
/**
 * Dritte Array ausgabe kommt oben inder Webseite wo <p id="cars">-platziert
 */
document.write(lbr + hr);
document.write(lbr + "Dritte Array kommt obern in <p>" + lbr);
cars.forEach(myArrAusgabe);
document.getElementById("cars").innerHTML = txtArr;
document.write(hr);
txtArr = "";
students.forEach(myArrAusgabeUl);
document.getElementById("students").innerHTML = txtArr;

/**
 * Vierte Arrayausgabe student-list kommt oben inder Webseite wo <p id="student">-platziert
 */
document.write(lbr + "Vierte Array" + lbr);
document.write("Students: " + lbr + students + lbr);
document.write(lbr + hr);


function myArrAusgabe(value, index, array) {
    txtArr = txtArr + value + "<br>";

}

function myArrAusgabeUl(value, index, array) {
    txtArr = txtArr + value + "<br>";

}