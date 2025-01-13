const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require('./models/Employee');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://aflavio4366:Opvm1CFkJeYzvWz3@cluster0.ifcq4.mongodb.net/employee?retryWrites=true&w=majority", {
});

app.post("/Signup", (req, res) => {
  EmployeeModel.create(req.body)
    .then(employee => res.json(employee))
    .catch(err => {
      console.error("Error storing data:", err);
      res.status(500).json(err);
    });
});

app.listen(3001, () => {
  console.log("Server is running.");
});
