import { Fighter } from "./Fighter";

/**
 * Clase DragonBallFighter
 * Representa a un luchador del universo de DragonBallFighter
 */
export class DragonBallFighter extends Fighter {
    /**
     * Constructor
     * @param name Nombre
     * @param height Altura
     * @param weight Peso
     * @param catchingPhrases 
     * @param HP HitPoints
     * @param attack Ataque
     * @param defense Defensa
     * @param skill Habilidad
     */
    constructor(name: string, height: number, weight: number, catchingPhrases: string[], HP: number, attack: number, defense: number, private skill: string) {
        super(name, height, weight, HP, attack, defense, catchingPhrases);
    }

    /**
     * Getter getSkill
     * @returns skill
     */
    getSkill(): string {
        return this.skill;
    }
}