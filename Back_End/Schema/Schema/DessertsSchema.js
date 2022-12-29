const mongoose = require("../Data_Base/Data_Base");
const Schema = mongoose.Schema;


const DessertsSchema = new Schema({
    ImgUrl:String,
    nameOfFood: String,
    price: Number,
    stoke: {type :Number , default : 10}
});

// Create a model based on that schema
const Desserts = mongoose.model("Desserts", DessertsSchema);

// export the model
module.exports = Desserts;