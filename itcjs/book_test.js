'use strict'
const expect = require("chai").expect;
const book = require("./lib/books");

describe("Book", function() {
    
    it("returns book", function() {
        let result = book.get("The Goat");
        expect(result).to.deep.equal({title: "The Goat", author:"LeBron James", price:120});
    });
    
    it("fails to return invalid book", function() {
        let result = book.get("no bueno");
        expect(result).to.be.undefined;
    });

    it("adds a new book", function() {
        let result = book.add({title: "Captain Underpants", author:"Yonatan Gebreyesus", price:130});
        expect(result.added).to.be.true;
    });
    it("fails to add an existing book", function() {
        let result = book.add({title: "The Bird", author:"Saim Zerai", price:140});
        expect(result.added).to.be.false;
    });

    it("deletes an existing book", function() {
        let result = book.delete("The Bird");
        expect(result.deleted).to.be.true;
    });
    it("fails to delete an invalid book", function() {
        let result = book.delete("lorem ipsum");
        expect(result.deleted).to.be.false;
    });

});