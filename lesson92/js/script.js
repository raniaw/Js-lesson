var inpNum = document.getElementById('inpNum');
var ulJok = document.querySelector('.jokes');
var btnGetNumb = document.querySelector('.get-jokes');
var btnFJoke = document.getElementById('btnFJoke');
var btnJqJoke = document.getElementById('btnJqJoke');


// with AJAX
btnGetNumb.addEventListener('click', getJokes)

function getJokes(e) {
    e.preventDefault()
    console.log(inpNum.value)
    let xhr = new XMLHttpRequest()
    xhr.open('GET', `http://api.icndb.com/jokes/random/${inpNum.value}`, true)
    xhr.onload = function() {
        if (this.status === 200) {

            console.log(this.status)
            let response = JSON.parse(this.responseText);
            console.log(response)
            if (response.type === 'success') {
                let output = "";
                response.value.forEach(function(item) {

                    // do append always
                    // let liJ = document.createElement('li');
                    // liJ.innerHTML = item.joke;
                    // ulJok.appendChild(liJ);

                    // get only item.joke
                    output += `<p>${item.joke}</p>`;
                    ulJok.innerHTML = output;
                })
            }
        }
    }
    xhr.send()
}

// with Fetch
btnFJoke.addEventListener("click", fetchJokes)

function fetchJokes(e) {
    e.preventDefault();

    fetch(`http://api.icndb.com/jokes/random/${inpNum.value}`)
        .then(function(res) {
            return res.json();

        })
        .then(function(data) {
            console.log(data);
            let output = "";
            data.value.forEach(item => {
                console.log(item.joke);
                output += `<p>${item.joke}</p>`;
                ulJok.innerHTML = output;
            });
        })
        .catch(function(err) {
            console.log(err) // give err
        })

}

// with jQuery
btnJqJoke.addEventListener("click", jQueryJokes)

function jQueryJokes(e) {
    e.preventDefault();
    url = `http://api.icndb.com/jokes/random/${$(inpNum).val()}`;
    $.get(url, function(data, status) {
        let output = "";
        if (status === "success") {
            console.log(data);
            data.value.forEach(function(item) {
                output += `<p>${item.joke}</p>`;
            })
            $(ulJok).html(output);
        }
    })


}