const mongoose = require('mongoose');

const { Schema } = mongoose;
const Comments = require('./Comments');

const postsSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    post: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
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



const Posts = mongoose.model('Posts', postsSchema);

module.exports = Posts;