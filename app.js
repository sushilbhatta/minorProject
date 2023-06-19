//       core module imports
const path=require('path')
const express=require('express')
const bodyParser=require('body-parser')

    //external_node_modules
const rootDir=require('./util/path')
const shopRoutes=require('./routes/user')
// body parser
const app=express()
app.use(bodyParser.urlencoded({extended:false}))

//serving css file statically
app.use(express.static(path.join(__dirname,'public')))

//routes
//admin routes
app.use('/admin',adminRoutes)

// user-routes
app.use(shopRoutes)

//error handling
    app.use((req,res)=>{
        res.status(404).sendFile(path.join(rootDir,'views','404.html'))
    })

app.listen((5000),()=>{
    console.log('Server running at port 4000')
})
app.use((req, res, next) => {
    res.status(404).send('404', { pageTitle: 'Page Not Found' });
  });
  