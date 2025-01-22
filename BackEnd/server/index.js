const express = require("express"); // Import the express library
const mongoose = require("mongoose"); // Import the mongoose library for MongoDB
const cors = require("cors"); // Import the CORS middleware
const bcrypt = require('bcryptjs'); // Import the bcrypt library for hashing passwords
const jwt = require('jsonwebtoken'); // Import the JSON Web Token library
const EmployeeModel = require('./models/Employee'); // Import the Employee model
require('dotenv').config({ path: '../server/.env' }); // Load environment variables from .env file

const app = express(); // Create an express application
app.use(express.json()); // Use the express.json() middleware to parse JSON bodies
app.use(cors()); // Use the CORS middleware to enable Cross-Origin Resource Sharing

// Connect to MongoDB using mongoose
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Exit the process with a failure code
  });
// When a user signs up, their password is hashed using bcrypt and stored in the database.
app.post("/signup", async (req, res) => {
  try {
    // Check if the email already exists.
    const existingEmployee = await EmployeeModel.findOne({ email: req.body.email })
    if (existingEmployee) {
      return res.status(400).json({ message: "Email already in use." })
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const employee = new EmployeeModel({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    });
    const savedEmployee = await employee.save();
    res.json(savedEmployee); // Return the saved employee
  } catch (err) {
    console.error("Error storing data:", err);
    res.status(500).json(err); // Return a 500 error with the error message
  }
});
// When a user logs in, their credentials are verified. If the email and password are correct, a JWT token is generated and sent back to the client.
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(`Request received. Email: ${email}, Password: ${password}`);
    const employee = await EmployeeModel.findOne({ email });
    if (!employee) {
      console.log('Email not found');
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, employee.password);
    if (!isMatch) {
      console.log('Password does not match');
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Create JWT token
    const token = jwt.sign({ id: employee._id, name: employee.name }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ name: employee.name, token }); // Return the JWT token
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});
// When the client refreshes the page, the application checks if there is a valid token in localStorage.
app.post("/verify-token", (req, res) => {
  const { token } = req.body;
  if (!token) {
    return res.status(400).json({ message: "No token provided" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
    res.json({ name: decoded.name }); // Return the decoded name
  });
});

// Start the server on port 3001
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
