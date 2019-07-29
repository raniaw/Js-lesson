let btn = document.getElementById("myBtn");
// let body=document.getElementsByTagName("body")[0];
// btn.addEventListener("click",function(){
// this.style.color="red";
// this.style.background="green";
// this.style.fontSize="1,5em"
// body.style.background="yellow";
// this.parentElement.remove(); 
//removes the parent(it removes div)
// });let img=document.getElementById("myImg");
let Btn = document.getElementById("Btn");
// img.animate()
function init() {
    btn.style.left = "0px";
    btn.style.top = "0px";
    btn.style.position = "relative";
    img.style.left = "0px";
    img.style.top = "0px";
    img.style.position = "relative";
}
btn.addEventListener("click", function() {
    this.style.left = parseInt(this.style.left) + 10 + "px";
    this.style.top = parseInt(this.style.left) + 10 + "px";
    // alert(parseInt(this.style.left));
});
// Btn.addEventListener("click",function(){
//     img.style.left=parseInt(img.style.left)+10+"px";
// });
function moveRight() {
    img.style.left = parseInt(img.style.left) + 10 + "px";
}

function animationJs() {
    document.getElementById("myImg").animate([
            { transform: 'translateX(0px)' },
            { transform: 'translate(300px,0px)' },
            { transform: 'translate(300px,400px)' },
            { transform: 'translate(0px,400px)' },
            { transform: 'translate(0px,0px)' }
        ],
        // { duration: 4000, iterations: Infinity });
        { duration: 4000, iterations: 1 });
}
Btn.addEventListener("click", function() {
    // setInterval(moveRight,50);
    animationJs();
});
window.onload = init();

function colorCreateDark() {
    var color;
    var max = 256;
    var min = 60;
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
    var min = 120;
    var colRed = Math.floor(Math.random() * (max - min)) + min;

    var colBlue = Math.floor(Math.random() * (max - min)) + min;

    var colGreen = Math.floor(Math.random() * (max - min)) + min;

    color = "rgb(" + colRed + "," + colGreen + "," + colBlue + ")";
    console.log(color);
    return color;
}