let numberOfFilms = prompt("Count of films","number");
console.log(numberOfFilms);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let index = 0; index < 2; index++) {
    let film = prompt("Waht is last film you saw","name");
    let cost = prompt("Rate this film from 1 to 10","rate");
    personalMovieDB.movies[film] = cost;
}
console.log(personalMovieDB);