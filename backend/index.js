const express = require("express");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const otpGenerator = require("otp-generator");
const mysql = require("mysql2");
const cors = require("cors");
const shortid = require("shortid");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(express.json());


const generateToken = (user) => {
  return jwt.sign(
    { userId: user.userId, email: user.email },
    "yf1c2ddee1b2f3f9ab6613728b008a28dbd9c825b430d04bb672883d8b7fed99f68e8d3a354cf8fda754456ccde9afebcee124ae841ae093745b51ad2083e33fa",
    { expiresIn: "1h" }
  );
};

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    console.log("No token provided");
    // Check if the request expects HTML (i.e., it's a web request)
    if (req.accepts("html")) {
      return res.redirect("/login");
    } else {
      return res.status(401).json({ message: "Unauthorized" });
    }
  }

  jwt.verify(
    token,
    "yf1c2ddee1b2f3f9ab6613728b008a28dbd9c825b430d04bb672883d8b7fed99f68e8d3a354cf8fda754456ccde9afebcee124ae841ae093745b51ad2083e33fa",
    (err, user) => {
      if (err) {
        console.log("Token verification failed");
        return res.status(403).json({ message: "Forbidden" });
      }
      req.user = user; // Add user info to the request object
      next();
    }
  );
};

// Generates 6 digit OTP
function generateOTP() {
  return otpGenerator.generate(6, {
    digits: true,
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });
}
//auth: {
//user: "1744785.harshithsai07@gmail.com",
// pass: "xidd azry ewgi zelz",

