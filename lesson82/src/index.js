import { hello } from './hello.js';
import './css/style.scss';
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

var $ = require("jquery");
const moment = require("moment");


let today = moment().format();
console.log("today: " + today);
let yearNow = moment().format("YYYY");
console.log("year: " + yearNow);
let monatNow = moment().format("M");
console.log("monat: " + monatNow);
let dayNow = moment().format("D");
console.log("days: " + dayNow);
let hourNow = moment().format("hh");
console.log("h: " + hourNow);
let minuteNow = moment().format("m");
console.log("h: " + minuteNow);



let dat = moment("2020-04-30T23:59:59+02:00");
let endYears = moment("2020-04-30T22:59:59+02:00").fromNow();

var b = moment([2019, 8, 17, 22, 0, 0]);
var bMon = b.daysInMonth();
console.log("bmonth:" + bMon);
var a = moment([2020, 3, 30, 23, 59, 59]);
var aMon = a.daysInMonth();
console.log("aMonth:" + aMon);
var years = a.diff(b, 'years');
console.log("years: " + years);
var months = a.diff(b, 'months');
console.log("months: " + months);
var we = a.diff(b, 'week');
console.log("we: " + we);
var day = a.diff(b, 'day');
console.log("day: " + day);
var hours = a.diff(b, 'hours');
console.log("hours: " + hours);
var minutes = a.diff(b, 'minutes');
console.log("minutes: " + minutes);

// var a = moment([2020, 04, 30, 23, 59, 59]);
// var b = moment([2019, 09, 17, 21, 58, 05]);
var res1 = b.to(a);
console.log("res1: " + res1);
let endWeek = dat.endOf('hours').fromNow();
dat.utc();
let hour = dat.hours();
let hours1 = dat.fromNow();
//let hour = moment().endOf(dat.hours()).fromNow();
let dienst = moment().format('dddd');
let week = moment.duration().asWeeks();
console.log(endYears, ", ", endWeek, ", ", hour, ",", hours1, ", ", dat, ",", week, ", ", dienst);
console.log();
console.log(hello("User ;), Wie geht's dir?)) "));
console.log("mir geht's fabelhaft");

var body = document.getElementsByTagName("body")[0];
var dContent = $("<div></div>");
var dCard = $("<div></div>");
var dRow = $("<div></div>");
var dRes = $("<div></div>");
var dInp = $("<div></div>");
$(dContent).addClass("container");
$(dCard).addClass("card ");
$(dRow).addClass("container");
$(dInp).addClass("col");
$(dRes).addClass("col");



$(body).append($(dContent));

// let dImg = $("<div></div>");
// let dContent = $("<div></div>");
// let dRequest = $("<div></div>");
// let dInfo = $("<div></div>");
// $(dImg).addClass("col-10 m-auto col-sm-8 d-flex col-md-8  align-items-center col-lg-6");
// $(dImg).css("border", "1px solid red");
// $(dImg).css("border-radius", "30px");
// let pUs = document.getElementById("user");
// let pMe = document.getElementById("me");
// let pMyAnim = document.createElement("p");
// pMyAnim.textContent = "Meine Haustiere ;)";
// console.log(pMyAnim);
// let imgAnim = document.createElement("img");
// imgAnim.src = "src/img/tiere-braunbaeren.jpg";
// imgAnim.style.borderRadius = "50%";
// imgAnim.className = "";
// console.log(imgAnim);
// pUs.innerHTML = hello("User ;), Wie geht's dir?)) ");
// pMe.innerHTML = "mir geht's fabelhaft!!";

// //body.appendChild(pMyAnim);
// //body.after(pMe, pMyAnim);
// //body.after(pMyAnim, imgAnim);
// //body.after(imgAnim, pMyAnim);
// $(body).append($(dImg));
// $(dImg).before($(pMe));
// $(dImg).append($(pMyAnim));
// $(dImg).append($(imgAnim));
// $(imgAnim).before($(pMyAnim));
// console.log($(dImg));

// $(pMe).css("color", "blue");

// jQuery(document).ready(function(f) {
//     // $("audio").src = src;
// });

class CommingSoon {
    constructor(selector, endDate) {
        this.selector = selector;
        this.endDate = endDate;
    }
}