var ulPost = document.getElementById("post");
const posts = [{
        title: "Post N1",
        body: "this ist the Post one"
    },
    {
        title: "Post N2",
        body: "this ist the Post two"
    },
    {
        title: "Post N3",
        body: "this ist the Post three"
    }
]

function createPost(post) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            posts.push(post);
            let error = false;
            if (!error) {
                resolve("new post added to the array");
            } else {
                reject("is not added new data")
            }
        }, 3000); //after 3 seconds add new data

    })


}
var output = "";

function getPosts() {
    return new Promise((resolve, reject) => {

        setTimeout(function() {
            posts.forEach(item => {
                let li = document.createElement("li");
                li.innerHTML = item.title;
                ulPost.appendChild(li);
                // output += `<li>${item.title}</li>`
            })

            // ulPost.innerHTML += output;
            resolve("data added");
        });

    })
};




createPost({
        title: "Post N4",
        body: "this post four added"
    }).then(
        function(value) {
            console.log(value);
            return getPosts();
        })
    .catch(
        function(value) {
            console.log("error, data is not added");
        })

console.log(posts);