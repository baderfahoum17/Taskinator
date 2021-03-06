const fs = require("fs");
const path = require("path");

function missingHandler(request, response) {
  filePath = path.join(__dirname, "../public/", "notfound.html");
  fs.readFile(filePath, (err, notfoundfile) => {
    response.writeHead(404, {"content-type": "text/html"});
    response.end(notfoundfile);
  });
}

module.exports = missingHandler;
