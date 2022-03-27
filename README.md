# Informe Práctica 6

## Ejercicio 1 - El combate definitivo

## Ejercicio 2 - DSIflix

### Interfaces

La interfaz genérica `FilterStreamable` indica todas las funciones de filtrado.

```typescript
interface FilterStreamable<T> {
    filterByYear(year: number): T[];
    filterByName(name: string): T;
    filterByGenre(genre: string): T[];
    filterByRating(rating: number): T[];
    filterByDirector(director: string): T[];
}
```

La interfaz genérica `SortStreamable` indica todas la funciones de ordenación.

```typescript
interface SortStreamable<T> {
    alphabeticalSort(): T[];
    yearSort(): T[];
    ratingSort(): T[];
}
```

La interfaz genérica `InfoStreamable` indica una función de información general de un elemento.

```typescript
interface InfoStreamable<T> {
    generalInfo(name: string): string;
}
```

### Clase BasicStreamableCollection

La clase abstracta genérica `BasicStreamableCollection` implementa las interfaces nombradas anteriormente. 

El método `filterByYear` busca en la colección todos los elementos de la colección que tienen el año indicado como parámetro.

```typescript
filterByYear(year: number): T[] {
    return this.collection.filter(function (element: T) {
        return element.year === year;
    });
}
```

El método `filterByName` busca en la colección el elemento que tenga el nombre indicado como parámetro.

```typescript
filterByName(name: string): T {
    return this.collection.filter(function (element: T) {
        return element.name === name;
    })[0];
}
```

El método `filterByGenre` busca en la colección todos los elementos que tengan ese género indicado como parámetro. 

```typescript
filterByGenre(genre: string): T[] {
    return this.collection.filter(function (element: T) {
        return element.genre === genre;
    });
}
```

El método `filterByRating` busca en la colección todos los elementos que tengan la valoración mayor o igual al indicado como parámetro. 

```typescript
filterByRating(rating: number): T[] {
    return this.collection.filter(function (element: T) {
        return element.rating >= rating;
    });
}
```

El método `alphabeticalSort` devuelve la colección ordenada alfabeticamente.

```typescript
alphabeticalSort(): T[] {
    return this.collection.sort((a: T, b: T) => a.name.normalize().localeCompare(b.name.normalize()));
}
```

El método `yearSort` devuelve la colección ordenadas de menor a mayor año.

```typescript
yearSort(): T[] {
    return this.collection.sort((a: T, b: T) => a.year - b.year);
}
```

El método `ratingSort` devuelve la colección ordenada de mayor a menor valoración.

```typescript
ratingSort(): T[] {
    return this.collection.sort((a: T, b: T) => b.rating - a.rating);
}
```

El método `add` añade un elemento a la colección mediante un `push`.

```typescript
add(element: T) {
    this.collection.push(element);
}
```

El método `remove` elimina un elemento dado como paramétro. Utilizamos `indexOf` para comprobar si el elemento está en la colección, si devuelve un -1 significa que no está, en caso contrario devuelve el indice del elemento. Si esta en la colección lo eliminamos con splice y devolvemos un true indicando que se ha eliminado ele elemento correctamente.

```typescript
remove(element: T): boolean {
    let index: number = this.collection.indexOf(element);
    if(index > -1)
    {
        this.collection.splice(index, 1);
        return true;
    }
    return false;
}
```

El método `getNumberOfElements` devuelve el número de elementos de la colección.

```typescript
getNumberOfElements() {
    return this.collection.length;
}
```

### Tipo Serie, Movie y Documentary

Definimos el tipo `Serie` que tiene como atributos estos elementos.

```typescript
type Serie = {
    name: string,
    year: number,
    director: string,
    genre: string,
    rating: number,
    seasons: number,
    actors: string[],
}
```

Definimos el tipo `Movie` que tiene como atributos estos elementos.

```typescript
type Movie = {
    name: string,
    year: number,
    director: string,
    genre: string,
    rating: number,
    actors: string[],
    duration: number,
}
```

Definimos el tipo `Documentary` que tiene como atributos estos elementos.

```typescript
type Documentary = {
    name: string,
    year: number,
    director: string,
    genre: string,
    rating: number,
    narrator: string,
}
```

### Clase BasicStreamableSeriesCollection

Es un clase hija de BasicStreamableCollection que representa una colección de objetos de tipo `Serie`.

