const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./database/main.db");
var express = require("express");
var router = express.Router();

// router.get("/", (req, res) => {
//   // res.render("index");
//   db.all(`select * from home`, (err, home) => {
//     res.render("admin", { home });
//   });
// });
router.post("/home", (req, res) => {
  const { logo, description, image, job, fullName } = req.body;
  db.run(
    `update home set logo = '${logo}', fullName='${fullName}', description='${description}', image='${image}', job='${job}'`,
    (err) => {
      console.log(err);
    }
  );
  res.redirect("/admin");
});

router.post("/services/:id", (req, res) => {
  const { title, description, image } = req.body;
  db.run(
    `update services set title = '${title}', description='${description}', image='${image}' where id = ${req.params.id}`,
    (err) => {
      console.log(err);
    }
  );
  res.redirect("/admin#services");

  // res.json(req.body);
});

// router.get("/", (req, res) => {
//   db.all(`select * from home`, (err, home) => {
//     db.all(`select * from services`, (err, services) => {
//       db.all(`select * from portfolio`, (err, portfolio) => {
//         db.all(`select * from socials`, (err, socials) => {
//           res.render("index");
//         });
//       });
//     });
//   });
// });

router.get("/", (req, res) => {
  db.all(`select * from home`, (err, home) => {
    db.all(`select * from services`, (err, services) => {
      db.all(`select * from portfolio`, (err, portfolio) => {
        db.all(`select * from socials`, (err, socials) => {
          res.render("admin", { home, services, portfolio, socials });
        });
      });
    });
  });
});

module.exports = router;
