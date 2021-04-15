"use strict";
let numberOfFilms;

function start () {
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?');
        }
}

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};
 function rememberMyFilm () {
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
}

function detectPersonalLevel() {
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
}

function showMyDB () {
    if (!personalMovieDB.private){
        console.log(personalMovieDB);
    }
}

function writeYourGenres () {
    const arr = ['1 - govno', '2 - kal', '3 - cum'];
    for (let i = 0; i < 3; i++) {
        let answer = prompt('Ваш любимый жанр под номером', arr);
        console.log(answer);
        
        switch (answer) {
            case '1': 
                personalMovieDB.genres.push(arr[0]);
                break;
            case '2':
                personalMovieDB.genres.push(arr[1]);
                break;
            case '3':
                personalMovieDB.genres.push(arr[2]);
                break;
            default:
                 alert('Введите число от 1 до 3!!');
                i--;
        }
    }
}
writeYourGenres();
console.log(personalMovieDB);
console.log(personalMovieDB.movies);