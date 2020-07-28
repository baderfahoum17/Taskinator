const fs = require("fs");
const path = require("path");
const missingHandler = require("./missing");

function homeHandler(request, response) {
  // public directory is one level above this
  const filePath = path.join(__dirname, "../public/", "index.html");
  fs.readFile(filePath, (err, file) => {
    if (err) {
      missingHandler(request, response);
    } else {
      console.log(err);
      response.writeHead(200, {"content-type": "text/html"});
      response.end(file);
    }
  });
}

module.exports = homeHandler;
