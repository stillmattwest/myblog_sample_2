const http = require("http");
const port = 3000;

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`req.url: ${req.url} `);
    res.end("Hello World!");
  })
  .listen(port, console.log(`Listening on port ${port}`));
