const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/login',(res,req)=>{
    res.sendFile(path.join(rootDir,'views','login','login.html'))
})
router.post('/login',(req,res)=>{
    res.redirect('/')
})