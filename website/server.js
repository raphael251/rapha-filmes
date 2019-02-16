const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World');
    res.setHeader('Access-Control-Allow-Origin', '*');
});

app.listen(3030, () => {
    console.log('Servidor http rodando na porta 3030');
});