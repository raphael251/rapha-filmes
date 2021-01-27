import { AddMovie } from '../../../domain/movies/useCases/AddMovie';
import { MoviesRepository } from '../../../domain/movies/repositories/MoviesRepository';
import { MongoDBRepository } from '../../repositories/movies/MongoDBRepository';
export class CreateController {
  handle(req, res) {
    const { name, description, urlCover } = req.body;
    const mongoDBMoviesRepository: MoviesRepository = new MongoDBRepository();
    const addMovieUseCase = new AddMovie(mongoDBMoviesRepository);
    addMovieUseCase.handle(name, description, urlCover)
    return res.send('Movie successfuly added.');
  }
}