const express = require("express");
const jsonServer = require("json-server");
const path = require("path");
const router = jsonServer.router(path.resolve(__dirname, "./db.json"), {});
const middlewares = jsonServer.defaults({});

const server = express();

router.render = (req, res) => {
  res.jsonp({
    code: 0,
    msg: "ok",
    data: res.locals.data,
  });
};

// 使用中间件
server.use(middlewares);
server.use(router);

server.listen(3000, () => {
  console.log("JSON Server is running");
});
