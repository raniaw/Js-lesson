//setzt immer neue value und bei schließen Browser löscht diese Session

let inpS = document.getElementById("inpS");
inpS.addEventListener("change", sesStorage);

function sesStorage() {
    let save = sessionStorage.setItem("save", inpS.value);
    console.log(save);
}
if (sessionStorage.getItem("save")) {
    inpS.value = sessionStorage.getItem("save");
}

/** setzt einmal value in localStorage 
 *  wenn man nicht löscht wird immer in browser bleiben
 *  löscht man mit 'removeItem'
 */

let inpL = document.getElementById("inpL");
inpL.addEventListener("change", locStorage);

function locStorage(e) {
    e.preventDefault();
    let save = "";
    if (save == "") {
        localStorage.setItem("save", inpL.value);
    } else {
        getLocalStorage();
    }
}

function getLocalStorage() {
    if (localStorage.getItem("save")) {
        inpL.value = "";
        inpLfocus();
        inpL.value = localtorage.getItem("save");
        console.log(save);
    }
}