El método `filterByActor` busca en la colección todos las series que tengan ese actor indicado como parámetro.

```typescript
filterByActor(actor: string): Serie[] {
    return this.collection.filter(function (element: Serie) {
        return element.actors.indexOf(actor) > -1;
    });
}
```

El método `filterByNumberOfSeasons` busca en la colección todas las series que tengan más o igual número de temporadas indicado como parámetro.

```typescript
filterByNumberOfSeasons(seasons: number): Serie[] {
    return this.collection.filter(function (element: Serie) {
        return element.seasons >= seasons;
    });
}
```

El método `generalInfo` devuelve una cadena de texto con toda la información de una serie pasado como parámetro.

```typescript
generalInfo(name: string): string {
        let info: string = "";
        let serie: Serie = this.filterByName(name);

        info += "Name: " + serie.name + "\n";
        info += "Genre: " + serie.genre + "\n";
        info += "Rating: " + serie.rating + "\n";
        info += "Seasons: " + serie.seasons + "\n";

        return info;
    }
```

### Clase BasicStreamableMoviesCollection

Es un clase hija de BasicStreamableCollection que representa una colección de objetos de tipo `Movie`.

El método `filterByActor` busca en la colección todos las peliculas que tengan ese actor indicado como parámetro.

```typescript
filterByActor(actor: string): Movie[] {
    return this.collection.filter(function (element: Movie) {
        return element.actors.indexOf(actor) > -1;
    });
}
```

El método `generalInfo` devuelve una cadena de texto con toda la información de una pelicula pasado como parámetro.

```typescript
generalInfo(name: string): string {
    let info: string = "";
    let serie: Movie = this.filterByName(name);

    info += "Name: " + serie.name + "\n";
    info += "Genre: " + serie.genre + "\n";
    info += "Rating: " + serie.rating + "\n";
    info += "Duration: " + serie.duration + "\n";

    return info;
}
```

### Clase BasicStreamableDocumentaryCollection

Es un clase hija de BasicStreamableCollection que representa una colección de objetos de tipo `Documentary`.

El método `filterByNarrator` busca en la colección todos los documentales que tienen ese narrador indicado como parámetro.

```typescript
filterByNarrator(narrator: string): Documentary[] {
    return this.collection.filter(function (element: Documentary) {
        return element.narrator === narrator;
    });
}
```

El método `generalInfo` devuelve una cadena de texto con toda la información de un documental pasado como parámetro.

```typescript
generalInfo(name: string): string {
    let info: string = "";
    let serie: Documentary = this.filterByName(name);

    info += "Name: " + serie.name + "\n";
    info += "Genre: " + serie.genre + "\n";
    info += "Rating: " + serie.rating + "\n";
    info += "Narrator: " + serie.narrator + "\n";

    return info;
}
```

## Ejercicio 3 - El cifrado indescifrable

### Clase Cipher

La clase `Cipher` representa el Cifrado César. Esta clase tiene como atributos un alfabeto, `Alphabet`, y una clave, `Key`. La clase incluye getters, setters y dos métodos que codifican y decodifican.

El método `encrypt` codifica un string, `originalText`, dado como parámetro. Creamos dos variables, `cipherText` donde guardaremos el texto codificado y `displacement` donde guardaremos el desplazamiento. Utilizaremos un bucle que codifique caracter a caracter, si el caracter pertenece al alfabeto calcularemos el desplazamiento como la posición de la letra correspodiente de la clave dentro del alfabeto. Ese desplazamiento se lo sumamos a la posción del caracter del texto original y asi obtendremos el caracter codificado. En el caso que el caracter no pertenezca al alfabeto se codifica como el mismo caracter.

```typescript
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
```

El método `decypt` decodifica un string, `cipherText`, dado como parámetro. Creamos dos variables, `originalText` donde guardaremos el texto decodificado y `displacement` donde guardaremos el desplazamiento. Utilizaremos un bucle que decodifique caracter a caracter, si el caracter pertenece al alfabeto calcularemos el desplazamiento, que se calcula igual que el codificado. En este caso, en vez de sumar, restaremos ese desplazamiento a la posción del caracter del texto original y asi obtendremos el caracter decodificado. En el caso que el caracter no pertenezca al alfabeto se decodifica como el mismo caracter.

```typescript
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
```
