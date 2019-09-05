let tbody = document.querySelector("tbody");
let count = localStorage.length;
console.log(count);
// console.log(localStorage.getItem("address"));
let storage = localStorage;
//console.log(storage);
let caption = ["First name", "Last name", "Birth Date", "Address", "Zip Code", "House Number", "User", "Password", "Photo"]
    // console.log(caption);
    // console.log(Object.keys(storage));
caption.forEach(element => {
    console.log(element);
    console.log(storage[element]);
    let trCaption = document.createElement("tr");
    let tdCaption = document.createElement("td");
    let trData = document.createElement("tr");
    let txtCaption = document.createTextNode(element);
    let tdData = document.createElement("td");

    if (element != "Photo") {

        let txtData = document.createTextNode(storage[element]);

        tdData.appendChild(txtData);

    } else {
        // let img = document.createElement("img");
        let img = new Image();

        var res = storage[element].replace(/\\/g, "/");
        img.src = res.slice(-5);
        console.log(img.src);

        tdData.appendChild(img);


    }
    tdCaption.appendChild(txtCaption);
    trCaption.appendChild(tdCaption);
    trData.appendChild(tdData);
    tbody.appendChild(trCaption);
    tbody.appendChild(trData);
});

for (let value of Object.values(storage)) {
    //localStorage.remove();
}