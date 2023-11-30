const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
    name: String,
    author: String,
    price:Number,
    description:String
    
})
module.exports = mongoose.model("books",bookSchema)