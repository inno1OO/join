const express = require('express');
const router = express.Router();
const path=require('path');
const session = require('express-session');
const methodOverride = require('method-override');

//npm install method-override
//console.log(__dirname);

router.use(express.urlencoded({ extended: true }));
router.use(methodOverride('_method'));

const Student = require('../models/student');
const Course = require('../models/course');

router.use(session({
  secret: 'top-secret', resave: false, saveUninitialized: true}));


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
  //   const student=new Student(req.body);
  //   await student.save();
  //   ///redirect to login page
  //   console.log(req.body);
  //  // res.redirect('/students');
  //  res.send("new user added");
  Student.findOne({
    email: req.body.email
  }).then(student => {
    // Check if student exists
    if (student) {
      // If student exists, return error
      return res.status(400).json({
        email: 'Email already exists'
      });
    } else {
      // If user does not exist, create student
      const newStudent = new Student({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      // Save student to database
      newStudent
        .save()
        //.then(student => res.json(student))
        .catch(err => console.log(err));
      // res.sendFile(path.join(__dirname, '../views/sign-in.html'));
      send('success sign up')
    }
  });

});


router.post('/login', async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  // validate user
  const student = await Student.findOne({ email, password });

  if(!student) {
    // user not exists
    return next(new Error('Invalid credentials'));
  }
  else{
    req.session.email = req.body.email;
    req.session.password =student.password;
    req.session._id =student._id;

    
    res.redirect('/dashboard');
  }

  // create session
  //const token   = getSecureToken();
  //const session = new Session({ username, token });
  //await session.save();

  // redirect to dashboard
  //return res.redirect(`/dashboard?token=${token}`);
  //return res.send('Cool');
});


// set up protected dashboard route
router.get('/dashboard', (req, res) => {
  // check if user is logged in
  if (req.session.email) {
    // render dashboard page with session data

    res.send(req.session.email+", "+req.session.password+" "+req.session._id);
    // res.render('dashboard', { username: req.session.email });
  } else {
    // redirect to login page
    // res.redirect('/login');
    res.send("No session");
  }
});

//get all courses
router.get('/courses', async (req, res) => {
    const courses = await Course.find({});
    //res.send(courses);
     res.render('index', { courses })
})


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