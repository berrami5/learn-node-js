let express = require('express')
let app = express()
let mongoose = require("mongoose")
let Schema = mongoose.Schema
let blogSchema = new Schema({
    title:String,
    body:String,
    id:String
})
module.exports =  mongoose.model("Blog", blogSchema);