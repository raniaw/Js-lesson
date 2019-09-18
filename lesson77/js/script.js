var pR = document.getElementById("pR");
var pRWhite = document.getElementById("pRWhite");
var pRHungry = document.getElementById("pRHungry");
var pRCall = document.getElementById("pRCall");
var pRGrey = document.getElementById("pRGrey");

let rabbit = {};
rabbit.speak = function(speak) {
    console.log(speak);
    return speak;
}

pR.innerHTML = rabbit.speak("hi");

function speak(text) {
    return `the ${this.type} rabbit says ${text}`;
}

let whiteRabbit = {
    type: "white",
    speak
}

let hungryRabbit = {
    type: "hungry",
    speak
}


let greyRabbit = Object.create(rabbit);
greyRabbit.type = "grey";


pRWhite.innerHTML = whiteRabbit.speak("hello");
pRHungry.innerHTML = hungryRabbit.speak("I'm hungry");
pRCall.innerHTML = speak.call(hungryRabbit, "i'm not hungry more");
pRGrey.innerHTML = greyRabbit.speak("I'm grey rabbit");