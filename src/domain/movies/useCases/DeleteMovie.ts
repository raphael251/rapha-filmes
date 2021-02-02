import { MoviesRepository } from '../repositories/MoviesRepository';

export class DeleteMovieUseCase {
  constructor(private moviesRepository: MoviesRepository) {}
  handle(id: string): Promise<boolean> {
    return this.moviesRepository.delete(id)
  }
}