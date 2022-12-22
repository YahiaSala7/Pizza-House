const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the Schema (the structure of the Users)
const MenuSchema = new Schema({
    imageUrl: "https://www.datocms-assets.com/56262/1633338865-shirt.jpg",
    nameOfPizaa: String,
    price: Number,
});

// Create a model based on that schema
const Menu = mongoose.model("Menu", MenuSchema);

// export the model
module.exports = Menu;