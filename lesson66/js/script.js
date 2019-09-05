var body = document.getElementsByTagName("body")[0];
var fTask = document.getElementById("task-form");
var dTaskList = document.getElementById("task-list");
var dStorage = document.getElementById("storage");
var inpTask = document.getElementById("task");
var pErr = document.getElementById("pErr");
var ul = document.createElement("ul");
var btnAddStorage = document.getElementById("storage");
ul.setAttribute("class", "card card-body text-center mt-5");



fTask.addEventListener("submit", addTask);

// body.appendChild(ul);
dStorage.appendChild(ul);

function loadEventListner() {

}

function createH5(text) {
    let h5 = document.createElement("h5");
    let txtNode = document.createTextNode(text);
    h5.appendChild(txtNode);
    dTaskList.appendChild(h5);
    var btnDel = document.createElement("button");
    btnDel.innerHTML = "X";
    btnDel.setAttribute("class", "btn btn-sm btn-danger float-right delete");
    btnDel.addEventListener("click", removeItem);
    h5.appendChild(btnDel);
    dTaskList.appendChild(h5);
}

function addTask(e) {
    if (inpTask.value == null || inpTask.value == "") {
        e.preventDefault();
        pErr.style.color = "red";
        pErr.innerHTML = "input is empty";
    } else {
        e.preventDefault();
        pErr.innerHTML = "";
        createH5(inpTask.value);
        // getTask(inpTask.value);
        storeToLocalStorage(inpTask.value);
        //  getTask(inpTask.value);
    }
    inpTask.value = "";
}

function removeItem(e) {
    let eDel = e.target;

    if (eDel.className == "btn btn-sm btn-danger float-right delete") {
        eDel.parentElement.remove();
        delLocalStorage(e.target.parentElement);
    }

}


function storeToLocalStorage(task) {
    let tasks;
    for (let i = 0; i < localStorage.length; i++) {

        console.log(localStorage.key(i) + " Item " + localStorage.getItem(localStorage.key(i)));
    }

    if (localStorage.getItem("tasks") === null) {
        console.log("localStorage " + task);
        tasks = [];

    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.push(task);
    console.log(tasks);
    // store the tasks in localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTask(task) {
    if (localStorage.getItem("tasks") === null) {
        console.log("getTask localStorage " + task);
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
        tasks.forEach((item) => {
            console.log(item);
            let li = document.createElement("li");
            var txtLi = document.createTextNode(" Task Storage " + item);
            li.style.fontSize = "1.8em";
            li.style.color = colorCreateDark();
            li.appendChild(txtLi);
            ul.appendChild(li);
        })
    }
    tasks.push(task);
    console.log(tasks);
    // store the tasks in localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // task.pop(task);
    // console.log(tasks);
    // store the tasks in localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));

}
btnAddStorage.addEventListener("click", getTask(inpTask.value));

function delLocalStorage(task) {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.forEach((item, index) => {
        console.log(task.firstChild.textContent);
        if (task.firstChild.textContent === item) {
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


/**
 * Funktion für die zufällige dunkle Farbeerstellung
 */

function colorCreateDark() {
    var color;
    var min = Math.ceil(0);
    var max = Math.floor(160);

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
    var min = Math.ceil(180);
    var max = Math.floor(256);

    var colRed = Math.floor(Math.random() * (max - min)) + min;
    var colBlue = Math.floor(Math.random() * (max - min)) + min;
    var colGreen = Math.floor(Math.random() * (max - min)) + min;

    color = "rgb(" + colRed + "," + colGreen + "," + colBlue + ")";

    return color;
}