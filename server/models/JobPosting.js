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
    createdAt: {
      type: Date,
      default: Date.now,
      get: rawDate => rawDate.toDateString()
    },
    keywords: [
      {
      type: Schema.Types.ObjectId,
      ref: 'Keyword'
      }
    ]
  },
  {
    toJSON: {
      getters: true
    },
    id: false
  }
);

const JobPosting = model('JobPosting', jobPostingSchema);

module.exports = JobPosting;