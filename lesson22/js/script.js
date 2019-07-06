function getWatches() {
    let d = new Date()
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    mil = d.getMilliseconds();
    watches = h + ":" + m + ":" + s + "." + mil;
    return watches;
}

function showWatches() {
    setInterval(setWatches, 1); // 500 milliseconds

}

function setWatches() {
    var setWatch = document.getElementById("watches").innerHTML = getWatches();
}

function setOnlyDate() {
    var setDate = getOnlyDate();
    document.getElementById("out").innerHTML = setDate;
}

function getOnlyDate() {
    let d = new Date();
    let dateActuell = "" + d.getFullYear() + "-0" + (d.getMonth() + 1) + "-0" + d.getDay();
    //log("dateActuell: " + dateActuell);
    return dateActuell;
}

function setTimeStamp() {
    var setTime = getTimeStamp();
    document.getElementById("out").innerHTML = setTime;
}

function getTimeStamp() {
    let d = new Date();
    h = d.getHours(); // hh 
    m = d.getMinutes(); // mm
    s = d.getSeconds(); // ss
    output = h + ":" + m + ":" + s;
    return output;

}

function setUnixTime() {
    document.getElementById("out").innerHTML = getUnixTime();
}

function getUnixTime() {
    let d = new Date();
    unix_time = d.getTime();
    return unix_time;
}

function setCurrentDate() {
    document.getElementById("out").innerHTML = getCurrentDate();
}

function getCurrentDate() {
    let dCurrent = new Date();
    return dCurrent;
}

function setInputDate() {
    var value = getOnlyDate();
    var x = document.createElement("INPUT");
    x.setAttribute("type", "date");
    x.setAttribute("value", value);
    document.body.appendChild(x);
}