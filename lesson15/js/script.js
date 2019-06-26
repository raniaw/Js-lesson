let movies = [{
        title: "Avengers. endgame",
        hasWatched: true,
        rating: 5
    },
    {
        title: "Supergirl",
        hasWatched: true,
        rating: 3
    },
    {
        title: "Game Of Thrones",
        hasWatched: true,
        rating: 5
    }, {
        title: "Passangers",
        hasWatched: false,
        rating: 5
    }
];
movies.forEach(function(film) {
    if (film.hasWatched == true) {
        console.log("your watched " + film.title + " has " + film.rating + " Stars " + stars(film.rating));

    } else {
        console.log("your don't watched " + film.title + " has " + film.rating + " Stars " + stars(film.rating));
    }
});

function stars(num) {
    let str = "";
    for (let i = 0; i < num; i++) {
        str += " *";
    }
    return str;
}