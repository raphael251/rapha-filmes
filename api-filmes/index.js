const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var port = normalizePort(process.env.PORT || '3000');;
const mysql = require('mysql');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = express.Router();

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', '*');
    res.append('Access-Control-Allow-Methods', 'GET,PATCH,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use('/movies', router);
app.use('/', router);

//POST requests (Create):

router.post('/movies', (req, res) => {
    const name = req.body.movieName.substring(0, 200);
    const description = req.body.movieDescription.substring(0, 400);
    const urlCover = req.body.movieUrlCover.substring(0, 250);

    executeDBQuery(`insert into movies(name, description, url_cover) values('${name}', '${description}', '${urlCover}')`, res);
});

//GET requests (Read):

router.get('/movies/:id?', (req, res) => {
    let filter = '';
    if (req.params.id) filter = ' where id=' + parseInt(req.params.id);
    executeDBQuery('select * from movies' + filter, res);
});

//PATCH requests (Update):

router.patch('/movies/:id?', (req, res) => {
    const id = parseInt(req.params.id);
    const description = req.body.movieDescription.substring(0, 400);
    executeDBQuery(`update movies set description='${description}' where id=${id}`, res);
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

function normalizePort(val) {
    var port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
  }