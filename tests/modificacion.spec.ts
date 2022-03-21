import 'mocha';
import {expect} from 'chai';
import { NumericPrintableCollection, StringPrintableCollection } from '../src/modificacion';

describe(' Modificacion tests ', () =>
{
    it('( Class NumericPrintableCollection )', () =>
    {
        let numericPrintableCollection: NumericPrintableCollection = new NumericPrintableCollection([1, 2, 3]);
        expect(numericPrintableCollection.print()).to.be.equal("1, 2, 3");
        expect(numericPrintableCollection.getItem(0)).to.be.equal(1);
        expect(numericPrintableCollection.getNumberOfItems()).to.be.equal(3);
    });

    it('( Class StringPrintableCollection )', () =>
    {
        let stringPrintableCollection: StringPrintableCollection = new StringPrintableCollection(["a", "b", "c", "d"]);
        expect(stringPrintableCollection.print()).to.be.equal("a, b, c, d");
        expect(stringPrintableCollection.getItem(0)).to.be.equal("a");
        expect(stringPrintableCollection.getNumberOfItems()).to.be.equal(4);
        expect(stringPrintableCollection.removeItem("a")).to.be.true;
    });
})