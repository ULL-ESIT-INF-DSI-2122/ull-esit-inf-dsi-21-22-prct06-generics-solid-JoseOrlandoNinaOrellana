import { BasicStreamableCollection } from "./BasicStreamableCollection"

/**
 * Tipo Serie
 */
export type Serie = {
    name: string,
    year: number,
    director: string,
    genre: string,
    rating: number,
    seasons: number,
    actors: string[],
}

/**
 * Clase BasicStreamableSeriesCollection
 * Esta es un clase hija de BasicStreamableCollection que representa una colección de objetos de tipo serie
 */
export class BasicStreamableSeriesCollection extends BasicStreamableCollection<Serie> {

    /**
     * Constructor
     * @param collection Colección de series
     */
    constructor(collection: Serie[]) {
        super(collection);
    }

    /**
     * Método filterByActor
     * @param actor Nombre del actor
     * @returns Array de series que contenga a ese actor
     */
    filterByActor(actor: string): Serie[] {
        return this.collection.filter(function (element: Serie) {
            return element.actors.indexOf(actor) > -1;
        });
    }

    /**
     * Método filterByNumberOfSeasons
     * @param seasons Número de temporadas
     * @returns Array de series que tienes más o igual número de temporadas
     */
    filterByNumberOfSeasons(seasons: number): Serie[] {
        return this.collection.filter(function (element: Serie) {
            return element.seasons >= seasons;
        });
    }

    /**
     * Método generalInfo
     * @param name Nombre de la serie
     * @returns Información general de la serie indicada
     */
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