// Send OTP to the user email
const sendOTP = async (email, OTP) => {
  // const transporter = nodemailer.createTransport({
  //   host: "gmail", // Correct hostname for Gmail SMTP
  //   port: 465, // Or 587 for TLS
  //   secure: false, // true for port 465, false for port 587
  //   auth: {
  //     user: "1744785.harshithsai07@gmail.com",
  //     pass: "xidd azry ewgi zelz",
  //   },
  // });
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false,
    auth: {
      user: "bvrit25@gmail.com",
      pass: "sftf qyxo twwd qinb", 
    },
  });

  const options = {
    from: "QualiZeal",
    to: email,
    subject: `Email verification code: ${OTP}`,
    html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
    <div style="background-color: white;text-align: center ;">
    <img src="https://biz.prlog.org/qualizeal/logo.png" alt="QualiZeal Logo" style="max-width: 150px;">
  </div>
  <div style="padding: 20px; background-color: #ffffff;">
    <h2 style="color: #4285f4; text-align: center; font-size: 20px; margin-bottom: 20px;">Email Verification Code</h2>
    <p style=" color: #333;">Hi,</p>
    <p style=" color: #333;">We received a request to verify your email address for your QualiZeal account <a href="mailto:${email}" style="color: #4285f4; text-decoration: none;">${email}</a>. Your verification code is:</p>
    <p style="font-size: 24px; color: #333333; text-align: center; border: 1px solid #ddd; padding: 10px; border-radius: 5px; width: fit-content; margin: 20px auto;">${OTP}</p>
    <p style=" color: #333;">If you did not request this code, please ignore this email or contact support.</p>
    <p style=" color: #333;">Do not forward or share this code with anyone, This otp is valid only for 15 minutes</p>
    <p style=" color: #333;">Sincerely,<br />QualiZeal Team</p>
  </div>
</div>`,
  };
  await transporter.sendMail(options);
};

//connecting to mysql
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123$5678",
  database: "user_db",
});

connection.connect((err) => {
  if (err) {
    console.log("Error connecting to the database:", err);
  } else console.log("Connected to the database");
});

let userData = {};

app.post("/signup/personal", (req, res) => {
  const { firstName, lastName, userEmail, dateOfBirth } = req.body;
  userData = {
    ...userData,
    firstName,
    lastName,
    userEmail,
    dateOfBirth,
  };
  res.send(userData);
});

app.post("/signup/address", (req, res) => {
  const { city, zip, country } = req.body;
  userData = { ...userData, city, zip, country };
  res.send("Address information received");
});

app.post("/signup/devices", (req, res) => {
  const { computer, version, language, mobile, model, os } = req.body;
  userData = { ...userData, computer, version, language, mobile, model, os };
  res.send("Device information received");
});
app.post("/signup/password", async (req, res) => {
  const { password, confirmPassword } = req.body;
  if (password !== confirmPassword) {
    return res.send("Passwords do not match.");
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const otp = generateOTP();
    const userId = shortid.generate();
    userData = { ...userData, userId };

    // Insert the user data into the database
    const query = `
      INSERT INTO tester
      (userId,first_name, last_name, email, dob, city, zip, country, computer, version, language, mobile, model, os, password, otp, otp_expiry, verified)
      VALUES (?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW() + INTERVAL 15 MINUTE, ?)
    `;
    const values = [
      userId,
      userData.firstName,
      userData.lastName,
      userData.userEmail,
      userData.dateOfBirth,
      userData.city,
      userData.zip,
      userData.country,
      userData.computer,
      userData.version,
      userData.language,
      userData.mobile,
      userData.model,
      userData.os,
      hashedPassword,
      otp,
      false,
    ];

    connection.query(query, values, (err, results) => {
      if (err) {
        console.log(err);
        return res.send("Error in saving user data.");
      }
      // Send OTP email
      sendOTP(userData.userEmail, otp);
      res.send("Verification email sent");
    });
  } catch (err) {
    res.send("Error processing request.");
  }
});

app.post("/verify-otp", async (req, res) => {
  const { otp } = req.body;

  try {
    const isCorrect = await verifyOTP(otp, userData.userEmail);
    if (isCorrect) {
      res.json({
        status: "success",
        userId: userData.userId,
        mail: userData.userEmail,
        redirect: "/dashboard",
      });
    } else {
      res.send("Wrong OTP or OTP expired.");
    }
  } catch (err) {
    console.error("Error processing OTP verification:", err);
    res.status(500).send("Error processing OTP verification.");
  }
});

app.post("/login", (req, res) => {
  const { userEmail, password } = req.body;
  connection
    .promise()
    .query("SELECT userId, verified, password FROM tester WHERE email = ?", [
      userEmail,
    ])
    .then(async ([rows]) => {
      if (rows.length > 0) {
        const user = rows[0];

        if (user.verified) {
          const passwordMatch = await bcrypt.compare(password, user.password);
          if (passwordMatch) {
            const token = generateToken({
              userId: user.userId,
              email: userEmail,
            });
            res.json({
              status: "success",
              userId: user.userId,
              email: userEmail,
              token,
            });
          } else {
            res.status(400).json({ message: "Wrong password" });
          }
        } else {
          res.status(400).json({ message: "Email not verified" });
        }
      } else {
        res.status(404).json({ message: "User not found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

app.get("/dashboard", authenticateToken, (req, res) => {
  res.json({ message: "Welcome to the dashboard!", user: req.user });
});

const passwordcheck = async (password, userEmail) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT password FROM tester WHERE email = ?";

    connection.query(query, [userEmail], async (err, results) => {
      if (err) {
        console.error("Error:", err.stack);
        reject(err);
        return;
      }

      if (results.length === 0) {
        reject(new Error("No user found with this email"));
        return;
      }

      const hashedPassword = results[0].password;

      try {
        const isMatch = await bcrypt.compare(password, hashedPassword);
        if (isMatch) {
          console.log("Login successful");
          resolve(true);
        } else {
          console.log("Invalid password. Please try again.");
          resolve(false);
        }
      } catch (err) {
        console.error("Error occurred:", err);
        reject(err);
      }
      //connection.end();
    });
  });
};
// Function to verify OTP
const verifyOTP = async (userOTP, userEmail) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT otp, otp_expiry, verified FROM tester WHERE email = ?",
      [userEmail],
      (err, results) => {
        if (err) {
          console.error("Error fetching OTP:", err);
          reject(err);
          return;
        }

        if (results.length === 0) {
          console.log("Email not found");
          resolve(false);
          return;
        }

        const { otp, otp_expiry, verified } = results[0];
        const currentTime = new Date();

        if (verified || currentTime > otp_expiry) {
          resolve(false);
          return;
        }

        if (otp === userOTP) {
          connection.query(
            "UPDATE tester SET verified = true, otp = NULL, otp_expiry = NULL WHERE email = ?",
            [userEmail],
            (err) => {
              if (err) {
                console.error("Error updating verification status:", err);
                reject(err);
                return;
              }
              console.log("User successfully verified");
              resolve(true);
            }
          );
        } else {
          console.log("Invalid OTP");
          resolve(false);
        }
      }
    );
  });
};

app.get("/dashboard", authenticateToken, (req, res) => {
  res.json({ message: "Welcome to the dashboard!", user: req.user });
});

app.get("/getUserInfo/:id", (req, res) => {
  const userId = req.params.id;

  connection
    .promise()
    .query("SELECT * FROM tester WHERE userId = ?", [userId])
    .then(([rows]) => {
      if (rows.length > 0) {
        res.json({
          status: "success",
          user: rows[0],
        });
      } else {
        res.status(404).json({ message: "User not found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: "Internal Server Error" });
    });
});

// Update personal information
app.patch("/updatePersonalInfo/:id", async (req, res) => {
  const userId = req.params.id;
  const { first_name, last_name, dob, mobile_no } = req.body;

  const query = `
    UPDATE tester 
    SET first_name = ?, last_name = ?, dob = ?,mobile_no=?
    WHERE userId = ?
  `;
  const values = [first_name, last_name, dob, mobile_no, userId];

  connection.query(query, values, (err, results) => {
    if (err) {
      console.error("Error updating personal data:", err);
      return res
        .status(500)
        .json({ status: "error", message: "Internal server error" });
    }

    if (results.affectedRows === 0) {
      return res
        .status(404)
        .json({ status: "error", message: "User not found" });
    }
    res.status(200).json({
      status: "success",
      user: {
        first_name,
        last_name,
        dob,
        mobile_no,
      },
    });
  });
});

// Update address information
app.put("/updateAddressInfo/:id", async (req, res) => {
  const userId = req.params.id;
  const { city, zip, country } = req.body;

  const query = `
    UPDATE tester 
    SET city=?, zip=?, country=?
    WHERE userId = ?
  `;
  const values = [city, zip, country, userId];

  connection.query(query, values, (err, results) => {
    if (err) {
      console.error("Error updating address data:", err);
      return res
        .status(500)
        .json({ status: "error", message: "Internal server error" });
    }

    if (results.affectedRows === 0) {
      return res
        .status(404)
        .json({ status: "error", message: "User not found" });
    }
    res.status(200).json({
      status: "success",
      user: {
        city,
        zip,
        country,
      },
    });
  });
});

// Update device information
app.put("/updateDeviceInfo/:id", async (req, res) => {
  const userId = req.params.id;
  const { computer, version, language, mobile, model, os } = req.body;

  const query = `
    UPDATE tester 
    SET computer=?, version=?, language=?, mobile=?, model=?, os=?
    WHERE userId = ?
  `;
  const values = [computer, version, language, mobile, model, os, userId];

  connection.query(query, values, (err, results) => {
    if (err) {
      console.error("Error updating device data:", err);
      return res
        .status(500)
        .json({ status: "error", message: "Internal server error" });
    }

    if (results.affectedRows === 0) {
      return res
        .status(404)
        .json({ status: "error", message: "User not found" });
    }
    res.status(200).json({
      status: "success",
      user: {
        computer,
        version,
        language,
        mobile,
        model,
        os,
      },
    });
  });
});

// app.post("/sendProjectEmail", async (req, res) => {
//   const { startingMessage, projectTitle, duties, requirements, benefits, payouts, device } = req.body;

//   try {
//     const [rows] = await db.query(`SELECT first_name, last_name, email FROM devices WHERE device = ?`, [device]);

//     if (rows.length === 0) {
//       return res.status(404).json({ message: "No testers found with the specified device" });
//     }

//     // Email template setup
//     const emails = rows.map(tester => ({
//       to: tester.email,
//       from: "QualiZeal <your_email@example.com>",
//       subject: `Project Invitation - ${projectTitle}`,
//       html: `<div style="font-family: Arial, sans-serif; max-width: 600px;">
//         <h2>Hello ${tester.first_name} ${tester.last_name},</h2>
//         <p>${startingMessage}</p>
//         <h3>Project Title: ${projectTitle}</h3>
//         <p><b>What You’ll Do:</b> ${duties}</p>
//         <p><b>Requirements:</b> ${requirements}</p>
//         <p><b>Benefits:</b> ${benefits}</p>
//         <p><b>Payouts:</b> ${payouts}</p>
//         <p>Best regards, QualiZeal Team</p>
//       </div>`
//     }));

//     await sgMail.send(emails);
//     res.status(200).json({ message: "Emails sent successfully!" });

//   } catch (error) {
//     console.error("Error sending emails:", error);
//     res.status(500).json({ message: "Failed to send emails", error: error.message });
//   }
// });


app.get("/bugs/:userId", (req, res) => {
  const userId = req.params.userId;
  const query = "SELECT * FROM bugs WHERE user_Id = ?";

  // Using parameterized query to avoid SQL injection
  connection.query(query, [userId], (err, results) => {
      if (err) {
          console.error("Error fetching bugs:", err);
          res.status(500).send("Server error");
      } else {
          res.status(200).json(results);
      }
  });
});


// API to add a bug
app.post("/bugs/:userId", (req, res) => {
  const userId = req.params.userId;
  const { projectId, bugDescription, stepsToReproduce, additionalDetails, url } = req.body;

  // Corrected query with proper placeholders
  const query = "INSERT INTO bugs (projectId, bugDescription, stepsToReproduce, additionalDetails, url, user_Id) VALUES (?, ?, ?, ?, ?, ?)";
  
  // Passing the values to the query safely
  connection.query(query, [projectId, bugDescription, stepsToReproduce, additionalDetails, url, userId], (err, results) => {
      if (err) {
          console.error("Error inserting bug:", err);
          res.status(500).send("Server error");
      } else {
          res.status(201).json({ id: results.insertId });
      }
  });
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
