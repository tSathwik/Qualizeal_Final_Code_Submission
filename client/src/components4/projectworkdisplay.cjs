const express = require("express");
const sql = require("mysql2");
const cors = require("cors");
const app = express();
app.use(cors());
const PORT = 3002;

const database = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "bhavanibai1/",
  database: "projectworks",
});

app.get("/data", (req, res) => {
  const projectdata = "select * from projectworkinfo";
  database.query(projectdata, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(PORT, () => {
  console.log("Server running");
});
