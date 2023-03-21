const express = require('express');
const router = express.Router();
const path=require('path');
const session = require('express-session');
const methodOverride = require('method-override');



router.use(session({secret: 'top-secret', resave: false, saveUninitialized: true}));

const categories = ['Programming', 'Graphic Design', 'Database'];

router.post('/sign-up',  async(req, res,next) => {





});

router.post('/sign-in',  async(req, res, next) => {


});


router.get('/dashboard', async(req, res, next) => {


});






