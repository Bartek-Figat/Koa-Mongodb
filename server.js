const Koa = require("koa");
const cors = require("koa2-cors");
const logger = require("koa-logger");
const json = require("koa-json");
const koaBody = require("koa-body");
const { config } = require("./config/config");
const { router } = require("./controllers/user.controller");
const server = new Koa();

const PORT = config.port;

server.use(
  cors({
    origin: "*",
  })
);
server.use(json());
server.use(logger());
server.use(koaBody());

server.use(router.routes());

server
  .listen(PORT, async () => {
    console.log(`Server listening on port: ${PORT}`);
  })
  .on("error", (err) => {
    log.error("server error", err);
  });
