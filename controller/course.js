const Course = require('../models/course');
const methodOverride = require('method-override');

const categories = ['Programming', 'Graphic Design', 'Database'];

const fillDd=require('../fillDb');



exports.saveCourse = (req, res) => {
    let course = new Course(req.body)
    course.save()
    //alert("New Course added")
}

exports.getAllCourses = async(req, res) => {
    const courses = await Course.find({});
    //console.log(courses);
    res.render('index', {pageTitle:'Home', cat: categories,courses:courses});
}


exports.getCourseById = async (courseId) => {
    const course = await Course.findById({courseId})
  render('single-course', {course})  
}

exports.displayByCategory=async (req, res) => {
    const category = req.params.category;
  
    try {
    
      let result = await Course.find({ category: category });
      if (result.length == 0) {
        result = []
      }
      res.render('course-category', {pageTitle: 'course-category', courseCat : result, cat:categories})
    //   res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }

    // console.log(category);
    // res.send('Good');
  
  }
  