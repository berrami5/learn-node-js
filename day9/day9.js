// day9.js

let morgan = require("morgan")
let express = require("express")
let mongoose = require('mongoose')
let Blog = require('./models/day9')

let dbURL = "mongodb+srv://Berrami:1602042006@cluster0.xzpudtm.mongodb.net/learnNodeJSNn?retryWrites=true&w=majority"

app.set(morgan("dev"))
mongoose.connect(dbURL)
.then((data) => app.listen(3000))
.catch(() => console.log("error"))


app.get('/' ,(req ,res) => {
    res.sendFile('./test/Untitled-1.html' , {root: __dirname})
})
app.get('/about' , (req , res) => {
    res.sendFile('./test/Untitled-2.html' , {root: __dirname})
})
app.get("/blog" , (req , res) => {
    let blog = new Blog({name: "hello" , age: 60 , email:"hello@gmail.com"})
    blog.save()
    .then((data) => res.send(data))
    .catch((err) => res.sendFile('./test/404.html' , {root: __dirname}))// this work after running
})
app.use((req , res) => {
    res.sendFile('./test/404.html' , {root: __dirname})
})
