var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  request('https://api-rapha-filmes.herokuapp.com/movies', function (err, result, body) {
    let movies = JSON.parse(result.body);
    res.render('index', { movies: movies });
  });
});

module.exports = router;
