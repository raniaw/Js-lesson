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

function getOnlyDate() {
    let d = new Date();
    let y = d.getFullYear();
    let m = d.getMonth() + 1;
    let day = d.getDay();
    document.getElementById("out").innerHTML = y + "." + m + "." + day;
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