const mongoose = require("../Data_Base/Data_Base");
const Schema = mongoose.Schema;

// define the Schema (the structure of the Users)
const MenuSchema = new Schema({
    nameOfPizaa: String,
    price: Number,
    stoke: {type :Number , default : 10}
});

// Create a model based on that schema
const Menu = mongoose.model("Menu", MenuSchema);

// export the model
module.exports = Menu;