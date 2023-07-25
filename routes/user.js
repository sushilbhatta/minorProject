const express=require('express')
const router=express.Router();
const userController=require('../controllers/user');


//get index page as default
router.get('/',userController.getIndex)

// get==> home page 
router.get('/',userController.getHome)

//GET Login page
router.get('/login',userController.getLogin)
//get prediction page
router.get('/prediction',userController.getPrediction)
router.get('/login/signup',userController.getSignup)
router.get('/about',userController.getAbout)
router.get('/contact',userController.getContact)
//always export the router ==>common error if forgetten are
// 1.app.use() requires the middleware function.
// 2.app.use() require a middleware fn but insted got the object.

module.exports=router