let express = require('express')
let morgan = require('morgan')
let path = require("path")
let app = express()
let mongoose = require('mongoose')
let Blog = require("./data")
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
        console.log(result.title)
    })
    .catch(() => res.send("<h1>It does notexits</h1>"))
})
app.post("/blog" , (req , res) => {
    let data = req.body.blogInput
    console.log(req.body.blogInput)
    let blog = new Blog({title: data[0] , body:data[1]})
    blog.save()
    .then(()=> res.redirect('/blog'))
    .catch(()=> console.log("error"))
    blogs_arr.push(Blog)
}) 
app.delete('/blog/:id' , (req , res) => {
    let id = req.params.id
    alert(blogs_arr)
    Blog.findById(id)
    .then(blog => alert("YES"))
    .catch(err => alert("NO"));
    Blog.findByIdAndDelete(id) 
    .then((result) => {
        if (!result) return res.status(404).json({ error: 'Blog not found' });
        res.json({redirect: '/'})
    })
    .catch(() => alert("error"))
})
app.use((req , res) => {
    res.sendFile('./404.html',{root:__dirname})
})

