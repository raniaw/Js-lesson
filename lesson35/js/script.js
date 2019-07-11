var body = document.getElementsByTagName("body")[0];
var h1Header = document.createElement("h1");
var text = document.createTextNode("ChildNode");
var ul = document.createElement("ul");
var ulTodo = document.createElement("ul");

body.appendChild(ul);
body.appendChild(ulTodo);

var btnChild = document.getElementById("addChild");
var btnChildLi = document.getElementById("addChildLi");
var btnChildDel = document.getElementById("delChild");
var btnAddTodo = document.getElementById("addTodo");

//beim anklicken fügt einmal ein header ein
btnChild.addEventListener("click", () => {
    h1Header.appendChild(text);
    body.appendChild(h1Header);
})

/**
 *  wenn man anklickt fügt immer gleich 3 Li ein. 
 *  nachdem auf der List childnode anklickt,
 *  ruft eine Fnkt 'addClass',
 *  um neuen Class zum List-ChildNode
 *  zu addieren
 */

btnChildLi.addEventListener("click", () => {
    for (var i = 0; i < 3; i++) {

        var elLi = document.createElement("li");
        var txt = document.createTextNode("List : " + i);
        var attr = document.createAttribute("id", "addCls");

        elLi.setAttributeNode(attr);
        elLi.appendChild(txt);
        ul.appendChild(elLi);
        elLi.addEventListener("click", addClass);
        elLi.style.color = colorCreate();
    }
});

console.log(body.childNodes.length);

/**
 * Nachdem Anklicken auf den Button kann man
 * einzeln ausgewähltes childNode zu löschen
 */
btnChildDel.addEventListener("click", () => {
    ul.removeChild(ul.childNodes[0]);
});
var br = document.createElement("br");

console.log(btnAddTodo);

/**
 * nachdem Anklicken auf dem Button,
 * wird der Text von Input-Feld aufgennomen.
 * Dieser Text wirs als List-childnode einzeln zeigen
 * Nachdem Anklicken auf den Childnode, 
 * wird eine Fktn 'delElement' aufrufen
 * um dieses Childnode von der Liste zu löschen
 * 
 */

btnAddTodo.addEventListener("click", () => {

    var elLi = document.createElement("li");
    var todoL = document.querySelector("input").value;
    var inTodo = document.getElementById("inTodo");
    var txt = document.createTextNode(todoL);

    elLi.style.fontFamily = 'Great Vibes';
    elLi.style.fontSize = "1.8em";
    elLi.style.fontWeight = "bolder";
    elLi.style.color = colorCreateDark();

    console.log(todoL);
    elLi.appendChild(txt);
    elLi.addEventListener("click", delElement);
    ulTodo.appendChild(elLi);
    inTodo.value = "";
    inTodo.focus();
    // elLi.addEventListener("keypress", pressEnter)

});

/**
 * Diese Fnkt dient dazu, 
 * dass nach dem keypress "Enter"
 * wird eine bestimmte Fnkt afrufufen
 * bzw. etwas passieren
 * 
 * @param {*} myEvent 
 */

function pressEnter(myEvent) {
    if (myEvent.keyCode == 13) {
        // addToDo();
        // hier etwas machen
    }
}

/**
 * nimmt gezielt ein Element an, 
 * um dieses Element zu löschen
 * 
 * The target property returns the element
 * that triggered the event, and not necessarily 
 * the eventlistener's element.
 * 
 *  @param {} e 
 */

function delElement(e) {
    let elem = e.target;
    console.log(elem);
    let list = document.getElementById('todo');
    if (list != elem) {
        var parent = elem.parentNode;
        console.log(parent);
        parent.removeChild(elem);
        return false;
    }
}

/**
 * Addiert new Style-class zum Element
 * @param {*} e 
 */

function addClass(e) {
    let elem = e.target;
    let list = document.getElementById("addCls");
    if (list != elem) {
        elem.classList.add("changefont");
    }
}


/**
 * Funktion für die zufällige Größeerstellung des BorderRadius
 * 
 */

function brdRadius() {
    var grRndmin = Math.ceil(1);
    //console.log(grRndmin);
    var grRndmax = Math.floor(50);
    var grRnd = Math.floor(Math.random() * grRndmax) + grRndmin;
    //console.log(grRnd);
    return grRnd;
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

/**
 * Funktion für die zufällige Farbeerstellung
 */

function colorCreate() {
    var color;
    var colRed = Math.floor(Math.random() * 256);
    var colBlue = Math.floor(Math.random() * 256);
    var colGreen = Math.floor(Math.random() * 256);
    color = "rgb(" + colRed + "," + colGreen + "," + colBlue + ")";
    return color;
}