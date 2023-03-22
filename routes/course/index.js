const express = require('express')
const router = express.Router()
const path = require('path')
const categories = ['Programming', 'Graphic Design', 'Database'];
const Course = require('../../controller/course');
const Cours = require('../../models/course');
router.get('/', (req, res) => {
    res.render('course', {pageTitle:'Course', courses: Cours.getAllCourses})
});

router.get('/', Course.getAllCourses);





// Define route to display single course
router.get('/:id', async (req, res) => {
  try {
    const course = await Cours.findById(req.params.id);
    res.render('single-course', {pageTitle: 'single-course' ,courses: course, cat:categories });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
router.post('/:category',Course.displayByCategory);

module.exports = router