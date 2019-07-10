function validate_pass() {
    try {
        let pass = document.getElementById("myinput").value;
        // validation
        if (pass.length == 0) throw "Empty string";
        if (pass.length < 6) throw "The pass is too short";
        if (pass.length > 20) throw "You will never remember it";
        if (!pass.match("[$%!\"\:&\[\]]")) throw "No special characters provided"
        if (!pass.match("[0-9A-Z]")) throw "No alphanumeric provided"

        // append the password into the main page
        var para = document.createElement("p");
        var node = document.createTextNode(pass);
        para.appendChild(node);
        var element = document.getElementById("mydiv");
        element.appendChild(para);
    } catch (err) {
        alert(err);
    }
}