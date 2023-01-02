const { Schema, model } = require('mongoose');

const jobPostingSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
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
    zipcode: {
      type: String,
      required: true
    },
    qualifications: {
      type: String
    },
    responsibilities: {
      type: String
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