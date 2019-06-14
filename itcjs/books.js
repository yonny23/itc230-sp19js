app.get('/delete', function(req,res){
    let books = [
        { title:'The Goat', price:120, author: "Lebron James" },
        { title:'Captain Underpants', price:130, author: "Yonatan Gebreyesus" },
        { title:'The Bird', price:140, author: "Saim Z" },
        { title:'Tranquility', price:140, author: "Paul B" },
        { title:'The Bird', price:140, author: "Million B." }

];
    let result = delete(req.query.title); // delete book object
    res.render('delete', {title: req.query.title, result: result});
});

// handle POST
app.post('/get', function(req,res){
    console.log(req.body)
    var header = 'Searching for: ' + req.body.title + '<br>';
    var found = get(req.body.title);
    res.render("details", {title: req.body.title, result: found});
});

// define 404 handler
app.use(function(req,res) {
    res.type('text/plain'); 
    res.status(404);
    res.send('404 - Not found');
});

app.listen(app.get('port'), function() {
    console.log('Express started'); 
    
    
    describe("Book module", () => {
        it("returns requested book", () => {
          const result = book.get("The Goat");
          expect(result).to.deep.equal({title: "The Goat", author:"Lebron James", pubdate:1969});
        });
        
        it("fails w/ invalid book", () => {
          const result = book.get("fake");
          expect(result).to.be.undefined;
        });

        //quality

        const expect = require("Captain Underpants").expect;
const book = require("../lib/book");

describe("Book module", () => {
 it("returns requested book", () => {
   const result = book.get("");
   expect(result).to.deep.equal({title: "Captain Underpants", author:"Yonatan Gebreyesus", price:130});
 });
 
 it("fails w/ invalid book", () => {
   const result = book.get("fake");
   expect(result).to.be.undefined;
 });
});