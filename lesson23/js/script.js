function generatePass() {
    let abc = "abcdefghijklmnopqrstuvwxyz";
    let ABS = abc.toUpperCase();
    let nums = "0123456789";
    let specs = "§$%&()=?!";
    let base = ABS + abc + nums + specs;
    console.log("Base: " + base);
    let inp = document.getElementById("input").value;
    console.log(inp);
    let pass = '';

    for (let i = 0; i < inp; i++) {
        console.log(base.length);
        index = Math.floor(Math.random() * base.length)
        console.log("Index: " + index);
        pass += base[index];
        console.log("Pass: " + pass);
    }
    document.getElementById("output").innerHTML = pass;
}