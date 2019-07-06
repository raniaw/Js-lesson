// Get the button, and when the user clicks on it, execute myFunction
document.getElementById("myBtn").onclick = function() { toggleShow() };

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function toggleShow() {
    var x = document.getElementById("myDropdown").classList.toggle("show");
    console.log(x);
    if (x == false) {
        var y = document.getElementById("myBtn");
        y.style.backgroundColor = colorCreateDark();
    } else {
        var z = document.getElementsByClassName("dropdown-content");
        z[0].style.backgroundColor = colorCreatePastel();
    }
}

function colorCreateDark() {
    var color;
    var max = 256;
    var min = 80;
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

function colorCreatePastel() {
    var color;
    var max = 256;
    var min = 160;
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