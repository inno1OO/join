const mongoose = require('mongoose');
const { Schema } = mongoose;

const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  instructor: { type: String, required: true },
  price: { type: Number, required: true }
});
const categories = ['Programming', 'Graphic Design', 'Database'];

const Course = mongoose.model('Course', courseSchema);
// Course.insertMany([
//   { name: 'JavaScript For Beginner', description:' It a java course for new programmer',  category: categories[0], instructor:'Sridevi', price: 64.99  },
//   { name: 'Java From Scratch',description:' It a javaScript course for new programmer',  category: categories[0], instructor:'Sridevi', price: 45.99},
//   { name: 'Introduction to OOP in C#',description:'C# course for learning all OOP concepts',  category: categories[0],instructor:'Sridevi', price: 36.99}
// ]);

module.exports = Course;

// db.createCollection("courses",{ name: "WAP", description:"Web application Programming", category: "Programming", instructor: "Sridevi Malasani", price: 35.99})