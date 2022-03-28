/**
 * Clase PrimeNumberInstance aplicando el diseño Singleton
 */
export class PrimeNumberInstance implements Iterable<number>{

    /**
     * Instancia
     */
    private static primeNumberInstance: PrimeNumberInstance;

    /**
     * Números primos
     */
    private primeNumbers: number[];

    /**
     * Constructor
     */
    private constructor() {}

    /**
     * Método getPrimeNumberInstance
     * Comprueba si ya hay una instancia creada, si la hay devuelve la que ya esta creada.
     * En caso contrario crea una nueva instancia
     * @returns La instancia
     */
    public static getPrimeNumberInstance(): PrimeNumberInstance {
        if(!PrimeNumberInstance.primeNumberInstance) {
            PrimeNumberInstance.primeNumberInstance = new PrimeNumberInstance();
        }

        return PrimeNumberInstance.primeNumberInstance;
    }

    /**
     * Método isPrimeNumber
     * Comprueba si un número es primo
     * @param n Número a comprobar si es primo
     * @returns Verdadero si es primo, falso si no es primo
     */
    isPrimeNumber(n: number): boolean {
        for(let i: number = 2, raiz = Math.sqrt(n); i <= raiz; i++)
            if(n % i === 0) 
                return false;
        return n > 1;
    }

    /**
     * Método range
     * Dado un rango devuelve un array de números primos contenidos en es rango
     * @param n Número mínimo
     * @param m Número máximo
     * @returns Array de números primos dado un rango
     */
    range(n: number, m:number): number[] {
        let range: number[] = [];
        
        for(let i: number = n; i <= m; ++i)
            if(PrimeNumberInstance.primeNumberInstance.isPrimeNumber(i))
                range.push(i);

        PrimeNumberInstance.primeNumberInstance.primeNumbers = range;
        return range;
    }

    /**
     * Método firstPrimeNumbers
     * @param n Número de números primos
     * @returns Array con los primeros n números primos
     */
    firstPrimeNumbers(n: number): number[] {
        let range: number[] = [];
        
        for(let i: number = 0; range.length < n; ++i)
            if(PrimeNumberInstance.primeNumberInstance.isPrimeNumber(i))
                range.push(i);

        PrimeNumberInstance.primeNumberInstance.primeNumbers = range;
        return range;
    }


    [Symbol.iterator](): Iterator<number> {
        return PrimeNumberInstance.primeNumberInstance.primeNumbers.values();
    }
}