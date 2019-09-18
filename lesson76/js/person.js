class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

function printName(human) {
    console.log("The name human is" + ` ${human.name}`);
    return "The name human is" + ` ${human.name}` + "."
}

function printAge(human) {
    console.log(`${human.name} is ` + `${human.age}` + " years  old");
    return `${human.name} is ` + `${human.age}` + " years  old" + "."
}

export default Person;
export {
    printName,
    printAge
}