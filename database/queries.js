const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "dvdrental",
  password: "postgre",
  port: 5432,
});

module.exports = pool;
