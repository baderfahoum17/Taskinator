const http = require("http");
const PORT = 4000;
const router = require("./router");

const server = http.createServer((request, response) => {
  response.end("hello");
  //router
});

server.listen(PORT, () => console.log(`Listining on http://localhost:${PORT}`));
