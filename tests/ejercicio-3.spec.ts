import "mocha";
import { expect } from "chai";
import { Cipher } from "../src/ejercicio-3/Cipher";

describe("Cipher class tests", () => {
    let alphabet: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let cipher: Cipher = new Cipher(alphabet, "CLAVE");

    it("getAlphabet function test", () => {
        expect(cipher.getAlphabet()).to.be.equal(alphabet);
    });

    it("getKey function test", () => {
        expect(cipher.getKey()).to.be.equal("CLAVE");
    });

    it("encrypt function test", () => {
        expect(cipher.encrypt("HOLAESTOESUNAPRUEBA")).to.be.equal("KAMWJVFPAXXYBMWXPCW");
    });

    it("decrypt function test", () => {
        expect(cipher.decrypt("KAMWJVFPAXXYBMWXPCW")).to.be.equal("HOLAESTOESUNAPRUEBA");
    });
})