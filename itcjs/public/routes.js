var routes = require('./routes.js')(app); 

app.get('/api/books', (req,res) => {
    var books = book.getAll(); 
    if (books) {
      res.json(books);
    } else {
      return res.status(500).send('Error occurred: database error.');
    }

    var books = book.delete()
    if (books) {
        res.render('delete', {title: req.query.title, result: result});
      } else {
        return res.status(500).send('Error occurred: database error.');
      }
      
      app.use('/api', require('cors')()); 
      res.json(books.map((a) => {
        return {
          title: a.title,
          author: a.author,
          description: a.description
        }
      });
    });
  });

