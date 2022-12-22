const mongoose = require('mongoose');

const { Schema } = mongoose;




const JobPosting = mongoose.model('JobPosting', jobPostingSchema);

module.exports = JobPosting;