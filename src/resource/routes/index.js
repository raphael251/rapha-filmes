const router = require('express').Router();

router.use(require('./http/moviesRoute'));

module.exports = router;