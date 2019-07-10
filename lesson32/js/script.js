function validate() {
    try {
        var age = document.getElementById("age").value;
        var pAge = document.getElementById("pAge");
        if (age >= 18) {
            return pAge.innerHTML = "Ok";
        }
        if (age < 18)
            throw pAge.innerHTML = "Isn't ok";

    } catch (err) {
        console.error(err);
    }

}
/**
 * 
 * 
 * 
 */

function validDiv() {
    try {
        var n = document.getElementById("n").value;
        var m = document.getElementById("m").value;
        var pDiv = document.getElementById("pDiv");
        if (m > 0) {
            return pDiv.innerHTML = n / m;
        }
        if (!(m.isNaN)) {
            if (m === 0 || m == 0) {
                throw pDiv.innerHTML = "divide by 0 is not allowed: 'Number - m' be should> 0";
            }
            throw pDiv.innerHTML = "Is not number";
        }

    } catch (err) {
        console.error(err);
    }

}

/**
 * 
 * 
 * 
 * 
 */

function validPass() {
    try {
        var pass = document.getElementById("pass").value;
        var passDiv = document.getElementById("pPass");

        if (pass.length < 20 || pass.length >= 6) {
            pPass.innerHTML = "Your pass: " + pass;

        }

        if (!(isNaN(pass))) {
            throw pPass.innerHTML = "Your didn't write your password";
        }

        if (pass.length < 6) {
            throw pPass.innerHTML = "Your Password is too short";
        }

        if (pass.length >= 20) {
            throw pPass.innerHTML = "Your Password is too long";
        }

    } catch (err) {
        console.error(err);
    }

}
var txtV = "";
var body = document.getElementsByTagName("body")[0];
var btnPassValid = document.getElementById("bPassValid");
var ulPass = document.createElement("ul");
body.appendChild(ulPass);

btnPassValid.addEventListener("click", () => {
    try {
        var pass = document.getElementById("pass").value;
        /**
         * if(!pass.match("[$!\"\:\[\]§%&]")) throw "No special characters provided";
         * if(!pass.match("[0-9A-Z]")) throw "No alphnumeric provided";
        
         * var format1 = /^[!@#$%^&§*()_+\-=\[\]{};':"\\|,.<>\/?]+$/;
         */
        var format = /[!$@#$%^&§*()_+\-=\[\]{};':"\\|,.<>\/?öäüÖÄÜß]/;
        var char = "!$@#$%^&§*()_+\-=\[\]{};\':\"\\\|,.<>\/?öäüÖÄÜß";
        if (pass.match(format)) {
            txtV = "No special characters provided" + char;
            var elLi = document.createElement("li");
            var txt = document.createTextNode(txtV);
            elLi.style.fontFamily = 'Great Vibes';
            elLi.style.fontSize = "1.8em";
            elLi.style.fontWeight = "bolder";
            elLi.style.color = colorCreate();
            elLi.appendChild(txt);
            ulPass.appendChild(elLi);
            throw txtV;
        } else {
            if (pass.length < 20 && pass.length >= 6) {
                var elLi = document.createElement("li");
                var txt = document.createTextNode("Your pass: " + pass);
                elLi.style.fontFamily = 'Great Vibes';
                elLi.style.fontSize = "1.8em";
                elLi.style.fontWeight = "bolder";
                elLi.style.color = colorCreate();
                elLi.appendChild(txt);
                ulPass.appendChild(elLi);
            }

            if (pass == "") {
                txtV = "Your didn't write your pass! "
                var elLi = document.createElement("li");
                var txt = document.createTextNode(txtV);
                elLi.style.fontFamily = 'Great Vibes';
                elLi.style.fontSize = "1.8em";
                elLi.style.fontWeight = "bolder";
                elLi.style.color = colorCreate();
                elLi.appendChild(txt);
                ulPass.appendChild(elLi);
                throw txtV = "Your didn't write your pass! ";
            }

            if (pass.length < 6) {
                txtV = "Your Password is too short"
                var elLi = document.createElement("li");
                var txt = document.createTextNode(txtV);
                elLi.style.fontFamily = 'Great Vibes';
                elLi.style.fontSize = "1.8em";
                elLi.style.fontWeight = "bolder";
                elLi.style.color = colorCreate();
                elLi.appendChild(txt);
                ulPass.appendChild(elLi);
                throw txtV = "Your Password is too short";
            }

            if (pass.length >= 20) {
                txtV = "Your Password is too long";
                var elLi = document.createElement("li");
                var txt = document.createTextNode(txtV);
                elLi.style.fontFamily = 'Great Vibes';
                elLi.style.fontSize = "1.8em";
                elLi.style.fontWeight = "bolder";
                elLi.style.color = colorCreate();
                elLi.appendChild(txt);
                ulPass.appendChild(elLi);
                throw txtV = "Your Password is too long";
            }
        }
    } catch (err) {
        console.error(err);
    }

});


function colorCreate() {
    var color;
    var colRed = Math.floor(Math.random() * 256);
    var colBlue = Math.floor(Math.random() * 256);
    var colGreen = Math.floor(Math.random() * 256);
    color = "rgb(" + colRed + "," + colGreen + "," + colBlue + ")";
    return color;
}

// let val= 0;
// try {
//     var val = document.getElementById("id").innerHTML;
//     console.log(val);

// } catch (err) {
//     console.log(val);
//     if (val === undefined) {
//         console.error("ID is not exist");
//         console.error("Error name: " + err.name);
//         console.error("Error message: " + err.message);
//     }
// } finally {
//     console.log("Finally execute always");
// }