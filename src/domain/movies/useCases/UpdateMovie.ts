import { MoviesRepository } from '../repositories/MoviesRepository';

export class UpdateMovie {
  constructor(private moviesRepository: MoviesRepository) {}
  handle(id: string, newName: string, newDescription: string, newURLCover: string): Promise<boolean> {
    return this.moviesRepository.update(id, newName, newDescription, newURLCover);
  }
}