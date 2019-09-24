import { hello } from './hello.js';
import './css/style.scss';
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

var $ = require("jquery");
const moment = require("moment");

var body = document.getElementsByTagName("body")[0];

var dContent = $("<div></div>");
var dCard = $("<div></div>");
var dRow = $("<div></div>");
var dRes = $("<div></div>");
var dInp = $("<div></div>");
var h3 = $("<h3></h3>");
var pM = $("<p></p>");
var pD = $("<p></p>");
var pH = $("<p></p>");
var pMin = $("<p></p>");
var pSec = $("<p></p>");

$(dContent).addClass("container-fluid border rounded d-flex justify-content-center m-auto ");
$(dCard).addClass("card m-auto p-5");
$(dRow).addClass("row col m-auto shadow rounded");

$(dInp).css({
    "background": "linear-gradient( to left top, rgb(7, 29, 0), rgb(156, 168, 89)",
    "color": "#fff",
    "height": "100%",
    "width": "100%",
    "font-family": "Syncopate"

})
$(dInp).addClass("col p-5 d-flex align-self-center justify-content-center ");
$(dRes).css({

    "height": "100%",
    "width": "100%",
    "margin": "0",
    "font-family": "Poiret One"

})
$(dRes).addClass("col p-5");

$(dInp).append($(h3));
$(dRes).append($(pM));
$(dRes).append($(pD));
$(dRes).append($(pH));
$(dRes).append($(pMin));
$(dRes).append($(pSec));

$(dRow).append($(dInp));
$(dRow).append($(dRes));
$(dCard).append($(dRow));
$(dContent).append($(dCard));
$(dContent).css("height", "100vh");

$(body).append($(dContent));

h3.addClass("d-flex align-self-center justify-content-center text-center");
$(h3).css({

    "font-size": "38px"

})
h3.html("comming soon")

class CommingSoon {
    constructor(selector, endDate, timeUnit) {
        this.selector = selector;
        this.endDate = endDate;
        this.timeUnit = timeUnit;
    }
    showDiffData() {
        return this.selector.html("<span>" + this.endDate + "</span> " + this.timeUnit);
    }
}
let date = moment();
let today = date.format();

var endYears = moment("2020-04-30T23:59:59+02:00").fromNow();
var endD = moment("2020-04-30T23:59:59+02:00");

var nowDate = {
    data: today,
    year: date.format("YYYY"),
    months: date.format("M"),
    days: date.format("D"),
    hours: date.format("H"),
    min: date.format("m"),
    sec: date.format("s")
}

var endDate = {
    data: endD,
    year: endD.format("YYYY"),
    months: endD.format("M"),
    days: endD.format("D"),
    hours: endD.format("H"),
    min: endD.format("m"),
    sec: endD.format("s")
}

let pMon = new CommingSoon(pM, endYears, "");
pMon.showDiffData();
let pDay = new CommingSoon(pD, diffData(nowDate.days, endDate.days), "days");
pDay.showDiffData();

let pHours = new CommingSoon(pH, diffData(nowDate.hours, endDate.hours), "hours");
pHours.showDiffData();
let pMinutes = new CommingSoon(pMin, diffData(nowDate.min, endDate.min), "minutes");
pMinutes.showDiffData();
let pSeconds = new CommingSoon(pSec, diffData(nowDate.sec, endDate.sec), "seconds");
pSeconds.showDiffData();


//different between the nowtime and the endtime
function diffData(nowDate, endDate) {
    console.log(endDate, ", ", nowDate)
    return endDate - nowDate;
}