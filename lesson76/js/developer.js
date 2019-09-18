var objDeveloper = new Object();
// {
//     name: "",
//     age: "",
//     job: ""
//}

console.log(objDeveloper);

function printName(name) {
    objDeveloper.name = name;
    console.log("The name human is" + ` ${objDeveloper.name}`);
    return "The name human is" + ` ${objDeveloper.name}` + "."
}

function printAge(age) {
    objDeveloper.age = age;
    console.log(`${objDeveloper.name} is ` + `${objDeveloper.age}` + " years  old.");
    return `${objDeveloper.name} is ` + `${objDeveloper.age}` + " years  old."
}

function printJob(job) {
    objDeveloper.job = job;
    console.log(`${ objDeveloper.name} is working as ` + `${ objDeveloper.job}` + ".");
    return `${ objDeveloper.name} is working as ` + `${ objDeveloper.job}` + "."
}
export default objDeveloper;
export {
    printName,
    printAge,
    printJob
}


////
// mit class 

// class Developer {
//     constructor(name, age, job) {
//         this.name = name;
//         this.age = age;
//         this.job = job
//     }
// }

// function printName(human) {
//     console.log("The name human is" + ` ${human.name}`);
//     return "The name human is" + ` ${human.name}` + "."
// }

// function printAge(human) {
//     console.log(`${human.name} is ` + `${human.age}` + " years  old");
//     return `${human.name} is ` + `${human.age}` + " years  old" + "."
// }

// function printJob(human) {
//     console.log(`${human.name} is working as ` + `${human.job}` + ".");
//     return `${human.name} is working as ` + `${human.job}` + "."
// }
// export default Developer;
// export {
//     printName,
//     printAge,
//     printJob
// }