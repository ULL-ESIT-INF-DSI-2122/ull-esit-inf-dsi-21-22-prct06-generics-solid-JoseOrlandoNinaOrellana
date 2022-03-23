import {BasicStreamableCollection} from "./BasicStreamableCollection"

export type Serie = {
    name: string,
    year: Date,
    director: string,
    ageRestricted: number,
    seasons: number,
    actors: string[],
}

export class BasicStreamableSeriesCollection extends BasicStreamableCollection<Serie> {
    constructor(collection: Serie[]) {
        super(collection);
    }

    filterByAge(year: Date): Serie[] {
        return this.collection.filter(function (element: Serie) {
             return element.year === year;
        });
    }

    filterByName(name: string): Serie[] {
        return this.collection.filter(function (element: Serie) {
             return element.name === name;
        });
    }
}