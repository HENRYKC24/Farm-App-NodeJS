const fs = require("fs");
const http = require("http");
const url = require("url");

const data = fs.readFileSync("./dev-data/data.json", "utf-8");

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the overview page");
  } else if (pathName === "/products") {
    res.end("You are in the products page.");
  } else if (pathName === "/api") {
    res.end(data);
  } else {
    res.writeHead(400, {
      "Content-type": "text/html",
    });
    res.end("<h1>Page Not Found.</h1>");
  }
});

server.listen(4000, "127.0.0.1", () => {
  console.log("Server running on port 4000");
});
