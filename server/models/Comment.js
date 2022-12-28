const { Schema, model } = require('mongoose');

const commentSchema = new Schema(
  {
    comment: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: rawDate => rawDate.toDateString()
    },
    like: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
        unique: true
            
      }
    ],
    dislike: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
        unique: true
      }
    ],
  },
  {
    toJSON: {
      getters: true
    },
    id: false
  }
);



const Comments = model('Comment', commentSchema);

module.exports = Comments;