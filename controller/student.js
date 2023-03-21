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