
// return all records
Book.find({}, (err, items) => {
    if (err) return next(err);
    console.log(items.length);
    // other code here
  });
  
  // return all records that match a condition
  Book.find({'author':'Yonatan Gebreyesus'}, (err, items) => {
   if (err) return next(err);
   console.log(items.length);
   // other code here
  });
  
  // return a single record
  Book.findOne({'title':'Captain Underpants'}, (err, item) => {
    if (err) return next(err);
    console.log(item);
    // other code here
  }); 
  
  // insert or update a single record
  var newBook = {'title':'The Bird', 'author':'Saim Z', 'price': 140 }
  Book.update({'title':'The Bird'}, newBook, {upsert:true}, (err, result) => {
    if (err) return next(err);
    console.log(result);
    // other code here
  }); 