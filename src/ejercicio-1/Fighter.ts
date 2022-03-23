export abstract class Fighter {
    constructor(protected name: string, protected height: number, protected weight: number) {}

    getName(): string {
        return this.name;
    }

    getHeight(): number {
        return this.height;
    }

    getWeight(): number {
        return this.weight;
    }
}