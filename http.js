const http = require('http');

const server = http.createServer((req, res) => {
   if (req.url === '/') {
       res.write('Hello World');
       res.end();
   } else if (req.url === '/about') {
       res.write('About Page');
       res.end();
   } else {
       res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">Back Home</a>`);
   }
});

server.listen(3001, () => {
    console.log('Server is running on port 3001');
});
