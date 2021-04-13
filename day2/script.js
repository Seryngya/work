"use strict";
let numberOfFilms = prompt("Count of films","number");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

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
let q;
if ( personalMovieDB.count < 10) {
    q = 1;
} else if ( personalMovieDB.count > 10 - 1 && personalMovieDB < 30){
    q = 2;
}else if ( personalMovieDB.count > 30 - 1){
    q = 3;
}

switch (q) {
    case 1: 
            console.log('Просмотрено довольно мало фильмов');
            break;
    case 2:
            console.log('Вы класический зритель');
            break;
    case 3:
        console.log('Вы киноман');
        break;
    default: console.log('Error');

}

console.log(personalMovieDB);
console.log(personalMovieDB.movies);