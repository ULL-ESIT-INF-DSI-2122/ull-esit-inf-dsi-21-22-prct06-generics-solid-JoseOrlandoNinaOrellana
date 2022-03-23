/**
 * Clase Cipher
 * Esta clase represetna el Cifrado César
 */
export class Cipher {

    /**
     * Constructor
     * @param alphabet Alfabeto del cifrado
     * @param key Clave del cifrado
     */
    constructor(private alphabet: string[], private key: string) {}

    /**
     * Getter getAlphabet
     * @returns Alfabeto del cifrado
     */
    getAlphabet(): string[] {
        return this.alphabet;
    }

    /**
     * Getter getKey
     * @returns Key del cifrado
     */
    getKey(): string {
        return this.key;
    }

    /**
     * Setter setAlphabet
     * @param alphabet Nuevo alfabeto del cifrado
     */
    setAlphabet(alphabet: string[]) {
        this.alphabet = alphabet; 
    }

    /**
     * Setter setKey
     * @param key Nuevo key del cifrado
     */
    setKey(key: string) {
        this.key = key;
    }

    /**
     * Método encrypt
     * @param originalText Texto a codificar 
     * @returns Texto codificado
     */
    encrypt(originalText: string): string {
        let cipherText: string = "";
        let displacement: number;

        for(let i: number = 0; i < originalText.length; ++i)
        {
            if(this.alphabet.indexOf(originalText[i]) > -1) {
                displacement = this.alphabet.indexOf(this.key[i % this.key.length]) + 1;
                cipherText += this.alphabet[(this.alphabet.indexOf(originalText[i]) + displacement) % this.alphabet.length];
            }
            else
                cipherText += originalText[i];
        }

        return cipherText;
    }

    /**
     * Método decrypt
     * @param cipherText Texto a decodificar
     * @returns Texto decodificado
     */
    decrypt(cipherText: string) {
        let originalText: string = "";
        let displacement: number;

        for(let i: number = 0; i < cipherText.length; ++i)
        {
            if(this.alphabet.indexOf(cipherText[i]) > -1) {
                displacement = this.alphabet.indexOf(this.key[i % this.key.length]) + 1;
                if(this.alphabet.indexOf(cipherText[i]) >= displacement)
                    originalText += this.alphabet[(this.alphabet.indexOf(cipherText[i]) - displacement) % this.alphabet.length];
                else
                    originalText += this.alphabet[this.alphabet.length - (displacement - this.alphabet.indexOf(cipherText[i]))];
            }
            else
                originalText += cipherText[i];
        }

        return originalText;
    }
}
