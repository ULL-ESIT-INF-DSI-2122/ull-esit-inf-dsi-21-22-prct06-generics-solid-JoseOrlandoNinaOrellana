import { Fighter } from "./Fighter"

/**
 * Clase Combat
 * Representa la pelea entre dos objetos de clase fighter
 */
export class Combat {

    /**
     * Constructor
     * @param fighter1 Luchador 1
     * @param fighter2 Luchador 2
     * @param currentFighter Luchador actual
     */
    constructor(private fighter1: Fighter, private fighter2: Fighter, private currentFighter: number = 1) {}

    /**
     * Método move
     * Reliza un ataque quitando HP y imprimiendo por pantalla un catchingphrase
     */
    move() {
        let damage: number = 0;

        if(this.currentFighter === 1)
        {
            damage = ((this.fighter1.getWeight() / this.fighter1.getHeight()) * this.fighter1.getAttack()) / ((this.fighter2.getWeight() / this.fighter2.getHeight() * this.fighter2.getDefense()));
            this.fighter1.setHP(this.fighter1.getHP() - damage);
            console.log(this.fighter2.getRandomPhrase());
            this.currentFighter = 2;
        }
        else
        {
            damage = ((this.fighter2.getWeight() / this.fighter2.getHeight()) * this.fighter2.getAttack()) / ((this.fighter1.getWeight() / this.fighter1.getHeight() * this.fighter1.getDefense()));            
            this.fighter2.setHP(this.fighter2.getHP() - damage);
            console.log(this.fighter1.getRandomPhrase());
            this.currentFighter = 1;
        }
    }
    
    /**
     * Método start
     * @returns Cadena de texto indicando quien ha ganado el combate
     */
    start(): string {
        while(this.fighter1.getHP() > 0 && this.fighter2.getHP() > 0)
            this.move();
        
        if(this.fighter1.getHP() > 0)
            return "¡El ganador es " + this.fighter1.getName() + "!";
        else
            return "¡El ganador es " + this.fighter2.getName() + "!";
    }
}