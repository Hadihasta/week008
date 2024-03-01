// import pool untuk connect ke pool data base
const pool = require("../database/queries.js");
// import modul read
const fs = require("fs");

const seedQuery = fs.readFileSync("db/seeding.sql", { encoding: "utf8" });
pool.query(seedQuery, (err, res) => {
  console.log(err);
  console.log("Seeding Complete.......");
  pool.end();
});
