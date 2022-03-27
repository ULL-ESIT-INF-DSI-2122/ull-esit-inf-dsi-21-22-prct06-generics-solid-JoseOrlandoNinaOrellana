import {BasicStreamableCollection} from "./BasicStreamableCollection"

/**
 * Tipo pelicula
 */
export type Movie = {
    name: string,
    year: number,
    director: string,
    genre: string,
    rating: number,
    actors: string[],
    duration: number,
};

/**
 * Clase BasicStreamableMoviesCollection
 * Esta es un clase hija de BasicStreamableCollection que representa una colección de objetos de tipo pelicula
 */
export class BasicStreamableMoviesCollection extends BasicStreamableCollection<Movie> {

    /**
     * Constructor
     * @param collection Colección de peliculas
     */
    constructor(collection: Movie[]) {
        super(collection);
    }

    /**
     * 
     * @param actor 
     * @returns 
     */
    filterByActor(actor: string): Movie[] {
        return this.collection.filter(function (element: Movie) {
            return element.actors.indexOf(actor) > -1;
        });
    }

    /**
     * Método generalInfo
     * @param name Nombre de la pelicula
     * @returns Información sobre la pelicula indicada
     */
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