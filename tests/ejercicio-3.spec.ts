import "mocha";
import { expect } from "chai";
import { Cipher } from "../src/ejercicio-3/Cipher";

describe("Cipher class tests", () => {
    let cipher: Cipher = new Cipher(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], "CLAVE");

    it("encrypt function test", () => {
        expect(cipher.encrypt("HOLAESTOESUNAPRUEBA")).to.be.equal("KAMWJVFPAXXYBMWXPCW");
    });

    it("decrypt function test", () => {
        expect(cipher.decrypt("KAMWJVFPAXXYBMWXPCW")).to.be.equal("HOLAESTOESUNAPRUEBA");
    });
})