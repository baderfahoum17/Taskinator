const http = require("http");
const PORT = process.env.PORT || 4000;
const router = require("./router");
const hostname = process.env.HOSTNAME || "localhost";

const server = http.createServer((request, response) => {
  response.end("hello");
  //router
});

server.listen(PORT, () => console.log(`Listining on http://localhost:${PORT}`));

// http.createServer(router).listen(port, hostname, () => {
//   console.log(`Server is running on port http://${hostname}:${port}`);
// });
