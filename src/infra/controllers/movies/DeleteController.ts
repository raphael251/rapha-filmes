export class DeleteController {
  handle(req, res) {
    const movieId = req.params.id;
    return res.send('Movie successfuly updated.');
  }
}