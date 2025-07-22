let express = require('express')
let mongoose = require('mongoose')
let path = require('path')
let morgan = require('morgan')
let blogPath = require("./blog/blog").router
let arr = require("./blog/blog").arr
let app = express()

let URLdb = 'mongodb+srv://berrami:berrami@cluster0.kzivhdq.mongodb.net/server?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(URLdb)
.then(() => {app.listen(3000) ; console.log("Work")})
.catch(() => console.log("ERROR! "))

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname , 'public')))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set('views' , path.join(__dirname , 'ejsfolder'))
app.set('view engine' , 'ejs')

app.get('/' , (req , res) => {res.render('h' , {title: "HOME", blogs:arr})})

app.use(blogPath)
