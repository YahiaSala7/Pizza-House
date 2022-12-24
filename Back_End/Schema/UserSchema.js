const mongoose = require("../Data_Base/Data_Base");
const Schema = mongoose.Schema;

// define the Schema (the structure of the Users)
const UsersSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  password: String,
  money:{
    type:Number,
    default:200
  },
  Orderitem:{}
});

// Create a model based on that schema
const Users = mongoose.model("Users", UsersSchema);

// export the model
module.exports = Users;