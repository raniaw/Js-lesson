const promise = fetch("https://raw.githubusercontent.com/Mansour-Tumeh/FBW3-Lessons/master/Javascript/fetch/users.json");
promise.then(response => {
    return response.json(); //parsing
}).then(users => {
    console.log(users);
})