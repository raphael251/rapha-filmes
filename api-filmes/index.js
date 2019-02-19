const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const mysql = require('mysql');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = express.Router();

//POST requests (Create):

router.post('/movies', (req, res) => {
    const nome = req.body.nome.substring(0, 200);
    const descricao = req.body.descricao.substring(0, 400);
    const urlCapa = req.body.urlcapa.substring(0, 250);

    executeDBQuery(`insert into movies(nome, descricao, url_capa) values('${nome}', '${descricao}', '${urlCapa}')`, res);
});

//GET requests (Read):

router.get('/movies/:id?', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let filter = '';
    if (req.params.id) filter = ' where id=' + parseInt(req.params.id);
    executeDBQuery('select * from movies' + filter, res);
});

//PATCH requests (Update):

router.patch('/movies/:id?', (req, res) => {
    const id = parseInt(req.params.id);
    const descricao = req.body.descricao.substring(0, 400);

    executeDBQuery(`update movies set descricao='${descricao}' where id=${id}`, res);
});

//DELETE requests (Delete):

router.delete('/movies/:id?', (req, res) => {
    executeDBQuery('delete from movies where id=' + parseInt(req.params.id), res);
});


app.listen(port);
console.log("API Working!");



function executeDBQuery(query, res) {
    const connection = mysql.createConnection({
        host: 'sql10.freemysqlhosting.net',
        port: 3306,
        password: 'HKzZhGEL7Y',
        database: 'sql10279238',
        user: 'sql10279238'
    });

    connection.query(query, (err, results, fields) => {
        if 
            (err) res.json(err);
        else 
            res.json(results);

        connection.end();
        console.log('Query executed!');
    });
}