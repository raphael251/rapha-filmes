class MoviesController {
    static post(req, res) {
        const { name, description, urlCover } = req.body;

        return res.send('Movie successfuly added.');
    }

    static get(req, res) {
        const movieId = req.params.id;

        return res.send({
            name: '007',
            description: 'Its a very cool movie',
            urlCover: null
        });
    }

    static patch(req, res) {
        const movieId = req.params.id;
        const { newDescription } = req.body;

        return res.send('Movie successfuly updated.');
    }

    static delete(req, res) {
        const movieId = req.params.id;

        return res.send('Movie successfuly updated.');
    }
}

module.exports = MoviesController;