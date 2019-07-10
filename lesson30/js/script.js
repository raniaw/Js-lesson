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

//beim anklicken fügt einmal ein header
btnChild.addEventListener("click", () => {
    h1Header.appendChild(text);
    body.appendChild(h1Header);
})

// wenn man anklickt fügt immer gleich 3 Li
btnChildLi.addEventListener("click", () => {
    for (var i = 0; i < 3; i++) {
        var elLi = document.createElement("li");
        var txt = document.createTextNode("List : " + i);
        elLi.style.fontFamily = 'Great Vibes';
        elLi.style.fontSize = "1.8em";
        elLi.style.fontWeight = "bolder";
        elLi.style.color = colorCreate();
        elLi.appendChild(txt);
        ul.appendChild(elLi);
    }
});

console.log(body.childNodes.length);

btnChildDel.addEventListener("click", () => {
    ul.removeChild(ul.childNodes[0]);
});
var br = document.createElement("br");

console.log(btnAddTodo);

// btnTodo.addEventListener("click", () => {
//     var todoL = document.querySelector("input").value;
//     console.log(todoL);
//     var pTodo = document.createElement("p");
//     pTodo.setAttribute("id", "todo")
//     console.log(pTodo.setAttribute("id", "todo"));
//     // var txt = document.createTextNode(todoL + " ");

//     body.appendChild(br);
//     console.log(br);
//     pTodo = document.createTextNode(todoL + " ");
//     console.log(pTodo);
//     body.appendChild(pTodo);
//     pTodo.addEventListener('click', elementEntfernen);

// });

btnAddTodo.addEventListener("click", () => {

    var elLi = document.createElement("li");
    var todoL = document.querySelector("input").value;
    var inTodo = document.getElementById("inTodo");
    var txt = document.createTextNode(todoL);
    elLi.style.fontFamily = 'Great Vibes';
    elLi.style.fontSize = "1.8em";
    elLi.style.fontWeight = "bolder";
    elLi.style.color = colorCreate();

    console.log(todoL);
    elLi.appendChild(txt);
    elLi.addEventListener("click", elementEntfernen);
    ulTodo.appendChild(elLi);
    inTodo.value = "";
    inTodo.focus();

});

/**
 * nimmt gezielt ein Element  um zu löschen
 * 
 * The target property returns the element
 * that triggered the event, and not necessarily 
 * the eventlistener's element.
 * 
 *  * @param {} e 
 */
function elementEntfernen(e) {
    var elem = e.target;
    console.log(elem);
    var list = document.getElementById('todo');
    if (list != elem) {
        var parent = elem.parentNode;
        console.log(parent);
        parent.removeChild(elem);
        return false;
    }
}



/**
 * Funktion für die zufällige Größeerstellung für borderRadius
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
 * Funktion für die zufällige helle(Pastel) Farbeerstellung
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


function colorCreate() {
    var color;
    var colRed = Math.floor(Math.random() * 256);
    var colBlue = Math.floor(Math.random() * 256);
    var colGreen = Math.floor(Math.random() * 256);
    color = "rgb(" + colRed + "," + colGreen + "," + colBlue + ")";
    return color;
}