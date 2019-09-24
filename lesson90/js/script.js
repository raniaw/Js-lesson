var body = document.getElementsByTagName("body")[0];

let btnT = document.getElementById("btnT");
let btnJson = document.getElementById("btnJ");
let btnJsonHttp = document.getElementById("btnJHttp");
let btnJsonHttpUS = document.getElementById("btnJHttpUs");
let frmPost = document.getElementById("addPost");
let btnInpPost = document.getElementById("btnInpPost");

let inpTitle = document.getElementById("title")
let textArBody = document.getElementById("body")


let br = document.createElement("br");

let h5Us = document.createElement("h5");
let h5PostHttp = document.createElement("h5");
let h5UserHttp = document.createElement("h5");

var ulUs = document.createElement("ul");
var ulPost = document.createElement("ul");
var dUserHttp = document.createElement("div");


btnT.addEventListener("click", getText);
btnJson.addEventListener("click", getJson);
btnJsonHttp.addEventListener("click", getJsonHttp);
btnJsonHttpUS.addEventListener("click", getJsonHttpUS);
frmPost.addEventListener("submit", createPost);

h5Us.innerHTML = "Users";
h5PostHttp.innerHTML = "Users Post Http";
h5UserHttp.innerHTML = "Users Http";
body.appendChild(br);
body.appendChild(br);
body.appendChild(h5Us);
body.appendChild(ulUs);
body.appendChild(h5PostHttp);
body.appendChild(ulPost);
body.appendChild(h5UserHttp);
body.appendChild(dUserHttp);

function getText() {
    fetch("text.txt")
        .then(function(res) {
            return res.text();
        })
        .then(function(data) {
            console.log(data);
        }).catch(function(err) {
            console.log(err) // give 
        })
}

function getJson() {
    fetch("data.json")
        .then(function(res) {
            return res.json();
            // return res.json();
            // return res.text();
        })
        .then(function(data) {
            console.log(data);

            data.forEach(item => {
                console.log(item.name, " is ", item.age, " years old")
                let liUs = document.createElement("li");
                liUs.innerHTML = item.name, " is ", item.age, " years old";
                ulUs.appendChild(liUs);
            });


        }).catch(function(err) {
            console.log(err) // give 
        })
}

function getJsonHttp() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(function(res) {
            return res.json();
            // return res.json();
            // return res.text();
        })
        .then(function(data) {
            console.log(data);

            data.forEach(item => {
                console.log(item.id, " has title ", item.title, " and body", item.body)
                let liPostHttp = document.createElement("li");
                liPostHttp.innerHTML = item.id + " has title " + item.title + " and body" + item.body, " ";
                ulPost.appendChild(liPostHttp);
            });


        }).catch(function(err) {
            console.log(err) // give 
        })
}


async function getJsonHttpUS() {
    var response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);
    data.forEach(item => {
        console.log();
        var dUser = document.createElement("div");
        var h3Us = document.createElement("h3");

        let h4Adrr = document.createElement("h4");
        let h4Work = document.createElement("h4");
        let ulJsUs = document.createElement("ul");

        let pCity = document.createElement("p");
        let pStreet = document.createElement("p");
        let pSuite = document.createElement("p");
        let pEmail = document.createElement("p");
        let pUsName = document.createElement("p");
        let pPhone = document.createElement("p");
        let pWebsite = document.createElement("p");

        let pCompName = document.createElement("p");
        let pCatchPhrase = document.createElement("p");

        h3Us.className = "text-center text-info p-2"
        ulJsUs.className = " list-group-flush";
        h4Adrr.className = "p-3";
        h4Work.className = "p-3";
        pCity.className = "list-group-item p-3";
        pStreet.className = "list-group-item p-3";
        pEmail.className = "list-group-item p-3";
        pSuite.className = "list-group-item p-3";
        pUsName.className = "list-group-item p-3";
        pPhone.className = "list-group-item p-3";
        pWebsite.className = "list-group-item p-3";
        pCompName.className = "list-group-item p-3";
        pCatchPhrase.className = "list-group-item p-3";

        h3Us.innerHTML = item.name;
        h4Adrr.innerHTML = "Personal Data";
        pCity.innerHTML = "City: " + item.address.city;
        pStreet.innerHTML = "Street: " + item.address.street;
        pSuite.innerHTML = "Suite: " + item.address.suite;
        pEmail.innerHTML = "Email: " + item.email;
        pUsName.innerHTML = "Username: " + item.username;
        pPhone.innerHTML = "Phone: " + item.phone;
        pWebsite.innerHTML = "Web-Site: " + item.website;
        h4Work.innerHTML = "Work";
        pCompName.innerHTML = "Company: " + item.company.name;
        pCatchPhrase.innerHTML = "Catch Phrase: " + item.company.pCatchPhrase


        ulJsUs.appendChild(h4Adrr);
        ulJsUs.appendChild(pCity);
        ulJsUs.appendChild(pStreet);
        ulJsUs.appendChild(pSuite);
        ulJsUs.appendChild(pEmail);
        ulJsUs.appendChild(pUsName);
        ulJsUs.appendChild(pPhone);
        ulJsUs.appendChild(pWebsite);
        ulJsUs.appendChild(h4Work);
        ulJsUs.appendChild(pCompName);
        ulJsUs.appendChild(pCatchPhrase);

        dUser.appendChild(h3Us);
        dUser.appendChild(ulJsUs);
        // dUser.appendChild(ulJsUs);
        dUserHttp.appendChild(h3Us);
        dUserHttp.appendChild(dUser);
        dUserHttp.className = "m-5";
        //document.querySelectorAll("p").className = "text-info";
        // ulUserHttp.appendChild(item.name + " has Username <li>" + item.username + "</li><li> work in the company" + item.company.name + "</li><li> Email:" + item.email + "</li><li>Phone: " + item.phone + "</li>");
        return dUserHttp;
    })

}

//
function createPost(e) {
    e.preventDefault();
    console.log("new post");
    var response = fetch("https://jsonplaceholder.typicode.com/posts");
    //let data = response.json();

    fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Accept": 'application/json, text/plain, "/"',
                "Content-type": 'application/json'
            },
            body: JSON.stringify({ title: inpTitle.value, body: textArBody.value })
        })
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            console.log(data);
        })
}