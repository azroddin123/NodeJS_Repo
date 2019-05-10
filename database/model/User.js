/*const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true
       

    } ,
    email : {
        type : String,
        unique : true,
        required : true,

    } ,
    password : {
        type : String,
        required : true
            } 



})

UserSchema.pre('save' , function(next) {
    const user = this
    bcrypt.hash(user.password , 10 ,  (error , encrpt)  => {
        user.password = encrpt
    })
    next()

})

const User = mongoose.model('User', UserSchema)

module.exports = User*/
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please provide your username']
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Please provide your email.']
  },
  password: {
    type: String,
    required: [true, 'Please provide your password.']
  }
})

UserSchema.pre('save', function(next) {
  const user = this

  bcrypt.hash(user.password, 10, function (error, encrypted) {
    user.password = encrypted
    next()
  })
})

module.exports = mongoose.model('User', UserSchema)
