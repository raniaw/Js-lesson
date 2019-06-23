let li = [];
let ul;
// Array

let toDoList = ["Learn Javascript"];
// 
let nAuswahl = prompt("Was möchten Sie tun?\nWählen Sie bitte eine Zahl aus.\n\"1\" -> Neue Aufgaben erstellen\n\"2\" -> Ganze Liste anzeigen\n\"3\" -> Nichts");
auswahl(nAuswahl);

function auswahl(nummer) {
    console.log(nummer);
    switch (nummer) {
        case "1":
            neueAufgabe();
            let nAuswahlGanzeListe = prompt("Möchten sie Ganze Liste anzeigen\n\"1\" -> ja\n\"2\" -> nein");
            if (nAuswahlGanzeListe = "1") {
                ganzeListe();
            }
            alert("Vielen Dank!\nApp wurde geschlossen!!");
            console.log("app wurde geschlossen!!!");
            break;

        case "2":
            ganzeListe();
            alert("Vielen Dank!\nApp wurde geschlossen!!");
            console.log("app wurde geschlossen!!!");
            break;
        case "3":
            alert("Vielen Dank!\nApp wurde geschlossen!!");
            console.log("app wurde geschlossen!!!");

            break;
        default:
            alert("Sie haben keine Auswahl getroffen;)\nApp wurde geschlossen!!");
            console.log("app wurde geschlossen!!!");
            break;
    }
}

function neueAufgabe() {
    var pTag = document.createElement("p");

    pTag.setAttribute("id", "aufgNeu");
    document.body.appendChild(pTag);
    document.getElementById("aufgNeu").innerHTML = "<br>Neue Aufgaben-Liste: <br> ";

    let newToDo = prompt("Schreiben sie bitte Ihre neue Aufgaben");
    toDoList.push(newToDo);
    console.log(toDoList);
    let yesNo = prompt("Weiter?\n\"1\" -> ja\n\"2\": -> nein");

    while (yesNo != "2") {
        yesNo = "2";
        console.log("Length: " + toDoList.length + ": " + toDoList);
        ul = document.createElement("ul");
        ul.setAttribute("id", "aufg1");
        li = document.createElement("li");
        document.body.appendChild(li);
        for (var i = 0; i < toDoList.length; i++) {
            li.setAttribute("id", "list" + i);
            document.body.appendChild(li, "list" + i);
            document.getElementById("list" + i).innerHTML = toDoList[i];
        }
        console.log(toDoList);

        NodeList.prototype.forEach = Array.prototype.forEach;

        var li_s = document.querySelectorAll('#list').forEach(function(el) {
            console.log("forEach!");
            for (let i = 0; i < toDoList.length; i++) {
                el.innerHTML = toDoList[i];
                console.log("foreach: " + toDoList[i]);
            }
        })

        yesNo = prompt("Weiter?\n\"1\" -> ja\n\"2\" -> nein");
        let newToDo = prompt("Schreiben sie bitte Ihre neue Aufgaben");
        toDoList.push(newToDo);

    }
    console.log("Length: " + toDoList.length + ": " + toDoList);
    ul = document.createElement("ul");
    ul.setAttribute("id", "aufg1");
    li = document.createElement("li");
    document.body.appendChild(li);
    for (var i = 0; i < toDoList.length; i++) {
        li.setAttribute("id", "list" + i);
        document.body.appendChild(li, "list" + i);
        document.getElementById("list" + i).innerHTML = toDoList[i];
    }
    console.log(toDoList);

    // NodeList.prototype.forEach = Array.prototype.forEach;

    // var li_s = document.querySelectorAll('#list').forEach(function(el) {
    //     console.log("forEach!");
    //     for (let i = 0; i < toDoList.length; i++) {
    //         el.innerHTML = toDoList[i];
    //         console.log("foreach: " + toDoList[i]);
    //     }
    // })
}

function ganzeListe() {
    var pTag = document.createElement("p");
    pTag.setAttribute("id", "aufgAnz");
    document.body.appendChild(pTag);
    document.getElementById("aufgAnz").innerHTML = "Ganze Aufgaben-Liste: <br> ";
    for (var i = 0; i < toDoList.length; i++) {
        ul = document.createElement("ul");
        ul.setAttribute("id", "aufg2");
        li = document.createElement("li");
        li.setAttribute("id", "list2" + i);
        document.body.appendChild(li);
        document.getElementById("list2" + i).innerHTML = toDoList[i];
    }
}