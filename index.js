const express = require("express");
const knex = require("knex");

const db = knex(knexConfig);

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json("Server running");
});

server.listen(5000, () => {
  console.log("Server Running...");
});
