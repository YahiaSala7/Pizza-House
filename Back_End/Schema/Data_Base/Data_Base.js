const mongoose =require('mongoose')

mongoose.connect("mongodb+srv://mohamed:mohamedabdallah1@cluster0.9jolidg.mongodb.net/pizza?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

module.exports = mongoose