let morgan = require('morgan')
let express = require('express')
let app = express()
let mongoose = require('mongoose')
app.use(morgan('dev'))
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
let db = 'mongodb+srv://berrami:02042006@cluster0.5vchznv.mongodb.net/server?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(db)
.then(()=> app.listen(3000))
.catch(() => console.log("error"))


app.get('/' , (req , res) => {
    res.sendFile('./test/home.html' , {root: __dirname})
})

app.post('/blog' , (req, res) => {
    console.log(req.body);
    
} )
app.get('/blog' , (req , res) => {
    res.sendFile('./test/Blogs.html' , {root:__dirname})
})


app.post('/blog' , (req , res) => {
    console.log(req.body);
})


app.use((req , res) => {
    res.sendFile('./test/404.html' , {root:__dirname})
})