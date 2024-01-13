const http = require("http");

const options = {
  hostname: "localhost",
  port: 3000,
  path: "/",
  method: "GET",
};

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});

server.listen(options, () => {
  console.log(`Server running at http://${options.hostname}:${options.port}/`);
});
