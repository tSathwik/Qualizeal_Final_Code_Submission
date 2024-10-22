const express = require("express");
const cors = require("cors");
const sql = require("mysql2");
const bodyparser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
const PORT = 3006;

const database = sql.createConnection({
  host: "localhost",
  user: "root",
  password: "123$5678",
  database: "user_db",
});

app.post("/testcases", (req, res) => {
  const { testcycle_id, title, summary, expected_result, assigned_to } =
    req.body;
  const query1 =
    "insert into testcases(testcycle_id,title,summary,expected_result,assigned_to) values (?,?,?,?,?)";
  database.query(
    query1,
    [testcycle_id, title, summary, expected_result, assigned_to],
    (err, result) => {
      if (err) throw err;
      console.log(result);
      res.json(result);
    }
  );
});
// app.get("/testcase/info", (req, res) => {
//   const testcycle_id = req.params.testcycle_id;
//   // const query2 =
//   //   'select t.testcycle_id,t.id,t.title,t.summary,t.expected_result,t.actual_result,t.stats,t.priority,t.created_at,t.updated_at,t.attach,t.assigned_to,t.issues from testcases t join testcycles c on c.id=t.testcycle_id where c.id=? and c.stats="active"';
//   const query2 =
//     'select t.testcycle_id,t.id,t.title,t.summary,t.expected_result,t.actual_result,t.stats,t.priority,t.created_at,t.updated_at,t.attach,t.assigned_to,t.issues from testcases t join testcycles c on c.id=t.testcycle_id where c.stats="active"';
//   database.query(query2, (err, result) => {
//     if (err) res.status(404).send("Some error occured");
//     console.log(result);
//     res.json(result);
//   });
// });
app.get("/testcase/info/:email", (req, res) => {
  // const testcycle_id = req.params.testcycle_id;
  const { email } = req.params;
  // const query2 =
  //   'select t.testcycle_id,t.id,t.title,t.summary,t.expected_result,t.actual_result,t.stats,t.priority,t.created_at,t.updated_at,t.attach,t.assigned_to,t.issues from testcases t join testcycles c on c.id=t.testcycle_id where c.id=? and c.stats="active"';
  const query1 = "select userId from tester where email=?";
  database.query(query1, [email], (err, result) => {
    console.log(result[0].userId);
    if (err) throw err;
    if (result.length > 0) {
      const result3 = result[0].userId;
      const query2 =
        'select id from testcycles where user_id=? and stats="active"';
      database.query(query2, [result3], (err, result) => {
        console.log(result);
        if (err) throw err;
        if (result.length > 0) {
          const promises = result.map((data) => {
            console.log(data);
            const query4 = `select testcycle_id,id,title,summary,expected_result,actual_result,stats,priority,created_at,updated_at,assigned_to from testcases where testcycle_id=${data.id}`;
            return new Promise((resolve, reject) => {
              database.query(query4, (err, result5) => {
                console.log(result5);
                if (err) reject(err);
                else resolve(result5);
              });
            });
          });
          Promise.all(promises)
            .then((testcases) => {
              const allTestCases = testcases.flat();
              res.json(allTestCases);
            })
            .catch((e) => res.json(0));
        } else {
          res.json(0);
        }
      });
    } else {
      res.json("Not found");
    }
  });
});

app.patch("/patch/testcasechange", (req, res) => {
  const id = req.body.id;
  const actual_result = req.body.actual_result;
  const stats = req.body.stats;
  const priority = req.body.priority;
  const issues = req.body.issues;
  const query3 =
    "update testcases set actual_result=?,stats=?,priority=?,issues=? where id=?";
  database.query(
    query3,
    [actual_result, stats, priority, issues, id],
    (err, result) => {
      if (err) res.status(404).send("Not updated");
      console.log(result);
      res.json(result);
    }
  );
});

app.listen(PORT, () => {
  console.log("Server Running");
});
