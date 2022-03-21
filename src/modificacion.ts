/**
 * Interfaz génerica Collectable
 */
export interface Collectable<T> {
    addItem(newItem: T): void;
    getItem(index: number): T;
    removeItem(Item: T): boolean;
    getNumberOfItems(): number;
}

/**
 * Interfaz génerica Printable
 */
export interface Printable<T> {
    print(): string;
}

export abstract class PrintableCollection<T> implements Collectable<T>, Printable<T> { 
    
    /**
     * Constructor
     * @param collection coleccion de items
     */
    constructor(protected collection: T[] = []) {}

    /**
     * Método addItem
     * @param newItem Nuevo item a añadir a la coleccion
     */
    addItem(newItem: T): void {
        this.collection.push(newItem);
    }

    /**
     * Método getItem
     * @param index Index del item que devolver
     * @returns Itenm del index
     */
    getItem(index: number): T {
        return this.collection[index];
    }

    /**
     * Método removeItem
     * @param Item Item a borrar
     */
    removeItem(Item: T): boolean {
        let index: number = this.collection.indexOf(Item);
        if(index > -1)
        {
            this.collection.splice(index, 1);
            return true;
        }
        return false;
    }

    /**
     * Método getNumbersOfItems
     * @returns Número de items que tiene la coleccion
     */
    getNumberOfItems(): number {
        return this.collection.length;
    }

    /**
     * Método print abstracto
     */
    abstract print(): string
}

export class NumericPrintableCollection extends PrintableCollection<number> {

    /**
     * Constructor
     * @param collection Coleccion númerica 
     */
    constructor(collection: number[] = []) {
        super(collection);
    }

    /**
     * Método print
     * @returns Cadena de texto con los numeros de la coleccion
     */
    print(): string {
        let concatenation: string = "";
        this.collection.forEach((n: number) => {
            concatenation += n + ", ";
        })

        concatenation = concatenation.slice(0, -1);
        concatenation = concatenation.slice(0, -1);
        return concatenation;
    }
}

export class StringPrintableCollection extends PrintableCollection<string> {
    
    /**
     * Constructor
     * @param collection Coleccion de cadenas
     */
    constructor(collection: string[] = []) {
        super(collection);
    }

    /**
     * Método print
     * @returns Cadena de texto con las cadenas de la coleccion
     */
    print(): string {
        let concatenation: string = "";
        this.collection.forEach((str: string) => {
            concatenation += str + ", ";
        })

        concatenation = concatenation.slice(0, -1);
        concatenation = concatenation.slice(0, -1);
        return concatenation;
    }
}
