const expressApp = require('express')

const path = require('path')

const app = expressApp();




app.get('/' , (req , res) => {
   // res.send("api for an home page ")
    res.sendFile(path.resolve(__dirname,'pages/index.html'))
})




app.get('/about' ,(req , res ) => {
   // res.send("api for an aabout us page ");
   res.sendFile(path.resolve(__dirname,'pages/about.html')) 
   console.log("get is called")

})


app.get('/contact' ,(req , res ) => {
    // res.send("api for an aabout us page ");
    res.sendFile(path.resolve(__dirname,'pages/contact.html')) 
    console.log("get is called")
 
 })

app.listen(4000 , (req , res) =>
{
console.log("server is running now on port 4000");
})