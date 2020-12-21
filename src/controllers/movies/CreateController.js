class createController {
  handle(req, res) {
    const { name, description, urlCover } = req.body;
    return res.send('Movie successfuly added.');
  }
}