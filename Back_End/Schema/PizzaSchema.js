const mongoose = require("../Data_Base/Data_Base");
const Schema = mongoose.Schema;

// define the Schema (the structure of the Users)
const PizzaSchema = new Schema({
    ImgUrl:String,
    nameOfFood: String,
    price: Number,
    stoke: {type :Number , default : 10}
});

// Create a model based on that schema
const Pizza = mongoose.model("Pizza", PizzaSchema);

// export the model
module.exports = Pizza;