const Student = require('../models/student.js')
const Course = require('../models/course');

exports.saveStudents = (req, res) => {
    let studentSave = new student(req.body)
    studentSave.save()
    res.render('sign-up', {pageTitle: "Sign up"})
}

exports.getStudent = (req, res) => {
    let student = Student.find({})
    console.log(student)
    res.render('user', {studentData:student})
}

// exports.getStudentById = (req, res) => {
//     // let stud = Student.find({})
// console.log("Here we are");
// res.send("Here we are")

// }

// exports.getStudentById = (req, res) => {
//     // let stud = Student.find({})
// console.log("Here we are");
// res.send("Here we are")

// }

exports.signIn=async(req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  // validate user
  const student = await Student.findOne({ email, password });

  if(!student) {
    // user not exists
    // return next(new Error('Invalid credentials'));
    res.json({rep:'invalid'});
    
  }
  else{
    req.session.email = req.body.email;

    req.session.name = student.name;
    req.session.password =student.password;
    req.session._id =student._id;
    console.log(req.session);
   
    res.redirect('/');
  }

}






exports.signUp=async(req, res, send)=>{
    Student.findOne({
        email: req.body.email
      }).then(student => {
        // Check if student exists
        if (student) {
          // If student exists, return error
          res.send('User already exists')
          // return res.status(400).json({
          //   email: 'Email already exists'
          // });
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
          // send('success')
          res.json({rep:'success'});
        }
      });

}


// router.get('/enroll', (req, res) => {
//   // check if user is logged in
//   if (req.session.email) {
//     // render dashboard page with session data

//     res.send(req.session.email+", "+req.session.password+" "+req.session._id);
//     // res.render('dashboard', { username: req.session.email });
//   } else {
//     // redirect to login page
//     // res.redirect('/login');
//     res.send("No session");
//   }
// });

exports.enrollCourse=async (req,res,next)=>{

  //const student = await Student.findById(req.session._id);
  // const course = await Course.findById(req.params.courseId);


  //console.log(req.session._id);

  //console.log(student);
  // console.log(course);

  if (req.session.email) {

    const student = await Student.findById(req.session._id);
    const course = await Course.findById(req.params.courseId);

    console.log(student);
    console.log(course);
    if (!student || !course) {
      return res.status(404).send({ error: 'Student or course not found!' });
    }else{
      student.courses.push(course._id);
      await student.save();
      return res.redirect('/user');

    }

  }else{
    return res.redirect('/user/signin');
  }
 // res.send("hello");

}


exports.signOut=async (req,res,next)=>{
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect('/');
      }
  })

}


exports.cartCourses=async (req, res) => {
  try {
    const student = await Student.findById(req.session._id).populate('course');
    if (!student) {
      return res.status(404).send({ error: 'Student not found!' });
    }
    res.send(student.courses);
  } catch (error) {
    res.status(500).send(error);
  }
}

exports.readStudentCourseById=async (req, res) => {
  try {
    const student = await Student.findById(req.params.studentId).populate('courses');
    if (!student) {
      return res.status(404).send({ error: 'Student not found!' });
    }
    const course = student.courses.find(course => course._id.toString() === req.params.courseId);
    if (!course) {
      return res.status(404).send({ error: 'Course not found or student is not enrolled in this course!' });
    }
    res.send(course);
  } catch (error) {
    res.status(500).send(error);
  }
}



// router.put('/students/:id/courses/:courseId', async (req, res) => {
//   try {
//     const studentId = req.params.id;
//     const courseId = req.params.courseId;

//     // Find the student by ID
//     const student = await Student.findById(studentId);
//     if (!student) {
//       return res.status(404).json({ message: 'Student not found' });
//     }

//     // Find the course by ID
//     const course = await Course.findById(courseId);
//     if (!course) {
//       return res.status(404).json({ message: 'Course not found' });
//     }

//     // Remove the course from the student's enroll course list
//     const updatedStudent = await Student.findByIdAndUpdate(
//       studentId,
//       { $pull: { enrollCourses: courseId } },
//       { new: true }
//     );

//     res.json(updatedStudent);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// module.exports = router;


exports.getSessionData = (req, res) => {
  let ses =  req.session ;
  if (req.session.email) {
    res.send(req.session);
} else {
    res.send('undefined');
}
}

// async (req, res) => {


  
//   try {
//     const student = await Student.findById(req.params.studentId);
//     const course = await Course.findById(req.params.courseId);
//     if (!student || !course) {
//       return res.status(404).send({ error: 'Student or course not found!' });
//     }
//     student.courses.push(course._id);
//     await student.save();
//     res.send(student);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });