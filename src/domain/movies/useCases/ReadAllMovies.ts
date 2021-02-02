import { MoviesRepository } from '../repositories/MoviesRepository';
import { Movie } from '../entities/Movie';

export class ReadAllMoviesUseCase {
  constructor(private moviesRepository: MoviesRepository) {}
  handle(): Promise< Array<Movie> > {
    return this.moviesRepository.readAll();
  }
}