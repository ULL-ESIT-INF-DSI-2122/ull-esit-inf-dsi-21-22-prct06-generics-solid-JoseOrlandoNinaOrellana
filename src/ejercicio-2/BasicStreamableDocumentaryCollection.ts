import { BasicStreamableCollection } from "./BasicStreamableCollection"

/**
 * Tipo documental
 */
export type Documentary = {
    name: string,
    year: number,
    director: string,
    genre: string,
    rating: number,
    narrator: string,
}

/**
 * Clase BasicStreamableDocumentaryCollection
 * Esta es un clase hija de BasicStreamableCollection que representa una colección de objetos de tipo documental
 */
export class BasicStreamableDocumentaryCollection extends BasicStreamableCollection<Documentary> {
    
    /**
     * Constructor
     * @param collection Colección de documentales
     */
    constructor(collection: Documentary[]) {
        super(collection);
    }

    /**
     * Método filterByNarrator
     * @param narrator Narrador por el que buscar
     * @returns Array de documentales que tienen ese narrador
     */
    filterByNarrator(narrator: string): Documentary[] {
        return this.collection.filter(function (element: Documentary) {
            return element.narrator === narrator;
        });
    }

    /**
     * Método generalInfo
     * @param name Nombre del documental
     * @returns Información general del documental
     */
    generalInfo(name: string): string {
        let info: string = "";
        let serie: Documentary = this.filterByName(name);

        info += "Name: " + serie.name + "\n";
        info += "Genre: " + serie.genre + "\n";
        info += "Rating: " + serie.rating + "\n";
        info += "Narrator: " + serie.narrator + "\n";

        return info;
    }
}