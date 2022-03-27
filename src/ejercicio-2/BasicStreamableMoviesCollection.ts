import {BasicStreamableCollection} from "./BasicStreamableCollection"

export type Movie = {
    name: string,
    year: number,
    director: string,
    genre: string,
    rating: number,
    actors: string[],
    duration: number,
};

export class BasicStreamableMoviesCollection extends BasicStreamableCollection<Movie> {
    constructor(collection: Movie[]) {
        super(collection);
    }

    filterByActor(actor: string): Movie[] {
        return this.collection.filter(function (element: Movie) {
            return element.actors.indexOf(actor) > -1;
        });
    }

    generalInfo(name: string): string {
        let info: string = "";
        let serie: Movie = this.filterByName(name);

        info += "Name: " + serie.name + "\n";
        info += "Genre: " + serie.genre + "\n";
        info += "Rating: " + serie.rating + "\n";
        info += "Duration: " + serie.duration + "\n";

        return info;
    }
}