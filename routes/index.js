const express = require('express')
const router = express.Router()
const path = require('path')
// const myRoute = require("./routers")
const courseRoute = require("./course")
const userRoute = require("./user")
const Course = require('../controller/course');

router.get('/', Course.getAllCourses

//(req, res) => 
//{
//     res.render('index', {pageTitle:'Home', cat: courseRoute.categories})
// }

);

// router.use('/', myRoute );
router.use('/course', courseRoute );
router.use('/user', userRoute );


module.exports = router;