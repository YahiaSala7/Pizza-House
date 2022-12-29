const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
const Users = require('./Schema/UserSchema')
const Burger = require('./Schema/BurgerSchema')
const Drink = require('./Schema/DrinkSchema')
const Pizza = require('./Schema/PizzaSchema')
const Desserts = require('./Schema/DessertsSchema')
const Seafood = require('./Schema/SeafoodSchema')
const Salads = require('./Schema/SaladsSchema')


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
            const user = new Users({
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

app.patch("/updateUserItem/:name", (req, res) => {
    const updatepost = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        money: req.body.money,
        Orderitem: req.body.Orderitem
    }
    const { name } = req.params
    Users.findOneAndUpdate({ name: name }, updatepost, (err, user) => {
        if (err) res.send(err)
        if (user) {
            res.status(200);
            res.send({ massege: "updated" });
        } else {
            res.status(404);
            res.send({ massege: "Not found" });
        }
    })
})

app.patch("/updateItem/:nameOfFood", (req, res) => {
    const updatepost = {
        nameOfFood: req.body.name,
        stoke: req.body.stoke
    }
    const { nameOfFood } = req.params
    Burger.findOneAndUpdate({ nameOfFood: nameOfFood }, updatepost, (err, user) => {
        if (err) res.send(err)
        if (user) {
            res.status(200);
            res.send({ massege: "updated" });
        }
        else {
            Drink.findOneAndUpdate({ nameOfFood: nameOfFood }, updatepost, (err, user) => {
                if (err) res.send(err)
                if (user) {
                    res.status(200);
                    res.send({ massege: "updated" });
                }
                else {
                    Desserts.findOneAndUpdate({ nameOfFood: nameOfFood }, updatepost, (err, user) => {
                        if (err) res.send(err)
                        if (user) {
                            res.status(200);
                            res.send({ massege: "updated" });
                        }
                        else {
                            Pizza.findOneAndUpdate({ nameOfFood: nameOfFood }, updatepost, (err, user) => {
                                if (err) res.send(err)
                                if (user) {
                                    res.status(200);
                                    res.send({ massege: "updated" });
                                }
                                else {
                                    Seafood.findOneAndUpdate({ nameOfFood: nameOfFood }, updatepost, (err, user) => {
                                        if (err) res.send(err)
                                        if (user) {
                                            res.status(200);
                                            res.send({ massege: "updated" });
                                        }
                                        else {
                                            Salads.findOneAndUpdate({ nameOfFood: nameOfFood }, updatepost, (err, user) => {
                                                if (err) res.send(err)
                                                if (user) {
                                                    res.status(200);
                                                    res.send({ massege: "updated" });
                                                }
                                                else {
                                                    res.status(404);
                                                    res.send({ massege: "Not found" });
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    })
})

// app.post("/addToDB", (req, res) => {
//     const { nameOfFood,price,stoke } = req.body
//     Menu.findOne({ nameOfFood: nameOfFood }, (err, user) => {
//         if (user) {
//                 res.send({
//                     massege: "item is in data"
//                 })
//         } else {
//             const product = new Menu({
//                 nameOfFood,
//                 price,
//                 stoke
//             })
//             product.save(err => {
//                 if (err) {
//                     res.send(err)
//                 } else {
//                     res.send({ massege: "add scusess" })
//                 }
//             })
//         }
//     })
// })


// app.patch("/updateTheCard/:nameOfFood", (req, res) => {
// const updatepost = {
//     nameOfFood: req.body.name,
//     stoke:  req.body.stoke
// }
// const {nameOfFood} = req.params
//     Menu.findOneAndUpdate({ nameOfFood: nameOfFood }, updatepost, (err, user) => {
//         if (err) res.send(err)
//         if (user) {
//             res.status(200);
//             res.send({ massege: "updated" });
//         }
//         else {
//             res.status(404);
//             res.send({ massege: "Not found" });
//         }
//     })
// })

app.get("/AllBurger", (req, res, next) => {

    Burger.find({}, (err, Users) => {
        if (err)
            return next(err);
        if (Users) {

            res.json({ users: Users });
        }
    });
});


app.get("/AllDrink", (req, res, next) => {

    Drink.find({}, (err, Users) => {
        if (err)
            return next(err);
        if (Users) {

            res.json({ users: Users });
        }
    });
});


app.get("/Allpizza", (req, res, next) => {

    Pizza.find({}, (err, Users) => {
        if (err)
            return next(err);
        if (Users) {
            res.json({ users: Users });
        }
    });
});



app.get("/AllSalads", (req, res, next) => {

    Salads.find({}, (err, Users) => {
        if (err)
            return next(err);
        if (Users) {
            res.json({ users: Users });
        }
    });
});

app.get("/AllSeafood", (req, res, next) => {

    Seafood.find({}, (err, Users) => {
        if (err)
            return next(err);
        if (Users) {
            res.json({ users: Users });
        }
    });
});

app.get("/AllDesserts", (req, res, next) => {

    Desserts.find({}, (err, Users) => {
        if (err)
            return next(err);
        if (Users) {
            res.json({ users: Users });
        }
    });
});

app.listen(9002, () => {
    console.log("BE started at port 9002")
})
