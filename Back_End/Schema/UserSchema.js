const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the Schema (the structure of the Users)
const UsersSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  password: String,
});

// Create a model based on that schema
const Users = mongoose.model("Users", UsersSchema);

// export the model
module.exports = Users;