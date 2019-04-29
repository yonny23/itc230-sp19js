const http = require("http"); 

http.createServer((req,res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Aloha world');
    
   const path = req.url.toLowerCase();
  switch(path) {
    case 'public/home.html':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Home page');
      break;
    case 'public/about.html':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('About page');
      break;
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('Not found');
      break;
    } 
    
    
}).listen(process.env.PORT || 3000);