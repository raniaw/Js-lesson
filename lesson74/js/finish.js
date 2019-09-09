let tbody = document.querySelector("tbody");
let count = localStorage.length;
console.log(count);
// console.log(localStorage.getItem("address"));
let storage = localStorage;
//console.log(storage);
let caption = ["First name", "Last name", "Birth Date", "Address", "Zip Code", "House Number", "User Name", "Password", "Photo"]
    // console.log(caption);
    // console.log(Object.keys(storage));
caption.forEach(element => {
    console.log(element);
    console.log(storage[element]);
    if (element != "Photo") {

        let trCaption = document.createElement("tr");
        let tdCaption = document.createElement("td");
        let trData = document.createElement("tr");
        let txtCaption = document.createTextNode(element);
        let tdData = document.createElement("td");
        let txtData = document.createTextNode(storage[element]);
        tdCaption.appendChild(txtCaption);
        trCaption.appendChild(tdCaption);
        tdData.appendChild(txtData);
        trData.appendChild(tdData);
        tbody.appendChild(trCaption);
        tbody.appendChild(trData);
    } else {
        // let img = document.createElement("img");
        let img = new Image();

        var res = storage[element].replace(/\\/g, "/");
        img.src = res.slice(-5);
        console.log(img.src);

        let trCaption = document.createElement("tr");
        let tdCaption = document.createElement("td");
        let trData = document.createElement("tr");
        let txtCaption = document.createTextNode(element);
        let tdData = document.createElement("td");
        tdCaption.appendChild(txtCaption);
        trCaption.appendChild(tdCaption);
        tdData.appendChild(img);
        trData.appendChild(tdData);
        tbody.appendChild(trCaption);
        tbody.appendChild(trData);

    }
});

for (let value of Object.values(storage)) {
    //localStorage.remove();
}