var age;
var minAge;
var boole;
let linebreak = "<br>";
age = 15;
minAge = 18;
bool = age < minAge;
console.log(age, minAge, bool);

document.write(linebreak);
document.write('age = ' + age + ', minAge1 = ' + minAge + ' then age < minAge = ' + bool);
document.write(linebreak);

var date = new Date()
var hour = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
console.log(hour);
if (hour <= 14) {
    alert("This time for lunch: " + hour);
} else if (hour < 16.5) {
    alert("go to home");
}

let str = "My name is John, here is Mara";
var index = str.indexOf("is");
var lindex = str.lastIndexOf("is");
var indexOfName = str.search("name");

console.log(str);
console.log(index);
console.log(lindex);
console.log(indexOfName);

document.write(linebreak);
document.write("String ist: \"" + str + "\"");
document.write(linebreak);
document.write("str.indexOf(\"is\"): " + index);
document.write(linebreak);
document.write("str.lastIndexOf(\"is\"): " + lindex);
document.write(linebreak);
document.write("str.search(\"name\"): " + indexOfName);