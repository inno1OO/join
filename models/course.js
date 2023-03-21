const mongoose = require('mongoose');
const { Schema } = mongoose;

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  instructor: { type: String, required: true },
  price: { type: Number, required: true }
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;

// db.createCollection("courses",{ name: "WAP", description:"Web application Programming", category: "Programming", instructor: "Sridevi Malasani", price: 35.99})