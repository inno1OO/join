const express = require('express')
const router = express.Router()
const path = require('path')
const myRoute = require("./routers")

router.get('/', (req, res) => {
    res.render('index', {pageTitle:'Home'})
});

router.use('/', myRoute );


module.exports = router