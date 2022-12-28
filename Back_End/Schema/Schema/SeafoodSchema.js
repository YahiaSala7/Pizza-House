const mongoose = require("../Data_Base/Data_Base");
const Schema = mongoose.Schema;


const SeafoodSchema = new Schema({
    ImgUrl:String,
    nameOfFood: String,
    price: Number,
    stoke: {type :Number , default : 10}
});

// Create a model based on that schema
const Seafood = mongoose.model("Seafood", SeafoodSchema);

// export the model
module.exports = Seafood;