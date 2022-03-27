import { Fighter } from "./Fighter";

export enum PokemonType {fire, water, electric, grass};

/**
 * 
 */
export class PokemonFighter extends Fighter {
    /**
     * Constructor
     * @param name Nombre
     * @param height Altura
     * @param weight Peso
     * @param HP HitPoints
     * @param attack Ataque
     * @param defense Defensa
     * @param catchingPhrases 
     * @param type Tipo de pokemon
     */
    constructor(name: string, height: number, weight: number, catchingPhrases: string[], HP: number, attack: number, defense: number, private type: PokemonType) {
        super(name, height, weight, HP, attack, defense, catchingPhrases);
    }

    /**
     * Getter getType
     * @returns Tipo de pokemon
     */
    getType(): PokemonType {
        return this.type;
    }
}