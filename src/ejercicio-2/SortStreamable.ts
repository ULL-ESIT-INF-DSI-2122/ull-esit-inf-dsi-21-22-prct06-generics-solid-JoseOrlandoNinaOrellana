/**
 * Interfaz de ordenación
 */
export interface SortStreamable<T> {
    alphabeticalSort(): T[];
    yearSort(): T[];
    ratingSort(): T[];
}