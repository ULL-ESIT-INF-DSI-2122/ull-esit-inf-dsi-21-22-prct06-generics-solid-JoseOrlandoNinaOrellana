# Informe Práctica 6
 
## Ejercicio 1 - El combate definitivo
 
### Clase Fighter
 
La clase abstracta `Fighter` representa a un luchador que tiene como atributos: nombre, altura, peso, HP, ataque, defensa y catchingPhrases. La clase tiene getters y setters para editar los atributos.
 
### Clase DragonBallFighter
 
La clase `DragonBallFighter` es una clase hija de la clase `Fighter`. Además contiene otro atributo `skill` que representa la habilidad especial del personaje del universo de Dragon Ball.
 
Hay un getter, `getSkill`, que devuelve la cadena de texto indicando la skill.
 
```typescript
getSkill(): string {
    return this.skill;
}
```
 
### Clase InazumaElevenFighter
 
La clase `InazumaElevenFighter` es una clase hija de la clase `Fighter`. Además tiene el atributo `SuperSkill` que representa la supertécnica que poseen los jugadores de fútbol del universo de Inazuma Eleven. También hay un getter que devuelve dicho atributo.
 
```typescript
getSuperSkill(): string {
    return this.superSkill;
}
```
 
### Clase PokemonFighter
 
La clase `PokemonFighter` es una clase hija de la clase `Fighter`. Además contiene un atributo que indica el tipo de pokemon, este tipo viene definido por un enumerado:
 
```typescript
enum PokemonType {fire, water, electric, grass};
```
 
Tiene un getter par acceder al tipo:
 
```typescript
getType(): PokemonType {
    return this.type;
}
```
 
### Clase Combat
 
La clase `Combat` representa la lucha entre dos objetos de tipo `Fighter`. Esta clase tiene dos métodos.
 
El método `move` realiza el ataque de un luchador a otro quitando puntos de HP. Se comprueba a quién le toca atacar con la variable `currentPlayer`. El daño se calcula con la siguiente fórmula:
 
daño = (peso_1 / altura_1) * ataque_1 / (peso_2 / altura_2) * defensa_2
 
Donde el 1 es el luchador que ataca y el 2 el luchador que se defiende.
 
```typescript
move() {
    let damage: number = 0;
 
    if(this.currentFighter === 1)
    {
        damage = ((this.fighter1.getWeight() / this.fighter1.getHeight()) * this.fighter1.getAttack()) / ((this.fighter2.getWeight() / this.fighter2.getHeight() * this.fighter2.getDefense()));
        this.fighter1.setHP(this.fighter1.getHP() - damage);
        console.log(this.fighter2.getRandomPhrase());
        this.currentFighter = 2;
    }
    else
    {
        damage = ((this.fighter2.getWeight() / this.fighter2.getHeight()) * this.fighter2.getAttack()) / ((this.fighter1.getWeight() / this.fighter1.getHeight() * this.fighter1.getDefense()));            
        this.fighter2.setHP(this.fighter2.getHP() - damage);
        console.log(this.fighter1.getRandomPhrase());
        this.currentFighter = 1;
    }
}
```
 
El método `start` representa todo el combate. Mientras los dos tengan HP significa que no hay ningún ganador. Cuando alguno de los dos tenga el HP debajo de 0 sale del bucle `while`. Y con la sentencia condicional se comprueba quién ha ganado y se devuelve una cadena de texto indicando quién ha ganado.
 
```typescript
start(): string {
    while(this.fighter1.getHP() > 0 && this.fighter2.getHP() > 0)
        this.move();
       
    if(this.fighter1.getHP() > 0)
        return "¡El ganador es " + this.fighter1.getName() + "!";
    else
        return "¡El ganador es " + this.fighter2.getName() + "!";
}
```
 
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
 
La interfaz genérica `SortStreamable` indica todas las funciones de ordenación.
 
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
 
El método `alphabeticalSort` devuelve la colección ordenada alfabéticamente.
 
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
 
El método `remove` elimina un elemento dado como parámetro. Utilizamos `indexOf` para comprobar si el elemento está en la colección, si devuelve un -1 significa que no está, en caso contrario devuelve el índice del elemento. Si está en la colección lo eliminamos con splice y devolvemos un true indicando que se ha eliminado el elemento correctamente.
 
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
 
Es una clase hija de BasicStreamableCollection que representa una colección de objetos de tipo `Serie`.
 
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
 
El método `generalInfo` devuelve una cadena de texto con toda la información de una serie pasada como parámetro.
 
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
 
Es una clase hija de BasicStreamableCollection que representa una colección de objetos de tipo `Movie`.
 
El método `filterByActor` busca en la colección todos las películas que tengan ese actor indicado como parámetro.
 
```typescript
filterByActor(actor: string): Movie[] {
    return this.collection.filter(function (element: Movie) {
        return element.actors.indexOf(actor) > -1;
    });
}
```
 
El método `generalInfo` devuelve una cadena de texto con toda la información de una película pasado como parámetro.
 
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
 
Es una clase hija de BasicStreamableCollection que representa una colección de objetos de tipo `Documentary`.
 
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
 
El método `encrypt` codifica un string, `originalText`, dado como parámetro. Creamos dos variables, `cipherText` donde guardaremos el texto codificado y `displacement` donde guardaremos el desplazamiento. Utilizaremos un bucle que codifique caracter a caracter, si el carácter pertenece al alfabeto calcularemos el desplazamiento como la posición de la letra correspondiente de la clave dentro del alfabeto. Ese desplazamiento se lo sumamos a la posición del carácter del texto original y así obtendremos el carácter codificado. En el caso que el carácter no pertenezca al alfabeto se codifica como el mismo carácter.
 
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
 
El método `decypt` decodifica un string, `cipherText`, dado como parámetro. Creamos dos variables, `originalText` donde guardaremos el texto decodificado y `displacement` donde guardaremos el desplazamiento. Utilizaremos un bucle que decodifique caracter a caracter, si el carácter pertenece al alfabeto calcularemos el desplazamiento, que se calcula igual que el codificado. En este caso, en vez de sumar, restamos ese desplazamiento a la posición del carácter del texto original y así obtendremos el carácter decodificado. En el caso que el carácter no pertenezca al alfabeto se decodifica como el mismo carácter.
 
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