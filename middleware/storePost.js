module.exports = (req, res, next) => {

    console.log(" i am called Now")
   
    if(!req.files == null || !req.body.content || !req.body.subtitle || !req.body.title  )  {
        return res.redirect('/posts/create')
    }

    next()
}