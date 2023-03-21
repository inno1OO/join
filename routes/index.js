const express = require('express')
const router = express.Router()
const path = require('path')
// const myRoute = require("./routers")
const courseRoute = require("./course")
const userRoute = require("./user")
const categories = ['Programming', 'Graphic Design', 'Database'];

router.get('/', (req, res) => {
    res.render('index', {pageTitle:'Home', cat: categories})
});

// router.use('/', myRoute );
router.use('/course', courseRoute );
router.use('/user', userRoute );


module.exports = router