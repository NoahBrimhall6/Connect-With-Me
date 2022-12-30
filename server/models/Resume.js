const { Schema, model } = require('mongoose');

const resumeSchema = new Schema(
  {
    summary: {
        type: String
    },
    fullName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    location: {
        type:String
    },
    skills: {
        type: String       
    },
    education: {
        type: String       
    },
    educationLength: {
        type: String       
    },
    educationType: {
        type: String       
    },
    prevJ1Title: {
        type: String        
    },
    prevJ1Company: {
        type: String        
    },
    prevJ1Length: {
        type: String        
    },
    prevJ1Responsibilities: {
        type: String        
    },
    prevJ2Title: {
        type: String        
    },
    prevJ2Company: {
        type: String        
    },
    prevJ2Length: {
        type: String        
    },
    prevJ2Responsibilities: {
        type: String       
    },
    prevJ3Title: {
        type: String        
    },
    prevJ3Company: {
        type: String        
    },
    prevJ3Length: {
        type: String        
    },
    prevJ3Responsibilities: {
        type: String       
    }
  }
);

const Resume = model('Resume', resumeSchema);

module.exports = Resume;