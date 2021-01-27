import { MoviesRepository } from '../../../domain/movies/repositories/MoviesRepository';
import { Movie } from '../../../domain/movies/entities/Movie';
export class MongoDBRepository implements MoviesRepository {
    async create(movie: Movie): Promise<Movie> {
      console.log('processing movie create by MongoDB')
      return movie
    }
    async readOne(id: string): Promise<Movie> {
      console.log('processing movie readOne by MongoDB')
      const movie: Movie = {
        name: 'Godzilla',
        description: 'Godzilla is a fictional monster, or kaiju, originating from a series of Japanese films. The character first appeared in the 1954 film Godzilla and became a worldwide pop culture icon, appearing in various media, including 32 films produced by Toho, four Hollywood films and numerous video games, novels, comic books and television shows. Godzilla has been dubbed the "King of the Monsters", a phrase first used in Godzilla, King of the Monsters! (1956), the Americanized version of the original film.',
        urlCover: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Godzilla_%2754_design.jpg/220px-Godzilla_%2754_design.jpg'
      }
      return movie
    }
    async readAll(): Promise< Array<Movie> > {
      console.log('processing movie readAll by MongoDB')
      const movies: Array<Movie> = [
        {
          name: 'Godzilla',
          description: 'Godzilla is a fictional monster, or kaiju, originating from a series of Japanese films. The character first appeared in the 1954 film Godzilla and became a worldwide pop culture icon, appearing in various media, including 32 films produced by Toho, four Hollywood films and numerous video games, novels, comic books and television shows. Godzilla has been dubbed the "King of the Monsters", a phrase first used in Godzilla, King of the Monsters! (1956), the Americanized version of the original film.',
          urlCover: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Godzilla_%2754_design.jpg/220px-Godzilla_%2754_design.jpg'
        },
        {
          name: 'the movie watcher',
          description: 'The Queen\'s Gambit is a 2020 American coming-of-age period drama miniseries based on Walter Tevis\'s 1983 novel of the same name. It was written and directed by Scott Frank, who created it with Allan Scott. Beginning in the mid-1950s and proceeding into the 1960s, the story follows the life of Beth Harmon (Anya Taylor-Joy), an orphaned chess prodigy on her rise to the top of the chess world while struggling with drug and alcohol dependency.',
          urlCover: 'https://image.google.com/'
        }
      ]
      return movies
    }
    async update(id: string, newName: string, newDescription: string, newURLCover: string): Promise<boolean> {
      console.log('processing movie update by MongoDB')
      return true
    }
    async delete(id: string): Promise<boolean> {
      console.log('processing movie delete by MongoDB')
      return true
    }
}