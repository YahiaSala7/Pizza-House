const mongoose = require("../Data_Base/Data_Base");
const Schema = mongoose.Schema;

// define the Schema (the structure of the Users)
const BurgerSchema = new Schema({
    ImgUrl:String,
    nameOfFood: String,
    price: Number,
    stoke: {type :Number , default : 10}
});

// Create a model based on that schema
const Burger = mongoose.model("Burger", BurgerSchema);

// export the model
module.exports = Burger;