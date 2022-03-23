import {Streamable} from "./Stremeable"

export abstract class BasicStreamableCollection<T> implements Streamable<T> {
    constructor(protected collection: T[]) {}

    abstract filterByAge(year: Date): T[] 

    abstract filterByName(name: string): T[]
}