const http = require("http");
const app = require("./server/app");
require("dotenv").config();

const port = process.env.PORT || 3800;

const server = http.createServer(app);

server.listen(port, () => {
  console.log("server ON " + port);
});
