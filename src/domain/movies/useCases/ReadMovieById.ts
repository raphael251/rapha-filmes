import { MoviesRepository } from '../repositories/MoviesRepository';
import { Movie } from '../entities/Movie';

export class ReadMovieById {
  constructor(private moviesRepository: MoviesRepository) {}
  handle(id: string): Promise<Movie> {
    return this.moviesRepository.readOne(id)
  }
}