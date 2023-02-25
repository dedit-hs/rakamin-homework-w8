const express = require("express");
const app = express();
const port = 3003;

const pool = require("./queries.js");

pool.connect((err, res) => {
  if (err) {
    console.log(err);
  }
  console.log("Database Connected.");
});

app.get("/", (req, res) => {
  
})

app.listen(port, () => {
  console.log(`Application running on port ${port}`);
});
