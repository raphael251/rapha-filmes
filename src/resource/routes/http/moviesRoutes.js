const router = require('express').Router();

const MoviesController = require('../../../src/controllers/movies/MoviesController');

router.post('/movies', MoviesController.post);
router.get('/movies/:id?', MoviesController.get);
router.patch('/movies/:id?', MoviesController.patch);
router.delete('/movies/:id?', MoviesController.delete);

module.exports = router;