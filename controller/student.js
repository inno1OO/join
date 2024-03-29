const Student = require('../models/student.js')
const Course = require('../models/course');
const { ObjectId } = require('mongodb');
const categories = ['Programming', 'Graphic Design', 'Database'];
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
    req.session.courses = student.courses;
    //console.log(req.session);
   
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




exports.enrollCourse=async (req,res,next)=>{

  if (req.session.email) {

    const student = await Student.findById(req.session._id);
    const course = await Course.findById(req.params.courseId);

    // console.log(student);
    // console.log(course);
    if (!student || !course) {
      return res.status(404).send({ error: 'User or course not found!' });
    }else{

      if (student.courses.includes(course._id)) {
        return res.status(409).json({ error: 'User is already enrolled in the course' });
      }
      else{
      
      student.courses.push(course._id);
      req.session.courses.push(course._id);
      await student.save();
      return res.redirect('/user');

    }

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
exports.updateStudent=async(req,res)=>{
  const { name,gender, email, birthday, address, phone, country, state} = req.body;
  console.log(req.body)

  const userId = req.session._id;
  try {
  const std=Student.findByIdAndUpdate(
    { _id:new ObjectId(userId)},
  { $set: { email,gender, name, address, birthday, country, state, phone } });
  // res.json(std);

  res.send('ok');
  //console.log(std);
  }
  catch(err){
    console.error(err);
    res.sendStatus(500);
  }
}




exports.cartCourses=async (req, res) => {
  try {
    const student = await Student.findById(req.session._id).populate('courses');
    if (!student) {
      return res.status(404).send({ error: 'User not found!' });
    }
    res.render('user', {pageTitle:'User',  courseList: student.courses, cat: categories})
    // res.send(student.courses);
  } catch (error) {
    res.status(500).send(error);
  }
}

exports.readStudentCourseById=async (req, res) => {
  try {
    const student = await Student.findById(req.params.studentId).populate('courses');
    if (!student) {
      return res.status(404).send({ error: 'User not found!' });
    }
    const course = student.courses.find(course => course._id.toString() === req.params.courseId);
    if (!course) {
      return res.status(404).send({ error: 'Course not found or User is not enrolled in this course!' });
    }
    res.send(course);
  } catch (error) {
    res.status(500).send(error);
  }
}



exports.getSessionData = (req, res) => {
  let ses =  req.session ;
  if (req.session.email) {
    res.send(req.session);
} else {
    res.send('undefined');
}
}



exports.removeStdCourse=async (req, res) => {
  try {
    const studentId = req.session._id;
    const courseId = req.params.courseId;

    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    // Remove the course from student
    const updatedStudent = await Student.findByIdAndUpdate(
      studentId,
      { $pull: { courses: courseId } },
      { new: true }
    );
    res.redirect('/user')
    // res.render('user', {pageTitle:'User',  courseList: updatedStudent, cat: categories})
    // res.json(updatedStudent);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
}