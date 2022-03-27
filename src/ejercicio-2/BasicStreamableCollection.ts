import { FilterStreamable } from "./FilterStreamable";
import { InfoStreamable } from "./InfoStreamable";
import { SortStreamable } from "./SortStreamable";

export abstract class BasicStreamableCollection<T extends {name: string, year: number, director: string, rating: number, genre: string}> implements FilterStreamable<T>, SortStreamable<T>, InfoStreamable<T> {
    constructor(protected collection: T[]) {}

    filterByYear(year: number): T[] {
        return this.collection.filter(function (element: T) {
            return element.year === year;
        });
    }

    filterByName(name: string): T {
        return this.collection.filter(function (element: T) {
            return element.name === name;
        })[0];
    }

    filterByGenre(genre: string): T[] {
        return this.collection.filter(function (element: T) {
            return element.genre === genre;
        });
    }

    filterByRating(rating: number): T[] {
        return this.collection.filter(function (element: T) {
            return element.rating >= rating;
        });
    }

    filterByDirector(director: string): T[] {
        return this.collection.filter(function (element: T) {
            return element.director === director;
        });
    }

    alphabeticalSort(): T[] {
        return this.collection.sort((a: T, b: T) => a.name.normalize().localeCompare(b.name.normalize()));
    }

    yearSort(): T[] {
        return this.collection.sort((a: T, b: T) => a.year - b.year);
    }

    ratingSort(): T[] {
        return this.collection.sort((a: T, b: T) => b.rating - a.rating);
    }

    add(element: T) {
        this.collection.push(element);
    }

    remove(element: T): boolean {
        let index: number = this.collection.indexOf(element);
        if(index > -1)
        {
            this.collection.splice(index, 1);
            return true;
        }
        return false;
    }

    getNumberOfElements() {
        return this.collection.length;
    }

    abstract generalInfo(name: string): string;
}