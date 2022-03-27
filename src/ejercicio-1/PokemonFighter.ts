import { Fighter } from "./Fighter";

export enum PokemonType {fire, water, electric, grass};

export class PokemonFighter extends Fighter {
    constructor(name: string, height: number, weight: number, catchingPhrases: string[], HP: number, attack: number, defense: number, private type: PokemonType) {
        super(name, height, weight, HP, attack, defense, catchingPhrases);
    }

    getType(): PokemonType {
        return this.type;
    }
}