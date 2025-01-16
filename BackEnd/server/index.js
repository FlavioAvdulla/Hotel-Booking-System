const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const EmployeeModel = require('./models/Employee');
require('dotenv').config({ path: '../server/.env' }); // Load environment variables from .env file

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  });
// When a user signs up, their password is hashed using bcrypt and stored in the database.
app.post("/signup", async (req, res) => {
  try {
    // Check if the email already exists.
    const existingEmployee = await EmployeeModel.findOne({ email: req.body.email })
    if (existingEmployee) {
      return res.status(400).json({ message: "Email already in use." })
    }

    // Hashed password.
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const employee = new EmployeeModel({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    });
    const savedEmployee = await employee.save();
    res.json(savedEmployee);
  } catch (err) {
    console.error("Error storing data:", err);
    res.status(500).json(err);
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

    res.json({ name: employee.name, token });
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
    res.json({ name: decoded.name });
  });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
