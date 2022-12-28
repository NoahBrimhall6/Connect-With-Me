const { Schema, model } = require('mongoose');

const resumeSchema = new Schema(
  {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    skills: {
        type: String       
    },
    education: {
        type: String       
    },
    job1Title: {
        type: String        
    },
    job1Length: {
        type: String        
    },
    job1Description: {
        type: String        
    },
    job2Title: {
        type: String        
    },
    job2Length: {
        type: String        
    },
    job2Description: {
        type: String       
    },
    job3Title: {
        type: String        
    },
    job3Length: {
        type: String        
    },
    job3Description: {
        type: String       
    }
  }
);

const Resume = model('Resume', resumeSchema);

module.exports = Resume;