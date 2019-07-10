// let val= 0;
try {
    var val = document.getElementById("id").innerHTML;
    console.log(val);

} catch (err) {
    console.log(val);
    if (val === undefined) {
        console.error("ID is not exist");
        console.error("Error name: " + err.name);
        console.error("Error message: " + err.message);
    }
} finally {
    console.log("Finally execute always");
}