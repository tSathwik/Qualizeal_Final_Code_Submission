const express = require("express");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const otpGenerator = require("otp-generator");
const mysql = require("mysql2");
const cors = require("cors");
const shortid = require("shortid");

const app = express();
app.use(cors());
app.use(express.json());

// Generates 6 digit OTP
function generateOTP() {
  return otpGenerator.generate(6, {
    digits: true,
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });
}

// Send OTP to the user email
const sendOTP = async (email, OTP) => {
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
  // res.send("Personal information received.");
});

app.post("/signup/address", (req, res) => {
  const { city, zip, country } = req.body;
  userData = { ...userData, city, zip, country };
  res.send(userData);
  // res.send("Address information received.");
});

app.post("/signup/devices", (req, res) => {
  const { computer, version, language, mobile, model, os } = req.body;
  userData = { ...userData, computer, version, language, mobile, model, os };
  res.send(userData);
  // res.send("Device information received.");
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
      // Redirect to profile page (you can uncomment the redirect if needed)
      res.json({
        status: "success",
        userId: userId,
        redirect: "/dashboard", // Indicate where to navigate
      });

      res.send("Verified successfully... redirecting to profile page");
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
    .query("SELECT userId,verified FROM tester WHERE email = ?", [userEmail])
    .then(([rows]) => {
      if (rows.length > 0) {
        const user = rows[0];

        if (user.verified) {
          // Call passwordcheck function, which returns a promise
          return passwordcheck(password, userEmail).then((check) => {
            if (check) {
              res.json({
                status: "success",
                userId: user.userId,
                redirect: "/dashboard", // Indicate where to navigate
              });
            } else {
              res.status(400).json({ message: "Wrong password" });
            }
          });
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

app.get("/dashboard", (req, res) => {
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
app.put("/updatePersonalInfo/:id", async (req, res) => {
  const userId = req.params.id;
  const { first_name, last_name, email, dob } = req.body;

  const query = `
    UPDATE tester 
    SET first_name = ?, last_name = ?, email = ?, dob = ?
    WHERE userId = ?
  `;
  const values = [first_name, last_name, email, dob, userId];

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
        email,
        dob,
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
