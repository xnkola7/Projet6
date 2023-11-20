const app = require("./app.js");
let { PORT } = require("./Managers/env.js");
const http = require("http");
PORT ??= 3000;

const server = http.createServer(app);

server.on("listening", () => {
  console.log(`listening on http://localhost:${PORT}`);
});

server.listen(PORT);
