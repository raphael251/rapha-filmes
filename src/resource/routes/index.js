const router = require('express').Router();

router.get('/', (_, res) => res.send({ working: true }));
router.use(require('./http/moviesRoutes'));

module.exports = router;