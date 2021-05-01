/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ].sort(),
    outMovies: function() {

        const li = document.querySelector('.promo__interactive-list');
        li.innerHTML = "";
        for (let i = 0; i < this.movies.length; i++) {
            li.innerHTML += `<li class="promo__interactive-item">${i+1}. ${this.movies[i]}
                                <div class="delete"></div>
                            </li>`;
            
        }
        
    }
};

movieDB.outMovies();



const adv = document.querySelectorAll('.promo__adv img');
adv.forEach(element => {
    element.remove();
});


const genre = document.querySelector('.promo__genre');
genre.textContent = 'ДРАМА';

const background = document.querySelector('.promo__bg');
background.style.backgroundImage = "url('img/bg.jpg')";





