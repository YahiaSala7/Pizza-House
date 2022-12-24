const express = require('express')
const cors =require('cors')
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
const Users =require('./Schema/UserSchema')
const Menu =require('./Schema/MenuSchema')


app.post("/login", (req, res) => {
    
})

app.post("/register", (req, res) => {

})

app.post("/addToCard", (req, res) => {
    
})


app.patch("/updateTheCard/:name", (req, res) => {
    
})

app.listen(9002, () => {
    console.log("BE started at port 9002")
})