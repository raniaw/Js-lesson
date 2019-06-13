var str = prompt("Please write your message here...", "Your text here");
alert(str);
console.log(str);

var psw = prompt("Please create your password here...");
if (psw.length == 0) {
    var versuche = 3;
    for (var i = 0; i < versuche; i++) {
        psw = prompt("Your passpord is empty, please try again");
    }
    if (psw.length == 0) {
        alert("Der vorgang wirde abgebrochen");
    } else if (psw.length > 0 && psw.length < 8) {
        psw = prompt("Your Password is too weak, please try again");
    }
} else if (psw.length > 0 && psw.length < 8) {
    var versuche = 3;
    for (var i = 0; i < versuche; i++) {
        psw = prompt("Your Password is too weak, please try again");
    }

    alert("Der vorgang wirde abgebrochen");
} else {
    alert("Succesful");
    lert("your password: " + psw);
    console.log(psw);

}
a