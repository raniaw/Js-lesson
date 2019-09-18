// the same with callback
function checkUser(callback) {
    setTimeout(function() {
        console.log("Checking user...");
        callback();
    }, 3000)
}

function downloadFile(callback) {
    setTimeout(function() {
        console.log("Downoloading file...");
        callback();
    }, 2000)
}

function closeSesion(callback) {
    setTimeout(function() {
        console.log("Closing session...");
        callback();
    }, 1000)
}

function run() {
    checkUser(function() {
        downloadFile(function() {
            closeSesion(function() {

            });
        });
    });
}
run();

// tha same without callback
// function checkUser() {
//     setTimeout(function() {
//         console.log("Checking user...")
//     }, 3000)
// }

// function downloadFile() {
//     setTimeout(function() {
//         console.log("Downoloading file...")
//     }, 2000)
// }

// function closeSesion() {
//     setTimeout(function() {
//         console.log("Closing session...")
//     }, 1000)
// }

// function run() {
//     checkUser();
//     downloadFile();
//     closeSesion();
// }
// run();