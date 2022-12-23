const mongoose = require('mongoose');

const { Schema } = mongoose;


const Resume = mongoose.model('Resume', resumeSchema);

module.exports = Resume;