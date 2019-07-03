let img = document.getElementById("myImg");
let btn = document.getElementById("myBtn");

function changeImg() {
    if (img.getAttribute("src") == "img/java.jpg") {
        img.setAttribute("src", "img/javascript.png");
    } else {
        img.setAttribute("src", "img/java.jpg");
    }

}

btn.addEventListener("click", changeImg);