const Post = require('../database/model/Post')
const session = require ('express-session')

module.exports = async(req ,res) => {

    
       
        //console.log(req.session)
    
        const data = await Post.find({}).populate('author')
        res.render('index', { data })
              console.log(data)
    
        //res.sendFile(path.resolve(__dirname , 'pages/index.html'))                                                                                                                                                                                                                  
    }

