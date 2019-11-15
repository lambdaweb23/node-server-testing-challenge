const express = require("express");
const favRouter = require("./favorites/favorites-router.js");
const server = express();

server.use(express.json());
server.use("/api/favorites", favRouter);

module.exports = server;