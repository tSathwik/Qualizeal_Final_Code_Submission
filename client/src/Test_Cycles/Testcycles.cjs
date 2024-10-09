const express = require("express");
const cors = require("cors");
const sql = require("mysql");
const bodyparser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
const PORT = 3005;

const database = sql.createConnection({
  host: "localhost",
  password: "bhavanibai1/",
  user: "root",
  database: "projectworks",
});
app.post("/getDataAdmin", (req, res) => {
  const { email, summary, descriptions, startdate, enddate } = req.body;
  const query1 = "select id from emails where email=?";
  database.query(query1, [email], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      const user_id = result[0].id;
      const query2 =
        "insert into testcycles(summary,descriptions,startdate,enddate,user_id) values(?,?,?,?,?)";
      database.query(
        query2,
        [summary, descriptions, startdate, enddate, user_id],
        (err, result) => {
          if (err) throw err;
          console.log(result);
          res.json(result);
        }
      );
    } else {
      res.status(404).send("Not found");
    }
  });
});
app.get("/gettestcycles/:email", (req, res) => {
  const email = req.params.email;
  const query3 =
    "select c.id,c.summary,c.descriptions,c.startdate,c.enddate,c.stats from testcycles c join emails e on c.user_id=e.id where email=?";
  database.query(query3, [email], (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
});

app.patch("/changestats/:email/:id", (req, res) => {
  const email = req.params.email;
  const id = req.params.id;
  const query4 = "select id from emails where email=?";
  database.query(query4, [email], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      const user_id = result[0].id;
      const query5 =
        'update testcycles set stats="active" where user_id=? and id=?';
      database.query(query5, [user_id, id], (err, result) => {
        {
          if (err) throw err;
          res.json(result);
        }
      });
    } else {
      console.log("Not found");
    }
  });
});

app.listen(PORT, () => {
  console.log("Server Running");
});
