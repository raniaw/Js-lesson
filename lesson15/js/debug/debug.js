var person = {
    fname: "John",
    lname: "Snow",
    age: 250,
    eyeColor: "blue"
};

function printPersonProps(obj) {
    let name = obj;
    console.log(typeof(name));
    let text;
    text = "There was user with the name: " + name.fname;
    //alert(text);

    let laenge = Object.keys(obj).length;
    console.log("obj.length: " + laenge);


    // // for (let i = 0; i < laenge; i++) {
    //document.write(Object.keys(obj) + "" + Object.values(obj));
    // // }

    for (keys in obj) {
        document.write('<br>');
        document.write(keys + ": " + obj[keys]);
    }
}
printPersonProps(person);

function count(number) {
    for (let i = 0; i < number; i++) {
        document.write("<br>");
        document.write(i);
    }
}

count(5);