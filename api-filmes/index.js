const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const mysql = require('mysql');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = express.Router();
router.get('/', (req, res) => res.json({ message: "Sucesso!"}));
app.use('/', router);

router.get('/filmes/:id?', (req, res) => {
    let filter = '';
    if (req.params.id) filter = ' where id=' + parseInt(req.params.id);
    executarQueryNoBanco('select * from filmes' + filter, res);
});

router.delete('/filmes/:id?', (req, res) => {
    executarQueryNoBanco('delete from filmes where id=' + parseInt(req.params.id), res);
});

router.post('/filmes', (req, res) => {
    const nome = req.body.nome.substring(0, 200);
    const descricao = req.body.descricao.substring(0, 400);
    const urlCapa = req.body.urlcapa.substring(0, 250);

    executarQueryNoBanco(`insert into filmes(nome, descricao, url_capa) values('${nome}', '${descricao}', '${urlCapa}')`, res);
});

router.patch('/filmes/:id?', (req, res) => {
    const id = parseInt(req.params.id);
    const descricao = req.body.descricao.substring(0, 400);

    executarQueryNoBanco(`update filmes set descricao='${descricao}' where id=${id}`, res);
});

app.listen(port);
console.log("API Funcionando!");

function executarQueryNoBanco(query, res) {
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
        console.log('executou!');
    });
}