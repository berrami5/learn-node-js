let express = require('express')
let router = express.Router()
let Blog = require('../data')

let arr = []


router.get('/blog' , (req , res) => {
    res.render('blog' , {ageTitle: "DATA" , pageTitle: "DATA"})
})
router.post('/blog' , (req , res) => {
    let obj = {}
    let [title , body , id]  = req.body.blogInput
    let blog = new Blog({title , body , id})
    blog.save()
    .then(() => res.redirect('/blog'))
    .catch(() => console.log("ERROR BLOG"))
    obj["title"] = title
    obj["body"] = body
    obj["id"] = blog._id.toString()
    arr.push(obj)
    
})

router.delete('/blog/:id' , (req , res) => {
    let id = req.params.id 
    Blog.findByIdAndDelete(id)
    .then(() => res.status(200).json({message: "work" , id:id , redirect:"/blog"}))
    .catch(() => console.log("ERROR"))
    arr = arr.filter(e => e.id !== id)
})


module.exports = {router , arr}