import { MoviesRepository } from '../repositories/MoviesRepository';
import { Movie } from '../entities/Movie';

export class AddMovie {
  constructor(private moviesRepository: MoviesRepository) {}
  handle(name: string, description: string, urlCover: string): Promise<Movie> {
    const movieToBeCreated: Movie = { name, description, urlCover }
    return this.moviesRepository.create(movieToBeCreated)
  }
}