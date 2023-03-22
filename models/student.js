const mongoose = require('mongoose');
const Product = require('./course');
const { Schema } = mongoose;


const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true },
    password: { type: String, required: true },
    address: { type: String, required: false },
    gender: { type: String, enum: ['male', 'female'], required: false},
    birthday: { type: Date, required: false },
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
  });
  
  const Student = mongoose.model('Student', studentSchema);
  
  module.exports = Student;
