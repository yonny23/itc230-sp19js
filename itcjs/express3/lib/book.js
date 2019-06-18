let books = [
    { title:'The Goat', price:120, author: "Lebron James" },
    { title:'Captain Underpants', price:130, author: "Yonatan Gebreyesus" },
    { title:'The Bird', price:140, author: "Saim Z" },
    { title:'Tranquility', price:140, author: "Paul B" },
    { title:'The Bird', price:140, author: "Million B." }
   ];
   
   //get all items in array
   exports.getAll = () => {
       return books;
   };
   
   //get by book title
   exports.get = (title) => {
       return books.find((item) => {
           return item.title === title;
       });
   };
   
   //delete by book title
   exports.delete = (title) => {
     
       const oldLength = books.length;
       books = books.filter((item) => {
           return item.title !== title;
       });
   
       return {
           deleted: oldLength !== books.length, total: books.length 
       };
   };