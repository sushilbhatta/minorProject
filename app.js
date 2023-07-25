// modules imported remotely
const path = require('path')
const express=require('express')
const bodyParser=require('body-parser')

// modules imported  locally
const errorController=require('./controllers/error')
// const adminRoutes=require('./routes/admin')
const userRoutes=require('./routes/user')

// express middleware
const app=express();

// set the dyanimic html  to ejs and default folder to views
app.set('view engine','ejs')
app.set('views','views')

// express middleware  to use the body parser and static codes like css,js,images,etc..
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public','static')))

//express middleware that handels the routes
// app.use('/admin',adminRoutes)
app.use(userRoutes)
app.use(errorController.get404)
app.listen(2500,()=>{console.log('server running on port 2500')})
