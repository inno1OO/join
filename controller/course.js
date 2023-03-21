const Course = require('../models/course');
const methodOverride = require('method-override');

//npm install method-override
//console.log(__dirname);

// router.use(express.urlencoded({ extended: true }));
// router.use(methodOverride('_method'));

exports.saveCourse = (req, res) => {
    let course = new Course(req.body)
    course.save()
    alert("New Course added")
}

exports.getAllCourses = (req, res) => {
    let courseList = Course.find({})
    console.log(courseList.all)
    res.render('templates/course_category_list', {courses:courseList})
}