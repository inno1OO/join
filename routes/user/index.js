const express = require('express')
const router = express.Router()
const path = require('path')

const Student = require('../../controller/student');

const Course = require('../../controller/course');
// const Course = require('../../models/course');
router.get('/', (req, res) => {
    // res.render('user', {pageTitle:'User', cat: Course.categories})
    console.log()
    res.render('user', {pageTitle:'User', user: req.body})
});

//Student.getStudent


//router.get('/:id',Student.getStudent );

// router.get('/signup',Student.getStudentById);

// router.get('/signup',Student.signUp);

router.get('/signup',(req,res,next)=>{res.render('sign-up');})


router.post('/signup',Student.signUp);


router.get('/signin',(req,res,next)=>{ res.render('sign-in'); })

 router.post('/signin',Student.signIn);


 router.post('/enroll/:courseId',Student.enrollCourse);


 router.get('/students/courses', Student.cartCourses);





module.exports = router;