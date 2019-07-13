function popUpShow() {
    var x = document.getElementById("popUp");
    x.className = "show";
    setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
}