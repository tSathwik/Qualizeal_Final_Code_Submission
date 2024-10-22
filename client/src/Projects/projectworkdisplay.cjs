const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();
app.use(cors());
const PORT = 3001;

const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123$5678",
  database: "user_db",
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
