//monogo server error issue : 
//sudo rm /var/lib/mongodb/mongod.lock
// service mongod stop
//sudo service mongod start
require('dotenv').config()
console.log(process.env)

const fileUpload = require('express-fileupload')
const exEdge = require('express-edge')
const expressApp = require('express')
const bodyParser = require('body-parser')
const mongdb = require('mongoose')
const expressSession = require('express-session')
const connectMongo = require('connect-mongo')
const connectFlash = require('connect-flash')
const edge = require('edge.js')
const cloudinary = require('cloudinary')


/******************************controllers ********************************** */
const loginController = require('./controllers/login')
const loginUserController = require('./controllers/loginUser')
const logoutController = require('./controllers/logout')

const HomePageController = require('./controllers/homePage')
const AboutPageController = require('./controllers/aboutPost')
const StorePostController = require('./controllers/storePost')
const CreatePostController = require('./controllers/createPost')
const GetPostController = require('./controllers/getPost')
const ContactPageController = require('./controllers/contactPage')
const storePost = require('./middleware/storePost')
const createUser = require('./controllers/createUser')
const storeUser = require('./controllers/stroreUser')

const redirectAuthenticated = require('./middleware/redirectAuthenticated')

const app = expressApp()

const auth = require('./middleware/auth')


mongdb.connect(process.env.DB_URL)
const mongoStore = connectMongo(expressSession)

app.use(expressSession({
    secret: 'secret',
    store : new mongoStore({
      mongooseConnection : mongdb.connection
    })
  }))
  
cloudinary.config ({
  api_key : process.env.API_KEY,
  api_secret : process.env.API_SECRET,
  cloud_name : process.env.CLOUD_NAME
})
 
app.use(connectFlash())
app.use(fileUpload())
//app.use('/posts/store' , storePost)
app.use(bodyParser.json())
app.use(expressApp.static('public'))
app.use(exEdge)
app.use(bodyParser.urlencoded({ extended: true }))




app.set('views', `${__dirname}/views`);

app.use('*', (req , res, next) => {
  edge.global('auth', req.session.userId)

  next()
})

app.get('/' , HomePageController)

app.get('/posts/create', auth ,CreatePostController)
app.post('/posts/store', auth,storePost,StorePostController)
app.get('/post/:id', GetPostController) 
app.post('/users/register',redirectAuthenticated, storeUser)
app.get('/auth/user' ,redirectAuthenticated, createUser)
app.get('/auth/login', redirectAuthenticated,loginController)
app.get('/auth/logout', auth ,logoutController)

app.post('/users/login',redirectAuthenticated, loginUserController)
app.get('/about',AboutPageController)
app.get('/contact', ContactPageController)
app.use( (req , res) => {
  res.render('pnf')
})




app.listen(process.env.PORT, () => {
    console.log("server is running on port 3000")
})