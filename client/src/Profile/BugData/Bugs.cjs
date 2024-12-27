const express = require("express");
const mysql = require("mysql");
const multer = require("multer");
const path = require("path");
const app = express();
const cors = require("cors");
const PORT = 3012;

app.use(cors());
app.use("/uploads", express.static("upload"));

// Storage configuration for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "upload/"); // Ensure this folder exists or create it
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Use timestamp for unique file names
  },
});

const allowedFileTypes = /jpeg|jpg|png/; // Correct regex for image types

const fileFilter = (req, file, cb) => {
  const extname = allowedFileTypes.test(
    path.extname(file.originalname).toLowerCase()
  );
  const mimetype = allowedFileTypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb("Error: Images Only");
  }
};

// Initialize multer with options
const upload = multer({
  storage: storage,
  limits: { fileSize: 2000000 }, // Limit to 1MB
  fileFilter: fileFilter,
}).single("profileImage"); // Expect a single file upload

// MySQL connection
const database = mysql.createConnection({
  host: "localhost",
  password: "123$5678",
  user: "root",
  database: "user_db",
});

database.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL Database");
});

app.post("/uploadPic/:email", (req, res) => {
  console.log("Request received for uploading file...");
  upload(req, res, (err) => {
    if (err) {
      console.log("Error during file upload:", err);
      return res.status(400).json({
        success: false,
        message: err.message || "Error uploading file",
      });
    }

    if (!req.file) {
      console.log("No file received in request");
      return res.status(400).json({
        success: false,
        message: "No file uploaded!",
      });
    }

    console.log("File uploaded:", req.file);

    const profileImage = req.file.filename;
    const { email } = req.params;
    const query = "insert into profile_pics(profile_path,email) values(?,?)";

    database.query(query, [profileImage, email], (err, result) => {
      if (err) {
        console.log("Database error:", err);
        return res.status(500).json({
          success: false,
          message: err.message || "Database error",
        });
      }

      res.status(200).json({
        success: true,
        message: "Profile uploaded and saved to database!",
      });
    });
  });
});

app.get("/getProfilePic/:email", (req, res) => {
  const { email } = req.params;

  const query = "SELECT profile_path FROM profile_pics WHERE email = ?";
  database.query(query, [email], (err, result) => {
    if (err) {
      console.log("Database error:", err);
      return res.status(500).json({
        success: false,
        message: "Error retrieving profile image",
      });
    }

    if (result.length > 0) {
      const profileImagePath = result[0].profile_path;
      const imageUrl = `http://localhost:3012/uploads/${profileImagePath}`; // Construct URL for the image

      res.status(200).json({
        success: true,
        imageUrl: imageUrl, // Return image URL
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Profile image not found",
      });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
