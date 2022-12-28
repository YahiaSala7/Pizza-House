const mongoose = require("../Data_Base/Data_Base");
const Schema = mongoose.Schema;


const SaladsSchema = new Schema({
    ImgUrl:String,
    nameOfFood: String,
    price: Number,
    stoke: {type :Number , default : 10}
});

// Create a model based on that schema
const Salads = mongoose.model("Salads", SaladsSchema);

// export the model
module.exports = Salads;