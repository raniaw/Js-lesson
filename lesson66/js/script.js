var body = document.getElementsByTagName("body")[0];
var fTask = document.getElementById("task-form");
var dTaskList = document.getElementById("task-list");
var inpTask = document.getElementById("task");
var pErr = document.getElementById("pErr");
fTask.addEventListener("submit", addTask);

function loadEventListner() {

}

function storeToLocalStorage(task) {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
        console.log("localStorage" + task);
        tasks = [];

    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.push(task);
    console.log(tasks);
    // store the tasks in localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


function addTask(e) {
    if (inpTask.value == null || inpTask.value == "") {
        e.preventDefault();
        pErr.style.color = "red";
        pErr.innerHTML = "input is empty";
    } else {
        e.preventDefault();
        pErr.innerHTML = "";
        let h5 = document.createElement("h5");
        let txtNode = document.createTextNode(inpTask.value);
        h5.appendChild(txtNode);
        dTaskList.appendChild(h5);
        var btnDel = document.createElement("button");
        btnDel.innerHTML = "X";
        btnDel.setAttribute("class", "btn btn-sm btn-danger float-right delete");
        btnDel.addEventListener("click", removeItem);
        h5.appendChild(btnDel);
        storeToLocalStorage(inpTask.value);
        dTaskList.appendChild(h5);

    }
    inpTask.value = "";
}

function removeItem(e) {
    let eDel = e.target;

    if (eDel.className == "btn btn-sm btn-danger float-right delete") {
        eDel.parentElement.remove();
    }

}
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
    console.log(color);
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
    console.log(color);
    return color;
}