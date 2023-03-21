const Student = require('../models/student.js')

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




exports.signUp=(req, res, send)=>{
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

}
