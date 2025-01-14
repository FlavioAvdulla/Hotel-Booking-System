const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  // This line imports the Mongoose library, which is an Object Data Modeling (ODM) tool for MongoDB, designed to work in an asynchronous environment.
  name: String,
  email: String,
  password: String
});
// This part defines a new Mongoose schema named EmployeeSchema. A schema in Mongoose is like a blueprint for a MongoDB collection. It specifies the structure of documents within that collection, including the data types of each field (in this case, all fields are strings).
const EmployeeModel = mongoose.model("register", EmployeeSchema);
// Here, a Mongoose model named EmployeeModel is created. This model represents the register collection in the MongoDB database and is based on the EmployeeSchema. Models are responsible for creating and reading documents from the underlying MongoDB database.
module.exports = EmployeeModel;
