// all function with arrow

var body = document.getElementsByTagName("body")[0];
var btnTxt = document.getElementById("txtBtn");
var btnJson = document.getElementById("jsBtn");
var btnApiJson = document.getElementById("jsApiBtn");

var ulOut = document.getElementById("output")

let getText = () => {
    console.log(fetch("fetch-txt"));
    fetch("text.txt")
        .then(data => {
            console.log(data);
            return data.text();
        }).then(res => {
            console.log(res);
            ulOut.innerHTML = res;
            return res;
        })
        .catch(err => {
            console.log("error, txt-file don't open");
            console.log(err + "error, txt-file don't open");
        })
}

btnTxt.addEventListener("click", getText);

let getJsonHttp = () => {
    fetch("https://api.github.com/users")

    .then(data => {
            console.log(data);
            return data.json();
        }).then(res => {
            console.log(res);
            ulOut.innerText = "";
            res.forEach(element => {
                //dOut.innerHTML += element.title + " ";// inline
                ulOut.innerHTML += "<li>" + element.login + " <a href='" + element.html_url + "'> link</a></li>"; //list
            });
            // dOut.innerHTML = JSON.stringify(res);
            return res;
        })
        .catch(err => {
            console.log(err);
        })
}
btnApiJson.addEventListener("click", getJsonHttp);

let getJson = () => {
    console.log(fetch("fetch-txt"));
    fetch("post.json")
        .then(data => {
            console.log(data);
            return data.json();
        }).then(res => {
            console.log(res);
            ulOut.innerText = "";
            res.forEach(element => {
                //dOut.innerHTML += element.title + " ";// inline
                ulOut.innerHTML += "<li>" + element.title + "</li>"; //list
            });
            // dOut.innerHTML = JSON.stringify(res);
            return res;
        })
        .catch(err => {
            console.log(err);
        })
}
btnJson.addEventListener("click", getJson);