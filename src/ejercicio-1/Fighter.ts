/**
 * Clase abstracta Fighter
 * Representa a un luchador, tiene atributos que lo describen como el nombre, peso, altura, HP, etc
 */
export abstract class Fighter {

    /**
     * Contructor
     * @param name Nombre
     * @param height Altura
     * @param weight Peso
     * @param HP HitPoints
     * @param attack Ataque
     * @param defense Defensa
     * @param catchingPhrases  
     */
    constructor(protected name: string, protected height: number, protected weight: number, protected HP: number, protected attack: number, protected defense: number, protected catchingPhrases: string[]) {}

    /**
     * Getter getName
     * @returns Nombre del luchador
     */
    getName(): string {
        return this.name;
    }

    /**
     * Getter getHeight
     * @returns Altura del luchador
     */
    getHeight(): number {
        return this.height;
    }

    /**
     * Getter getWeight
     * @returns Peso del luchador
     */
    getWeight(): number {
        return this.weight;
    }

    /**
     * Getter getCatchinPhrases
     * @returns CatchingPhrases
     */
    getCatchinPhrases(): string[] {
        return this.catchingPhrases;
    }

    /**
     * Getter getRandomPhrase
     * @returns Random CatchingPhrase
     */
    getRandomPhrase(): string {
        return this.catchingPhrases[Math.floor(Math.random() * this.catchingPhrases.length)];
    }

    /**
     * Getter getHP
     * @returns HP
     */
    getHP(): number {
        return this.HP;
    }

    /**
     * Getter getAttack
     * @returns Ataque
     */
    getAttack(): number {
        return this.attack;
    }

    /**
     * Getter Defense
     * @returns Defensa
     */
    getDefense(): number {
        return this.defense;
    }

    /**
     * Setter setHP
     * @param newHP nuevo HP 
     */
    setHP(newHP: number) {
        this.HP = newHP;
    }
}