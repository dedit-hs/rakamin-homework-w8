const express = require("express");
const router = express();
const pool = require("../queries.js");

router.get("/film", (req, res) => {
  pool.query("SELECT*FROM film LIMIT 10", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.status(200).json(result.rows);
  });
});

router.get("/film/:id", (req, res) => {
  pool.query(`SELECT*FROM film WHERE film_id=${req.params.id}`, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.status(200).json(result.rows);
  });
});

module.exports = router;
