const mongoose = require("../Data_Base/Data_Base");
const Schema = mongoose.Schema;

// define the Schema (the structure of the Users)
const DrinkSchema = new Schema({
    ImgUrl:String,
    nameOfFood: String,
    price: Number,
    stoke: {type :Number , default : 10}
});

// Create a model based on that schema
const Drink = mongoose.model("Drink", DrinkSchema);

// export the model
module.exports = Drink;