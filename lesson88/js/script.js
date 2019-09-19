var body = document.getElementsByTagName("body")[0];
var btnTxt = document.getElementById("txtBtn");
var btnJson = document.getElementById("jsBtn");

var dOut = document.getElementById("output")

btnTxt.addEventListener("click", getText);
btnJson.addEventListener("click", getJson);

function getText() {
    console.log(fetch("fetch-txt"));
    fetch("text.txt")
        .then(function(data) {
            console.log(data);
            return data.text();
        }).then(
            function(res) {
                console.log(res);
                dOut.innerHTML = res;
                return res;
            })
        .catch(function(err) {
            console.log("error, txt-file don't open");
            console.log(err + "error, txt-file don't open");
        })

}

//dOut.innerHTML = getText();

function getJsonHttp() {
    const promise = fetch("https://raw.githubusercontent.com/Mansour-Tumeh/FBW3-Lessons/master/Javascript/fetch/users.json");
    promise
        .then(response => {
            return response.json(); //parsing
        }).then(data => {
            console.log(data);
            dOut.innerHTML = JSON.stringify(data);
        })
}

function getJson() {
    console.log(fetch("fetch-txt"));
    fetch("post.json")
        .then(function(data) {
            console.log(data);
            return data.json();
        }).then(
            function(res) {
                console.log(res);
                dOut.innerHTML = JSON.stringify(res);
                return res;
            })
        .catch(function(err) {
            console.log(err);
        })

}