let mongoose = require("mongoose")
let Schema = mongoose.Schema

let blogSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type:Number,
        required:true 
    },
    email: {
        type:String,
        required:true,
        unique: true
    }
})
let blog = mongoose.model('Blog' , blogSchema)
module.exports = blog