import { BasicStreamableCollection } from "./BasicStreamableCollection"

export type Serie = {
    name: string,
    year: number,
    director: string,
    genre: string,
    rating: number,
    seasons: number,
    actors: string[],
}

export class BasicStreamableSeriesCollection extends BasicStreamableCollection<Serie> {
    constructor(collection: Serie[]) {
        super(collection);
    }

    filterByActor(actor: string): Serie[] {
        return this.collection.filter(function (element: Serie) {
            return element.actors.indexOf(actor) > -1;
        });
    }

    filterByNumberOfSeasons(seasons: number): Serie[] {
        return this.collection.filter(function (element: Serie) {
            return element.seasons >= seasons;
        });
    }

    generalInfo(name: string): string {
        let info: string = "";
        let serie: Serie = this.filterByName(name);

        info += "Name: " + serie.name + "\n";
        info += "Genre: " + serie.genre + "\n";
        info += "Rating: " + serie.rating + "\n";
        info += "Seasons: " + serie.seasons + "\n";

        return info;
    }
}