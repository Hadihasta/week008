// import express
const express = require("express");
const app = express();

//import data base
const pool = require("./database/queries.js");

// import data.js
const datas = require("./smallapp/data.js");
const namas = require("./smallapp/nama.js");
const films = require("./smallapp/film.js");
// const films = require("./smallapp/film.js");



// connect to http method
app.use("/data", datas);
app.use("/nama", namas);
app.use("/film", films);

//connect to database
pool.connect((err, res) => {
  console.log(err);
  console.log("connected");
});

app.listen(3000);
