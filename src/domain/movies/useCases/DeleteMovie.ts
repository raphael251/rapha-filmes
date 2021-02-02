import { MoviesRepository } from '../repositories/MoviesRepository';

export class DeleteMovie {
  constructor(private moviesRepository: MoviesRepository) {}
  handle(id: string): Promise<boolean> {
    return this.moviesRepository.delete(id)
  }
}