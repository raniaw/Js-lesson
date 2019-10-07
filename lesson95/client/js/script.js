var table = document.getElementById("table");
var thead = document.getElementById("thead");
var tbody = document.getElementById("tbody");
var thTr = document.querySelectorAll("th");

let fetchApi = async function() {
    let resp = await fetch("../json/states.json");
    //let resp = await fetch("http://192.168.8.137:3000/states");
    let myJson = await resp.json();
    let rJs = JSON.stringify(myJson);

    myJson.forEach(item => {
        createTable(item.state, item.capital, item.population, item.image);

        thead.addEventListener("click", sortedTbl);
    })
}

function createTable(state, capital, population, image) {
    let trTb = document.createElement("tr");
    let tdTrSt = document.createElement("td");
    let tdTrCap = document.createElement("td");
    let tdTrPop = document.createElement("td");
    let tdTrIm = document.createElement("td");
    let imgT = document.createElement("img");
    trTb.className = "";
    tdTrSt.className = "px-5 py-4 my-text-td";
    tdTrCap.className = "px-5 py-4 my-text-td";
    tdTrPop.className = "px-5 py-4 my-text-td";
    tdTrIm.className = "m-auto d-flex justify-content-center align-items-center";
    tdTrSt.innerHTML = state;
    tdTrCap.innerHTML = capital;
    tdTrPop.innerHTML = population;
    imgT.setAttribute("src", image);
    imgT.className = "py-4";
    tdTrIm.appendChild(imgT);
    trTb.appendChild(tdTrSt);
    trTb.appendChild(tdTrCap);
    trTb.appendChild(tdTrPop);
    trTb.appendChild(tdTrIm);
    tbody.appendChild(trTb);
}

window.onload = function(e) {
    e.preventDefault()
    fetchApi();
};

function sortedTbl(e) {
    e.preventDefault();
    console.log(e.target);

    var attrBol = aTtrBol(e.target);
    var property = e.target.getAttribute("data_attr");
    console.log(property);

    function aTtrBol(val) {
        if (val.hasAttribute('data_attr') == true) {
            console.log(true);
        }
        return true;
    };

    var ascBol = aScAttrBol(e.target);

    function aScAttrBol(val) {
        if (val.hasAttribute('data_asc') != true) {
            console.log(false);
            return false;
        } else {
            return true;
        }
    };

    let asc = "";
    if (ascBol === false) {
        e.target.setAttribute("data_asc", "asc");
        asc = e.target.getAttribute("data_asc");
    } else {
        thTr.forEach(item => {
            item.removeAttribute("data_asc");
        });
        asc = "";
    }

    fetchSt(property, asc);

    // function fetchSt(property, asc) {}

}

function fetchSt(property, asc) {
    fetch("../json/states.json")
        //let resp = await fetch("http://192.168.8.137:3000/states");
        .then(function(resp) {
            return resp.json();
        })
        .then(function(data) {

            data.forEach(itemData => {

                console.log(property, ", ", asc);
                sortResults(property, asc);

                // function sortResults(property, asc) {}
            })
        })
}

function sortResults(property, asc) {

    fetch("../json/states.json")
        .then(function(resp) {
            return resp.json();
        })
        .then(function(data) {
            data.sort(function(a, b) {

                if (asc) {
                    return (a[property] > b[property]) ? 1 : ((a[property] < b[property]) ? -1 : 0);
                } else {
                    return (b[property] > a[property]) ? 1 : ((b[property] < a[property]) ? -1 : 0);
                }
            });
            tabResults(data);
            // function tabResults(arr) {}
        })
}

function tabResults(arr) {
    var tbodyS = '';
    for (var e in arr) {
        tbodyS += '<tr >' +
            '<td class="px-5 py-4 my-text-td">' + arr[e].state + '</td>' +
            '<td class="px-5 py-4 my-text-td">' + arr[e].capital + '</td>' +
            '<td class="px-5 py-4 my-text-td">' + arr[e].population + '</td>' +
            '<td class=" py-4 m-auto d-flex justify-content-center align-items-center" ><img src="' + arr[e].image + '"</img></td>' +
            '</tr>';
    }
    tbody.innerHTML = tbodyS;
}


let sortT3 = (function(a, b, c) {
    if (a[0] < b[0]) {
        let d = sortT(a, b)
    }
    if (b[0] < c[0]) {
        let d = sortT(b, c)
    }

    return d;
});