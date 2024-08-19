const urlMovies = 'https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1';
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNmM5MmU5NmRmYzUyNjU3MWIyODAyZDg4N2Y1MGI0ZSIsIm5iZiI6MTcyMzgzMjY3OC41MjA5NTEsInN1YiI6IjY2YmY5ODJiMWQ3YTBhZmYxMzQ5ZTQ3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jAjRWoLXY_nkxvasaH1uH00ka-UEVzzO04xzTPk89zs'
    }
};

const fetchMovies = () => {
    fetch(urlMovies, options)
        .then(response => response.json())
        .then(data => {
            const movies = data.results;
            const htmlMovies = movies.map((movie, index) => {
                return `
                    <li class="card">
                        <img class="card-image" alt="${movie.title}" src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
                        <h2 class="card-title">${index + 1}: ${movie.title}</h2>
                        <p>${movie.overview}</p>
                        <p class="card-subtitle">Rating: ${movie.vote_average}</p>
                    </li>
                `;
            }).join('');


            const ul = document.querySelector('[data-js="movies"]');
            ul.innerHTML = htmlMovies;
        })
        .catch(err => console.error('Error:', err));
};

fetchMovies();