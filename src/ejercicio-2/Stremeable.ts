export interface Streamable<T> {
    filterByAge(year: Date): T[];
    filterByName(name: string): T[];
}