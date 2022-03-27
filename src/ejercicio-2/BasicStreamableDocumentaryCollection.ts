import { BasicStreamableCollection } from "./BasicStreamableCollection"

export type Documentary = {
    name: string,
    year: number,
    director: string,
    genre: string,
    rating: number,
    narrator: string,
}

export class BasicStreamableDocumentaryCollection extends BasicStreamableCollection<Documentary> {
    filterByNarrator(narrator: string): Documentary[] {
        return this.collection.filter(function (element: Documentary) {
            return element.narrator === narrator;
        });
    }

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