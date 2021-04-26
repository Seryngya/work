let numberOfFilms;

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};
console.log(personalMovieDB);
personalMovieDB.rememberMyFilm = function () {
for (let i = 0; i < 2; i++) {
    let film = prompt("Waht is last film you saw","name");
    let cost = prompt("Rate this film from 1 to 10","rate");
    if( !(film.length > 0 && film.length < 50 && cost.length > 0 && cost.length < 50) ){
        i--;
        console.log("111");
        continue;
    }
    personalMovieDB.movies[film] = cost;
}
};
personalMovieDB.rememberMyFilm();
console.log(personalMovieDB);