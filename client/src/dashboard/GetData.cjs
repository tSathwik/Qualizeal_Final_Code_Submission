const express = require("express");
const sql = require("mysql2");
const cors = require("cors");
const app = express();
app.use(express());
app.use(cors());
const PORT = 3008;
const database = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "123$5678",
  database: "user_db",
});
app.get("/totalUsers", (req, res) => {
  const query1 = "select userId from tester";
  database.query(query1, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});
app.get("/totalProjects", (req, res) => {
  const query2 = "select project_id from projectworkinfo";
  database.query(query2, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});
app.get("/totalTestcycles/:email", (req, res) => {
  const { email } = req.params;
  const query3 = "select userId from tester where email=?";
  database.query(query3, [email], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      const resultData = result[0].userId;
      const query4 = "select id from testcycles where user_id=?";
      database.query(query4, [resultData], (err, result) => {
        if (err) throw err;
        if (result.length > 0) res.json(result.length);
        else res.json(0);
      });
    } else {
      res.json("Result not found");
    }
  });
});

app.get("/totalTestcases/:email", (req, res) => {
  const { email } = req.params;
  const query3 = "select userId from tester where email=?";
  database.query(query3, [email], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      const resultData = result[0].userId;
      const query4 = "select id from testcycles where user_id=?";
      database.query(query4, [resultData], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
          const promises = result.map((c) => {
            const query5 = `select id from testcases where testcycle_id=${c.id}`;
            return new Promise((resolve, reject) => {
              database.query(query5, (err, result) => {
                if (err) reject(err);
                else resolve(result.length);
              });
            });
          });
          Promise.all(promises)
            .then((count) => {
              const totaltestcases = count.reduce((a, b) => a + b, 0);
              res.json(totaltestcases);
            })
            .catch((err) => {
              throw err;
            });
        } else res.json(0);
      });
    } else {
      res.json("Result not found");
    }
  });
});

app.get("/getPendingTestCycles/:email", (req, res) => {
  const { email } = req.params;
  const query6 = "select userId from tester where email=?";
  database.query(query6, [email], (err, result1) => {
    if (err) throw err;
    if (result1.length > 0) {
      const resultData2 = result1[0].userId;
      const query7 =
        'select id from testcycles where stats="pending" and user_id=?';
      const query8 =
        'select id from testcycles where stats="active" and user_id=?';
      Promise.all([
        new Promise((resolve, reject) => {
          database.query(query7, [resultData2], (err, active) => {
            if (err) reject(err);
            else resolve(active.length);
          });
        }),
        new Promise((resolve, reject) => {
          database.query(query8, [resultData2], (err, pending) => {
            if (err) reject(err);
            else resolve(pending.length);
          });
        }),
      ])
        .then(([data1, data2]) => {
          res.json({ active: data2, pending: data1 });
        })
        .catch((e) => console.log(e));
    } else {
      res.json("Not found");
    }
  });
});
app.get("/testcasedetails/:email", (req, res) => {
  const { email } = req.params;
  const query9 = "select userId from tester where email=?";
  database.query(query9, [email], (err, result1) => {
    if (err) throw err;
    if (result1.length > 0) {
      const resultdata1 = result1[0].userId;
      const query10 = "select id from testcycles where user_id=?";
      database.query(query10, [resultdata1], (err, result2) => {
        if (err) throw err;
        if (result2.length > 0) {
          const promises = result2.map((data) => {
            const query11 = `select id from testcases where testcycle_id=${data.id} and stats="Pass"`;
            return new Promise((resolve, reject) => {
              database.query(query11, (err, result3) => {
                if (err) reject(err);
                else resolve(result3.length);
              });
            });
          });
          Promise.all(promises)
            .then((count) => {
              const totaltestcases = count.reduce((a, b) => a + b, 0);
              res.json(totaltestcases);
            })
            .catch((err) => {
              throw err;
            });
        } else {
          res.json(0);
        }
      });
    } else {
      res.json("Not Found");
    }
  });
});
app.get("/testcasedetailsIn/:email", (req, res) => {
  const { email } = req.params;
  const query9 = "select userId from tester where email=?";
  database.query(query9, [email], (err, result1) => {
    if (err) throw err;
    if (result1.length > 0) {
      const resultdata1 = result1[0].userId;
      const query10 = "select id from testcycles where user_id=?";
      database.query(query10, [resultdata1], (err, result2) => {
        if (err) throw err;
        if (result2.length > 0) {
          const promises = result2.map((data) => {
            const query11 = `select id from testcases where testcycle_id=${data.id} and stats="In progress"`;
            return new Promise((resolve, reject) => {
              database.query(query11, (err, result3) => {
                if (err) reject(err);
                else resolve(result3.length);
              });
            });
          });
          Promise.all(promises)
            .then((count) => {
              const totaltestcases = count.reduce((a, b) => a + b, 0);
              res.json(totaltestcases);
            })
            .catch((err) => {
              throw err;
            });
        } else {
          res.json(0);
        }
      });
    } else {
      res.json("Not Found");
    }
  });
});
app.get("/testcasedetailsFail/:email", (req, res) => {
  const { email } = req.params;
  const query9 = "select userId from tester where email=?";
  database.query(query9, [email], (err, result1) => {
    if (err) throw err;
    if (result1.length > 0) {
      const resultdata1 = result1[0].userId;
      const query10 = "select id from testcycles where user_id=?";
      database.query(query10, [resultdata1], (err, result2) => {
        if (err) throw err;
        if (result2.length > 0) {
          const promises = result2.map((data) => {
            const query11 = `select id from testcases where testcycle_id=${data.id} and stats="Fail"`;
            return new Promise((resolve, reject) => {
              database.query(query11, (err, result3) => {
                if (err) reject(err);
                else resolve(result3.length);
              });
            });
          });
          Promise.all(promises)
            .then((count) => {
              const totaltestcases = count.reduce((a, b) => a + b, 0);
              res.json(totaltestcases);
            })
            .catch((err) => {
              throw err;
            });
        } else {
          res.json(0);
        }
      });
    } else {
      res.json("Not Found");
    }
  });
});

app.listen(PORT, () => {
  console.log("Server Run");
});
