var express = require('express');
var router = express.Router();
var request = require('request');

/* GET a movie update page. */
router.get('/:id?', function(req, res, next) {
  request(`https://api-rapha-filmes.herokuapp.com/movies/${parseInt(req.params.id)}`, (err, result, body) => {
    let movie = JSON.parse(result.body);
    res.render('movies', { movie: movie[0] });
  });
});

module.exports = router;