var express = require('express');
var router = express.Router();
var request = require('request');

/* GET a movie create page. */
router.get('/', function(req, res, next) {
    res.render('create');
});

module.exports = router;