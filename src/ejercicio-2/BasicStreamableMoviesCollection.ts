import {BasicStreamableCollection} from "./BasicStreamableCollection"

export type Movie = {
    name: string,
    year: Date,
    director: string,
    ageRestricted: number,
    actors: string[]
};

export class BasicStreamableMoviesCollection extends BasicStreamableCollection<Movie> {
    constructor(collection: Movie[]) {
        super(collection);
    }

    filterByAge(year: Date): Movie[] {
        return this.collection.filter(function (element: Movie) {
             return element.year === year;
        });
    }

    filterByName(name: string): Movie[] {
        return this.collection.filter(function (element: Movie) {
             return element.name === name;
        });
    }
}