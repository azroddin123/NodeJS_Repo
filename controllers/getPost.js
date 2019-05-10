
const Post = require('../database/model/Post')
module.exports = async(req ,res) => {


        const data = await Post.findById(req.params.id).populate('author')
    
        res.render('post', { data })
   
}