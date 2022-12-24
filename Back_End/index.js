const express = require('express')
const cors =require('cors')
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
const Users =require('./Schema/UserSchema')
const Menu =require('./Schema/MenuSchema')


app.post("/login", (req, res) => {
    const { email, password } = req.body
    Users.findOne({ email: email }, (err, user) => {
        if (user) {
            if (password === user.password) {
                res.send({ message: "Login Successfull", user: user })
            } else {
                res.send({ message: "Password didn't match" })
            }
        } else {
            res.send({ message: "User not registered" })
        }
    })
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