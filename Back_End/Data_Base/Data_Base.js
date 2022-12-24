const mongoose =require('mongoose')

mongoose.connect("mongodb://0.0.0.0:27017/piazza", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

module.exports = mongoose