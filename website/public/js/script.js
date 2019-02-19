fetch('http://localhost:3000/movies')
    .then((response) => response.json())
    .then(function (data) {
        data.forEach(movie => {
            createMovieCard(movie.url_capa, movie.nome, movie.descricao);
        });
    })
    .catch(function (error) {
        let errorImageUrl = 'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png';
        let errorTitle = 'Erro!';
        let errorDescription = 'Infelizmente, não foi possível processar sua lista de filmes. Tente novamente mais tarde.';
        createMovieCard(errorImageUrl, errorTitle, errorDescription);
    });

function createMovieCard(movieCoverUrl, movieName, movieDescription) {
    var main = document.querySelector('main');
    var article = document.createElement('article');

    var img = document.createElement('img');
    img.src = movieCoverUrl;
    var h1 = document.createElement('h1');
    h1.textContent = movieName;
    var p = document.createElement('p');
    p.textContent = movieDescription;

    var divTextMovieContainer = document.createElement('div');
    divTextMovieContainer.setAttribute('class', 'textMovieContainer');

    divTextMovieContainer.appendChild(h1);
    divTextMovieContainer.appendChild(p);

    article.appendChild(img);
    article.appendChild(divTextMovieContainer);
    
    main.appendChild(article);
}