const mongoose = require('mongoose');
const Product = require('./course');
const { Schema } = mongoose;


const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    gender: { type: String, enum: ['male', 'female'] },
    birthday: { type: Date, required: true },
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
  });
  
  const Student = mongoose.model('Student', studentSchema);
  
  module.exports = Student;
