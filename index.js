const http = require("http");
const fs = require("fs");

const options = {
  hostname: "localhost",
  port: 3000,
  path: "/",
  method: "GET",
};

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  res.setHeader("Content-Type", "text/html");

  // send html file
  fs.readFile("./views/index.html", (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(options, () => {
  console.log(`Server running at http://${options.hostname}:${options.port}/`);
});
