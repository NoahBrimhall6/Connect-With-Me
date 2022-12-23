const mongoose = require('mongoose');

const { Schema } = mongoose;

const commentsSchema = new Schema({
    comment: {
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
    



});



const Comments = mongoose.model('Comments', commentsSchema);

module.exports = Comments;