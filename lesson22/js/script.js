function prepareWatches() {
    let d = new Date()
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    mil = d.getMilliseconds();
    watches = h + ":" + m + ":" + s + "." + mil;
    document.getElementById("watches").innerHTML = watches;
}

function showWatches() {
    setInterval(prepareWatches, 1); // 500 milliseconds
}

function setOnlyDate() {
    let d = new Date();
    let y = d.getFullYear();
    let m = d.getMonth() + 1;
    let day = d.getDay();
    document.getElementById("out").innerHTML = y + "-" + m + "-" + day;
}

function getOnlyDate() {
    let d = new Date();
    let dateActuell = "" + d.getFullYear() + "-0" + (d.getMonth() + 1) + "-0" + d.getDay();
    console.log("dateActuell: " + dateActuell);
    return dateActuell;
}

function getTimeStamp() {
    let d = new Date();
    h = d.getHours(); // hh 
    m = d.getMinutes(); // mm
    s = d.getSeconds(); // ss
    output = h + ":" + m + ":" + s;
    document.getElementById("out").innerHTML = output;
}

function getUnixTime() {
    let d = new Date();
    unix_time = d.getTime();
    document.getElementById("out").innerHTML = unix_time;
}

function getCurrentDate() {
    let d = new Date();
    document.getElementById("out").innerHTML = d;
}

function getInputDate() {
    var value = getOnlyDate();
    var x = document.createElement("INPUT");
    x.setAttribute("type", "date");
    x.setAttribute("value", value);
    document.body.appendChild(x);
}