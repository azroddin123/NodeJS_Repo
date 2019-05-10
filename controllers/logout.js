module.exports = (req ,res) => {
    req.session.destroy( () =>{
        console.log("session is destroyin")
        res.redirect('/');
    })
}