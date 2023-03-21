const express = require('express')
const router = express.Router()
const path = require('path')
const myRoute = require("./routers")


//models
const Student = require('../models/student');
const Course = require('../models/course');

// router.get('/', (req, res) => {
//     res.render('index', {pageTitle:'Home'})
// });


router.get('/', (req, res) => {
    //res.render('index', {pageTitle:'Home'})
    res.sendFile(path.join(__dirname,'../views/sign-up.html'));
});

router.use('/', myRoute );


module.exports = router