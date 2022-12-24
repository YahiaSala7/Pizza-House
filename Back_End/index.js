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
    const { name, email, password } = req.body
    Users.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send({ message: "User already registerd" })
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
})

app.post("/addToCard", (req, res) => {
    const { nameOfPizaa,price,stoke } = req.body
    Menu.findOne({ nameOfPizaa: nameOfPizaa }, (err, user) => {
        if (user) {
            if (user.stoke < 1) {
                res.send({ message: "no item" })
            }
            else {
                res.send({
                    massege: "item add"
                })
            }
        } else {
            const product = new Menu({
                nameOfPizaa,
                price,
                stoke
            })
            product.save(err => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ massege: "add scusess" })
                }
            })
        }
    })
})


app.patch("/updateTheCard/:name", (req, res) => {
    
})

app.listen(9002, () => {
    console.log("BE started at port 9002")
})
