import "mocha";
import { expect } from "chai";
import { BasicStreamableMoviesCollection, Movie } from "../src/ejercicio-2/BasicStreamableMoviesCollection";
import { BasicStreamableSeriesCollection, Serie } from "../src/ejercicio-2/BasicStreamableSeriesCollection";
import { BasicStreamableDocumentaryCollection, Documentary } from "../src/ejercicio-2/BasicStreamableDocumentaryCollection";

describe("BasicStreamableMoviesCollection functions tests", () => {
    let Interstellar: Movie = {
        name: "Interstellar",
        year: 2014,
        director: "Christopher Nolan",
        genre: "Ciencia ficción",
        rating: 7.9,
        actors: ["Matthew McConaughey", "Anne Hathaway", "David Gyasi"],
        duration: 169,
    };

    let Spiderman: Movie = {
        name: "Spider-Man: No Way Home",
        year: 2021,
        director: "Jon Watts",
        genre: "Fantástico",
        rating: 7.3,
        actors: ["Tom Holland", "Zendaya", "Benedict Cumberbatch"],
        duration: 148,
    };

    let generalInfoOfInterstellar: string = "Name: Interstellar\nGenre: Ciencia ficción\nRating: 7.9\nDuration: 169\n";

    let MovieColletion: BasicStreamableMoviesCollection = new BasicStreamableMoviesCollection([Interstellar, Spiderman]);

    it("filterByName function test", () => {
        expect(MovieColletion.filterByName("Interstellar")).to.be.equal(Interstellar);
    });

    it("filterByYear function test", () => {
        expect(MovieColletion.filterByYear(2021)).to.be.eql([Spiderman]);
    });

    it("filterByRating function test", () => {
        expect(MovieColletion.filterByRating(7)).to.be.eql([Interstellar, Spiderman]);
    });

    it("filterByActor function test", () => {
        expect(MovieColletion.filterByActor("Zendaya")).to.be.eql([Spiderman]);
    });

    it("filterByDirector function test", () => {
        expect(MovieColletion.filterByDirector("Christopher Nolan")).to.be.eql([Interstellar]);
    });

    it("generalInfo function test", () => {
        expect(MovieColletion.generalInfo("Interstellar")).to.be.equal(generalInfoOfInterstellar);
    })
})

describe("BasicStreamableSeriesCollection functions tests", () => {
    let Elite: Serie = {
        name: "Elite",
        year: 2018,
        director: "Carlos Montero",
        genre: "Thrillers TV",
        rating: 5.6,
        actors: ["Itzan Escamilla", "Danna Paola", "Miguel Bernardeau"],
        seasons:  4,
    };

    let LaCasaDePapel: Serie = {
        name: "La casa de papel",
        year: 2017,
        director: "Alex Pina",
        genre: "Series TV policiacas",
        rating: 6.6,
        actors: ["Álvaro Morte", "Úrsula Corberó", "Itziar Ituño"],
        seasons: 5,
    };

    let TOTFW: Serie = {
        name: "The End of the F***ing World",
        year: 2014,
        director: "James Anderson",
        genre: "Dramas TV",
        rating: 7.9,
        actors: ["Jessica Barden", "Alex Lawther", "Naomi Ackie"],
        seasons: 2,
    };

    let generalInfoOfElite: string = "Name: Elite\nGenre: Thrillers TV\nRating: 5.6\nSeasons: 4\n";

    let SerieCollection: BasicStreamableSeriesCollection = new BasicStreamableSeriesCollection([Elite, LaCasaDePapel, TOTFW]);

    it("filterByNumberOfSeasons function test", () => {
        expect(SerieCollection.filterByNumberOfSeasons(5)).to.be.eql([LaCasaDePapel]);
    });

    it("filterByGenre function test", () => {
        expect(SerieCollection.filterByGenre("Dramas TV")).to.be.eql([TOTFW]);
    });

    it("filterByActor function test", () => {
        expect(SerieCollection.filterByActor("Zendaya")).to.be.eql([]);
    });

    it("yearSort function test", () => {
        expect(SerieCollection.yearSort()).to.be.eql([TOTFW, LaCasaDePapel, Elite]);
    });

    it("alphabeticalSort function test", () => {
        expect(SerieCollection.alphabeticalSort()).to.be.eql([Elite, LaCasaDePapel, TOTFW]);
    });

    it("ratingSort function test", () => {
        expect(SerieCollection.ratingSort()).to.be.eql([TOTFW, LaCasaDePapel, Elite]);
    });

    it("getNumberOfElements function test", () => {
        expect(SerieCollection.getNumberOfElements()).to.be.equal(3);
    });

    it("remove function test", () => {
        expect(SerieCollection.remove(TOTFW)).to.be.true;
    });

    it("generalInfo function test", () => {
        expect(SerieCollection.generalInfo("Elite")).to.be.equal(generalInfoOfElite);
    });
})

describe("BasicStreamableDocumentaryCollection functions test", () => {
    let JesusDeNazaret: Documentary = {
        name: "Jesus de Nazaret",
        year: 2022,
        director: "Maite Carpio",
        genre: "Historia",
        rating: 6.6,
        narrator: "Charo Soria",
    };

    let generalInfoOfJesusDeNazaret: string = "Name: Jesus de Nazaret\nGenre: Historia\nRating: 6.6\nNarrator: Charo Soria\n";

    let documentaryCollection: BasicStreamableDocumentaryCollection = new BasicStreamableDocumentaryCollection([JesusDeNazaret]);

    it("filterByNarrator function test", () => {
        expect(documentaryCollection.filterByNarrator("Charo Soria")).to.be.eql([JesusDeNazaret]);
    });

    it("generalInfor function test", () => {
        expect(documentaryCollection.generalInfo("Jesus de Nazaret")).to.be.equal(generalInfoOfJesusDeNazaret);
    });
})