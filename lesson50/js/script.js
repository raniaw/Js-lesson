let pass = document.querySelector(".password");

function checkLength(input) {
    if (input.value.length >= 8) {
        document.querySelector(".length").style.color = "blue";
    } else {
        document.querySelector(".length").style.color = "red";
    }
}

function checkLower(input) {
    if (input.value.match("[a-z]+")) {
        document.querySelector(".lowercase").style.color = "blue";
    } else {
        document.querySelector(".lowercase").style.color = "red";
    }
}

function checkUpper(input) {
    if (input.value.match("[A-Z]+")) {
        document.querySelector(".uppercase").style.color = "blue";
    } else {
        document.querySelector(".uppercase").style.color = "red";
    }
}

function checkNumberSpez(input) {
    if (input.value.match("[0-9]+") || input.value.match("[\\§\\$\\&\\!\\?\\+\\(\\)\\[\\]]+")) {
        document.querySelector(".special").style.color = "blue";
    } else {
        document.querySelector(".special").style.color = "red";
    }
}

pass.addEventListener("keyup", function() {
    checkLength(pass);
    checkUpper(pass);
    checkLower(pass);
    checkNumberSpez(pass);
});