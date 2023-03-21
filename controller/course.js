const Course = require('../models/course');
const methodOverride = require('method-override');

//npm install method-override
//console.log(__dirname);

// router.use(express.urlencoded({ extended: true }));
// router.use(methodOverride('_method'));
// const categories = ['Programming', 'Graphic Design', 'Database'];

// Course.insertMany([
//     { name: 'JavaScript For Beginner', description:' It a java course for new programmer',  category: categories[0], instructor:'Sridevi', price: 64.99  },
//     { name: 'Java From Scratch',description:' It a javaScript course for new programmer',  category: categories[0], instructor:'Sridevi', price: 45.99},
//     { name: 'Introduction to OOP in C#',description:'C# course for learning all OOP concepts',  category: categories[0],instructor:'Sridevi', price: 36.99}
// ]).save();




exports.saveCourse = (req, res) => {
    let course = new Course(req.body)
    course.save()
    //alert("New Course added")
}

exports.getAllCourses = async(req, res) => {
    const courses = await Course.find({});
    //console.log(courses);
    res.render('index', {pageTitle:'Home', cat:'Unknown',courses:courses});
}


