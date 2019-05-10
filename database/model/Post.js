const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
   author : {
       type : mongoose.Schema.Types.ObjectId ,
        ref : 'User',
        required : true 
   },
    title: String,
    subtitle: String,
    content: String,
    image : String, 
    createdAt :  {
        type : Date,
        default : new Date()
    }


})

const Post = mongoose.model('Post', PostSchema)

module.exports = Post