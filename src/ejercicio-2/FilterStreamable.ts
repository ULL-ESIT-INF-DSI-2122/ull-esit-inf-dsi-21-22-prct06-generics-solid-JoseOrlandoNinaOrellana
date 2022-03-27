/**
 * Interfaz de filtros de busqueda
 */
export interface FilterStreamable<T> {
    filterByYear(year: number): T[];
    filterByName(name: string): T;
    filterByGenre(genre: string): T[];
    filterByRating(rating: number): T[];
    filterByDirector(director: string): T[];
}