exports.getIndex=(req,res,next)=>{
    res.render('user/index',{pageTitle:"predicta", path:'/'})
}


exports.getHome=(req,res,next)=>{
    res.render('user/index',{pageTitle:'predicta',path:'/home'})
}


exports.getContact=(req,res,next)=>{
    res.render('user/contact',{pageTitle:'Contact Us', path:'/contact'})
}


exports.getLogin=(req,res,next)=>{
    res.render('user/login',{pageTitle:'Login', path:'/login'})
}


exports.getSignup=(req,res,next)=>{
    res.render('user/signup',{pageTitle:'Sign up', path:'/login/signup'})
}


exports.getPrediction=(req,res,next)=>{
    res.render('user/prediction',{pageTitle:'Prediction',
    path:'/prediction'})
}


exports.getAbout=(req,res,next)=>{
    res.render('user/about',{pageTitle:'About Us'})
}