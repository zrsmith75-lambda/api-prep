const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const server = express();
server.use(helmet());
server.use(morgan("dev"));
server.use(express.json());

const showsRouter = require("./data/routers/showsRouter.js");
const charactersRouter = require("./data/routers/charactersRouter.js");

server.get("/", (req, res) => {
  res.status(200).json({ message: "Hell yeah it is working!" });
});

server.use("/api/shows", showsRouter);
// server.use("/api/characters", charactersRouter);

module.exports = server;
