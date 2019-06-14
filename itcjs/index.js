import { createServer } from "http";
import { readFile } from "fs";
let book = require("../lib/book.js");

createServer(function(req,res)
 {                 
    console.log("url = " + req.url)
    console.log("dir = " + __dirname)
    
    var path = req.url.toLowerCase()
    switch(path) {
            
    case '/':
        readFile(__dirname + '/public/home.html', function(err, data) {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('500 - internal error');
                } else {
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end(data);
                }
            });
    break;
            
    case '/about':
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('About Page');
    break;
    
    default:
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Not found');
    break; 
    
            //assignment 2 lets get modular
    case '/get':
        let books = [
            { title:'The Goat', price:120 },
            { title:'Captain Underpants', price:130 },
            { title:'The Bird', price:140 }
                ];
        let found = book.get(query.title); 
        let found = book.get(query.price); 
        res.writeHead(200, {'Content-Type': 'text/plain'});
        let results = (found) ? JSON.stringify(found) : "Not found";
        res.end('Results for ' + query.title + "\n" + results);
        break;

    
      case '/delete':
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('delete');
        break;

    }

 }).listen(process.env.PORT || 3000);





