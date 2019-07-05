function moveDiv() {
    var elem = document.getElementById("animate");
    var pos = 60;
    var id = setInterval(frame, 500);

    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}