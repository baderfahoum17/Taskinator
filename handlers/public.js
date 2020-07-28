const fs = require("fs");
const path = require("path");
const missingHandler = require("./missing");

const types = {
  html: "text/html",
  css: "text/css",
  js: "application/javascript",
};

function publicHandler(request, response) {
  const url = request.url;
  const urlArr = url.split(".");
  const ext = urlArr[1];
  const type = types[ext];
  // public dir is one level above this
  const filePath = path.join(__dirname, "..", url);
  fs.readFile(filePath, (err, file) => {
    if (err) {
      missingHandler(request, response);
    } else {
      response.writeHead(200, {"content-type": type});
      response.end(file);
    }
  });
}

module.exports = publicHandler;
