const Post = require('../database/model/Post')
const cloudinary = require('cloudinary')
const path = require('path')


module.exports = (req, res) => {
    console.log("in post")
    const { image } = req.files
    const uploadPath = path.resolve(__dirname, '..', 'public/posts', image.name)

    image.mv(uploadPath, (error) => {
        cloudinary.v2.uploader.upload(uploadPath, (error, result) => {
            if(error) { return res.redirect('/')}
            Post.create({
                ...req.body,
                image: result.secure_url,
                author: req.session.userId
            }, (error, data) => {
                res.redirect('/')
                console.log("data added succefully ",data)
            });
        })

    })
}