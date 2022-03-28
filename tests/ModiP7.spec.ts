import "mocha";
import { expect } from "chai";
import { PrimeNumberInstance } from "../src/ModiP7/modi";

describe("", () => {
    let primeNumber : PrimeNumberInstance = PrimeNumberInstance.getPrimeNumberInstance();

    it("range(17, 30) returns [17, 19, 23, 29]", () => {
        expect(primeNumber.range(17, 30)).to.be.eql([17, 19, 23, 29]);
    });

    it("firstPrimeNumbers(8) returns [2, 3, 5, 7, 11, 13, 17, 19]", () => {
        expect(primeNumber.firstPrimeNumbers(8)).to.be.eql([2, 3, 5, 7, 11, 13, 17, 19]);
    });

    it("isPrimeNumber(17) returns true", () => {
        expect(primeNumber.isPrimeNumber(17)).to.be.true;
    })
});