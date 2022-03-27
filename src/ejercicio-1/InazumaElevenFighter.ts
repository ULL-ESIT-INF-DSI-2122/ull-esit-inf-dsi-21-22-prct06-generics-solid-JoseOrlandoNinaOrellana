import { Fighter } from "./Fighter";

export class InazumaElevenFighter extends Fighter {
    constructor(name: string, height: number, weight: number, catchingPhrases: string[], HP: number, attack: number, defense: number, private superSkill: string) {
        super(name, height, weight, HP, attack, defense, catchingPhrases);
    }

    getSuperSkill(): string {
        return this.superSkill;
    }
}