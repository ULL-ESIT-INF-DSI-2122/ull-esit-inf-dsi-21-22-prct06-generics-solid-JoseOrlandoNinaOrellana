import { Fighter } from "./Fighter";

export class DragonBallFighter extends Fighter {
    constructor(name: string, height: number, weight: number, catchingPhrases: string[], HP: number, attack: number, defense: number, private skill: string) {
        super(name, height, weight, HP, attack, defense, catchingPhrases);
    }

    getSkill(): string {
        return this.skill;
    }
}