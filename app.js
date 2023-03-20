const express = require('express')
const ejs = require('ejs')
const app = express()
const port = 3000;
const router = require("./routes")
const mongoose = require('mongoose');
const path = require('path')


app.use(express.json())
app.use(express.urlencoded({extented: false }))
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css'))) 
app.use('/assets', express.static(path.join(__dirname, '/public/assets/'))) 
app.set('view engine', 'html')
app.engine('html', ejs.renderFile)

mongoose.connect('mongodb://localhost:27017/joindb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION SUCCESSFUL!!")
    })
    .catch(err => {
        console.log("MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })



//using the router
app.use('/', router)

app.listen(port, () => console.log("App running"))