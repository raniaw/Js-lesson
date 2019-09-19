var body = document.getElementsByTagName("body")[0];
var btnTxt = document.getElementById("txtBtn");
var btnJson = document.getElementById("jsBtn");
var btnApiJson = document.getElementById("jsApiBtn");

var ulOut = document.getElementById("output")

btnTxt.addEventListener("click", getText);
btnJson.addEventListener("click", getJson);
btnApiJson.addEventListener("click", getJsonHttp);

function getText() {
    console.log(fetch("fetch-txt"));
    fetch("text.txt")
        .then(function(data) {
            console.log(data);
            return data.text();
        }).then(
            function(res) {
                console.log(res);
                ulOut.innerHTML = res;
                return res;
            })
        .catch(function(err) {
            console.log("error, txt-file don't open");
            console.log(err + "error, txt-file don't open");
        })

}

//ulOut.innerHTML = getText();

function getJsonHttp() {
    fetch("https://api.github.com/users")

    .then(function(data) {
            console.log(data);
            return data.json();
        }).then(
            function(res) {
                console.log(res);
                ulOut.innerText = "";
                res.forEach(element => {
                    //dOut.innerHTML += element.title + " ";// inline
                    ulOut.innerHTML += "<li>" + element.login + " <img src='" + element.avatar_url + "'></li>"; //list
                });
                // dOut.innerHTML = JSON.stringify(res);
                return res;
            })
        .catch(function(err) {
            console.log(err);
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
                ulOut.innerText = "";
                res.forEach(element => {
                    //dOut.innerHTML += element.title + " ";// inline
                    ulOut.innerHTML += "<li>" + element.title + "</li>"; //list
                });
                // dOut.innerHTML = JSON.stringify(res);
                return res;
            })
        .catch(function(err) {
            console.log(err);
        })

}