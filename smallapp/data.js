// import express
// implementasi express.router
const express = require("express");
const router = express.Router();
const pool = require("../database/queries.js");

router.get("/:name", function (req, res) {
  res.send("hello world!!" + req.params.name);
});
router.post("/", function (req, res) {
  res.send("hello world!! from post");
});
// router.get("/actor", function (req, res) {
//   pool.query("SELECT * FROM actor WHERE actor_ID = 1", (error, result) => {
//     if (error) {
//       throw error;
//     }
//     res.status(200).json(result.rows);
//   })
// });

console.log("Restart Server Success....");

module.exports = router;
