export abstract class Fighter {
    constructor(protected name: string, protected height: number, protected weight: number, protected HP: number, protected attack: number, protected defense: number, protected catchingPhrases: string[]) {}

    getName(): string {
        return this.name;
    }

    getHeight(): number {
        return this.height;
    }

    getWeight(): number {
        return this.weight;
    }

    getCatchinPhrases(): string[] {
        return this.catchingPhrases;
    }

    getRandomPhrase(): string {
        return this.catchingPhrases[Math.floor(Math.random() * this.catchingPhrases.length)];
    }

    getHP(): number {
        return this.HP;
    }

    getAttack(): number {
        return this.attack;
    }

    getDefense(): number {
        return this.defense;
    }

    setHP(newHP: number) {
        this.HP = newHP;
    }
}