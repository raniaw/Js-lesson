let li = [];
let ul;
// we create to do list array
let toDoList = ["Learn Javascript"];
// the first quistion
let userAnswer = prompt("Möchten Sie etwas machen oder lernen?");

while (userAnswer != "nein") {
    if (userAnswer == "list") {
        var pTag = document.createElement("p");
        pTag.setAttribute("id", "aufgAnz");
        document.body.appendChild(pTag);
        document.getElementById("aufgAnz").innerHTML = "Ganze Aufgaben-Liste: <br> ";
        for (var i = 0; i < toDoList.length; i++) {

            // var node = document.createElement("LI");
            // var textnode = document.createTextNode("Water");
            // node.appendChild(textnode);
            // document.getElementById("myList").appendChild(node);
            //document.body.appendChild(li);
            ul = document.createElement("ul");
            ul.setAttribute("id", "aufg2");
            li = document.createElement("li");
            li.setAttribute("id", "list2" + i);
            document.body.appendChild(li);
            document.getElementById("list2" + i).innerHTML = toDoList[i];
        }
        //console.log(toDoList);
    } else if (userAnswer == "neue") {
        var pTag = document.createElement("p");
        pTag.setAttribute("id", "aufgNeu");
        document.body.appendChild(pTag);
        document.getElementById("aufgNeu").innerHTML = "<br>Neue Aufgaben-Liste: <br> ";
        let newToDo = prompt("Schreiben sie bitte Ihre neue Aufgaben");
        toDoList.push(newToDo);
        console.log("Length: " + toDoList.length);
        ul = document.createElement("ul");
        ul.setAttribute("id", "aufg1");
        li = document.createElement("li");
        // li.setAttribute("id", "list");
        document.body.appendChild(li);
        for (var i = 0; i < toDoList.length; i++) {
            li.setAttribute("id", "list" + i);
            document.body.appendChild(li, "list" + i);
            document.getElementById("list" + i).innerHTML = toDoList[i];
            // document.body.appendChild(li);
        }
        console.log(toDoList);
        // console.log(toDoList.forEach(function(value, index, array) {
        //     "AufgabenNr.: " + index + " Aufgabe: " + value;
        // }));

        NodeList.prototype.forEach = Array.prototype.forEach;
        var li_s = document.querySelectorAll('#list').forEach(function(el) {
            for (let i = 0; i < toDoList.length; i++) {
                el.innerHTML = toDoList;
            }
        })

        //document.getElementById("list").innerHTML = toDoList;

        // var myNodeList = document.querySelectorAll('li');
        // forEach(myNodeList, function (index, value) {
        //     console.log(index, value); // passes index +value back!
        // });
        // document.getElementById("list").innerHTML = toDoList.forEach(function (value, index, array) {
        //     "AufgabenNr.: " + index + " Aufgabe: " + value;
        // });

    } else if (userAnswer == "del") {
        userAnswer = prompt("Wählen Sie bitte eine Anzahl für das Aufgabenlöschen", "wir haben " + toDoList.length + " Aufgaben auf der Liste");
        if (userAnswer > toDoList.length) {
            userAnswer = prompt("wir haben wenige Aufgaben auf der Liste..\nWählen Sie bitte eine Anzahl, die zur Azahl der Liste gehört", toDoList.length);
            delTodo(userAnswer);
        } else {
            delTodo(userAnswer);
        }
    }

    userAnswer = prompt("noch etwas");
}
console.log("app wurde geschlossen!!!");

function delTodo(val) {
    let index = val - 1;
    toDoList.splice(index, 1);
    console.log(toDoList);
    var pTag = document.createElement("p");
    pTag.setAttribute("id", "aufgAnz");
    document.body.appendChild(pTag);
    document.getElementById("aufgAnz").innerHTML = "Ganze Aufgaben-Liste: <br> ";
    for (var i = 0; i < toDoList.length; i++) {

        // var node = document.createElement("LI");
        // var textnode = document.createTextNode("Water");
        // node.appendChild(textnode);
        // document.getElementById("myList").appendChild(node);
        //document.body.appendChild(li);
        ul = document.createElement("ul");
        ul.setAttribute("id", "aufg2");
        li = document.createElement("li");
        li.setAttribute("id", "list2" + i);
        document.body.appendChild(li);
        document.getElementById("list2" + i).innerHTML = "";
        document.getElementById("list2" + i).innerHTML = toDoList[i];
    }


}


// var arr = [];
// for (var i = 0; i < 10; i++) {
//     arr.push(prompt("Enter a number"));
// }
// console.log(arr);


// var grades = [];
// var i;
// for (i = 0; i < 10; i++) {
//     grades.push(Number(prompt("Enter your grades:" + (i + 1), "0-100")));
// }
// document.write("Your grades: " + grades);

// NUMBER_OF_INPUTS = 10;

// var i = 0; // Loop iterator
// var userInput; // Input from user
// sum = 0; //initialise sum

// // Collect inputs
// for (i = 0; i < NUMBER_OF_INPUTS; i++) {
//     userInput = parseInt(prompt('Enter input ' + (i + 1) + ' of ' + NUMBER_OF_INPUTS));
//     sum += userInput;
//     sum /= NUMBER_OF_INPUTS;
// }

// // Output the average
// alert('Average grade: ' + sum.toFixed(2)); //the .toFixed sets it to 2 decimal places