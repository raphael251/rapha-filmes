var request = new XMLHttpRequest();

request.open('GET', 'localhost:3000/filmes', true);

request.onload = () => {
    var data = JSON.parse(this.response);

    data.forEach(filme => {
        
        console.log(filme);
    });
}

request.send();