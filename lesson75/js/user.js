// export var greeting = "welcome back";
var greeting = "welcome back";

// export function hi(user) {
function hi(user) {
    return "Hello " + user + "!";
}

export default function doubleNumber(num) {
    return num * 2;
}

function createEl(el, text, color, fontFam, fontS) {
    let elem = document.createElement(el);
    elem.append(text);
    elem.style.color = color;
    elem.style.fontFamily = fontFam;
    elem.style.fontSize = fontS;
    document.body.append(elem);
}

function createInput(el, value, type, color, fontFam) {
    let elem = document.createElement(el);
    elem.setAttribute("type", type);
    elem.setAttribute("value", value);
    elem.style.color = color;
    // elem.style.fontFamily = fontFam;
    // //  elem.setAttribute("placeholder", text);
    // elem.value = text

    document.body.append(elem);
    console.log(elem);

}



export { greeting, hi, createEl, createInput }