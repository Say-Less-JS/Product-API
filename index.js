//server
const express = require("express");
const app = express();
const postgres = require('./db/postgres.js');

app.use(express.json());

var PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});