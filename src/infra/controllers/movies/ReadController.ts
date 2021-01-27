export class ReadController {
  handle(req, res) {
    const movieId = req.params.id;
    return res.send({
        name: '007',
        description: 'Its a very cool movie',
        urlCover: null
    });
  }
}