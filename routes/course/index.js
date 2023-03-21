const express = require('express')
const router = express.Router()
const path = require('path')

const Course = require('../../controller/course');

// router.get('/', (req, res) => {
//     res.render('course', {pageTitle:'Course', courses: Course.getAllCourses})
// });

// router.get('/', Course.getAllCourses);



module.exports = router