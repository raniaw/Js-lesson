function checkUser() {
    setTimeout(function() {
        console.log("Checking user...")
    }, 3000)
}

function downloadFile() {
    setTimeout(function() {
        console.log("Downoloading file...")
    }, 2000)
}

function closeSesion() {
    setTimeout(function() {
        console.log("Closing session...")
    }, 1000)
}

function run() {
    checkUser();
    downloadFile();
    closeSesion();
}
run();