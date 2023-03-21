const express = require('express')
const router = express.Router()
const path = require('path')

const Student = require('../../controller/student');
router.get('/:id', (req, res) => {
    // res.render('user', {pageTitle:'User', cat: Course.categories})
    console.log()
    res.render('user', {pageTitle:'User', user: req.body})
});




module.exports = router