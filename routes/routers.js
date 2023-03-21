const express = require('express');
const router = express.Router();
const path=require('path');
const methodOverride = require('method-override');

//npm install method-override
//console.log(__dirname);

router.use(express.urlencoded({ extended: true }));
router.use(methodOverride('_method'));

const Student = require('../models/student');
const Course = require('../controller/course');

const categories = ['Programming', 'Graphic Design', 'Database'];


// students> use joindb
// switched to db joindb
// joindb> db.students.find()


// Course.insertMany([
//     { name: 'JavaScript For Beginner', description:' It a java course for new programmer',  category: categories[0], instructor:'Sridevi', price: 64.99  },
//     { name: 'Java From Scratch',description:' It a javaScript course for new programmer',  category: categories[0], instructor:'Sridevi', price: 45.99},
//     { name: 'Introduction to OOP in C#',description:'C# course for learning all OOP concepts',  category: categories[0],instructor:'Sridevi', price: 36.99}
// ]).save();



//Create a new student
router.post('/students',  async(req, res) => {
    const student=new Student(req.body);
    await student.save();
    ///redirect to login page
    console.log(req.body);
   // res.redirect('/students');

   res.send("new user added");

});



//get all courses
// router.get('/courses', async (req, res) => {
//     // const courses = await Course.find({});
//     // //res.send(courses);
//     //  res.render('index', { courses })
    
// })

router.get('/courses', Course.getAllCourses)


  //add a course for a specific student
  router.post('/students/:studentId/courses/:courseId', async(req, res) => {



  });


  //get a specific course for a specific student
  router.get('/students/:studentId/courses/:courseId', async(req, res) => {

  });



//get a specific student
router.get('/students/:id',  async(req, res) => {

  });


//update a specific student by ID
router.patch('/students/:id', async(req, res) => {
 
  });


  //get all courses for a specific student
router.get('/students/:studentId/courses', async(req, res) => {

  });


  //get a specific course for a specific student
router.get('/students/:studentId/courses/:courseId', async(req, res) => {

  });


   //delete a specific course for a specific student

   //patch or delete
router.patch('/students/:studentId/courses/:courseId',  async(req, res) => {

  });

  module.exports=router;