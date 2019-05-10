
const User = require('../database/model/User')
const b = require('bcrypt')
const session = require ('express-session')

module.exports = (req,res) =>
 {
    const { email , password } = req.body;
    console.log(email)
    console.log(password)

    User.findOne({email} , (error, user) => {
        if(user) {
          // const pass = bcrypt.hash(password, 10)
            
          req.session.userId = user._id

            b.compare(password,user.password , (error , same) => {
                if(same) { 
                    console.log("password match" , password ,user.password)
                    res.redirect('/');
                }else {
                    console.log("not match",password)
                    console.log("not match",user.password)
                      return res.redirect('/auth/login')
                        }
                

                
            })
        }
    })
    //res.redirect('/')
 }