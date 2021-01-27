import { Movie } from '../entities/Movie';

export interface MoviesRepository {
    create(movie: Movie): Promise<Movie>
    readOne(id: string): Promise<Movie>
    readAll(): Promise< Array<Movie> >
    update(id: string, newName: string, newDescription: string, newURLCover: string): Promise<boolean>
    delete(id: string): Promise<boolean>
}