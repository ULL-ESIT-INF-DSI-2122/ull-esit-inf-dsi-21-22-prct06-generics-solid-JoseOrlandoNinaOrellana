import "mocha";
import { expect } from "chai";
import { Combat } from "../src/ejercicio-1/Combat";
import { DragonBallFighter } from "../src/ejercicio-1/DragonBallFighter";
import { InazumaElevenFighter } from "../src/ejercicio-1/InazumaElevenFighter";
import { PokemonFighter, PokemonType} from "../src/ejercicio-1/PokemonFighter";

describe("DragonBallFighter functions tests", () => {
    let goku: DragonBallFighter = new DragonBallFighter("Goku", 190, 98, ["Puede que haya perdido todo, pero jamás dejaré de pelear por lo que creo"], 80, 20, 15, "kamehameha");

    it("getName function test", () => {
        expect(goku.getName()).to.be.equal("Goku");
    });

    it("getHeight function test", () => {
        expect(goku.getHeight()).to.be.equal(190);
    });

    it("getWeight funciton test", () => {
        expect(goku.getWeight()).to.be.equal(98);
    });

    it("getCatchingPhrases function test", () => {
        expect(goku.getCatchinPhrases()).to.be.eql(["Puede que haya perdido todo, pero jamás dejaré de pelear por lo que creo"]);
    });

    it("getHP function test", () => {
        expect(goku.getHP()).to.be.equal(80);
    });

    it("getAttack function test", () => {
        expect(goku.getAttack()).to.be.equal(20);
    });

    it("getDefense function test", () => {
        expect(goku.getDefense()).to.be.equal(15);
    });

    it("getSkill function test", () => {
        expect(goku.getSkill()).to.be.equal("kamehameha");
    })
});

describe("PokemonFighter functions tests", () => {
    let pikachu: PokemonFighter = new PokemonFighter("Pikachu", 120, 70, ["PikaPika", "Bum"], 60, 15, 30, PokemonType.electric);

    it("getType function test", () => {
        expect(pikachu.getType()).to.be.equal(PokemonType.electric);
    });
});

describe("Combat functions tests", () => {

    let pikachu: PokemonFighter = new PokemonFighter("Pikachu", 120, 70, ["PikaPika", "Bum"], 60, 15, 30, PokemonType.electric);
    let goku: DragonBallFighter = new DragonBallFighter("Goku", 190, 98, ["Puede que haya perdido todo, pero jamás dejaré de pelear por lo que creo"], 80, 20, 15, "kamehameha");

    let combat: Combat = new Combat(goku, pikachu);

    it("start function test", () => {
        expect(combat.start()).to.be.equal("¡El ganador es Goku!");
    });
});