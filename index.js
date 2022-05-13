const fs = require("fs");
const http = require("http");
const url = require("url");
const { replaceVariables } = require("./utils/index");

const data = fs.readFileSync("./dev-data/data.json", "utf-8");
const parsedData = JSON.parse(data);

const overviewHTML = fs.readFileSync(
  "./templates/template-overview.html",
  "utf-8"
);

const cardHTML = fs.readFileSync("./templates/template-card.html", "utf-8");

const productHTML = fs.readFileSync(
  "./templates/template-product.html",
  "utf-8"
);

const fillTemplate = parsedData
  .map((data) => {
    return replaceVariables(data, cardHTML);
  })
  .join("");

const replaceOverview = overviewHTML.replace(/{%PRODUCT_CARDS%}/, fillTemplate);

const server = http.createServer((req, res) => {
  // const pathname = req.url;
  const {
    query: { id },
    pathname,
  } = url.parse(req.url, true);
  console.log(id, pathname, "path");

  // Overview page
  if (pathname === "/" || pathname === "/overview") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(replaceOverview);

    // Products page
  } else if (pathname === "/product") {
    const currentProduct = parsedData[id];
    const productReplaced = replaceVariables(currentProduct, productHTML);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(productReplaced);

    // Page Not Found
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
