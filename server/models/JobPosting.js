const { Schema, model } = require('mongoose');

const jobPostingSchema = new Schema(
  {
    jobTitle: {
      type: String,
      required: true
    },
    jobDescription: {
      type: String,
      required: true
    },
    salary: {
      type: String,
      required: true
    },
    contact: {
      type: String,
      required: true
    },
    zipCode: {
      type: Integer,
      required: true
    },
    keywords: [
      {
      type: Schema.Types.ObjectId,
      ref: 'Keyword'
      }
    ]
  }
);

const JobPosting = model('JobPosting', jobPostingSchema);

module.exports = JobPosting;