//blogs
let express = require('express')
let morgan = require('morgan')
let path = require("path")
let app = express()
let mongoose = require('mongoose')
let Blog = require("./data")
const { error } = require('console')
let dbURL = "mongodb+srv://berram:c6ekmVuCYCusg1vi@cluster0.kzivhdq.mongodb.net/server?retryWrites=true&w=majority&appName=Cluster0"

let blogs_arr = []

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); 
app.use(morgan('dev'))
app.use(express.json())


mongoose.connect(dbURL)
.then(() => {app.listen(3000) ; console.log("Server work")})
.catch(() => console.log('error!!!!!'))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'test'));


app.get('/' , (req , res) => {
    res.render('home' , {blogs: blogs_arr , title: "Home"} , (err , html) => {res.send(html)})
})
app.get('/blog' , (req , res) => {
    res.render('blog' , {pageTitle: "blog"} , (err , html) => {
        try {res.send(html)}
        catch {res.status(500).send("ERROR");console.log("error")}
    })
})
app.get('/blog/:id' , (req, res) => {
    let id = req.params.id
    Blog.findById(id)
    .then((result) => {
        res.send("<h1>It exits</h1>")
        res.send(`<h3>${result.title} \n ${result.body} \n ${req.params.id} </h3>`)
    })
    .catch(() => res.send("<h1>It does not exits</h1>"))
})
app.post("/blog" , (req , res) => {
    let obj = {}
    let [title , body , id] = req.body.blogInput
    let blog = new Blog({title , body , id})
    
    
    blog.save()
    .then((r)=> {
        res.redirect('/blog')
    })
    .catch(()=> console.log("error"))
    obj.title = title
    obj.body = body 
    obj.id = blog._id.toString()
    blogs_arr.push(obj)
}) 
app.delete('/blog/:id' , (req , res)  => {
    let id = req.params.id
    Blog.findByIdAndDelete(id) 
    .then((r) => {
        res.status(200).json({message: "WORK" , id: id, redirect: "/blog"})
    })
    blogs_arr = blogs_arr.filter(e => e.id !== id)

})
app.use((req , res) => {
    res.sendFile('./404.html',{root:__dirname})
})

