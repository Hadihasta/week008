const express = require("express");
const router = express.Router();
const pool = require("../database/queries.js");





//1. show seluruh data dari database (table film) 
router.get("/", (req, res) => {
  pool.query("SELECT * FROM film ", (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
});

// 2. Menampilkan data film tertentu berdasarkan id

router.get("/id:id", (req, res) => {
  const filmId = req.params.id; 
  pool.query("SELECT * FROM film WHERE film_ID = $1", [filmId], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
});

// 3. Menampilkan data list category (endpoint ketika di hit )
router.get("/category", (req, res) => {
  pool.query("SELECT * FROM category", (error, result) => {
    if (error) {
      throw error;
    }
    res.status(200).json(result.rows);
  });
});

// 4. Menampilkan data list film berdasarkan category
router.get("/category/:name", (req, res) => {
  const categoryName = req.params.name;

  pool.query(
    `SELECT film.title, category.name 
    FROM film
    JOIN film_category ON film.film_id = film_category.film_id
    JOIN category ON film_category.category_id = category.category_id
    WHERE category.name LIKE $1
    ORDER BY category.name, film.title ASC`,
    ['%' + categoryName + '%'], 
    (error, result) => {
      if (error) {
        throw error;
      }
      res.status(200).json(result.rows);
    }
  );
});

// ==============================================


module.exports = router;
