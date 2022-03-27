import { FilterStreamable } from "./FilterStreamable";
import { InfoStreamable } from "./InfoStreamable";
import { SortStreamable } from "./SortStreamable";

/**
 * Clase abstracta BasicStreamableCollection
 * Esta clase representa una colección de contenidos multimedia con metodos para filtrar, ordenar, añadir o eliminar elementos, etc
 */
export abstract class BasicStreamableCollection<T extends {name: string, year: number, director: string, rating: number, genre: string}> implements FilterStreamable<T>, SortStreamable<T>, InfoStreamable<T> {
    
    /**
     * Constructor
     * @param collection Colección de elementos 
     */
    constructor(protected collection: T[]) {}

    /**
     * Método filterByYear
     * @param year Año de estreno
     * @returns Array de elementos que se hayan estrenado ese año
     */
    filterByYear(year: number): T[] {
        return this.collection.filter(function (element: T) {
            return element.year === year;
        });
    }

    /**
     * Método filterByName
     * @param name Nombre del elemento a buscar
     * @returns El elemento que se quiere buscar
     */
    filterByName(name: string): T {
        return this.collection.filter(function (element: T) {
            return element.name === name;
        })[0];
    }

    /**
     * Método filterByGenre
     * @param genre Genero por el que buscar
     * @returns Array de elementos con ese genero
     */
    filterByGenre(genre: string): T[] {
        return this.collection.filter(function (element: T) {
            return element.genre === genre;
        });
    }

    /**
     * Método filterByRating
     * @param rating Valoración minima
     * @returns Array de elementos con mayor o igual valoración a la indicada
     */
    filterByRating(rating: number): T[] {
        return this.collection.filter(function (element: T) {
            return element.rating >= rating;
        });
    }

    /**
     * Método filterByDirector
     * @param director Director por el que buscar
     * @returns Array de elementos que tenga como director al parámetro indicado
     */
    filterByDirector(director: string): T[] {
        return this.collection.filter(function (element: T) {
            return element.director === director;
        });
    }

    /**
     * Método alphabeticalSort
     * @returns La colección ordenada alfabeticamente
     */
    alphabeticalSort(): T[] {
        return this.collection.sort((a: T, b: T) => a.name.normalize().localeCompare(b.name.normalize()));
    }

    /**
     * Método yearSort
     * @returns La colección ordenada de menor a mayor año
     */
    yearSort(): T[] {
        return this.collection.sort((a: T, b: T) => a.year - b.year);
    }

    /**
     * Método ratingSort
     * @returns La colección ordenada de mayor a menor valoración
     */
    ratingSort(): T[] {
        return this.collection.sort((a: T, b: T) => b.rating - a.rating);
    }

    /**
     * Método add
     * @param element Elemento a añadir
     */
    add(element: T) {
        this.collection.push(element);
    }

    /**
     * Método remove
     * @param element Elemento a eleminar
     * @returns True si el elemento se ha eliminado
     */
    remove(element: T): boolean {
        let index: number = this.collection.indexOf(element);
        if(index > -1)
        {
            this.collection.splice(index, 1);
            return true;
        }
        return false;
    }

    /**
     * Getter getNumberOfElements
     * @returns Número de elementos de la colección
     */
    getNumberOfElements() {
        return this.collection.length;
    }

    /**
     * Método abstracto generalInfo
     * @param name Nombre de elemento
     * @returns Información general sobre un elemento
     */
    abstract generalInfo(name: string): string;
}