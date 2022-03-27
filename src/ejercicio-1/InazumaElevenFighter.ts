import { Fighter } from "./Fighter";

export class InazumaElevenFighter extends Fighter {

    /**
     * Contructor
     * @param name Nombre
     * @param height Altura
     * @param weight Peso
     * @param HP HitPoints
     * @param attack Ataque
     * @param defense Defensa
     * @param catchingPhrases 
     * @param superSkill Super tecnica
     */
    constructor(name: string, height: number, weight: number, catchingPhrases: string[], HP: number, attack: number, defense: number, private superSkill: string) {
        super(name, height, weight, HP, attack, defense, catchingPhrases);
    }

    /**
     * Getter getSuperSkill
     * @returns Super tecnica
     */
    getSuperSkill(): string {
        return this.superSkill;
    }
}