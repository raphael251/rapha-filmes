export class UpdateController {
  handle(req, res) {
    const movieId = req.params.id;
    const { newDescription } = req.body;
    return res.send('Movie successfuly updated.');
  }
}