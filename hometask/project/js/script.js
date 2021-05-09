/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img');
    
    const outMovies =  () => {
        movieDB.movies.sort();
        const li = document.querySelector('.promo__interactive-list');
        li.innerHTML = "";
        for (let i = 0; i < movieDB.movies.length; i++) {
            li.innerHTML += `<li class="promo__interactive-item">${i+1}. ${movieDB.movies[i]}
                                <div class="delete"></div>
                            </li>`;
            
        }

        
        
    
    document.querySelectorAll('.delete').forEach((btnn,i) => {
        btnn.addEventListener('click', () => {
            btnn.parentElement.remove();
            movieDB.movies.splice(i,1);
            outMovies();
            
        });
    });
};
 
   const deleteElements = (elements) =>  elements.forEach(element => {
        element.remove();
    });
    deleteElements(adv);
    
    
    const genre = document.querySelector('.promo__genre');
    genre.textContent = 'ДРАМА';
    
    const background = document.querySelector('.promo__bg');
    background.style.backgroundImage = "url('img/bg.jpg')";
    
    const btn = document.querySelector('form.add').addEventListener('submit', (e) => {
        event.preventDefault();
        const value = document.querySelector('.adding__input').value;
        if (value != ""){
            if (document.querySelector("input[type='checkbox']").checked){
                console.log('это ваш любимый фильм');
            }
            if (value.length > 21){
                const cutMovi = value.slice(0, 21) + '...';
                movieDB.movies.push(cutMovi);
            } else {
                movieDB.movies.push(value);
            }
        }
        outMovies();
        
    });
    outMovies();
    
});

