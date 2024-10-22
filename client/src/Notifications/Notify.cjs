const express = require("express");
const sql = require("mysql2");
const cors = require("cors");
const bodyparser = require("body-parser");
const PORT = 3004;
const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

const database = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "123$5678",
  database: "user_db",
});

app.post("/datainsert", (req, res) => {
  const { email, heading, matter } = req.body;
  const query1 = "select userId from tester where email=?";
  database.query(query1, [email], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      const user_id = result[0].id;
      const query2 =
        "insert into notifications(heading, matter, user_id) values(?,?,?)";
      database.query(query2, [heading, matter, user_id], (err, result) => {
        if (err) {
          throw err;
        }
        console.log(result);
        res.json(result);
      });
    } else {
      res.send("No Notifications");
    }
  });
});

app.get("/notifications/data/:email", (req, res) => {
  const email = req.params.email;
  const query3 =
    "select n.heading,n.matter,n.ontime from notifications n JOIN emails e on n.user_id=e.id where e.email=? order by n.ontime desc";
  database.query(query3, [email], (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json(result);
  });
});

app.listen(PORT, () => {
  console.log("Server Run");
});
