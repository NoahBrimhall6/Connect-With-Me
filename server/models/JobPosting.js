const mongoose = require('mongoose');

const { Schema } = mongoose;
const Comments = require('./Comments');

const jobPostingSchema = new Schema({
    jobTitle: {
        type: String,
        required: true,
    },
    jobDescription: {
        type: String,
        required: true,
    },
    salary: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true,
    },
    zipCode: {
        type: Integer,
        required: true,
    },
    keywords: {
        type: Schema.Types.ObjectId,
        ref: 'Keyword',        
    },
    upVotes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Users',
            unique: true,   //Manamana Is this right?

        }
    ],
    downVotes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Users',
            unique: true,   //Manamana Is this right?
        }
    ],
    comments: [Comments.schema],



});


const JobPosting = mongoose.model('JobPosting', jobPostingSchema);

module.exports = JobPosting;