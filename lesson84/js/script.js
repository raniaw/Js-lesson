//  the same without callback
function checkUser() {
    //return a promise with resolve and reject function
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log("Checking user...");
            resolve("success check the user");
        }, 3000);
    });

}

function downloadFile() {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log("Downloading file...");
            resolve("success downloadig the file");
        }, 2000);
    });
}

function closeSesion() {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log("Closing session...");
            resolve("success closing session");
        }, 1000);
    });
}

function run() {
    const promise = checkUser().then(
        function(value) {
            console.log(value);
            return downloadFile();
        }
    ).then(
        function(value) {
            console.log(value);
            return closeSesion();
        }
    )


}
run();

// the same with callback

// function checkUser(callback) {
//     setTimeout(function() {
//         console.log("Checking user...");
//         callback();
//     }, 3000)
// }

// function downloadFile(callback) {
//     setTimeout(function() {
//         console.log("Downloading file...");
//         callback();
//     }, 2000)
// }

// function closeSesion(callback) {
//     setTimeout(function() {
//         console.log("Closing session...");
//         callback();
//     }, 1000)
// }

// function run() {
//     checkUser(function() {
//         downloadFile(function() {
//             closeSesion(function() {

//             });
//         });
//     });
// }
// run();