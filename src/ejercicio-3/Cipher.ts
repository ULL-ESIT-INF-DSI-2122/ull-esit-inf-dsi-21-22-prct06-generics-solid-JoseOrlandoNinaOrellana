export class Cipher {
    constructor(private alphabet: string[], private key: string) {}

    encrypt(originalText: string): string {
        let cipherText: string = "";
        let displacement: number;

        for(let i: number = 0; i < originalText.length; ++i)
        {
            displacement = this.alphabet.indexOf(this.key[i % this.key.length]) + 1;
            cipherText += this.alphabet[(this.alphabet.indexOf(originalText[i]) + displacement) % this.alphabet.length];
        }

        return cipherText;
    }

    decrypt(cipherText: string) {
        let originalText: string = "";
        let displacement: number;

        for(let i: number = 0; i < cipherText.length; ++i)
        {
            displacement = this.alphabet.indexOf(this.key[i % this.key.length]) + 1;
            if(this.alphabet.indexOf(cipherText[i]) >= displacement)
                originalText += this.alphabet[(this.alphabet.indexOf(cipherText[i]) - displacement) % this.alphabet.length];
            else
                originalText += this.alphabet[this.alphabet.length - (displacement - this.alphabet.indexOf(cipherText[i]))];
        }

        return originalText;
    }
}

let c: Cipher = new Cipher(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], "CLAVE");

console.log(c.encrypt("HOLAESTOESUNAPRUEBA"));
console.log(c.decrypt("KAMWJVFPAXXYBMWXPCW"));