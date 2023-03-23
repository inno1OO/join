const mongoose = require('mongoose');
const { Schema } = mongoose;


const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true },
    gender: { type: String, enum: ['male', 'female'], required: false},
    birthday: { type: Date, required: false },
    address: { type: String, required: false },
    password: { type: String, required: true },
    phone: { type: String, required: false },
    country: { type: String, required: false },
    state: { type: String, required: false },
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
  });
  
  const Student = mongoose.model('Student', studentSchema);
  
  module.exports = Student;
