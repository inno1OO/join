const express = require('express')
const router = express.Router()
const path = require('path')
const categories = ['Programming', 'Graphic Design', 'Database'];
const Student = require('../../controller/student');

const Course = require('../../controller/course');
// const Course = require('../../models/course');
// router.get('/', (req, res) => {
//     // res.render('user', {pageTitle:'User', cat: Course.categories})
//     // let enrollCourses = Student.cartCourses;
//     console.log()
    
// });


router.get('/signup',(req,res,next)=>{
    
    res.render('sign-up', {pageTitle:'User Sign Up', cat:categories});
})


router.post('/signup',Student.signUp);


router.get('/signin',(req,res,next)=>{ 
    
    res.render('sign-in', {pageTitle:'User Sign In', cat:categories}); 
})

 router.post('/signin',Student.signIn);


 router.get('/enroll/:courseId',Student.enrollCourse);


 router.get('/', Student.cartCourses);

 // get the session data
 router.get('/get_session_data', Student.getSessionData);
 router.get('/sign_out', Student.signOut);






module.exports = router;