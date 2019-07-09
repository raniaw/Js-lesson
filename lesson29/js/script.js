/**
 * IE, Chrome, Safari, Opera 15+: [ALT] + accesskey
 * Opera prior version 15: [SHIFT] [ESC] + accesskey
 * Firefox: [ALT] [SHIFT] + accesskey 
 * 
 */

var gLink = document.getElementById("gLink");
gLink.accessKey = "g";
gLink.style.color = colorCreateDark();
gLink.style.fontFamily = 'Great Vibes';
gLink.style.fontSize = "2em";

let bLink = document.addEventListener("click", () => {
    let imgS = document.querySelector("img");
    imgS.style.display = "none";
})

/**
 * the same function as above 
 * 
 * let bLink = document.addEventListener("click", function() {
 * let imgS = document.querySelector("img");
 * imgS.style.display = "none";
 * })
 * 
 */

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