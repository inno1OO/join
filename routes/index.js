const express = require('express')
const router = express.Router()
const path = require('path')

const session = require('express-session');
const methodOverride = require('method-override');
router.use(express.urlencoded({ extended: true }));
router.use(methodOverride('_method'));
// const myRoute = require("./routers")
const courseRoute = require("./course")
const userRoute = require("./user")
const Course = require('../controller/course');
router.use(session({
    secret: 'top-secret', resave: false, saveUninitialized: true}));

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