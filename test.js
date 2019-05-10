const mongoose = require('mongoose')
const Post = require('./database/model/Post');
mongoose.connect('mongodb://localhost/test_db')



//Post.findById('')
 Post.findOne({} ,(err , data) => {
   console.log(err,data)
})
/*
Post.create({
    title : "my document a" ,
    content: "simple database document a ",
    description :" this is all about the description a "
}, 
(error, post) => {
console.log(error , post) 
})*/