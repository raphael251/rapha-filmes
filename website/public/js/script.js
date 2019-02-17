var request = new XMLHttpRequest();

request.open('GET', 'http://localhost:3000/filmes', true);

request.onload = function () {
    var data = JSON.parse(this.response);

    data.forEach(filme => {
        
        console.log(filme);
    });
}

request.send();