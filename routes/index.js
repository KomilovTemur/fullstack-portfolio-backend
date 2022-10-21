var express = require("express");
var router = express.Router();
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./database/main.db");

/* GET home page. */
router.get("/", function (req, res) {
  db.all(`select * from home`, (err, rows) => {
    res.json(rows);
  });
});

router.get("/services", (req, res) => {
  db.all(`select * from services`, (err, services) => {
    res.json(services);
  });
});

router.get("/portfolio", (req, res) => {
  db.all(`select * from portfolio`, (err, portfolio) => {
    res.json(portfolio);
  });
});

router.get("/socials", (req, res) => {
  db.all(`select * from socials`, (err, socials) => {
    res.json(socials);
  });
});


module.exports = router;
