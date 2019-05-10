const User = require('../database/model/User')



module.exports = (req, res) => {


  User.create(req.body, (error, user) => {
    if (error) {
      const registrationError = Object.keys(error.errors).map(key => error.errors[key].message)
      //console.log(error)
     // req.session.registrationError = registrationError

      req.flash('registrationError', registrationError)
      req.flash('data',req.body)
      return res.redirect('/auth/user')
    }

    res.redirect('/')
    console.log("user added succefully ")

  })

}